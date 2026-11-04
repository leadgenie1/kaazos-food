import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './DeconstructedSaladScroll.css';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Photorealistic Deconstructed Salad Scroll Animation — Kaazos
 * 
 * Uses authentic Kaazos food photography layers.
 * As user scrolls, the assembled salad deconstructs into floating layers,
 * pauses at maximum vertical separation, then smoothly reassembles back into the original bowl.
 */
export default function DeconstructedSaladScroll() {
  const sectionRef = useRef(null);
  const stageRef = useRef(null);
  const stackRef = useRef(null);

  // Layer Refs
  const herbsRef = useRef(null);
  const cheeseRef = useRef(null);
  const paneerRef = useRef(null);
  const beansRef = useRef(null);
  const cornVegRef = useRef(null);
  const cucumberRef = useRef(null);
  const tomatoesRef = useRef(null);
  const lettuceRef = useRef(null);
  const bowlRef = useRef(null);
  const bowlFrontRef = useRef(null);

  // Callout Refs
  const calloutsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    const stack = stackRef.current;

    if (!section || !stack) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Offsets when assembled inside the bowl cavity
    const packed = {
      stackY: 0,
      herbs:   { y: 49, x: 0, rot: 0, scale: 0.92 },
      cheese:  { y: 47, x: 0, rot: 0, scale: 0.92 },
      paneer:  { y: 39, x: 0, rot: 0, scale: 0.93 },
      beans:   { y: 30, x: 0, rot: 0, scale: 0.94 },
      corn:    { y: 23.5, x: 0, rot: 0, scale: 0.95 },
      cuke:    { y: 17, x: 0, rot: 0, scale: 0.96 },
      tomato:  { y: 11, x: 0, rot: 0, scale: 0.97 },
      lettuce: { y: 2,  x: 0, rot: 0, scale: 0.98 },
    };

    // Exploded offsets at maximum separation (original photograph perspective)
    const exploded = {
      stackY: 0,
      herbs:   { y: -4,   x: 0,  rot: 0.5,  scale: 1.02 },
      cheese:  { y: -2,   x: 3,  rot: 1.0,  scale: 1.01 },
      paneer:  { y: -0.5, x: -4, rot: -1.2, scale: 1.01 },
      beans:   { y: 0.5,  x: 3,  rot: 1.0,  scale: 1.0 },
      corn:    { y: 1.2,  x: -2, rot: -0.8, scale: 1.0 },
      cuke:    { y: 1.8,  x: 3,  rot: 1.2,  scale: 1.0 },
      tomato:  { y: 2.2,  x: -3, rot: -1.0, scale: 1.0 },
      lettuce: { y: 2.5,  x: 1,  rot: 0.5,  scale: 1.0 },
    };

    const lerp = (a, b, t) => a + (b - a) * t;
    const smoothStep = (edge0, edge1, x) => {
      const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
      return t * t * (3 - 2 * t);
    };

    const getExplosion = (progress) => {
      if (prefersReducedMotion) return 1.0;
      if (progress <= 0.04) return 0.0;
      return smoothStep(0.04, 0.96, progress);
    };

    const render = (e) => {
      const sY = lerp(packed.stackY, exploded.stackY, e);
      stack.style.setProperty('--stack-shift', `${sY}%`);

      const apply = (el, p, exp) => {
        if (!el) return;
        const y = lerp(p.y, exp.y, e);
        const x = lerp(p.x, exp.x, e);
        const rot = lerp(p.rot, exp.rot, e);
        const scale = lerp(p.scale, exp.scale, e);
        el.style.transform = `translate3d(${x}px, ${y}%, 0) rotate(${rot}deg) scale(${scale})`;
      };

      apply(herbsRef.current,    packed.herbs,  exploded.herbs);
      apply(cheeseRef.current,   packed.cheese, exploded.cheese);
      apply(paneerRef.current,   packed.paneer, exploded.paneer);
      apply(beansRef.current,    packed.beans,  exploded.beans);
      apply(cornVegRef.current,  packed.corn,   exploded.corn);
      apply(cucumberRef.current, packed.cuke,   exploded.cuke);
      apply(tomatoesRef.current, packed.tomato, exploded.tomato);
      apply(lettuceRef.current,  packed.lettuce,exploded.lettuce);

      calloutsRef.current.forEach((c) => {
        if (!c) return;
        if (e < 0.22) {
          c.style.opacity = '0';
          c.style.pointerEvents = 'none';
        } else {
          const opacity = Math.min(1, (e - 0.22) / 0.45);
          c.style.opacity = `${opacity}`;
          c.style.pointerEvents = opacity > 0.8 ? 'auto' : 'none';
        }
        const isLeft = c.classList.contains('callout-left');
        const offset = (1 - e) * (isLeft ? -22 : 22);
        c.style.transform = `translate3d(${offset}px, 0, 0)`;
      });
    };

    // GSAP ScrollTrigger Context with direct timeline scrub
    const ctx = gsap.context(() => {
      if (!prefersReducedMotion) {
        gsap.set(herbsRef.current,    { yPercent: packed.herbs.y,  x: packed.herbs.x,  rotation: packed.herbs.rot,  scale: packed.herbs.scale });
        gsap.set(cheeseRef.current,   { yPercent: packed.cheese.y, x: packed.cheese.x, rotation: packed.cheese.rot, scale: packed.cheese.scale });
        gsap.set(paneerRef.current,   { yPercent: packed.paneer.y, x: packed.paneer.x, rotation: packed.paneer.rot, scale: packed.paneer.scale });
        gsap.set(beansRef.current,    { yPercent: packed.beans.y,  x: packed.beans.x,  rotation: packed.beans.rot,  scale: packed.beans.scale });
        gsap.set(cornVegRef.current,  { yPercent: packed.corn.y,   x: packed.corn.x,   rotation: packed.corn.rot,   scale: packed.corn.scale });
        gsap.set(cucumberRef.current, { yPercent: packed.cuke.y,   x: packed.cuke.x,   rotation: packed.cuke.rot,   scale: packed.cuke.scale });
        gsap.set(tomatoesRef.current, { yPercent: packed.tomato.y, x: packed.tomato.x, rotation: packed.tomato.rot, scale: packed.tomato.scale });
        gsap.set(lettuceRef.current,  { yPercent: packed.lettuce.y,x: packed.lettuce.x,rotation: packed.lettuce.rot,scale: packed.lettuce.scale });
        gsap.set(stack,               { yPercent: packed.stackY });
        gsap.set(calloutsRef.current, { opacity: 0, pointerEvents: 'none' });

        const isMobile = window.innerWidth < 768;
        const isTablet = window.innerWidth <= 1024;
        const startTrigger = isMobile ? 'top 60px' : 'top 76px';
        const scrubDistance = isMobile ? '+=650' : (isTablet ? '+=850' : '+=1100');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: startTrigger,
            end: scrubDistance,
            scrub: 1,
            pin: true,
            anticipatePin: 1
          }
        });

        // One-Way Scroll Explode: Deconstructs into mid-air layers and STAYS exploded
        tl.to(stack,               { yPercent: exploded.stackY, ease: 'power1.out', duration: 1.0 }, 0)
          .to(herbsRef.current,    { yPercent: exploded.herbs.y,  x: exploded.herbs.x,  rotation: exploded.herbs.rot,  scale: exploded.herbs.scale,  ease: 'power1.out', duration: 1.0 }, 0)
          .to(cheeseRef.current,   { yPercent: exploded.cheese.y, x: exploded.cheese.x, rotation: exploded.cheese.rot, scale: exploded.cheese.scale, ease: 'power1.out', duration: 1.0 }, 0)
          .to(paneerRef.current,   { yPercent: exploded.paneer.y, x: exploded.paneer.x, rotation: exploded.paneer.rot, scale: exploded.paneer.scale, ease: 'power1.out', duration: 1.0 }, 0)
          .to(beansRef.current,    { yPercent: exploded.beans.y,  x: exploded.beans.x,  rotation: exploded.beans.rot,  scale: exploded.beans.scale,  ease: 'power1.out', duration: 1.0 }, 0)
          .to(cornVegRef.current,  { yPercent: exploded.corn.y,   x: exploded.corn.x,   rotation: exploded.corn.rot,   scale: exploded.corn.scale,   ease: 'power1.out', duration: 1.0 }, 0)
          .to(cucumberRef.current, { yPercent: exploded.cuke.y,   x: exploded.cuke.x,   rotation: exploded.cuke.rot,   scale: exploded.cuke.scale,   ease: 'power1.out', duration: 1.0 }, 0)
          .to(tomatoesRef.current, { yPercent: exploded.tomato.y, x: exploded.tomato.x, rotation: exploded.tomato.rot, scale: exploded.tomato.scale, ease: 'power1.out', duration: 1.0 }, 0)
          .to(lettuceRef.current,  { yPercent: exploded.lettuce.y,x: exploded.lettuce.x,rotation: exploded.lettuce.rot,scale: exploded.lettuce.scale,ease: 'power1.out', duration: 1.0 }, 0)
          .to(calloutsRef.current, { opacity: 1, pointerEvents: 'auto', stagger: 0.04, ease: 'power1.out', duration: 0.5 }, 0.5);
      }
    }, section);

    // Subtle 3D mouse perspective
    const handleMouseMove = (event) => {
      if (window.innerWidth < 768) return;
      const rect = stage.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      stack.style.setProperty('--tilt-y', `${x * 8}deg`);
      stack.style.setProperty('--tilt-x', `${-y * 6}deg`);
    };

    const handleMouseLeave = () => {
      stack.style.setProperty('--tilt-y', '0deg');
      stack.style.setProperty('--tilt-x', '0deg');
    };

    stage.addEventListener('mousemove', handleMouseMove);
    stage.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      ctx.revert();
      stage.removeEventListener('mousemove', handleMouseMove);
      stage.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const addCalloutRef = (el) => {
    if (el && !calloutsRef.current.includes(el)) {
      calloutsRef.current.push(el);
    }
  };

  return (
    <section className="salad-exploded-section salad-section" ref={sectionRef} aria-label="Interactive Deconstructed Salad Animation">
      <div className="salad-sticky-wrapper">
        <div className="container">
          <div className="section-head text-center">
            <span className="eyebrow">Pure Food Photography &bull; Zero Artificial Render</span>
            <h2 className="section-title">Fresh Ingredients Made With Real Flavours</h2>
          </div>

          <div className="salad-exploded-stage" ref={stageRef}>
            
            {/* Callout 1: Crumbled Cheese & Herbs */}
            <div className="salad-callout callout-top-left callout-left" ref={addCalloutRef}>
              <div className="callout-card">
                <h5 className="callout-title">Crumbled Cheese &amp; Fresh Herbs</h5>
                <p className="callout-desc">Artisanal crumbled cotija cheese and vibrant Italian flat-leaf parsley sprigs.</p>
              </div>
              <div className="callout-line-wrap line-top-left">
                <svg className="callout-svg" width="140" height="40" viewBox="0 0 140 40">
                  <line x1="0" y1="20" x2="120" y2="20" stroke="#1b2522" strokeWidth="2" />
                  <circle cx="120" cy="20" r="5" fill="#ffffff" stroke="#1b2522" strokeWidth="2.5" />
                </svg>
              </div>
            </div>

            {/* Callout 2: Grilled Spiced Paneer */}
            <div className="salad-callout callout-top-right callout-right" ref={addCalloutRef}>
              <div className="callout-line-wrap line-top-right">
                <svg className="callout-svg" width="140" height="40" viewBox="0 0 140 40">
                  <line x1="20" y1="20" x2="140" y2="20" stroke="#1b2522" strokeWidth="2" />
                  <circle cx="20" cy="20" r="5" fill="#ffffff" stroke="#1b2522" strokeWidth="2.5" />
                </svg>
              </div>
              <div className="callout-card">
                <h5 className="callout-title">Grilled Spiced Paneer Cubes</h5>
                <p className="callout-desc">Golden, flame-seared cottage cheese cubes tossed in fragrant Mexican spices.</p>
              </div>
            </div>

            {/* Callout 3: Slow-Simmered Kidney Beans */}
            <div className="salad-callout callout-mid-left callout-left" ref={addCalloutRef}>
              <div className="callout-card">
                <h5 className="callout-title">Slow-Simmered Kidney Beans</h5>
                <p className="callout-desc">Plump, tender rajma beans slow-braised with cumin, garlic, and Mexican chili herbs.</p>
              </div>
              <div className="callout-line-wrap line-mid-left">
                <svg className="callout-svg" width="140" height="40" viewBox="0 0 140 40">
                  <line x1="0" y1="20" x2="120" y2="20" stroke="#1b2522" strokeWidth="2" />
                  <circle cx="120" cy="20" r="5" fill="#ffffff" stroke="#1b2522" strokeWidth="2.5" />
                </svg>
              </div>
            </div>

            {/* Callout 4: Sweet Corn & Garden Veg */}
            <div className="salad-callout callout-mid-right callout-right" ref={addCalloutRef}>
              <div className="callout-line-wrap line-mid-right">
                <svg className="callout-svg" width="140" height="40" viewBox="0 0 140 40">
                  <line x1="20" y1="20" x2="140" y2="20" stroke="#1b2522" strokeWidth="2" />
                  <circle cx="20" cy="20" r="5" fill="#ffffff" stroke="#1b2522" strokeWidth="2.5" />
                </svg>
              </div>
              <div className="callout-card">
                <h5 className="callout-title">Sweet Corn &amp; Garden Veg</h5>
                <p className="callout-desc">Sun-sweetened golden corn tossed with crisp diced white onions and bell peppers.</p>
              </div>
            </div>

            {/* Callout 5: Crisp Persian Cucumbers */}
            <div className="salad-callout callout-bottom-left callout-left" ref={addCalloutRef}>
              <div className="callout-card">
                <h5 className="callout-title">Crisp Persian Cucumbers</h5>
                <p className="callout-desc">Hydrating, crunchy Persian cucumber chunks diced fresh at sunrise.</p>
              </div>
              <div className="callout-line-wrap line-bottom-left">
                <svg className="callout-svg" width="140" height="40" viewBox="0 0 140 40">
                  <line x1="0" y1="20" x2="120" y2="20" stroke="#1b2522" strokeWidth="2" />
                  <circle cx="120" cy="20" r="5" fill="#ffffff" stroke="#1b2522" strokeWidth="2.5" />
                </svg>
              </div>
            </div>

            {/* Callout 6: Vine Tomatoes & Farm Lettuce */}
            <div className="salad-callout callout-bottom-right callout-right" ref={addCalloutRef}>
              <div className="callout-line-wrap line-bottom-right">
                <svg className="callout-svg" width="140" height="40" viewBox="0 0 140 40">
                  <line x1="20" y1="20" x2="140" y2="20" stroke="#1b2522" strokeWidth="2" />
                  <circle cx="20" cy="20" r="5" fill="#ffffff" stroke="#1b2522" strokeWidth="2.5" />
                </svg>
              </div>
              <div className="callout-card">
                <h5 className="callout-title">Vine Tomatoes &amp; Farm Lettuce</h5>
                <p className="callout-desc">Juicy halved cherry tomatoes nested over a vibrant bed of romaine and purple radicchio.</p>
              </div>
            </div>

            {/* 3D Salad Stacking Canvas */}
            <div className="salad-layers-stack" ref={stackRef}>
              <img src="assets/images/salad-layer-bowl.png?v=20261104-properassets" alt="Ceramic salad bowl" className="salad-layer-img layer-bowl" ref={bowlRef} width="682" height="1024" fetchPriority="high" />
              <img src="assets/images/salad-layer-lettuce.png?v=20261104-properassets" alt="Lettuce leaves" className="salad-layer-img layer-lettuce" ref={lettuceRef} width="682" height="1024" />
              <img src="assets/images/salad-layer-tomatoes.png?v=20261104-properassets" alt="Cherry tomatoes" className="salad-layer-img layer-tomatoes" ref={tomatoesRef} width="682" height="1024" />
              <img src="assets/images/salad-layer-cucumber.png?v=20261104-properassets" alt="Cucumber" className="salad-layer-img layer-cucumber" ref={cucumberRef} width="682" height="1024" />
              <img src="assets/images/salad-layer-corn-veg.png?v=20261104-properassets" alt="Sweet corn and vegetables" className="salad-layer-img layer-corn-veg" ref={cornVegRef} width="682" height="1024" />
              <img src="assets/images/salad-layer-beans.png?v=20261104-properassets" alt="Kidney beans" className="salad-layer-img layer-beans" ref={beansRef} width="682" height="1024" />
              <img src="assets/images/salad-layer-paneer.png?v=20261104-properassets" alt="Grilled paneer" className="salad-layer-img layer-paneer" ref={paneerRef} width="682" height="1024" />
              <img src="assets/images/salad-layer-cheese.png?v=20261104-properassets" alt="Crumbled cheese" className="salad-layer-img layer-cheese" ref={cheeseRef} width="682" height="1024" />
              <img src="assets/images/salad-layer-herbs.png?v=20261104-properassets" alt="Fresh parsley herbs" className="salad-layer-img layer-herbs" ref={herbsRef} width="682" height="1024" />
              <img src="assets/images/salad-layer-bowl-front.png?v=20261104-properassets" alt="Bowl front lip" className="salad-layer-img layer-bowl-front" ref={bowlFrontRef} width="682" height="1024" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
