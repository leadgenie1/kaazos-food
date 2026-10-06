/**
 * KAAZOS CULINARY BRAND - Professional Marketing Engine
 * Zero Bloat • Zero Emojis • Fast Loading on Low-End Devices
 */

// Top 6 Curated Kaazos Signature Menu Items
const MENU_DATA = [
  {
    id: 'signature-burrito-wrap',
    name: 'Custom Burrito Wrap',
    category: 'veg',
    isVeg: true,
    calories: 520,
    protein: '18g',
    carbs: '68g',
    fat: '16g',
    desc: 'Warm toasted tortilla packed with seasoned cilantro lime rice, slow-cooked black beans, fresh pico de gallo, and house marinades.',
    image: 'assets/images/burrito.jpg'
  },
  {
    id: 'signature-rice-bowl',
    name: 'Mexican Fiesta Rice Bowl',
    category: 'veg',
    isVeg: true,
    calories: 490,
    protein: '16g',
    carbs: '72g',
    fat: '14g',
    desc: 'Steamed cilantro lime rice base, spiced black beans, charred sweet corn, fresh tomato salsa, sour cream, and house guacamole.',
    image: 'assets/images/bowl.jpg'
  },
  {
    id: 'signature-chipotle-chicken-bowl',
    name: 'Smoky Chipotle Chicken Bowl',
    category: 'nonveg',
    isVeg: false,
    calories: 640,
    protein: '44g',
    carbs: '48g',
    fat: '20g',
    desc: 'Double portion of flame-grilled tender chicken breast, spiced black beans, fajita bell peppers, charred corn, and high-protein dressing.',
    image: 'assets/images/hero.jpg'
  },
  {
    id: 'signature-peri-peri-fries',
    name: 'Loaded Peri-Peri Crisps & Fries',
    category: 'veg',
    isVeg: true,
    calories: 520,
    protein: '16g',
    carbs: '56g',
    fat: '24g',
    desc: 'Golden crispy russet potato fries smothered in warm cheese sauce, spiced paneer cubes, jalapeños, and Kaazos fiery peri-peri dusting.',
    image: 'assets/images/fries.jpg'
  },
  {
    id: 'signature-fiesta-nachos',
    name: 'Loaded Fiesta Chicken Nachos',
    category: 'nonveg',
    isVeg: false,
    calories: 560,
    protein: '36g',
    carbs: '44g',
    fat: '22g',
    desc: 'Crispy corn tortilla chips loaded with spiced chicken chunks, black beans, fresh pico de gallo, salsa roja, and creamy cilantro-lime sauce.',
    image: 'assets/images/tacos.jpg'
  },
  {
    id: 'signature-chocolate-shake',
    name: 'Belgian Chocolate & Oreo Shake',
    category: 'veg',
    isVeg: true,
    calories: 420,
    protein: '8g',
    carbs: '52g',
    fat: '18g',
    desc: 'Ultra-thick gourmet shake whipped with Belgian dark chocolate ganache, creamy dairy vanilla, and crumbled crunchy Oreos.',
    image: 'assets/images/shakes.jpg'
  }
];

// ==========================================================================
// Stuff'd Style Comprehensive Nutritional In-Take Dataset
// Accurate macro & micronutrient specifications per portion
// ==========================================================================
const STUFFD_NUTRITION_DATA = {
  burrito: {
    name: 'Burrito',
    icon: '🌯',
    sections: [
      {
        title: 'Tortilla (Select One)',
        type: 'single',
        items: [
          { id: 'b_tort_10', name: '10" Soft Flour Tortilla', cal: 218.1, fat: 6.4, satFat: 3.2, sodium: 533.1, carbs: 34.4, protein: 5.0, fiber: 1.7, sugars: 1.1, default: true, icon: '🌯' },
          { id: 'b_tort_whole', name: '10" Wholemeal Tortilla', cal: 202.0, fat: 5.8, satFat: 2.7, sodium: 310.1, carbs: 32.9, protein: 5.9, fiber: 3.0, sugars: 0.8, default: false, icon: '🌾' },
          { id: 'b_tort_12', name: '12" Loaded Flour Tortilla', cal: 285.0, fat: 8.2, satFat: 4.1, sodium: 670.0, carbs: 45.0, protein: 7.2, fiber: 2.2, sugars: 1.4, default: false, icon: '🌯' }
        ]
      },
      {
        title: 'Mains & Primary Proteins',
        type: 'single',
        items: [
          { id: 'b_prot_chipotle_chk', name: 'Smoked Chipotle Chicken', cal: 195.0, fat: 6.2, satFat: 1.8, sodium: 385.0, carbs: 2.4, protein: 32.5, fiber: 0.5, sugars: 1.0, default: true, icon: '🍗' },
          { id: 'b_prot_tinga_chk', name: 'Spicy Chicken Tinga', cal: 182.0, fat: 5.4, satFat: 1.6, sodium: 410.0, carbs: 3.2, protein: 29.8, fiber: 0.8, sugars: 1.2, default: false, icon: '🍗' },
          { id: 'b_prot_desi_paneer', name: 'Desi Spiced Paneer', cal: 245.0, fat: 17.5, satFat: 10.2, sodium: 320.0, carbs: 4.2, protein: 16.5, fiber: 0.5, sugars: 1.5, default: false, icon: '🧀' },
          { id: 'b_prot_chipotle_paneer', name: 'Chipotle Cottage Cheese / Paneer', cal: 238.0, fat: 16.8, satFat: 9.8, sodium: 315.0, carbs: 4.8, protein: 16.0, fiber: 0.6, sugars: 1.4, default: false, icon: '🧀' },
          { id: 'b_prot_fajita_veg', name: 'Sizzling Fajita Veggies', cal: 85.0, fat: 3.5, satFat: 0.6, sodium: 190.0, carbs: 12.0, protein: 2.5, fiber: 3.5, sugars: 4.2, default: false, icon: '🫑' },
          { id: 'b_prot_mushrooms', name: 'Crunchy Portobello & Button Mushrooms', cal: 95.0, fat: 4.8, satFat: 0.8, sodium: 180.0, carbs: 8.2, protein: 4.5, fiber: 2.8, sugars: 2.5, default: false, icon: '🍄' }
        ]
      },
      {
        title: 'Fresh Veggies & Fillings',
        type: 'multi',
        items: [
          { id: 'b_veg_lettuce', name: 'Crisp Iceberg Lettuce', cal: 15.0, fat: 0.2, satFat: 0.0, sodium: 8.0, carbs: 2.8, protein: 0.9, fiber: 1.2, sugars: 1.5, default: true, icon: '🥬' },
          { id: 'b_veg_pico', name: 'Fresh Pico de Gallo', cal: 25.0, fat: 0.2, satFat: 0.0, sodium: 110.0, carbs: 5.2, protein: 0.8, fiber: 1.4, sugars: 2.8, default: true, icon: '🍅' },
          { id: 'b_veg_corn_beans', name: 'Charred Sweet Corn & Black Beans', cal: 88.0, fat: 1.2, satFat: 0.2, sodium: 135.0, carbs: 16.5, protein: 3.8, fiber: 4.2, sugars: 3.1, default: true, icon: '🌽' },
          { id: 'b_veg_peppers', name: 'Sautéed Bell Peppers & Onions', cal: 42.0, fat: 1.2, satFat: 0.2, sodium: 95.0, carbs: 7.5, protein: 1.2, fiber: 2.0, sugars: 3.5, default: false, icon: '🫑' },
          { id: 'b_veg_cabbage', name: 'Purple Crunchy Slaw', cal: 28.0, fat: 0.4, satFat: 0.1, sodium: 45.0, carbs: 5.8, protein: 1.1, fiber: 2.1, sugars: 3.0, default: false, icon: '🥗' },
          { id: 'b_veg_jalapenos', name: 'Pickled Jalapeños', cal: 12.0, fat: 0.1, satFat: 0.0, sodium: 280.0, carbs: 2.5, protein: 0.4, fiber: 1.0, sugars: 1.2, default: false, icon: '🌶️' }
        ]
      },
      {
        title: 'Signature Sauces & Salsas',
        type: 'multi',
        items: [
          { id: 'b_sauce_salsa_roja', name: 'Fire-Roasted Tomato Salsa', cal: 32.0, fat: 0.4, satFat: 0.1, sodium: 210.0, carbs: 6.5, protein: 1.0, fiber: 1.6, sugars: 3.2, default: true, icon: '🥣' },
          { id: 'b_sauce_guac', name: 'Creamy Hass Guacamole', cal: 95.0, fat: 8.5, satFat: 1.4, sodium: 125.0, carbs: 5.0, protein: 1.3, fiber: 3.8, sugars: 0.6, default: false, icon: '🥑' },
          { id: 'b_sauce_chipotle_mayo', name: 'Smoky Chipotle Mayo', cal: 85.0, fat: 8.2, satFat: 1.2, sodium: 220.0, carbs: 2.8, protein: 0.8, fiber: 0.4, sugars: 1.5, default: false, icon: '🍶' },
          { id: 'b_sauce_sour_cream', name: 'Cooling Herb Sour Cream', cal: 68.0, fat: 6.2, satFat: 3.8, sodium: 85.0, carbs: 1.8, protein: 1.2, fiber: 0.0, sugars: 1.2, default: true, icon: '🥛' },
          { id: 'b_sauce_habanero', name: 'Fiery Habanero Salsa', cal: 22.0, fat: 0.2, satFat: 0.0, sodium: 250.0, carbs: 4.5, protein: 0.5, fiber: 1.1, sugars: 2.0, default: false, icon: '🔥' }
        ]
      },
      {
        title: 'Toppings & Boosters',
        type: 'multi',
        items: [
          { id: 'b_top_cheese', name: 'Monterey Jack & Cheddar Shreds', cal: 110.0, fat: 9.0, satFat: 5.5, sodium: 180.0, carbs: 0.8, protein: 6.8, fiber: 0.0, sugars: 0.2, default: true, icon: '🧀' },
          { id: 'b_top_extra_chk', name: 'Extra Grilled Chicken (+100g)', cal: 165.0, fat: 5.2, satFat: 1.5, sodium: 320.0, carbs: 0.5, protein: 28.0, fiber: 0.0, sugars: 0.0, default: false, icon: '🍗' },
          { id: 'b_top_extra_paneer', name: 'Extra Spiced Paneer (+90g)', cal: 210.0, fat: 15.0, satFat: 9.0, sodium: 280.0, carbs: 3.2, protein: 14.0, fiber: 0.5, sugars: 1.2, default: false, icon: '🧀' },
          { id: 'b_top_queso', name: 'Warm Queso Drizzle', cal: 92.0, fat: 7.2, satFat: 4.2, sodium: 240.0, carbs: 3.0, protein: 4.0, fiber: 0.2, sugars: 1.0, default: false, icon: '🧀' },
          { id: 'b_top_egg', name: 'Hard Boiled Farm Egg (2 halves)', cal: 74.0, fat: 5.0, satFat: 1.6, sodium: 70.0, carbs: 0.4, protein: 6.3, fiber: 0.0, sugars: 0.4, default: false, icon: '🥚' }
        ]
      }
    ]
  },
  bowl: {
    name: 'Daily Bowl',
    icon: '🍚',
    sections: [
      {
        title: 'Base Grains (Select One)',
        type: 'single',
        items: [
          { id: 'bw_rice_cilantro', name: 'Cilantro Lime Basmati Rice', cal: 210.0, fat: 3.2, satFat: 0.6, sodium: 240.0, carbs: 42.0, protein: 4.2, fiber: 1.8, sugars: 0.4, default: true, icon: '🍚' },
          { id: 'bw_rice_brown', name: 'Whole Brown Grain Rice & Quinoa', cal: 195.0, fat: 2.8, satFat: 0.5, sodium: 160.0, carbs: 38.5, protein: 5.4, fiber: 4.2, sugars: 0.5, default: false, icon: '🌾' },
          { id: 'bw_rice_half_greens', name: 'Half Rice & Half Crisp Greens', cal: 120.0, fat: 1.8, satFat: 0.3, sodium: 130.0, carbs: 23.0, protein: 2.8, fiber: 2.4, sugars: 1.1, default: false, icon: '🥗' }
        ]
      },
      {
        title: 'Mains & Primary Proteins',
        type: 'single',
        items: [
          { id: 'bw_prot_chipotle_chk', name: 'Smoked Chipotle Chicken', cal: 195.0, fat: 6.2, satFat: 1.8, sodium: 385.0, carbs: 2.4, protein: 32.5, fiber: 0.5, sugars: 1.0, default: true, icon: '🍗' },
          { id: 'bw_prot_periperi_chk', name: 'Grilled Peri-Peri Chicken', cal: 205.0, fat: 6.8, satFat: 2.0, sodium: 395.0, carbs: 1.8, protein: 34.0, fiber: 0.5, sugars: 0.8, default: false, icon: '🍗' },
          { id: 'bw_prot_desi_paneer', name: 'Desi Spiced Paneer', cal: 245.0, fat: 17.5, satFat: 10.2, sodium: 320.0, carbs: 4.2, protein: 16.5, fiber: 0.5, sugars: 1.5, default: false, icon: '🧀' },
          { id: 'bw_prot_fajita_veg', name: 'Sizzling Fajita Veggies', cal: 85.0, fat: 3.5, satFat: 0.6, sodium: 190.0, carbs: 12.0, protein: 2.5, fiber: 3.5, sugars: 4.2, default: false, icon: '🫑' },
          { id: 'bw_prot_mushrooms', name: 'Crunchy Portobello Mushrooms', cal: 95.0, fat: 4.8, satFat: 0.8, sodium: 180.0, carbs: 8.2, protein: 4.5, fiber: 2.8, sugars: 2.5, default: false, icon: '🍄' }
        ]
      },
      {
        title: 'Fresh Veggies & Fillings',
        type: 'multi',
        items: [
          { id: 'bw_veg_corn_beans', name: 'Charred Sweet Corn & Black Beans', cal: 88.0, fat: 1.2, satFat: 0.2, sodium: 135.0, carbs: 16.5, protein: 3.8, fiber: 4.2, sugars: 3.1, default: true, icon: '🌽' },
          { id: 'bw_veg_pico', name: 'Fresh Pico de Gallo', cal: 25.0, fat: 0.2, satFat: 0.0, sodium: 110.0, carbs: 5.2, protein: 0.8, fiber: 1.4, sugars: 2.8, default: true, icon: '🍅' },
          { id: 'bw_veg_peppers', name: 'Sautéed Bell Peppers & Onions', cal: 42.0, fat: 1.2, satFat: 0.2, sodium: 95.0, carbs: 7.5, protein: 1.2, fiber: 2.0, sugars: 3.5, default: true, icon: '🫑' },
          { id: 'bw_veg_cucumbers', name: 'Crisp English Cucumbers', cal: 16.0, fat: 0.1, satFat: 0.0, sodium: 8.0, carbs: 3.4, protein: 0.7, fiber: 1.0, sugars: 1.6, default: false, icon: '🥒' },
          { id: 'bw_veg_jalapenos', name: 'Pickled Jalapeños', cal: 12.0, fat: 0.1, satFat: 0.0, sodium: 280.0, carbs: 2.5, protein: 0.4, fiber: 1.0, sugars: 1.2, default: false, icon: '🌶️' }
        ]
      },
      {
        title: 'Signature Sauces & Salsas',
        type: 'multi',
        items: [
          { id: 'bw_sauce_guac', name: 'Creamy Hass Guacamole', cal: 95.0, fat: 8.5, satFat: 1.4, sodium: 125.0, carbs: 5.0, protein: 1.3, fiber: 3.8, sugars: 0.6, default: true, icon: '🥑' },
          { id: 'bw_sauce_salsa_roja', name: 'Fire-Roasted Tomato Salsa', cal: 32.0, fat: 0.4, satFat: 0.1, sodium: 210.0, carbs: 6.5, protein: 1.0, fiber: 1.6, sugars: 3.2, default: true, icon: '🥣' },
          { id: 'bw_sauce_sour_cream', name: 'Cooling Herb Sour Cream', cal: 68.0, fat: 6.2, satFat: 3.8, sodium: 85.0, carbs: 1.8, protein: 1.2, fiber: 0.0, sugars: 1.2, default: false, icon: '🥛' },
          { id: 'bw_sauce_chipotle_mayo', name: 'Smoky Chipotle Mayo', cal: 85.0, fat: 8.2, satFat: 1.2, sodium: 220.0, carbs: 2.8, protein: 0.8, fiber: 0.4, sugars: 1.5, default: false, icon: '🍶' }
        ]
      },
      {
        title: 'Toppings & Boosters',
        type: 'multi',
        items: [
          { id: 'bw_top_strips', name: 'Crunchy Tortilla Crisps', cal: 75.0, fat: 3.8, satFat: 0.6, sodium: 85.0, carbs: 9.8, protein: 1.2, fiber: 0.8, sugars: 0.2, default: true, icon: '🌮' },
          { id: 'bw_top_extra_chk', name: 'Double Chicken Scoop (+100g)', cal: 165.0, fat: 5.2, satFat: 1.5, sodium: 320.0, carbs: 0.5, protein: 28.0, fiber: 0.0, sugars: 0.0, default: false, icon: '🍗' },
          { id: 'bw_top_cheese', name: 'Monterey Jack & Cheddar Shreds', cal: 110.0, fat: 9.0, satFat: 5.5, sodium: 180.0, carbs: 0.8, protein: 6.8, fiber: 0.0, sugars: 0.2, default: false, icon: '🧀' },
          { id: 'bw_top_egg', name: 'Hard Boiled Farm Egg', cal: 74.0, fat: 5.0, satFat: 1.6, sodium: 70.0, carbs: 0.4, protein: 6.3, fiber: 0.0, sugars: 0.4, default: false, icon: '🥚' }
        ]
      }
    ]
  },
  quesadilla: {
    name: 'Quesadilla & Nachos',
    icon: '🌮',
    sections: [
      {
        title: 'Foundation (Select One)',
        type: 'single',
        items: [
          { id: 'q_tort_flour', name: 'Crisp Toasted Flour Tortilla (10")', cal: 218.1, fat: 6.4, satFat: 3.2, sodium: 533.1, carbs: 34.4, protein: 5.0, fiber: 1.7, sugars: 1.1, default: true, icon: '🌮' },
          { id: 'q_tort_whole', name: 'Toasted Wholemeal Tortilla (10")', cal: 202.0, fat: 5.8, satFat: 2.7, sodium: 310.1, carbs: 32.9, protein: 5.9, fiber: 3.0, sugars: 0.8, default: false, icon: '🌾' },
          { id: 'q_nachos_tray', name: 'Artisan Corn Nacho Chips Base', cal: 220.0, fat: 9.5, satFat: 1.5, sodium: 210.0, carbs: 31.0, protein: 3.2, fiber: 2.5, sugars: 0.4, default: false, icon: '🌽' }
        ]
      },
      {
        title: 'Mains & Proteins',
        type: 'single',
        items: [
          { id: 'q_prot_tinga', name: 'Spicy Chicken Tinga', cal: 182.0, fat: 5.4, satFat: 1.6, sodium: 410.0, carbs: 3.2, protein: 29.8, fiber: 0.8, sugars: 1.2, default: true, icon: '🍗' },
          { id: 'q_prot_chipotle_chk', name: 'Smoked Chipotle Chicken', cal: 195.0, fat: 6.2, satFat: 1.8, sodium: 385.0, carbs: 2.4, protein: 32.5, fiber: 0.5, sugars: 1.0, default: false, icon: '🍗' },
          { id: 'q_prot_paneer', name: 'Desi Spiced Paneer', cal: 245.0, fat: 17.5, satFat: 10.2, sodium: 320.0, carbs: 4.2, protein: 16.5, fiber: 0.5, sugars: 1.5, default: false, icon: '🧀' },
          { id: 'q_prot_mushrooms', name: 'Portobello & Sautéed Onions', cal: 95.0, fat: 4.8, satFat: 0.8, sodium: 180.0, carbs: 8.2, protein: 4.5, fiber: 2.8, sugars: 2.5, default: false, icon: '🍄' }
        ]
      },
      {
        title: 'Melted Cheeses (Essential)',
        type: 'multi',
        items: [
          { id: 'q_cheese_blend', name: 'Melted Monterey Jack & Cheddar Blend', cal: 135.0, fat: 11.2, satFat: 7.0, sodium: 220.0, carbs: 1.0, protein: 8.5, fiber: 0.0, sugars: 0.2, default: true, icon: '🧀' },
          { id: 'q_queso_drizzle', name: 'Warm Cheddar Queso Sauce', cal: 92.0, fat: 7.2, satFat: 4.2, sodium: 240.0, carbs: 3.0, protein: 4.0, fiber: 0.2, sugars: 1.0, default: false, icon: '🧀' }
        ]
      },
      {
        title: 'Salsas & Fresh Dips',
        type: 'multi',
        items: [
          { id: 'q_sauce_roja', name: 'Fire-Roasted Tomato Salsa', cal: 32.0, fat: 0.4, satFat: 0.1, sodium: 210.0, carbs: 6.5, protein: 1.0, fiber: 1.6, sugars: 3.2, default: true, icon: '🥣' },
          { id: 'q_sauce_sour_cream', name: 'Cooling Herb Sour Cream', cal: 68.0, fat: 6.2, satFat: 3.8, sodium: 85.0, carbs: 1.8, protein: 1.2, fiber: 0.0, sugars: 1.2, default: true, icon: '🥛' },
          { id: 'q_sauce_guac', name: 'Fresh Avocado Guacamole', cal: 95.0, fat: 8.5, satFat: 1.4, sodium: 125.0, carbs: 5.0, protein: 1.3, fiber: 3.8, sugars: 0.6, default: false, icon: '🥑' },
          { id: 'q_veg_jalapenos', name: 'Pickled Jalapeño Slices', cal: 12.0, fat: 0.1, satFat: 0.0, sodium: 280.0, carbs: 2.5, protein: 0.4, fiber: 1.0, sugars: 1.2, default: true, icon: '🌶️' }
        ]
      }
    ]
  },
  salad: {
    name: 'Salad Bowl',
    icon: '🥗',
    sections: [
      {
        title: 'Greens Base (Select One)',
        type: 'single',
        items: [
          { id: 's_greens_farm', name: 'Crisp Farm Greens & Baby Spinach', cal: 24.0, fat: 0.3, satFat: 0.0, sodium: 18.0, carbs: 4.2, protein: 2.1, fiber: 2.6, sugars: 1.8, default: true, icon: '🥗' },
          { id: 's_greens_cabbage', name: 'Supergreen Slaw & Romaine Lettuce', cal: 28.0, fat: 0.4, satFat: 0.1, sodium: 22.0, carbs: 5.1, protein: 1.9, fiber: 2.8, sugars: 2.1, default: false, icon: '🥬' }
        ]
      },
      {
        title: 'Mains & Lean Proteins',
        type: 'single',
        items: [
          { id: 's_prot_chipotle_chk', name: 'Smoked Chipotle Chicken (Lean Cut)', cal: 195.0, fat: 6.2, satFat: 1.8, sodium: 385.0, carbs: 2.4, protein: 32.5, fiber: 0.5, sugars: 1.0, default: true, icon: '🍗' },
          { id: 's_prot_periperi_chk', name: 'Grilled Peri-Peri Chicken Breast', cal: 205.0, fat: 6.8, satFat: 2.0, sodium: 395.0, carbs: 1.8, protein: 34.0, fiber: 0.5, sugars: 0.8, default: false, icon: '🍗' },
          { id: 's_prot_desi_paneer', name: 'Desi Spiced Paneer', cal: 245.0, fat: 17.5, satFat: 10.2, sodium: 320.0, carbs: 4.2, protein: 16.5, fiber: 0.5, sugars: 1.5, default: false, icon: '🧀' },
          { id: 's_prot_fajita_veg', name: 'Sizzling Fajita Peppers & Onions', cal: 85.0, fat: 3.5, satFat: 0.6, sodium: 190.0, carbs: 12.0, protein: 2.5, fiber: 3.5, sugars: 4.2, default: false, icon: '🫑' },
          { id: 's_prot_mushrooms', name: 'Sautéed Garlic Button Mushrooms', cal: 95.0, fat: 4.8, satFat: 0.8, sodium: 180.0, carbs: 8.2, protein: 4.5, fiber: 2.8, sugars: 2.5, default: false, icon: '🍄' }
        ]
      },
      {
        title: 'Garden Fresh Veggies',
        type: 'multi',
        items: [
          { id: 's_veg_pico', name: 'Fresh Pico de Gallo', cal: 25.0, fat: 0.2, satFat: 0.0, sodium: 110.0, carbs: 5.2, protein: 0.8, fiber: 1.4, sugars: 2.8, default: true, icon: '🍅' },
          { id: 's_veg_corn_beans', name: 'Sweet Corn & Black Beans', cal: 88.0, fat: 1.2, satFat: 0.2, sodium: 135.0, carbs: 16.5, protein: 3.8, fiber: 4.2, sugars: 3.1, default: true, icon: '🌽' },
          { id: 's_veg_cucumbers', name: 'Sliced English Cucumbers', cal: 16.0, fat: 0.1, satFat: 0.0, sodium: 8.0, carbs: 3.4, protein: 0.7, fiber: 1.0, sugars: 1.6, default: true, icon: '🥒' },
          { id: 's_veg_peppers', name: 'Sweet Sautéed Bell Peppers', cal: 42.0, fat: 1.2, satFat: 0.2, sodium: 95.0, carbs: 7.5, protein: 1.2, fiber: 2.0, sugars: 3.5, default: false, icon: '🫑' },
          { id: 's_veg_jalapenos', name: 'Pickled Jalapeños', cal: 12.0, fat: 0.1, satFat: 0.0, sodium: 280.0, carbs: 2.5, protein: 0.4, fiber: 1.0, sugars: 1.2, default: false, icon: '🌶️' }
        ]
      },
      {
        title: 'Dressings & Healthy Fats',
        type: 'multi',
        items: [
          { id: 's_dress_guac', name: 'Fresh Hass Avocado Guacamole', cal: 95.0, fat: 8.5, satFat: 1.4, sodium: 125.0, carbs: 5.0, protein: 1.3, fiber: 3.8, sugars: 0.6, default: true, icon: '🥑' },
          { id: 's_dress_vinaigrette', name: 'Zesty Cilantro Lime Vinaigrette', cal: 72.0, fat: 6.8, satFat: 0.9, sodium: 165.0, carbs: 3.2, protein: 0.2, fiber: 0.4, sugars: 2.2, default: false, icon: '🍋' },
          { id: 's_dress_salsa_roja', name: 'Fire-Roasted Tomato Salsa', cal: 32.0, fat: 0.4, satFat: 0.1, sodium: 210.0, carbs: 6.5, protein: 1.0, fiber: 1.6, sugars: 3.2, default: true, icon: '🥣' },
          { id: 's_dress_chipotle_ranch', name: 'Light Chipotle Ranch Dressing', cal: 82.0, fat: 7.5, satFat: 1.2, sodium: 210.0, carbs: 2.6, protein: 0.9, fiber: 0.3, sugars: 1.4, default: false, icon: '🍶' }
        ]
      },
      {
        title: 'Toppings & Protein Boosters',
        type: 'multi',
        items: [
          { id: 's_top_egg', name: 'Hard Boiled Farm Egg (2 halves)', cal: 74.0, fat: 5.0, satFat: 1.6, sodium: 70.0, carbs: 0.4, protein: 6.3, fiber: 0.0, sugars: 0.4, default: true, icon: '🥚' },
          { id: 's_top_cheese', name: 'Monterey Jack & Cheddar Shreds', cal: 110.0, fat: 9.0, satFat: 5.5, sodium: 180.0, carbs: 0.8, protein: 6.8, fiber: 0.0, sugars: 0.2, default: false, icon: '🧀' },
          { id: 's_top_strips', name: 'Crunchy Tortilla Strips', cal: 75.0, fat: 3.8, satFat: 0.6, sodium: 85.0, carbs: 9.8, protein: 1.2, fiber: 0.8, sugars: 0.2, default: true, icon: '🌮' },
          { id: 's_top_extra_chk', name: 'Double Chicken Scoop (+100g)', cal: 165.0, fat: 5.2, satFat: 1.5, sodium: 320.0, carbs: 0.5, protein: 28.0, fiber: 0.0, sugars: 0.0, default: false, icon: '🍗' }
        ]
      }
    ]
  }
};

// Selection State for each category
const stuffdSelectedItems = {
  burrito: new Set(),
  bowl: new Set(),
  quesadilla: new Set(),
  salad: new Set()
};

// Initialize default selections for all categories
Object.keys(STUFFD_NUTRITION_DATA).forEach(cat => {
  STUFFD_NUTRITION_DATA[cat].sections.forEach(sec => {
    sec.items.forEach(item => {
      if (item.default) {
        stuffdSelectedItems[cat].add(item.id);
      }
    });
  });
});

let currentStuffdCategory = 'burrito';

// Gallery Items
const GALLERY_ITEMS = [
  { title: 'Artisanal Burrito Wrap', category: 'wraps', img: 'assets/images/burrito.jpg', tag: 'Hand-Rolled & Toasted' },
  { title: 'Mexican Rice & Guacamole Bowl', category: 'wraps', img: 'assets/images/bowl.jpg', tag: 'Signature Dish' },
  { title: 'Loaded Fiesta Chicken Nachos', category: 'crispy', img: 'assets/images/tacos.jpg', tag: 'Fiesta Favorite' },
  { title: 'Loaded Peri-Peri Fries', category: 'crispy', img: 'assets/images/fries.jpg', tag: 'Double Drizzle' },
  { title: 'Crispy Glazed Burger', category: 'crispy', img: 'assets/images/wings.jpg', tag: 'Golden & Crunchy' },
  { title: 'Kaazos Indiranagar Kitchen', category: 'wraps', img: 'assets/images/our-story.jpg', tag: 'Hospitality & Ambience' },
  { title: 'Belgian Chocolate Shake', category: 'drinks', img: 'assets/images/shakes.jpg', tag: 'Ice Cold & Rich' },
  { title: 'Smoky Chipotle Chicken Feast', category: 'wraps', img: 'assets/images/hero.jpg', tag: 'High Protein Spread' }
];

let currentMenuCat = 'all';
let currentDietFilter = 'all';
let menuSearchQuery = '';

/* ==========================================================================
   Initialization
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  initNavbarBlur();
  initHeroParallaxScroll();
  initMenu();
  initStuffdNutritionCalculator();
  initGallery();
  initMobileMenu();
  initDeconstructedSalad();
  initReelsCarousel();
  initGoogleReviewsCarousel();
});

/* ==========================================================================
   1. Navbar Glassmorphic Elevation on Scroll
   ========================================================================== */
function initNavbarBlur() {
  const nav = document.querySelector('.site-nav');
  if (!nav) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      nav.classList.add('nav-scrolled');
    } else {
      nav.classList.remove('nav-scrolled');
    }
  }, { passive: true });
}

/* ==========================================================================
   2. Menu Catalog (Pure Showcase, Zero Emojis)
   ========================================================================== */
function initMenu() {
  renderMenu();

  const catTabs = document.querySelectorAll('.cat-tab-btn');
  catTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      catTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentMenuCat = tab.getAttribute('data-cat');
      renderMenu();
    });
  });

  const searchInput = document.getElementById('menuSearchInput');
  if (searchInput) {
    let timer;
    searchInput.addEventListener('input', (e) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        menuSearchQuery = e.target.value.toLowerCase().trim();
        renderMenu();
      }, 150);
    });
  }
}

function renderMenu() {
  const container = document.getElementById('menuGrid');
  if (!container) return;

  const filtered = MENU_DATA.filter(item => {
    const matchCat = currentMenuCat === 'all' ||
      (currentMenuCat === 'veg' && item.isVeg) ||
      (currentMenuCat === 'nonveg' && !item.isVeg);
    const matchSearch = !menuSearchQuery ||
      item.name.toLowerCase().includes(menuSearchQuery) ||
      item.desc.toLowerCase().includes(menuSearchQuery);
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: var(--dig-gray-600);">
        <p style="font-size: 1.15rem; font-weight: 700; color: var(--dig-green-900); margin-bottom: 0.35rem;">No dishes match your selection</p>
        <p style="font-size: 0.875rem;">Try selecting a different filter or clearing the search box.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => `
    <article class="product-card" data-id="${item.id}">
      <div class="card-img-holder">
        <img src="${item.image}" alt="${item.name}" loading="lazy" width="400" height="250">
      </div>
      <div class="card-body">
        <div class="card-header-row">
          <span class="diet-symbol ${item.isVeg ? 'veg' : 'nonveg'}" title="${item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}" aria-label="${item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}">
            <span class="diet-symbol-dot"></span>
          </span>
          <h4 class="card-heading">${item.name}</h4>
        </div>
        <p class="card-description">${item.desc}</p>
        <div class="card-macro-strip">
          <span class="macro-val">${item.calories} kcal</span>
          <span class="macro-divider">•</span>
          <span class="macro-val">${item.protein} protein</span>
        </div>
      </div>
    </article>
  `).join('');
}

/* ==========================================================================
   3. Stuff'd-Style Nutrition In-Take Calculator (Live Matrix & Transparency)
   ========================================================================== */
function initStuffdNutritionCalculator() {
  const tableBody = document.getElementById('stuffdTableBody');
  const tabs = document.querySelectorAll('#stuffdDishTabs .stuffd-tab-item');
  const resetBtn = document.getElementById('stuffdResetBtn');
  const modalOverlay = document.getElementById('stuffdInfoModal');
  const modalClose = document.getElementById('stuffdModalClose');

  if (!tableBody) return;

  // Render current category table rows
  function renderTable(catKey) {
    currentStuffdCategory = catKey;
    const catData = STUFFD_NUTRITION_DATA[catKey];
    if (!catData) return;

    const selectedSet = stuffdSelectedItems[catKey];
    tableBody.innerHTML = '';

    catData.sections.forEach(section => {
      // Group title row
      const groupRow = document.createElement('tr');
      groupRow.className = 'group-title-row';
      groupRow.innerHTML = `<td colspan="9">${section.title}</td>`;
      tableBody.appendChild(groupRow);

      // Section items
      section.items.forEach(item => {
        const isSelected = selectedSet.has(item.id);
        const itemRow = document.createElement('tr');
        itemRow.className = `item-row ${isSelected ? 'selected' : ''}`;
        itemRow.setAttribute('data-id', item.id);

        itemRow.innerHTML = `
          <td class="col-ingredient">
            <div class="ingredient-cell-content">
              <div class="ingredient-info-group">
                <span class="ingredient-bullet-icon">${item.icon || '•'}</span>
                <span class="ingredient-title-text">${item.name}</span>
              </div>
              <div class="ingredient-btns-group">
                <button type="button" class="btn-item-info" data-item-id="${item.id}" title="View detailed nutrition fact for ${item.name}" aria-label="Nutrient info">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                </button>
                <button type="button" class="btn-item-toggle" title="${isSelected ? 'Remove from meal' : 'Add to meal'}">
                  ${isSelected ? '✓' : '+'}
                </button>
              </div>
            </div>
          </td>
          <td class="col-metric">${item.cal.toFixed(1)}</td>
          <td class="col-metric">${item.fat.toFixed(1)}</td>
          <td class="col-metric">${item.satFat.toFixed(1)}</td>
          <td class="col-metric">${item.sodium.toFixed(1)}</td>
          <td class="col-metric">${item.carbs.toFixed(1)}</td>
          <td class="col-metric val-prot-cell">${item.protein.toFixed(1)}</td>
          <td class="col-metric">${item.fiber.toFixed(1)}</td>
          <td class="col-metric">${item.sugars.toFixed(1)}</td>
        `;

        // Row toggle click listener
        itemRow.addEventListener('click', (e) => {
          if (e.target.closest('.btn-item-info')) return; // Ignore info button clicks

          if (section.type === 'single') {
            // Deselect other items in this single-choice section and select this one
            section.items.forEach(other => selectedSet.delete(other.id));
            selectedSet.add(item.id);
          } else {
            // Toggle multi-select
            if (selectedSet.has(item.id)) {
              selectedSet.delete(item.id);
            } else {
              selectedSet.add(item.id);
            }
          }
          renderTable(catKey);
        });

        tableBody.appendChild(itemRow);
      });
    });

    updateTotals();
    wireInfoButtons(catKey);
  }

  // Calculate and update all totals across all 8 columns
  function updateTotals() {
    const catKey = currentStuffdCategory;
    const catData = STUFFD_NUTRITION_DATA[catKey];
    const selectedSet = stuffdSelectedItems[catKey];

    let totals = {
      cal: 0,
      fat: 0,
      satFat: 0,
      sodium: 0,
      carbs: 0,
      protein: 0,
      fiber: 0,
      sugars: 0
    };

    let selectedNames = [];

    catData.sections.forEach(sec => {
      sec.items.forEach(item => {
        if (selectedSet.has(item.id)) {
          totals.cal += item.cal;
          totals.fat += item.fat;
          totals.satFat += item.satFat;
          totals.sodium += item.sodium;
          totals.carbs += item.carbs;
          totals.protein += item.protein;
          totals.fiber += item.fiber;
          totals.sugars += item.sugars;
          selectedNames.push(item.name);
        }
      });
    });

    // Update Table Footer Values
    setEl('totalKcal', totals.cal.toFixed(1));
    setEl('totalFat', totals.fat.toFixed(1));
    setEl('totalSatFat', totals.satFat.toFixed(1));
    setEl('totalSodium', totals.sodium.toFixed(1));
    setEl('totalCarbs', totals.carbs.toFixed(1));
    setEl('totalProtein', totals.protein.toFixed(1));
    setEl('totalFiber', totals.fiber.toFixed(1));
    setEl('totalSugars', totals.sugars.toFixed(1));

    // Update Sticky Cockpit Bar Values
    setEl('cockpitKcal', Math.round(totals.cal));
    setEl('cockpitProtein', totals.protein.toFixed(1));
    setEl('cockpitCarbs', totals.carbs.toFixed(1));
    setEl('cockpitFat', totals.fat.toFixed(1));
    setEl('cockpitFiber', totals.fiber.toFixed(1));
    setEl('cockpitSodium', Math.round(totals.sodium));

    // Update WhatsApp Button Link
    const waBtn = document.getElementById('stuffdWaOrderBtn');
    if (waBtn) {
      const msg = `Hi Kaazos! I calculated my meal on your Nutrition In-Take calculator:\n` +
        `Dish: ${catData.name}\n` +
        `Ingredients: ${selectedNames.join(', ') || 'Custom Build'}\n` +
        `Macros: ${Math.round(totals.cal)} kcal | ${totals.protein.toFixed(1)}g Protein | ${totals.carbs.toFixed(1)}g Carbs | ${totals.fat.toFixed(1)}g Fats.\n` +
        `Can I order this customized bowl?`;
      waBtn.href = `https://wa.me/919876543210?text=${encodeURIComponent(msg)}`;
    }
  }

  function setEl(id, val) {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  }

  // Info Modal Logic
  function wireInfoButtons(catKey) {
    const infoBtns = document.querySelectorAll('.btn-item-info');
    infoBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const itemId = btn.getAttribute('data-item-id');
        openItemModal(catKey, itemId);
      });
    });
  }

  function openItemModal(catKey, itemId) {
    const catData = STUFFD_NUTRITION_DATA[catKey];
    let foundItem = null;
    let foundSec = null;
    for (const sec of catData.sections) {
      const it = sec.items.find(i => i.id === itemId);
      if (it) {
        foundItem = it;
        foundSec = sec;
        break;
      }
    }
    if (!foundItem || !modalOverlay) return;

    const modalTitle = document.getElementById('stuffdModalTitle');
    const modalCat = document.getElementById('stuffdModalCategory');
    const modalBody = document.getElementById('stuffdModalFactsBody');

    if (modalTitle) modalTitle.textContent = foundItem.name;
    if (modalCat) modalCat.textContent = `${catData.name} • ${foundSec.title.replace(/\(.*\)/, '').trim()}`;

    if (modalBody) {
      modalBody.innerHTML = `
        <tr><td class="fact-lbl">Energy</td><td class="fact-val">${foundItem.cal.toFixed(1)} kcal</td></tr>
        <tr><td class="fact-lbl">Total Fat</td><td class="fact-val">${foundItem.fat.toFixed(1)} g</td></tr>
        <tr><td class="fact-lbl">Saturated Fat</td><td class="fact-val">${foundItem.satFat.toFixed(1)} g</td></tr>
        <tr><td class="fact-lbl">Sodium</td><td class="fact-val">${foundItem.sodium.toFixed(1)} mg</td></tr>
        <tr><td class="fact-lbl">Carbohydrates</td><td class="fact-val">${foundItem.carbs.toFixed(1)} g</td></tr>
        <tr><td class="fact-lbl">Protein</td><td class="fact-val">${foundItem.protein.toFixed(1)} g</td></tr>
        <tr><td class="fact-lbl">Dietary Fibres</td><td class="fact-val">${foundItem.fiber.toFixed(1)} g</td></tr>
        <tr><td class="fact-lbl">Sugars</td><td class="fact-val">${foundItem.sugars.toFixed(1)} g</td></tr>
      `;
    }

    modalOverlay.classList.add('active');
    modalOverlay.setAttribute('aria-hidden', 'false');
  }

  function closeModal() {
    if (modalOverlay) {
      modalOverlay.classList.remove('active');
      modalOverlay.setAttribute('aria-hidden', 'true');
    }
  }

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // Tab switching
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      const catKey = tab.getAttribute('data-tab');
      renderTable(catKey);
    });
  });

  // Reset button
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      const catKey = currentStuffdCategory;
      stuffdSelectedItems[catKey].clear();
      STUFFD_NUTRITION_DATA[catKey].sections.forEach(sec => {
        sec.items.forEach(item => {
          if (item.default) stuffdSelectedItems[catKey].add(item.id);
        });
      });
      renderTable(catKey);
    });
  }

  // Initial render
  renderTable('burrito');
}

/* ==========================================================================
   4. Food Gallery
   ========================================================================== */
function initGallery() {
  const container = document.getElementById('galleryGrid');
  const tabs = document.querySelectorAll('.gallery-filter-btn');
  if (!container) return;

  function renderGallery(cat = 'all') {
    const items = GALLERY_ITEMS.filter(item => cat === 'all' || item.category === cat);
    container.innerHTML = items.map(item => `
      <div class="gallery-frame">
        <img src="${item.img}" alt="${item.title}" loading="lazy" width="400" height="400">
        <div class="gallery-hover-overlay">
          <span style="font-size: 0.72rem; font-weight: 800; text-transform: uppercase; color: var(--kz-red-light);">${item.tag}</span>
          <h4 style="font-family: var(--font-heading); font-size: 1.05rem; margin-top: 0.2rem; font-weight: 800;">${item.title}</h4>
        </div>
      </div>
    `).join('');
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderGallery(tab.getAttribute('data-gallery-cat'));
    });
  });

  renderGallery('all');
}

/* ==========================================================================
   5. Mobile Navigation
   ========================================================================== */
function initMobileMenu() {
  const toggle = document.getElementById('mobileMenuBtn');
  const navMenu = document.querySelector('.nav-menu');
  if (!toggle || !navMenu) return;

  // Clear any legacy inline styles that could hide the menu on desktop
  navMenu.removeAttribute('style');

  function closeMenu() {
    navMenu.classList.remove('is-open');
    toggle.classList.remove('is-active');
    toggle.setAttribute('aria-expanded', 'false');
  }

  function openMenu() {
    navMenu.classList.add('is-open');
    toggle.classList.add('is-active');
    toggle.setAttribute('aria-expanded', 'true');
  }

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    if (navMenu.classList.contains('is-open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close drawer automatically when clicking any link
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Close drawer when clicking outside
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !toggle.contains(e.target)) {
      closeMenu();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMenu();
    }
  });
}

/* ==========================================================================
   6. Deconstructed Exploded Salad Animation (Pure Scroll-Driven Parallax)
   ========================================================================== */
function initDeconstructedSalad() {
  const section = document.getElementById('saladExplodedSection');
  const stage = document.getElementById('saladStage');
  const stack = document.getElementById('saladLayersStack');

  const layerTop = document.getElementById('layerTop');
  const layerAvocado = document.getElementById('layerAvocado');
  const layerCornBeans = document.getElementById('layerCornBeans');
  const layerChicken = document.getElementById('layerChicken');
  const layerLettuce = document.getElementById('layerLettuce');
  const callouts = document.querySelectorAll('.salad-callout');

  if (!section || !layerTop || !stack) return;

  function applyExplosion(progress) {
    const explosion = Math.max(0, Math.min(1, progress));
    const packFactor = 1.0 - explosion;

    // Shift the whole bowl assembly up into dead center at start, lowering to stage floor when exploded
    stack.style.setProperty('--stack-shift', `${-packFactor * 38}%`);

    // Staggered vertical levitation nestled naturally inside the bowl cavity behind front rim
    layerAvocado.style.transform = `translateY(${packFactor * 55}%) scale(${1 - packFactor * 0.04})`;
    layerTop.style.transform = `translateY(${packFactor * 43.3}%) scale(${1 - packFactor * 0.04})`;
    layerCornBeans.style.transform = `translateY(${packFactor * 32.9}%) scale(${1 - packFactor * 0.03})`;
    layerChicken.style.transform = `translateY(${packFactor * 23.3}%) scale(${1 - packFactor * 0.02})`;
    layerLettuce.style.transform = `translateY(${packFactor * 11.25}%)`;

    // Callout pointers reveal progressively as the salad blooms
    callouts.forEach(c => {
      if (explosion < 0.18) {
        c.style.opacity = '0';
        c.style.pointerEvents = 'none';
      } else {
        const opacity = Math.min(1, (explosion - 0.18) / 0.45);
        c.style.opacity = `${opacity}`;
        c.style.pointerEvents = 'auto';
      }
      const isLeft = c.classList.contains('callout-top-left') || c.classList.contains('callout-mid-left') || c.classList.contains('callout-bottom-left');
      c.style.transform = `translateX(${packFactor * (isLeft ? 25 : -25)}px)`;
    });
  }

  // Scroll scrub: section pins on screen; user sees normal bowl first, then scrolling expands it
  function onScroll() {
    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const navOffset = 76; // Match sticky navbar height
    const totalScroll = section.offsetHeight - (windowHeight - navOffset);

    if (totalScroll <= 0) {
      applyExplosion(0);
      return;
    }

    // Scrolled distance inside the pinned section
    const scrolledInside = navOffset - rect.top;
    const rawProgress = scrolledInside / totalScroll;

    // Phase 1: On arrival (rawProgress <= 0.05), bowl is 100% normal and centered
    // Phase 2: Active scroll (0.05 to 0.85), salad deconstructs smoothly
    // Phase 3: Hold exploded view (0.85 to 1.0) so user can read ingredients
    let progress;
    if (rawProgress <= 0.05) {
      progress = 0.0;
    } else if (rawProgress >= 0.85) {
      progress = 1.0;
    } else {
      progress = (rawProgress - 0.05) / (0.85 - 0.05);
    }

    applyExplosion(progress);
  }

  // Initial check on load
  onScroll();

  // Scroll listener with requestAnimationFrame throttling
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        onScroll();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // Subtle 3D mouse perspective tilt on stage
  if (stage) {
    stage.addEventListener('mousemove', (e) => {
      if (window.innerWidth < 768) return;
      const rect = stage.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      stack.style.setProperty('--tilt-y', `${x * 8}deg`);
      stack.style.setProperty('--tilt-x', `${-y * 6}deg`);
    });

    stage.addEventListener('mouseleave', () => {
      stack.style.setProperty('--tilt-y', '0deg');
      stack.style.setProperty('--tilt-x', '0deg');
    });
  }
}

/* ==========================================================================
   7. Instagram Collaboration Reels Single-Line Carousel & Theatre Mode
   ========================================================================== */
// ==========================================================================
// Minimalist Instagram Reels & Live Graph API Integration
// ==========================================================================
window.KAAZOS_INSTAGRAM_CONFIG = {
  username: "kaazos_food",
  accessToken: "", // Optional Meta User Access Token
  // Option A: Free Feed Proxy / Webhook Endpoint
  // Automatically loads local/hosted proxy (0ms latency, zero CORS issues, 100% uptime)
  apiUrl: "api/instagram-reels.json",
  enabled: true
};

async function fetchLiveInstagramReels() {
  const config = window.KAAZOS_INSTAGRAM_CONFIG || {};
  if (!config.enabled) return null;

  const endpoint = config.apiUrl || (config.accessToken
    ? "https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=" + encodeURIComponent(config.accessToken)
    : null);

  if (!endpoint) return null;

  try {
    const res = await fetch(endpoint, { cache: "no-store" });
    if (!res.ok) throw new Error("HTTP " + res.status);
    const data = await res.json();
    const items = data.data || data.reels || data;
    if (Array.isArray(items) && items.length > 0) {
      return items.filter(item => item.media_url || item.video_url || item.mediaUrl);
    }
  } catch (err) {
    console.info("Live Instagram API not connected or offline; using curated creator reels.", err);
  }
  return null;
}

function renderMinimalReelCard(reel) {
  const videoSrc = reel.media_url || reel.mediaUrl || reel.video_url;
  const posterSrc = reel.thumbnail_url || reel.thumbnailUrl || reel.poster || "";
  const caption = reel.caption || reel.text || "Fresh bites, real reactions, and street-style energy straight from Indiranagar.";
  const cleanCaption = caption.split("#")[0].trim().replace(/\n+/g, " ");

  let rawUser = reel.username || (reel.creator_name ? reel.creator_name.toLowerCase().replace(/\s+/g, "_") : "kaazos_food");
  if (!rawUser.startsWith("@")) rawUser = "@" + rawUser;

  const creatorRole = reel.creator_role || "Food & Lifestyle Creator";
  const permalink = reel.permalink || reel.reel_url || `https://www.instagram.com/${rawUser.replace("@", "")}/`;

  const card = document.createElement("div");
  card.className = "reel-card";
  card.setAttribute("data-video-src", videoSrc);
  card.setAttribute("data-creator", rawUser);
  card.setAttribute("data-role", creatorRole);
  card.setAttribute("data-hook", cleanCaption);
  card.setAttribute("data-ig-url", permalink);

  card.innerHTML = `
    <div class="reel-media-wrap">
      <video class="reel-video" src="${videoSrc}" poster="${posterSrc}" playsinline muted loop preload="metadata"></video>
      <button class="reel-sound-btn" aria-label="Toggle Sound" title="Click to Unmute / Mute">
        <svg class="icon-muted" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>
        <svg class="icon-unmuted" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>
      </button>
      <div class="reel-center-play-indicator">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 4 20 12 6 20 6 4"></polygon></svg>
      </div>
    </div>
    <p class="mrc-quote reel-quote">"${cleanCaption}"</p>
    <div class="mrc-author-line reel-author-line">
      <a href="${permalink}" target="_blank" rel="noopener" class="mrc-author-name reel-author-name">${rawUser}</a>
      <span class="mrc-author-sep">·</span>
      <span class="mrc-author-tag">${creatorRole}</span>
    </div>
  `;
  return card;
}

function initReelsCarousel() {
  const viewport = document.getElementById("reelsCarouselViewport");
  const track = document.getElementById("reelsCarouselTrack");
  if (!viewport || !track) return;

  const modal = document.getElementById("reelTheatreModal");
  const theatreVideo = document.getElementById("theatreVideo");
  const theatreHandle = document.getElementById("theatreHandle");
  const theatreRole = document.getElementById("theatreRole");
  const theatreHook = document.getElementById("theatreHook");
  const theatreInitial = document.getElementById("theatreInitial");
  const theatreIgLink = document.getElementById("theatreIgLink");
  const theatreCloseBtn = document.getElementById("theatreCloseBtn");
  const theatreBackdrop = document.getElementById("theatreBackdrop");

  let animationFrameId = null;
  let resumeTimer = null;
  let videoObserver = null;
  let allVideos = [];
  let isScrollPaused = false;

  function pauseScroll() {
    isScrollPaused = true;
    if (resumeTimer) clearTimeout(resumeTimer);
  }

  function resumeScrollAfterDelay(delay = 1000) {
    if (resumeTimer) clearTimeout(resumeTimer);
    resumeTimer = setTimeout(() => {
      isScrollPaused = false;
    }, delay);
  }

  function openTheatreMode(card) {
    if (!modal || !theatreVideo) return;

    const videoSrc = card.getAttribute("data-video-src");
    const creator = card.getAttribute("data-creator") || "@kaazos_food";
    const role = card.getAttribute("data-role") || "Creator Collaboration";
    const hook = card.getAttribute("data-hook") || "";
    const igUrl = card.getAttribute("data-ig-url") || "https://www.instagram.com/kaazos_food/";
    const cardVideo = card.querySelector(".reel-video");

    // Pause all carousel track videos while watching theatre mode
    allVideos.forEach(v => v.pause());
    pauseScroll();

    // Populate Modal Info
    if (theatreHandle) theatreHandle.textContent = creator;
    if (theatreRole) theatreRole.textContent = role;
    if (theatreHook) theatreHook.textContent = hook;
    if (theatreInitial) {
      const clean = creator.replace("@", "").trim();
      theatreInitial.textContent = clean.length > 0 ? clean[0].toUpperCase() : "K";
    }
    if (theatreIgLink) theatreIgLink.href = igUrl;

    theatreVideo.src = videoSrc;
    theatreVideo.currentTime = cardVideo ? cardVideo.currentTime : 0;
    theatreVideo.muted = false;

    modal.classList.add("is-active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    theatreVideo.play().catch(() => {
      theatreVideo.muted = true;
      theatreVideo.play().catch(() => { });
    });
  }

  function closeTheatreMode() {
    if (!modal || !theatreVideo) return;

    theatreVideo.pause();
    theatreVideo.src = "";
    modal.classList.remove("is-active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    allVideos.forEach(v => {
      v.muted = true;
      v.play().catch(() => { });
    });

    resumeScrollAfterDelay(1000);
  }

  function setupTrackAndLoop() {
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
    if (resumeTimer) clearTimeout(resumeTimer);
    if (videoObserver) videoObserver.disconnect();

    // Remove any previously cloned cards
    track.querySelectorAll(".reel-card.is-clone").forEach(c => c.remove());

    const originalCards = Array.from(track.querySelectorAll(".reel-card"));
    if (originalCards.length === 0) return;

    // Clone cards once to create seamless infinite marquee track
    originalCards.forEach(card => {
      const clone = card.cloneNode(true);
      clone.classList.add("is-clone");
      track.appendChild(clone);
    });

    const allCards = Array.from(track.querySelectorAll(".reel-card"));
    allVideos = Array.from(track.querySelectorAll(".reel-video"));

    allVideos.forEach(v => {
      v.muted = true;
      v.playsInline = true;
      v.loop = true;
    });

    let isDragging = false;
    let startX = 0;
    let startScrollLeft = 0;
    let currentScroll = viewport.scrollLeft || 0;

    const SCROLL_SPEED = 1.8; // Smooth, editorial scroll velocity

    function autoScroll() {
      if (!isScrollPaused && !isDragging) {
        currentScroll += SCROLL_SPEED;
        const halfWidth = track.scrollWidth / 2;
        if (halfWidth > 50 && currentScroll >= halfWidth) {
          currentScroll -= halfWidth;
        }
        viewport.scrollLeft = currentScroll;
      } else {
        currentScroll = viewport.scrollLeft;
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    }

    animationFrameId = requestAnimationFrame(autoScroll);

    viewport.addEventListener("scroll", () => {
      if (isScrollPaused || isDragging) {
        currentScroll = viewport.scrollLeft;
      }
    }, { passive: true });

    viewport.addEventListener("mouseenter", pauseScroll);
    viewport.addEventListener("mouseleave", () => resumeScrollAfterDelay(600));

    allCards.forEach(card => {
      card.addEventListener("mouseenter", pauseScroll);
      card.addEventListener("mouseleave", () => resumeScrollAfterDelay(500));
    });

    // Mouse Drag to Scroll
    viewport.addEventListener("mousedown", (e) => {
      if (e.target.closest("button") || e.target.closest("a")) return;
      isDragging = true;
      pauseScroll();
      startX = e.pageX - viewport.offsetLeft;
      startScrollLeft = viewport.scrollLeft;
    });

    window.addEventListener("mouseup", () => {
      if (isDragging) {
        isDragging = false;
        resumeScrollAfterDelay(1200);
      }
    });

    viewport.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - viewport.offsetLeft;
      const walk = (x - startX) * 1.35;
      viewport.scrollLeft = startScrollLeft - walk;

      const halfWidth = track.scrollWidth / 2;
      if (viewport.scrollLeft >= halfWidth) {
        viewport.scrollLeft -= halfWidth;
        startScrollLeft -= halfWidth;
      } else if (viewport.scrollLeft <= 0) {
        viewport.scrollLeft += halfWidth;
        startScrollLeft += halfWidth;
      }
    });

    viewport.addEventListener("touchstart", pauseScroll, { passive: true });
    viewport.addEventListener("touchend", () => resumeScrollAfterDelay(1500), { passive: true });

    // Video Playback Observer (Plays video when in view)
    videoObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const video = entry.target.querySelector(".reel-video");
        if (!video) return;
        if (entry.isIntersecting) {
          const playPromise = video.play();
          if (playPromise !== undefined) {
            playPromise.catch(() => {
              video.muted = true;
              video.play().catch(() => { });
            });
          }
        } else {
          video.pause();
        }
      });
    }, {
      root: viewport,
      threshold: 0.2
    });

    allCards.forEach(card => videoObserver.observe(card));

    // Audio Toggle: Mute / Unmute
    allCards.forEach(card => {
      const soundBtn = card.querySelector(".reel-sound-btn");
      const video = card.querySelector(".reel-video");
      if (!soundBtn || !video) return;

      soundBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        e.preventDefault();

        const currentlyMuted = video.muted;
        if (currentlyMuted) {
          allVideos.forEach(v => { v.muted = true; });
          track.querySelectorAll(".reel-sound-btn").forEach(btn => btn.classList.remove("is-unmuted"));
          video.muted = false;
          soundBtn.classList.add("is-unmuted");
          video.play().catch(() => { });
        } else {
          video.muted = true;
          soundBtn.classList.remove("is-unmuted");
        }
      });
    });

    // Card click opens theatre mode
    allCards.forEach(card => {
      card.addEventListener("click", (e) => {
        if (e.target.closest(".reel-sound-btn") || e.target.closest("a")) return;
        openTheatreMode(card);
      });
    });
  }

  // Setup modal close listeners
  if (theatreCloseBtn) theatreCloseBtn.addEventListener("click", closeTheatreMode);
  if (theatreBackdrop) theatreBackdrop.addEventListener("click", closeTheatreMode);
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && modal.classList.contains("is-active")) {
      closeTheatreMode();
    }
  });

  // Initial setup with pre-rendered curated creator reels
  setupTrackAndLoop();

  // Asynchronously attempt to fetch live Instagram reels if API/proxy configured
  fetchLiveInstagramReels().then(liveReels => {
    if (liveReels && liveReels.length >= 3) {
      track.innerHTML = "";
      liveReels.slice(0, 10).forEach(r => {
        track.appendChild(renderMinimalReelCard(r));
      });
      setupTrackAndLoop();
      console.log("[Kaazos Instagram] Live Instagram Reels loaded successfully:", liveReels.length, "items.");
    }
  });
}

/* ==========================================================================
/* ==========================================================================
   8. Minimalist Testimonials & Live Google Reviews Integration
   ========================================================================== */
window.KAAZOS_GOOGLE_REVIEWS_CONFIG = {
  // Kaazos Google Place ID on Google Maps
  placeId: 'ChIJG3xHXPkXrj4R-1GN8ukQO_A',
  // Optional Google Places API Key
  apiKey: '',
  // Optional backend proxy URL to bypass browser CORS if desired (e.g. '/api/google-reviews')
  proxyUrl: '',
};

function renderMinimalReviewCard(review) {
  const author = review.author_name || review.author || 'Kaazos Patron';
  const tag = review.tag || review.relative_time_description || 'verified diner';
  const text = (review.text || review.quote || '').trim().replace(/^["“]|["”]$/g, '');
  const starsCount = Math.min(5, Math.max(1, review.rating || 5));

  const starSvg = `<svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
  const starsHtml = Array(starsCount).fill(starSvg).join('');

  return `
    <div class="google-review-card">
      <div class="mrc-stars" aria-label="${starsCount} out of 5 stars">
        ${starsHtml}
      </div>
      <p class="mrc-quote">"${text}"</p>
      <div class="mrc-author-line">
        <span class="mrc-author-name">${author}</span>
        <span class="mrc-author-sep">·</span>
        <span class="mrc-author-tag">${tag}</span>
      </div>
    </div>
  `;
}

async function fetchLiveGoogleReviews() {
  const config = window.KAAZOS_GOOGLE_REVIEWS_CONFIG;
  if (!config) return null;

  let url = '';
  if (config.proxyUrl) {
    url = config.proxyUrl;
  } else if (config.apiKey && config.placeId) {
    url = `https://places.googleapis.com/v1/places/${config.placeId}?fields=displayName,rating,userRatingCount,reviews&key=${config.apiKey}`;
  } else {
    return null;
  }

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Google API returned ${res.status}`);
    const data = await res.json();
    let list = [];
    if (data.reviews && Array.isArray(data.reviews)) {
      list = data.reviews.map(r => ({
        author_name: r.authorAttribution?.displayName || r.author_name || 'Verified Regular',
        text: r.text?.text || r.originalText?.text || r.text || '',
        rating: r.rating || 5,
        tag: r.relativePublishTimeDescription || r.relative_time_description || 'Google Review'
      }));
    } else if (data.result && data.result.reviews) {
      list = data.result.reviews.map(r => ({
        author_name: r.author_name || 'Verified Regular',
        text: r.text || '',
        rating: r.rating || 5,
        tag: r.relative_time_description || 'Google Review'
      }));
    }
    return list.length > 0 ? list : null;
  } catch (err) {
    console.warn('[Kaazos Reviews] Live Google API notice:', err.message, '— Showing verified Kaazos reviews.');
    return null;
  }
}

function initGoogleReviewsCarousel() {
  const viewport = document.getElementById('reviewsCarouselViewport');
  const track = document.getElementById('reviewsCarouselTrack');
  if (!viewport || !track) return;

  let animationFrameId = null;
  let resumeTimer = null;

  function setupTrackAndLoop() {
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
    if (resumeTimer) clearTimeout(resumeTimer);

    // Remove any previously cloned cards
    track.querySelectorAll('.google-review-card.is-clone').forEach(c => c.remove());

    const originalCards = Array.from(track.querySelectorAll('.google-review-card'));
    if (originalCards.length === 0) return;

    // Clone cards once to create seamless infinite marquee track
    originalCards.forEach(card => {
      const clone = card.cloneNode(true);
      clone.classList.add('is-clone');
      track.appendChild(clone);
    });

    const allCards = Array.from(track.querySelectorAll('.google-review-card'));

    // Track & Viewport State
    let isPaused = false;
    let isDragging = false;
    let startX = 0;
    let startScrollLeft = 0;
    let currentScroll = viewport.scrollLeft || 0;

    const SCROLL_SPEED = 1.35;

    function autoScroll() {
      if (!isPaused && !isDragging) {
        currentScroll += SCROLL_SPEED;
        const halfWidth = track.scrollWidth / 2;
        if (halfWidth > 50 && currentScroll >= halfWidth) {
          currentScroll -= halfWidth;
        }
        viewport.scrollLeft = currentScroll;
      } else {
        currentScroll = viewport.scrollLeft;
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    }

    animationFrameId = requestAnimationFrame(autoScroll);

    function pauseScroll() {
      isPaused = true;
      if (resumeTimer) clearTimeout(resumeTimer);
    }

    function resumeScrollAfterDelay(delay = 1000) {
      if (resumeTimer) clearTimeout(resumeTimer);
      resumeTimer = setTimeout(() => {
        currentScroll = viewport.scrollLeft;
        isPaused = false;
      }, delay);
    }

    viewport.addEventListener('mouseenter', pauseScroll);
    viewport.addEventListener('mouseleave', () => resumeScrollAfterDelay(600));

    allCards.forEach(card => {
      card.addEventListener('mouseenter', pauseScroll);
      card.addEventListener('mouseleave', () => resumeScrollAfterDelay(500));
    });

    // Mouse Drag to Scroll
    viewport.addEventListener('mousedown', (e) => {
      if (e.target.closest('button') || e.target.closest('a')) return;
      isDragging = true;
      pauseScroll();
      startX = e.pageX - viewport.offsetLeft;
      startScrollLeft = viewport.scrollLeft;
    });

    window.addEventListener('mouseup', () => {
      if (isDragging) {
        isDragging = false;
        resumeScrollAfterDelay(1200);
      }
    });

    viewport.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - viewport.offsetLeft;
      const walk = (x - startX) * 1.35;
      viewport.scrollLeft = startScrollLeft - walk;

      const halfWidth = track.scrollWidth / 2;
      if (viewport.scrollLeft >= halfWidth) {
        viewport.scrollLeft -= halfWidth;
        startScrollLeft -= halfWidth;
      } else if (viewport.scrollLeft <= 0) {
        viewport.scrollLeft += halfWidth;
        startScrollLeft += halfWidth;
      }
    });

    viewport.addEventListener('touchstart', pauseScroll, { passive: true });
    viewport.addEventListener('touchend', () => resumeScrollAfterDelay(1500), { passive: true });
  }

  // Initial setup with pre-rendered cards
  setupTrackAndLoop();

  // Asynchronously attempt to fetch live Google Reviews
  fetchLiveGoogleReviews().then(liveReviews => {
    if (liveReviews && liveReviews.length >= 3) {
      track.innerHTML = liveReviews.map(r => renderMinimalReviewCard(r)).join('');
      setupTrackAndLoop();
      console.log('[Kaazos Reviews] Live Google Reviews loaded successfully:', liveReviews.length, 'reviews.');
    }
  });
}

/* ==========================================================================
   Hero Parallax & 3D Interactive Scroll Animation ("Zoom & Swimming Out")
   ========================================================================== */
function initHeroParallaxScroll() {
  const heroSection = document.querySelector('.luxury-editorial-hero');
  if (!heroSection) return;

  const bowlWrapper = heroSection.querySelector('.hero-bowl-wrapper');
  const halo = heroSection.querySelector('.hero-bowl-halo');
  const bowlShadow = heroSection.querySelector('.hero-bowl-shadow');
  const heroText = heroSection.querySelector('.hero-text-side');
  const chipProtein = heroSection.querySelector('.chip-protein');
  const chipFresh = heroSection.querySelector('.chip-fresh');
  const chipRating = heroSection.querySelector('.chip-rating');

  const contours = heroSection.querySelector('.hero-decor-contours');
  const stamp = heroSection.querySelector('.hero-stamp-watermark');
  const decorAvocado = heroSection.querySelector('.decor-avocado');
  const decorChili = heroSection.querySelector('.decor-chili');
  const decorLime = heroSection.querySelector('.decor-lime');
  const lifestyleImg = heroSection.querySelector('.hero-lifestyle-img');

  if (!bowlWrapper) return;

  // State variables for smooth interpolation
  let currentScrollProgress = 0;
  let targetScrollProgress = 0;

  let currentMouseX = 0;
  let currentMouseY = 0;
  let targetMouseX = 0;
  let targetMouseY = 0;

  // Check prefers-reduced-motion
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  // Track Mouse Movement over Hero Section for 3D Perspective Tracking
  heroSection.addEventListener('mousemove', (e) => {
    const rect = heroSection.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    // Normalized between -1 and 1
    targetMouseX = Math.max(-1, Math.min(1, (e.clientX - centerX) / (rect.width / 2)));
    targetMouseY = Math.max(-1, Math.min(1, (e.clientY - centerY) / (rect.height / 2)));
  }, { passive: true });

  heroSection.addEventListener('mouseleave', () => {
    targetMouseX = 0;
    targetMouseY = 0;
  }, { passive: true });

  // Update scroll target progress
  function onScroll() {
    const rect = heroSection.getBoundingClientRect();
    const heroHeight = heroSection.offsetHeight || 700;

    // Scrolled distance from top of hero
    const scrolled = Math.max(0, -rect.top);
    targetScrollProgress = Math.min(1, Math.max(0, scrolled / (heroHeight * 0.82)));
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Animation Loop using RAF with smooth lerp
  function tick(now) {
    // Smooth lerp for scroll progress
    currentScrollProgress += (targetScrollProgress - currentScrollProgress) * 0.12;

    // Smooth lerp for mouse coordinates
    currentMouseX += (targetMouseX - currentMouseX) * 0.08;
    currentMouseY += (targetMouseY - currentMouseY) * 0.08;

    const p = currentScrollProgress;

    // Enhanced harmonic levitation physics (deep breathing & subtle 3D air roll)
    const floatY = Math.sin(now * 0.0016) * 11;
    const floatTiltX = Math.sin(now * 0.0012) * 2.2;
    const floatRot = Math.cos(now * 0.0014) * 1.5;

    // 0. Hero Background Photo: Parallax subtle zoom and swimming movement
    if (lifestyleImg) {
      const bgScale = 1.02 + (p * 0.12);
      const bgTx = (currentMouseX * 10) + (Math.sin(now * 0.0008) * 3);
      const bgTy = (p * 45) + (currentMouseY * 8) + (Math.cos(now * 0.0008) * 3);
      lifestyleImg.style.setProperty('--bg-scale', `${bgScale.toFixed(3)}`);
      lifestyleImg.style.setProperty('--bg-tx', `${bgTx.toFixed(2)}px`);
      lifestyleImg.style.setProperty('--bg-ty', `${bgTy.toFixed(2)}px`);
    }

    // 1. Hero Bowl: Smooth cinematic zoom-in (1.0 -> 1.22) + 3D tilt with mouse & scroll
    const bowlScale = 1.0 + (p * 0.22);
    const bowlTx = currentMouseX * 12;
    const bowlTy = (p * 65) + (currentMouseY * 10) + floatY;
    const bowlRotX = (currentMouseY * -12) + (p * 10) + floatTiltX;
    const bowlRotY = (currentMouseX * 14) + (p * -4);
    const bowlRotZ = floatRot + (p * -2.5);

    bowlWrapper.style.setProperty('--hero-tx', `${bowlTx.toFixed(2)}px`);
    bowlWrapper.style.setProperty('--hero-ty', `${bowlTy.toFixed(2)}px`);
    bowlWrapper.style.setProperty('--hero-scale', `${bowlScale.toFixed(3)}`);
    bowlWrapper.style.setProperty('--hero-rotx', `${bowlRotX.toFixed(2)}deg`);
    bowlWrapper.style.setProperty('--hero-roty', `${bowlRotY.toFixed(2)}deg`);
    bowlWrapper.style.setProperty('--hero-rotz', `${bowlRotZ.toFixed(2)}deg`);

    // 1b. Levitating Ground Shadow: Reacts optically to height above surface
    if (bowlShadow) {
      const heightFactor = floatY / 11; // -1 to 1
      const shadowScale = (1.0 - (heightFactor * 0.12)) * (1.0 - p * 0.35);
      const shadowBlur = 16 - (heightFactor * 5);
      const shadowOp = Math.max(0, (0.75 - (heightFactor * 0.15)) * (1.0 - p * 0.65));
      bowlShadow.style.setProperty('--shadow-scale', `${shadowScale.toFixed(3)}`);
      bowlShadow.style.setProperty('--shadow-blur', `${shadowBlur.toFixed(1)}px`);
      bowlShadow.style.setProperty('--shadow-op', `${shadowOp.toFixed(2)}`);
    }

    // 2. Halo Glow: Expands and intensifies with bowl zoom
    if (halo) {
      const haloScale = 1.0 + (p * 0.48);
      const haloOpacity = Math.max(0, (0.85 + (p * 0.25)) * (1 - p * 0.65));
      halo.style.setProperty('--halo-scale', `${haloScale.toFixed(3)}`);
      halo.style.setProperty('--halo-opacity', `${haloOpacity.toFixed(2)}`);
    }

    // 3. Floating Feature Chips: "Swim Outward" dynamically into 3D space
    if (chipProtein) {
      const ptX = (-p * 95) + (currentMouseX * -18);
      const ptY = (-p * 110) + (currentMouseY * -16) + (Math.sin(now * 0.002) * 5);
      const ptScale = 1.0 + (p * 0.12);
      const ptRot = (-p * 8) + (floatRot * 1.5);
      const ptOp = Math.max(0, 1 - (p * 1.35));
      chipProtein.style.setProperty('--chip-tx', `${ptX.toFixed(2)}px`);
      chipProtein.style.setProperty('--chip-ty', `${ptY.toFixed(2)}px`);
      chipProtein.style.setProperty('--chip-scale', `${ptScale.toFixed(3)}`);
      chipProtein.style.setProperty('--chip-rot', `${ptRot.toFixed(2)}deg`);
      chipProtein.style.setProperty('--chip-op', `${ptOp.toFixed(2)}`);
    }

    if (chipFresh) {
      const frX = (-p * 85) + (currentMouseX * -16);
      const frY = (p * 105) + (currentMouseY * -14) + (Math.cos(now * 0.0018 + 1) * 5);
      const frScale = 1.0 + (p * 0.1);
      const frRot = (p * 6) - (floatRot * 1.2);
      const frOp = Math.max(0, 1 - (p * 1.35));
      chipFresh.style.setProperty('--chip-tx', `${frX.toFixed(2)}px`);
      chipFresh.style.setProperty('--chip-ty', `${frY.toFixed(2)}px`);
      chipFresh.style.setProperty('--chip-scale', `${frScale.toFixed(3)}`);
      chipFresh.style.setProperty('--chip-rot', `${frRot.toFixed(2)}deg`);
      chipFresh.style.setProperty('--chip-op', `${frOp.toFixed(2)}`);
    }

    if (chipRating) {
      const rtX = (p * 105) + (currentMouseX * -20);
      const rtY = (-p * 95) + (currentMouseY * -16) + (Math.sin(now * 0.0022 + 2) * 5);
      const rtScale = 1.0 + (p * 0.14);
      const rtRot = (p * 9) + (floatRot * 1.6);
      const rtOp = Math.max(0, 1 - (p * 1.35));
      chipRating.style.setProperty('--chip-tx', `${rtX.toFixed(2)}px`);
      chipRating.style.setProperty('--chip-ty', `${rtY.toFixed(2)}px`);
      chipRating.style.setProperty('--chip-scale', `${rtScale.toFixed(3)}`);
      chipRating.style.setProperty('--chip-rot', `${rtRot.toFixed(2)}deg`);
      chipRating.style.setProperty('--chip-op', `${rtOp.toFixed(2)}`);
    }

    // 4. Hero Text Side: subtle upward parallax float & fade
    if (heroText) {
      const textTy = -p * 45;
      const textOp = Math.max(0, 1 - (p * 1.15));
      heroText.style.setProperty('--hero-text-ty', `${textTy.toFixed(2)}px`);
      heroText.style.setProperty('--hero-text-op', `${textOp.toFixed(2)}`);
    }

    // 5. Background Craft Motifs (Contours, Stamp, Botanicals)
    if (contours) {
      const contourTy = p * 30 + (currentMouseY * 8);
      contours.style.setProperty('--decor-contours-ty', `${contourTy.toFixed(2)}px`);
    }
    if (stamp) {
      const stampTy = -p * 22 + (currentMouseY * -6);
      stamp.style.setProperty('--decor-stamp-ty', `${stampTy.toFixed(2)}px`);
    }
    if (decorAvocado) {
      const avoTx = (-p * 35) + (currentMouseX * -10);
      const avoTy = (p * 45) + (currentMouseY * -10);
      decorAvocado.style.setProperty('--decor-avo-tx', `${avoTx.toFixed(2)}px`);
      decorAvocado.style.setProperty('--decor-avo-ty', `${avoTy.toFixed(2)}px`);
    }
    if (decorChili) {
      const chTx = (p * 40) + (currentMouseX * -12);
      const chTy = (-p * 30) + (currentMouseY * -8);
      decorChili.style.setProperty('--decor-chili-tx', `${chTx.toFixed(2)}px`);
      decorChili.style.setProperty('--decor-chili-ty', `${chTy.toFixed(2)}px`);
    }
    if (decorLime) {
      const lmTx = (-p * 30) + (currentMouseX * -8);
      const lmTy = (-p * 25) + (currentMouseY * -8);
      decorLime.style.setProperty('--decor-lime-tx', `${lmTx.toFixed(2)}px`);
      decorLime.style.setProperty('--decor-lime-ty', `${lmTy.toFixed(2)}px`);
    }

    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

/* ==========================================================================
   EXPANDABLE WALLET-STACK FLOATING DOCK CONTROLLER
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('floatDockToggle');
  const dock = document.getElementById('floatingDock') || document.querySelector('.floating-social-dock');
  const backdrop = document.getElementById('dockBackdrop');
  if (!toggle || !dock) return;

  let openScrollY = 0;

  // Auto-close when moving cursor far away from the dock (> 240px)
  function onMouseMoveAway(e) {
    if (!dock.classList.contains('is-open')) return;
    const rect = dock.getBoundingClientRect();
    const dx = Math.max(rect.left - e.clientX, 0, e.clientX - rect.right);
    const dy = Math.max(rect.top - e.clientY, 0, e.clientY - rect.bottom);
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist > 640) {
      closeDock();
    }
  }

  // Auto-close if user scrolls away on the screen
  function onScrollAway() {
    if (!dock.classList.contains('is-open')) return;
    if (Math.abs(window.scrollY - openScrollY) > 60) {
      closeDock();
    }
  }

  // Auto-close when cursor leaves the browser window
  function onMouseLeaveScreen(e) {
    if (!e.relatedTarget && !e.toElement && dock.classList.contains('is-open')) {
      closeDock();
    }
  }

  // Auto-close when window loses focus (e.g. alt-tab or switching away)
  function onWindowBlur() {
    if (dock.classList.contains('is-open')) {
      closeDock();
    }
  }

  function closeDock() {
    dock.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    if (backdrop) backdrop.classList.remove('is-open');

    // Clean up active listeners
    window.removeEventListener('mousemove', onMouseMoveAway);
    window.removeEventListener('scroll', onScrollAway);
    document.documentElement.removeEventListener('mouseleave', onMouseLeaveScreen);
    window.removeEventListener('blur', onWindowBlur);
  }

  function openDock() {
    dock.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    if (backdrop) backdrop.classList.add('is-open');
    openScrollY = window.scrollY;

    // Attach moving-away detection listeners
    window.addEventListener('mousemove', onMouseMoveAway, { passive: true });
    window.addEventListener('scroll', onScrollAway, { passive: true });
    document.documentElement.addEventListener('mouseleave', onMouseLeaveScreen);
    window.addEventListener('blur', onWindowBlur);
  }

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = dock.classList.contains('is-open');
    if (isOpen) {
      closeDock();
    } else {
      openDock();
    }
  });

  if (backdrop) {
    backdrop.addEventListener('click', closeDock);
  }

  document.addEventListener('click', (e) => {
    if (dock.classList.contains('is-open') && !dock.contains(e.target)) {
      closeDock();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && dock.classList.contains('is-open')) {
      closeDock();
    }
  });

  // Auto-close when clicking any action link
  dock.querySelectorAll('.float-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setTimeout(closeDock, 250);
    });
  });
});

/* ==========================================================================
   OFFICIAL IN-STORE MENU LIGHTBOX & TABS LOGIC
   ========================================================================== */
const MENU_BOARDS = [
  {
    tag: 'Board 01',
    title: 'Custom Bowls & Burrito Wraps',
    desc: 'Pick your base (Brown Rice, Burrito Wrap, Salad Bowl, Nachos Bowl), choose whole-food fillings & high-protein toppings.',
    image: 'assets/images/menu-card-1.jpg'
  },
  {
    tag: 'Board 02',
    title: 'Tacos, Quesadillas & Nachos',
    desc: 'Crispy hard shell & soft flour tacos (Buy Any Taco @ ₹89), golden grilled cheese quesadillas, and loaded Rancho\'s & Haven nachos.',
    image: 'assets/images/menu-card-3.jpg'
  },
  {
    tag: 'Board 03',
    title: 'Crispy Sides, Shakes & Refrescos',
    desc: 'Peri-peri fries, crispy chicken wings & tenders, Belgian dark chocolate shake, Nutella indulgence, and Mexican refrescos.',
    image: 'assets/images/menu-card-2.jpg'
  }
];

let activeLightboxIndex = 0;
let isLightboxZoomed = false;

function openMenuLightbox(index) {
  activeLightboxIndex = (typeof index === 'number' && index >= 0 && index < MENU_BOARDS.length) ? index : 0;
  updateLightboxContent();
  const modal = document.getElementById('menuLightboxModal');
  if (modal) {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
}

function closeMenuLightbox() {
  const modal = document.getElementById('menuLightboxModal');
  if (modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  isLightboxZoomed = false;
  const img = document.getElementById('lightboxImg');
  if (img) img.classList.remove('zoomed');
}

function nextMenuLightbox() {
  activeLightboxIndex = (activeLightboxIndex + 1) % MENU_BOARDS.length;
  updateLightboxContent();
}

function prevMenuLightbox() {
  activeLightboxIndex = (activeLightboxIndex - 1 + MENU_BOARDS.length) % MENU_BOARDS.length;
  updateLightboxContent();
}

function updateLightboxContent() {
  const board = MENU_BOARDS[activeLightboxIndex];
  if (!board) return;
  const imgEl = document.getElementById('lightboxImg');
  if (imgEl) {
    imgEl.src = board.image;
    imgEl.alt = board.title;
  }
}

function toggleLightboxZoom(e) {
  if (e && e.target && (e.target.closest('button') || e.target.closest('a'))) return;
  const img = document.getElementById('lightboxImg');
  if (!img) return;
  isLightboxZoomed = !isLightboxZoomed;
  img.classList.toggle('zoomed', isLightboxZoomed);
}

function initInstoreMenuTabs() {
  const tabBtns = document.querySelectorAll('.instore-tab-btn');
  const cards = document.querySelectorAll('.instore-board-card');
  if (!tabBtns.length || !cards.length) return;

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const targetBoard = btn.getAttribute('data-board');

      cards.forEach(card => {
        if (targetBoard === 'all' || card.getAttribute('data-board') === targetBoard) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
          card.style.opacity = '0';
        }
      });
    });
  });
}

// Global exposure for inline onclick handlers
window.openMenuLightbox = openMenuLightbox;
window.closeMenuLightbox = closeMenuLightbox;
window.nextMenuLightbox = nextMenuLightbox;
window.prevMenuLightbox = prevMenuLightbox;
window.toggleLightboxZoom = toggleLightboxZoom;

// Keyboard listener for Escape & Arrow navigation
window.addEventListener('keydown', (e) => {
  const modal = document.getElementById('menuLightboxModal');
  if (!modal || !modal.classList.contains('active')) return;
  if (e.key === 'Escape') closeMenuLightbox();
  if (e.key === 'ArrowRight') nextMenuLightbox();
  if (e.key === 'ArrowLeft') prevMenuLightbox();
});

/* ==========================================================================
   MARKETING POWER PLAYS: SECRET MENU MODAL & OFFICE LUNCH INTERACTION
   ========================================================================== */
function openSecretMenuModal() {
  const modal = document.getElementById('secretMenuModal');
  if (modal) {
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
}

function closeSecretMenuModal() {
  const modal = document.getElementById('secretMenuModal');
  if (modal) {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
  }
}

const OFFICE_LUNCH_TIERS = {
  10: {
    badge: '10 Person Lunch Pack',
    time: '⚡ 45-Min Scheduled Delivery',
    items: [
      '✓ <strong>10 Signature Bowls / Burritos</strong> (Custom Veg / Non-Veg split)',
      '✓ <strong>2 Large Warm Tortilla Crisp Trays</strong> with fresh Pico de Gallo',
      '✓ <strong>FREE Salsa Bar</strong> (Smoky Chipotle, Salsa Verde & Habanero Dips)',
      '✓ <strong>100% Eco-Friendly Cutlery & Thermal Box Packaging</strong>'
    ],
    perk: '🎁 <strong>Team Perk:</strong> Complimentary Tortilla Crisp Party Box Included!',
    waText: 'Hi Kaazos Kitchen! We want to order an Office Team Lunch for 10 people in Indiranagar.'
  },
  20: {
    badge: '20 Person Team Feast',
    time: '⚡ Scheduled Hot Delivery',
    items: [
      '✓ <strong>20 Signature Bowls / Burritos / Tacos</strong> (Custom diet split)',
      '✓ <strong>4 Large Tortilla Crisp & Nacho Trays</strong> with melted queso',
      '✓ <strong>FREE 2L Fresh Watermelon Agua Fresca</strong> for the team',
      '✓ <strong>Full House Salsa Bar & Hot Queso Dips</strong>'
    ],
    perk: '🎁 <strong>Team Perk:</strong> Free 2 Litres of Fresh Watermelon Agua Fresca!',
    waText: 'Hi Kaazos Kitchen! We want to order an Office Team Lunch for 20 people in Indiranagar.'
  },
  35: {
    badge: '35 Person Floor Spread',
    time: '⚡ Priority Kitchen Slot',
    items: [
      '✓ <strong>35 Signature Handcrafted Bowls, Wraps & Tacos</strong>',
      '✓ <strong>Unlimited Fresh Guacamole & Warm Tortilla Bar</strong>',
      '✓ <strong>Churros Box & Agua Frescas for the entire floor</strong>',
      '✓ <strong>Dedicated Kitchen Coordinator & GST Invoicing</strong>'
    ],
    perk: '🎁 <strong>Team Perk:</strong> 10% Corporate Group Discount + Free Churros Box!',
    waText: 'Hi Kaazos Kitchen! We want to book an Office Team Lunch for 35 people in Indiranagar.'
  },
  50: {
    badge: '50+ All-Hands & Startup Event',
    time: '⚡ Custom Kitchen Batch',
    items: [
      '✓ <strong>50+ Custom Bowls, Street Tacos & Loaded Nachos</strong>',
      '✓ <strong>Full Live DIY Taco & Salsa Station Setup Available</strong>',
      '✓ <strong>Assorted Coolers, Cold Brew Shakes & Desserts</strong>',
      '✓ <strong>Dedicated Catering Delivery Lead & Corporate Invoicing</strong>'
    ],
    perk: '🎁 <strong>Team Perk:</strong> 15% VIP Corporate Discount + Free Dessert Crate!',
    waText: 'Hi Kaazos Kitchen! We want to book a 50+ person all-hands office feast in Indiranagar.'
  }
};

function selectOfficeLunchTier(tier) {
  const data = OFFICE_LUNCH_TIERS[tier] || OFFICE_LUNCH_TIERS[10];
  
  // Update active button
  document.querySelectorAll('.tss-btn').forEach(btn => {
    btn.classList.toggle('active', parseInt(btn.getAttribute('data-tier'), 10) === tier);
  });

  // Update content
  const badgeEl = document.getElementById('otcBadge');
  const timeEl = document.querySelector('.otc-time');
  const listEl = document.getElementById('otcList');
  const perkEl = document.getElementById('otcPerk');
  const waBtn = document.getElementById('officeWaBtn');

  if (badgeEl) badgeEl.innerText = data.badge;
  if (timeEl) timeEl.innerText = data.time;
  if (listEl) {
    listEl.innerHTML = data.items.map(item => `<li>${item}</li>`).join('');
  }
  if (perkEl) perkEl.innerHTML = data.perk;
  if (waBtn) {
    waBtn.href = `https://wa.me/919876543210?text=${encodeURIComponent(data.waText)}`;
  }
}

// Global exposure
window.openSecretMenuModal = openSecretMenuModal;
window.closeSecretMenuModal = closeSecretMenuModal;
window.selectOfficeLunchTier = selectOfficeLunchTier;

// Listen for Escape key on secret menu
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeSecretMenuModal();
  }
});



