#!/usr/bin/env python3
"""
Sync Instagram Reels for Kaazos Food Website.
Fetches latest reels from Instagram Graph API or public endpoints,
merging them into api/instagram-reels.json for 100% automated weekly updates.
"""

import json
import os
import sys
import urllib.request
import urllib.error
from datetime import datetime

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
JSON_PATH = os.path.join(ROOT_DIR, "api", "instagram-reels.json")
USERNAME = os.environ.get("INSTAGRAM_USERNAME", "kaazos_food")
ACCESS_TOKEN = os.environ.get("INSTAGRAM_ACCESS_TOKEN", "").strip()


def load_existing_feed():
    if os.path.exists(JSON_PATH):
        try:
            with open(JSON_PATH, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception as e:
            print(f"[WARN] Could not parse existing {JSON_PATH}: {e}")
    return {
        "version": "1.0",
        "source": "Instagram Feed Proxy",
        "username": USERNAME,
        "profile_url": f"https://www.instagram.com/{USERNAME}/",
        "last_updated": datetime.utcnow().isoformat() + "Z",
        "total": 0,
        "data": [],
    }


def fetch_from_graph_api(token):
    """Fetches media using Instagram Graph API if user provided access token."""
    print("[INFO] Fetching via Instagram Graph API...")
    url = (
        "https://graph.instagram.com/me/media?"
        "fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,username&"
        f"access_token={token}"
    )
    req = urllib.request.Request(url, headers={"User-Agent": "KaazosReelsSync/1.0"})
    with urllib.request.urlopen(req, timeout=15) as res:
        payload = json.loads(res.read().decode("utf-8"))
        raw_items = payload.get("data", [])

    results = []
    for item in raw_items:
        m_type = item.get("media_type", "").upper()
        # Accept videos or reels
        if m_type not in ["VIDEO", "REEL"] and not item.get("media_url", "").endswith((".mp4", ".mov")):
            continue

        caption = item.get("caption", "Fresh bites & real flavor from Kaazos.")
        clean_caption = caption.split("#")[0].strip().replace("\n", " ")

        results.append({
            "id": item.get("id"),
            "username": item.get("username", USERNAME),
            "creator_name": "Kaazos Food",
            "creator_role": "Authentic Mexican Kitchen",
            "caption": clean_caption[:200],
            "media_url": item.get("media_url"),
            "thumbnail_url": item.get("thumbnail_url", item.get("media_url")),
            "permalink": item.get("permalink", f"https://www.instagram.com/{USERNAME}/"),
            "timestamp": item.get("timestamp", datetime.utcnow().isoformat() + "Z"),
        })

    print(f"[INFO] Graph API returned {len(results)} reel videos.")
    return results


def fetch_from_public_feed():
    """Fallback fetch via open proxy or public profile endpoint if available."""
    print(f"[INFO] Checking public profile updates for @{USERNAME}...")
    # Open proxy endpoints or Behold feed endpoints can be configured via PUBLIC_FEED_URL env
    feed_url = os.environ.get("PUBLIC_FEED_URL", "").strip()
    if not feed_url:
        print("[INFO] No INSTAGRAM_ACCESS_TOKEN or PUBLIC_FEED_URL provided. Preserving existing reels.")
        return []

    req = urllib.request.Request(feed_url, headers={"User-Agent": "Mozilla/5.0 (KaazosFeedSync)"})
    with urllib.request.urlopen(req, timeout=15) as res:
        payload = json.loads(res.read().decode("utf-8"))
        items = payload.get("data", payload if isinstance(payload, list) else [])

    results = []
    for item in items:
        media_url = item.get("media_url") or item.get("video_url") or item.get("mediaUrl")
        if not media_url:
            continue
        results.append({
            "id": str(item.get("id", "")),
            "username": item.get("username", USERNAME),
            "creator_name": item.get("creator_name", "Kaazos Food"),
            "creator_role": item.get("creator_role", "Mexican Street Food"),
            "caption": item.get("caption", "Fresh scratch cooking at Kaazos."),
            "media_url": media_url,
            "thumbnail_url": item.get("thumbnail_url", item.get("thumbnailUrl", "")),
            "permalink": item.get("permalink", item.get("permalinkUrl", f"https://www.instagram.com/{USERNAME}/")),
            "timestamp": item.get("timestamp", datetime.utcnow().isoformat() + "Z"),
        })
    return results


def main():
    feed = load_existing_feed()
    existing_items = feed.get("data", [])
    seen_ids = set()
    for item in existing_items:
        if item.get("id"):
            seen_ids.add(str(item.get("id")))
        if item.get("permalink"):
            seen_ids.add(item.get("permalink"))

    new_items = []
    if ACCESS_TOKEN:
        try:
            new_items = fetch_from_graph_api(ACCESS_TOKEN)
        except Exception as e:
            print(f"[WARN] Graph API fetch failed: {e}")
    else:
        try:
            new_items = fetch_from_public_feed()
        except Exception as e:
            print(f"[WARN] Public feed fetch failed: {e}")

    # Merge newly found items at front
    added_count = 0
    merged = []
    for item in new_items:
        key = str(item.get("id")) or item.get("permalink")
        if key and key not in seen_ids:
            merged.append(item)
            seen_ids.add(key)
            added_count += 1

    # Keep all existing curated reels
    merged.extend(existing_items)

    feed["last_updated"] = datetime.utcnow().strftime("%Y-%m-%dT%H:%M:%SZ")
    feed["total"] = len(merged)
    feed["data"] = merged

    with open(JSON_PATH, "w", encoding="utf-8") as f:
        json.dump(feed, f, indent=2)

    print(f"[SUCCESS] Sync complete! Added {added_count} new reels. Total: {len(merged)}")


if __name__ == "__main__":
    main()
