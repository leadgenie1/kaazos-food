/**
 * KAAZOS CULINARY BRAND - Professional Marketing Engine
 * Zero Bloat • Zero Emojis • Fast Loading on Low-End Devices
 */

// Top 6 Curated Kaazos Signature Dishes (Strictly: Rice bowl, Salad bowl, Fruit bowl, Quesadillas, Smoothie, Pressed juice)
const MENU_DATA = [
  {
    id: 'signature-rice-bowl',
    name: 'Chatpata Chicken Bowl (Regular)',
    dishType: 'Rice bowl',
    category: 'nonveg',
    isVeg: false,
    calories: 520,
    protein: '38g',
    carbs: '64g',
    fat: '14g',
    desc: 'Flame-grilled marinated chicken over steamed cilantro-lime rice, slow-simmered black beans, charred corn salsa, and house guacamole.',
    image: 'assets/images/chatpata-chicken-bowl-regular.jpg'
  },
  {
    id: 'signature-salad-bowl',
    name: 'Fajita Veg Bowl (Regular)',
    dishType: 'Salad bowl',
    category: 'veg',
    isVeg: true,
    calories: 340,
    protein: '16g',
    carbs: '24g',
    fat: '12g',
    desc: 'Triple-washed crisp farm greens tossed with charred fajita bell peppers, ripe cherry tomatoes, sweet corn, tender black beans, and house citrus dressing.',
    image: 'assets/images/fajita-veg-bowl-regular.jpg'
  },
  {
    id: 'signature-fruit-bowl',
    name: 'Apple & Banana Breakfast Oatmeal',
    dishType: 'Fruit bowl',
    category: 'veg',
    isVeg: true,
    calories: 310,
    protein: '9g',
    carbs: '54g',
    fat: '7g',
    desc: 'Crisp fresh apple slices and ripe bananas paired with roasted pumpkin seeds, chia seeds, and slow-rolled toasted oats over a chilled grain base.',
    image: 'assets/images/morning-breakfast-apple-banana-oatmeal.jpg'
  },
  {
    id: 'signature-quesadillas',
    name: 'Desi Mex Chicken Quesadilla',
    dishType: 'Quesadillas',
    category: 'nonveg',
    isVeg: false,
    calories: 540,
    protein: '28g',
    carbs: '46g',
    fat: '22g',
    desc: 'Crisp griddled flour tortilla stuffed with spiced chicken, melted Monterey Jack & cheddar cheese blend, and paired with house dips.',
    image: 'assets/images/desi-mex-chicken-quesadilla.jpg'
  },
  {
    id: 'signature-smoothie',
    name: 'Berry Boost Smoothie',
    dishType: 'Smoothie',
    category: 'veg',
    isVeg: true,
    calories: 230,
    protein: '7g',
    carbs: '42g',
    fat: '3g',
    desc: 'Wild berries blended slow with chilled milk and whole natural fruit. Velvety, antioxidant-rich, and crafted with zero refined sugars.',
    image: 'assets/images/berry-boost-smoothie.jpg'
  },
  {
    id: 'signature-pressed-juice',
    name: 'Fresh Lemonade Cooler',
    dishType: 'Pressed juice',
    category: 'veg',
    isVeg: true,
    calories: 120,
    protein: '2g',
    carbs: '26g',
    fat: '0.5g',
    desc: '100% pure freshly squeezed lemon juice infused with crushed garden mint leaves and Persian lime. Zero preservatives or added sugar.',
    image: 'assets/images/fresh-lemonade-cooler.jpg'
  }
];

// ==========================================================================
// Stuff'd Style Comprehensive Nutritional In-Take Dataset
// ==========================================================================
const STUFFD_NUTRITION_DATA = {
  bowl_reg: {
    name: 'Rice Bowl (Regular)',
    icon: '🍚',
    sections: [
      {
        title: 'Base Grains (Select One)',
        type: 'single',
        items: [
          { id: 'bwr_rice_cilantro', name: 'Cilantro Lime Basmati Rice', cal: 210.0, fat: 2.8, satFat: 0.5, sodium: 240.0, carbs: 42.0, protein: 4.2, fiber: 1.8, sugars: 0.4, default: true, icon: '🍚' },
          { id: 'bwr_rice_brown', name: 'Whole Brown Grain Rice & Quinoa', cal: 196.5, fat: 2.5, satFat: 0.4, sodium: 160.0, carbs: 38.0, protein: 5.5, fiber: 4.2, sugars: 0.5, default: false, icon: '🌾' },
          { id: 'bwr_rice_half_greens', name: 'Half Rice & Crisp Salad Greens', cal: 119.4, fat: 1.8, satFat: 0.3, sodium: 130.0, carbs: 23.0, protein: 2.8, fiber: 2.4, sugars: 1.1, default: false, icon: '🥗' }
        ]
      },
      {
        title: 'Pick Your Filling (Select One)',
        type: 'single',
        items: [
          { id: 'bwr_fill_chatpata_chk', name: 'Grilled Chatpata Chicken', cal: 189.7, fat: 5.3, satFat: 1.5, sodium: 385.0, carbs: 2.5, protein: 33.0, fiber: 0.5, sugars: 0.8, default: true, icon: '🍗' },
          { id: 'bwr_fill_lowfat_chk', name: 'Low-Fat Chipotle Chicken', cal: 174.9, fat: 3.3, satFat: 0.8, sodium: 360.0, carbs: 1.8, protein: 34.5, fiber: 0.4, sugars: 0.6, default: false, icon: '🍗' },
          { id: 'bwr_fill_peri_chk', name: 'Crispy Peri-Peri Chicken', cal: 224.7, fat: 8.3, satFat: 2.2, sodium: 420.0, carbs: 6.5, protein: 31.0, fiber: 0.6, sugars: 0.9, default: false, icon: '🍗' },
          { id: 'bwr_fill_chipotle_paneer', name: 'Chipotle Paneer', cal: 235.0, fat: 17.0, satFat: 10.0, sodium: 320.0, carbs: 4.0, protein: 16.5, fiber: 0.5, sugars: 1.5, default: false, icon: '🧀' },
          { id: 'bwr_fill_fajita_veg', name: 'Fajita Veggies', cal: 85.0, fat: 3.0, satFat: 0.5, sodium: 190.0, carbs: 12.0, protein: 2.5, fiber: 3.5, sugars: 4.2, default: false, icon: '🫑' },
          { id: 'bwr_fill_mushrooms', name: 'Sautéed Mushrooms', cal: 89.4, fat: 4.6, satFat: 0.8, sodium: 180.0, carbs: 7.5, protein: 4.5, fiber: 2.8, sugars: 2.2, default: false, icon: '🍄' }
        ]
      },
      {
        title: 'Fresh Veggies & Beans (Select Any)',
        type: 'multi',
        items: [
          { id: 'bwr_veg_corn_beans', name: 'Charred Sweet Corn & Spiced Black Beans', cal: 90.2, fat: 1.0, satFat: 0.2, sodium: 135.0, carbs: 16.5, protein: 3.8, fiber: 4.2, sugars: 3.0, default: true, icon: '🌽' },
          { id: 'bwr_veg_pico', name: 'Fresh Tomato Salsa (Pico de Gallo)', cal: 25.8, fat: 0.2, satFat: 0.0, sodium: 110.0, carbs: 5.2, protein: 0.8, fiber: 1.4, sugars: 2.8, default: true, icon: '🍅' },
          { id: 'bwr_veg_peppers', name: 'Sautéed Bell Peppers & Onions', cal: 45.6, fat: 1.2, satFat: 0.2, sodium: 95.0, carbs: 7.5, protein: 1.2, fiber: 2.0, sugars: 3.5, default: true, icon: '🫑' },
          { id: 'bwr_veg_cucumbers', name: 'Crisp English Cucumbers', cal: 17.3, fat: 0.1, satFat: 0.0, sodium: 8.0, carbs: 3.4, protein: 0.7, fiber: 1.0, sugars: 1.6, default: false, icon: '🥒' },
          { id: 'bwr_veg_jalapenos', name: 'Pickled Jalapeños', cal: 12.5, fat: 0.1, satFat: 0.0, sodium: 280.0, carbs: 2.5, protein: 0.4, fiber: 1.0, sugars: 1.2, default: false, icon: '🌶️' }
        ]
      },
      {
        title: 'Sauces & Salsas (Select Any)',
        type: 'multi',
        items: [
          { id: 'bwr_sauce_guac', name: 'In-House Guacamole', cal: 101.7, fat: 8.5, satFat: 1.4, sodium: 125.0, carbs: 5.0, protein: 1.3, fiber: 3.8, sugars: 0.6, default: true, icon: '🥑' },
          { id: 'bwr_sauce_salsa_roja', name: 'Fire-Roasted Tomato Salsa', cal: 33.6, fat: 0.4, satFat: 0.1, sodium: 210.0, carbs: 6.5, protein: 1.0, fiber: 1.6, sugars: 3.2, default: true, icon: '🥣' },
          { id: 'bwr_sauce_sour_cream', name: 'Cooling Sour Cream', cal: 70.5, fat: 6.5, satFat: 4.0, sodium: 85.0, carbs: 1.8, protein: 1.2, fiber: 0.0, sugars: 1.2, default: false, icon: '🥛' },
          { id: 'bwr_sauce_chipotle_mayo', name: 'In-House Chipotle Mayo', cal: 88.2, fat: 8.2, satFat: 1.2, sodium: 220.0, carbs: 2.8, protein: 0.8, fiber: 0.4, sugars: 1.5, default: false, icon: '🍶' },
          { id: 'bwr_sauce_garlic_ranch', name: 'Garlic Ranch Dip', cal: 83.4, fat: 7.8, satFat: 1.5, sodium: 215.0, carbs: 2.4, protein: 0.9, fiber: 0.2, sugars: 1.8, default: false, icon: '🥣' }
        ]
      },
      {
        title: 'Extras & Add-Ons (Select Any)',
        type: 'multi',
        items: [
          { id: 'bwr_extra_chips', name: 'Corn Chips', cal: 111.5, fat: 5.5, satFat: 0.8, sodium: 110.0, carbs: 14.0, protein: 1.5, fiber: 1.2, sugars: 0.3, default: true, icon: '🌮' },
          { id: 'bwr_extra_cheese', name: 'Cheese', cal: 116.7, fat: 9.5, satFat: 5.8, sodium: 180.0, carbs: 0.8, protein: 7.0, fiber: 0.0, sugars: 0.2, default: false, icon: '🧀' },
          { id: 'bwr_extra_egg', name: 'Boiled Egg (1 Piece)', cal: 71.8, fat: 5.0, satFat: 1.6, sodium: 70.0, carbs: 0.4, protein: 6.3, fiber: 0.0, sugars: 0.4, default: false, icon: '🥚' },
          { id: 'bwr_extra_chatpata_chk', name: 'Extra Grilled Chatpata Chicken (+100g)', cal: 157.6, fat: 4.4, satFat: 1.2, sodium: 320.0, carbs: 2.0, protein: 27.5, fiber: 0.4, sugars: 0.6, default: false, icon: '🍗' },
          { id: 'bwr_extra_lowfat_chk', name: 'Extra Low-Fat Chipotle Chicken (+100g)', cal: 146.4, fat: 2.8, satFat: 0.7, sodium: 300.0, carbs: 1.5, protein: 28.8, fiber: 0.3, sugars: 0.5, default: false, icon: '🍗' },
          { id: 'bwr_extra_peri_chk', name: 'Extra Crispy Peri-Peri Chicken (+100g)', cal: 186.9, fat: 6.9, satFat: 1.8, sodium: 350.0, carbs: 5.4, protein: 25.8, fiber: 0.5, sugars: 0.8, default: false, icon: '🍗' },
          { id: 'bwr_extra_paneer', name: 'Extra Chipotle Paneer (+80g)', cal: 188.0, fat: 13.6, satFat: 8.0, sodium: 255.0, carbs: 3.2, protein: 13.2, fiber: 0.4, sugars: 1.2, default: false, icon: '🧀' },
          { id: 'bwr_extra_mushrooms', name: 'Extra Sautéed Mushrooms (+80g)', cal: 71.7, fat: 3.7, satFat: 0.6, sodium: 145.0, carbs: 6.0, protein: 3.6, fiber: 2.2, sugars: 1.8, default: false, icon: '🍄' }
        ]
      }
    ]
  },
  bowl_mini: {
    name: 'Rice Bowl (Mini)',
    icon: '🍲',
    sections: [
      {
        title: 'Mini Base Grains (Select One)',
        type: 'single',
        items: [
          { id: 'bwm_rice_cilantro', name: 'Mini Cilantro Lime Basmati Rice', cal: 140.3, fat: 1.9, satFat: 0.3, sodium: 160.0, carbs: 28.0, protein: 2.8, fiber: 1.2, sugars: 0.3, default: true, icon: '🍚' },
          { id: 'bwm_rice_brown', name: 'Mini Whole Brown Rice & Quinoa', cal: 131.3, fat: 1.7, satFat: 0.3, sodium: 105.0, carbs: 25.3, protein: 3.7, fiber: 2.8, sugars: 0.3, default: false, icon: '🌾' },
          { id: 'bwm_rice_half_greens', name: 'Mini Half Rice & Crisp Greens', cal: 80.4, fat: 1.2, satFat: 0.2, sodium: 85.0, carbs: 15.5, protein: 1.9, fiber: 1.6, sugars: 0.7, default: false, icon: '🥗' }
        ]
      },
      {
        title: 'Pick Your Filling (Select One)',
        type: 'single',
        items: [
          { id: 'bwm_fill_chatpata_chk', name: 'Mini Grilled Chatpata Chicken', cal: 126.3, fat: 3.5, satFat: 1.0, sodium: 255.0, carbs: 1.7, protein: 22.0, fiber: 0.3, sugars: 0.5, default: true, icon: '🍗' },
          { id: 'bwm_fill_lowfat_chk', name: 'Mini Low-Fat Chipotle Chicken', cal: 116.6, fat: 2.2, satFat: 0.5, sodium: 240.0, carbs: 1.2, protein: 23.0, fiber: 0.3, sugars: 0.4, default: false, icon: '🍗' },
          { id: 'bwm_fill_peri_chk', name: 'Mini Crispy Peri-Peri Chicken', cal: 149.5, fat: 5.5, satFat: 1.5, sodium: 280.0, carbs: 4.3, protein: 20.7, fiber: 0.4, sugars: 0.6, default: false, icon: '🍗' },
          { id: 'bwm_fill_chipotle_paneer', name: 'Mini Chipotle Paneer', cal: 164.3, fat: 11.9, satFat: 7.0, sodium: 225.0, carbs: 2.8, protein: 11.5, fiber: 0.4, sugars: 1.0, default: false, icon: '🧀' },
          { id: 'bwm_fill_fajita_veg', name: 'Mini Fajita Veggies', cal: 57.6, fat: 2.0, satFat: 0.3, sodium: 130.0, carbs: 8.2, protein: 1.7, fiber: 2.4, sugars: 2.9, default: false, icon: '🫑' },
          { id: 'bwm_fill_mushrooms', name: 'Mini Sautéed Mushrooms', cal: 62.0, fat: 3.2, satFat: 0.5, sodium: 125.0, carbs: 5.2, protein: 3.1, fiber: 2.0, sugars: 1.5, default: false, icon: '🍄' }
        ]
      },
      {
        title: 'Fresh Veggies & Beans (Select Any)',
        type: 'multi',
        items: [
          { id: 'bwm_veg_corn_beans', name: 'Sweet Corn & Black Beans (Mini)', cal: 60.3, fat: 0.7, satFat: 0.1, sodium: 90.0, carbs: 11.0, protein: 2.5, fiber: 2.8, sugars: 2.0, default: true, icon: '🌽' },
          { id: 'bwm_veg_pico', name: 'Fresh Tomato Salsa (Mini)', cal: 17.7, fat: 0.1, satFat: 0.0, sodium: 75.0, carbs: 3.6, protein: 0.5, fiber: 1.0, sugars: 1.9, default: true, icon: '🍅' },
          { id: 'bwm_veg_peppers', name: 'Sautéed Bell Peppers & Onions (Mini)', cal: 31.2, fat: 0.8, satFat: 0.1, sodium: 65.0, carbs: 5.2, protein: 0.8, fiber: 1.4, sugars: 2.4, default: true, icon: '🫑' },
          { id: 'bwm_veg_cucumbers', name: 'Crisp English Cucumbers (Mini)', cal: 12.9, fat: 0.1, satFat: 0.0, sodium: 6.0, carbs: 2.5, protein: 0.5, fiber: 0.7, sugars: 1.2, default: false, icon: '🥒' },
          { id: 'bwm_veg_jalapenos', name: 'Pickled Jalapeños (Mini)', cal: 8.5, fat: 0.1, satFat: 0.0, sodium: 185.0, carbs: 1.6, protein: 0.3, fiber: 0.6, sugars: 0.8, default: false, icon: '🌶️' }
        ]
      },
      {
        title: 'Sauces & Salsas (Select Any)',
        type: 'multi',
        items: [
          { id: 'bwm_sauce_guac', name: 'In-House Guacamole (Mini)', cal: 70.7, fat: 5.9, satFat: 1.0, sodium: 85.0, carbs: 3.5, protein: 0.9, fiber: 2.7, sugars: 0.4, default: true, icon: '🥑' },
          { id: 'bwm_sauce_salsa_roja', name: 'Fire-Roasted Tomato Salsa (Mini)', cal: 24.7, fat: 0.3, satFat: 0.1, sodium: 155.0, carbs: 4.8, protein: 0.7, fiber: 1.2, sugars: 2.4, default: true, icon: '🥣' },
          { id: 'bwm_sauce_sour_cream', name: 'Cooling Sour Cream (Mini)', cal: 49.8, fat: 4.6, satFat: 2.9, sodium: 60.0, carbs: 1.3, protein: 0.8, fiber: 0.0, sugars: 0.9, default: false, icon: '🥛' },
          { id: 'bwm_sauce_chipotle_mayo', name: 'In-House Chipotle Mayo (Mini)', cal: 59.1, fat: 5.5, satFat: 0.8, sodium: 145.0, carbs: 1.9, protein: 0.5, fiber: 0.3, sugars: 1.0, default: false, icon: '🍶' }
        ]
      },
      {
        title: 'Extras & Add-Ons (Select Any)',
        type: 'multi',
        items: [
          { id: 'bwm_extra_chips', name: 'Corn Chips (Mini)', cal: 74.5, fat: 3.7, satFat: 0.5, sodium: 75.0, carbs: 9.3, protein: 1.0, fiber: 0.8, sugars: 0.2, default: true, icon: '🌮' },
          { id: 'bwm_extra_cheese', name: 'Cheese (Mini)', cal: 77.5, fat: 6.3, satFat: 3.9, sodium: 120.0, carbs: 0.5, protein: 4.7, fiber: 0.0, sugars: 0.1, default: false, icon: '🧀' },
          { id: 'bwm_extra_egg', name: 'Boiled Egg (1 Piece)', cal: 71.8, fat: 5.0, satFat: 1.6, sodium: 70.0, carbs: 0.4, protein: 6.3, fiber: 0.0, sugars: 0.4, default: false, icon: '🥚' }
        ]
      }
    ]
  },
  burrito: {
    name: 'Burrito Wrap (Regular)',
    icon: '🌯',
    sections: [
      {
        title: 'Tortilla (Select One)',
        type: 'single',
        items: [
          { id: 'b_tort_10', name: '10" Soft Flour Tortilla', cal: 215.2, fat: 6.4, satFat: 3.2, sodium: 533.1, carbs: 34.4, protein: 5.0, fiber: 1.7, sugars: 1.1, default: true, icon: '🌯' },
          { id: 'b_tort_whole', name: '10" Wholemeal Tortilla', cal: 207.4, fat: 5.8, satFat: 2.7, sodium: 310.1, carbs: 32.9, protein: 5.9, fiber: 3.0, sugars: 0.8, default: false, icon: '🌾' }
        ]
      },
      {
        title: 'Pick Your Filling (Select One)',
        type: 'single',
        items: [
          { id: 'b_fill_chatpata_chk', name: 'Grilled Chatpata Chicken', cal: 189.7, fat: 5.3, satFat: 1.5, sodium: 385.0, carbs: 2.5, protein: 33.0, fiber: 0.5, sugars: 0.8, default: true, icon: '🍗' },
          { id: 'b_fill_lowfat_chk', name: 'Low-Fat Chipotle Chicken', cal: 174.9, fat: 3.3, satFat: 0.8, sodium: 360.0, carbs: 1.8, protein: 34.5, fiber: 0.4, sugars: 0.6, default: false, icon: '🍗' },
          { id: 'b_fill_peri_chk', name: 'Crispy Peri-Peri Chicken', cal: 224.7, fat: 8.3, satFat: 2.2, sodium: 420.0, carbs: 6.5, protein: 31.0, fiber: 0.6, sugars: 0.9, default: false, icon: '🍗' },
          { id: 'b_fill_chipotle_paneer', name: 'Chipotle Paneer', cal: 235.0, fat: 17.0, satFat: 10.0, sodium: 320.0, carbs: 4.0, protein: 16.5, fiber: 0.5, sugars: 1.5, default: false, icon: '🧀' },
          { id: 'b_fill_fajita_veg', name: 'Fajita Veggies', cal: 85.0, fat: 3.0, satFat: 0.5, sodium: 190.0, carbs: 12.0, protein: 2.5, fiber: 3.5, sugars: 4.2, default: false, icon: '🫑' },
          { id: 'b_fill_mushrooms', name: 'Sautéed Mushrooms', cal: 89.4, fat: 4.6, satFat: 0.8, sodium: 180.0, carbs: 7.5, protein: 4.5, fiber: 2.8, sugars: 2.2, default: false, icon: '🍄' }
        ]
      },
      {
        title: 'Fresh Veggies & Fillings (Select Any)',
        type: 'multi',
        items: [
          { id: 'b_veg_rice', name: 'Steamed Cilantro Lime Rice', cal: 69.7, fat: 0.9, satFat: 0.2, sodium: 80.0, carbs: 14.0, protein: 1.4, fiber: 0.6, sugars: 0.1, default: true, icon: '🍚' },
          { id: 'b_veg_corn_beans', name: 'Charred Sweet Corn & Spiced Black Beans', cal: 72.0, fat: 0.8, satFat: 0.1, sodium: 108.0, carbs: 13.2, protein: 3.0, fiber: 3.4, sugars: 2.4, default: true, icon: '🌽' },
          { id: 'b_veg_pico', name: 'Fresh Tomato Salsa (Pico de Gallo)', cal: 21.0, fat: 0.2, satFat: 0.0, sodium: 88.0, carbs: 4.2, protein: 0.6, fiber: 1.1, sugars: 2.2, default: true, icon: '🍅' },
          { id: 'b_veg_peppers', name: 'Sautéed Bell Peppers & Onions', cal: 37.0, fat: 1.0, satFat: 0.1, sodium: 76.0, carbs: 6.0, protein: 1.0, fiber: 1.6, sugars: 2.8, default: false, icon: '🫑' },
          { id: 'b_veg_lettuce', name: 'Crisp Shredded Lettuce', cal: 6.5, fat: 0.1, satFat: 0.0, sodium: 5.0, carbs: 1.0, protein: 0.4, fiber: 0.6, sugars: 0.5, default: true, icon: '🥬' },
          { id: 'b_veg_jalapenos', name: 'Pickled Jalapeños', cal: 10.5, fat: 0.1, satFat: 0.0, sodium: 230.0, carbs: 2.1, protein: 0.3, fiber: 0.8, sugars: 1.0, default: false, icon: '🌶️' }
        ]
      },
      {
        title: 'Sauces & Salsas (Select Any)',
        type: 'multi',
        items: [
          { id: 'b_sauce_salsa_roja', name: 'Fire-Roasted Tomato Salsa', cal: 29.4, fat: 0.3, satFat: 0.1, sodium: 185.0, carbs: 5.7, protein: 0.9, fiber: 1.4, sugars: 2.8, default: true, icon: '🥣' },
          { id: 'b_sauce_guac', name: 'In-House Guacamole', cal: 81.4, fat: 6.8, satFat: 1.1, sodium: 100.0, carbs: 4.0, protein: 1.0, fiber: 3.0, sugars: 0.5, default: false, icon: '🥑' },
          { id: 'b_sauce_sour_cream', name: 'Cooling Sour Cream', cal: 60.4, fat: 5.6, satFat: 3.4, sodium: 72.0, carbs: 1.5, protein: 1.0, fiber: 0.0, sugars: 1.0, default: true, icon: '🥛' },
          { id: 'b_sauce_chipotle_mayo', name: 'In-House Chipotle Mayo', cal: 73.5, fat: 6.8, satFat: 1.0, sodium: 180.0, carbs: 2.3, protein: 0.7, fiber: 0.3, sugars: 1.2, default: false, icon: '🍶' },
          { id: 'b_sauce_garlic_ranch', name: 'Garlic Ranch Dip', cal: 69.5, fat: 6.5, satFat: 1.2, sodium: 175.0, carbs: 2.0, protein: 0.7, fiber: 0.2, sugars: 1.5, default: false, icon: '🥣' }
        ]
      },
      {
        title: 'Extras & Add-Ons (Select Any)',
        type: 'multi',
        items: [
          { id: 'b_extra_cheese', name: 'Cheese', cal: 116.7, fat: 9.5, satFat: 5.8, sodium: 180.0, carbs: 0.8, protein: 7.0, fiber: 0.0, sugars: 0.2, default: true, icon: '🧀' },
          { id: 'b_extra_chips', name: 'Corn Chips', cal: 111.5, fat: 5.5, satFat: 0.8, sodium: 110.0, carbs: 14.0, protein: 1.5, fiber: 1.2, sugars: 0.3, default: false, icon: '🌮' },
          { id: 'b_extra_egg', name: 'Boiled Egg (1 Piece)', cal: 71.8, fat: 5.0, satFat: 1.6, sodium: 70.0, carbs: 0.4, protein: 6.3, fiber: 0.0, sugars: 0.4, default: false, icon: '🥚' },
          { id: 'b_extra_chatpata_chk', name: 'Extra Grilled Chatpata Chicken (+100g)', cal: 157.6, fat: 4.4, satFat: 1.2, sodium: 320.0, carbs: 2.0, protein: 27.5, fiber: 0.4, sugars: 0.6, default: false, icon: '🍗' },
          { id: 'b_extra_lowfat_chk', name: 'Extra Low-Fat Chipotle Chicken (+100g)', cal: 146.4, fat: 2.8, satFat: 0.7, sodium: 300.0, carbs: 1.5, protein: 28.8, fiber: 0.3, sugars: 0.5, default: false, icon: '🍗' },
          { id: 'b_extra_peri_chk', name: 'Extra Crispy Peri-Peri Chicken (+100g)', cal: 186.9, fat: 6.9, satFat: 1.8, sodium: 350.0, carbs: 5.4, protein: 25.8, fiber: 0.5, sugars: 0.8, default: false, icon: '🍗' },
          { id: 'b_extra_paneer', name: 'Extra Chipotle Paneer (+80g)', cal: 188.0, fat: 13.6, satFat: 8.0, sodium: 255.0, carbs: 3.2, protein: 13.2, fiber: 0.4, sugars: 1.2, default: false, icon: '🧀' },
          { id: 'b_extra_mushrooms', name: 'Extra Sautéed Mushrooms (+80g)', cal: 71.7, fat: 3.7, satFat: 0.6, sodium: 145.0, carbs: 6.0, protein: 3.6, fiber: 2.2, sugars: 1.8, default: false, icon: '🍄' }
        ]
      }
    ]
  }
};

// Selection State for each category
const stuffdSelectedItems = {
  bowl_reg: new Set(),
  bowl_mini: new Set(),
  burrito: new Set()
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

let currentStuffdCategory = 'bowl_reg';

// Curated Kaazos Authentic Gallery Items (Interleaved & Diverse Variety)
const GALLERY_ITEMS = [
  { title: 'Kaazos Chatpata Chicken Bowl (Regular)', category: 'wraps', img: 'assets/images/chatpata-chicken-bowl-regular.jpg', tag: 'Signature Bowl' },
  { title: 'Kaazos Berry Boost Smoothie', category: 'drinks', img: 'assets/images/berry-boost-smoothie.jpg', tag: 'Antioxidant Smoothie' },
  { title: 'Kaazos Cheesy Melt Quesadilla', category: 'crispy', img: 'assets/images/cheesy-melt-quesadilla.jpg', tag: 'Artisanal Quesadilla' },
  { title: 'Kaazos Chipotle Chicken Burrito Wrap', category: 'wraps', img: 'assets/images/chipotle-chicken-burrito-wrap.jpg', tag: 'Signature Wrap' },
  { title: 'Kaazos Fresh Lemonade Cooler', category: 'drinks', img: 'assets/images/fresh-lemonade-cooler.jpg', tag: 'Fresh Cooler' },
  { title: 'Kaazos Desi Mex Chicken Quesadilla', category: 'crispy', img: 'assets/images/desi-mex-chicken-quesadilla.jpg', tag: 'Signature Quesadilla' },
  { title: 'Kaazos Chipotle Paneer Mini Bowl', category: 'wraps', img: 'assets/images/chipotle-paneer-mini-bowl.jpg', tag: 'Vegetarian Craft' },
  { title: 'Kaazos Morning Breakfast Apple & Banana Oatmeal', category: 'drinks', img: 'assets/images/morning-breakfast-apple-banana-oatmeal.jpg', tag: 'Vibrant Oatmeal' },
  { title: 'Kaazos Chicken Loaded Nachos', category: 'crispy', img: 'assets/images/chicken-loaded-nachos.jpg', tag: 'Loaded Nachos' },
  { title: 'Kaazos Chipotle Chicken Mini Bowl', category: 'wraps', img: 'assets/images/chipotle-chicken-mini-bowl.jpg', tag: 'Double Protein' },
  { title: 'Kaazos Oreo Chocodilla', category: 'crispy', img: 'assets/images/oreo-chocodilla.jpg', tag: 'Dessert Quesadilla' },
  { title: 'Kaazos Lemon Ice Tea', category: 'drinks', img: 'assets/images/lemon-ice-tea.jpg', tag: 'Chilled Brew' },
  { title: 'Kaazos Crispy Peri Peri Chicken Burrito Wrap', category: 'wraps', img: 'assets/images/crispy-peri-peri-chicken-burrito-wrap.jpg', tag: 'Spicy Wrap' },
  { title: 'Kaazos Chipotle Chicken Loaded Fries', category: 'crispy', img: 'assets/images/chipotle-chicken-loaded-fries.jpg', tag: 'Loaded Fries' },
  { title: 'Kaazos Kitkat Oreo Shake', category: 'drinks', img: 'assets/images/kitkat-oreo-shake.jpg', tag: 'Gourmet Shake' },
  { title: 'Kaazos Chipotle Paneer Bowl (Regular)', category: 'wraps', img: 'assets/images/chipotle-paneer-bowl-regular.jpg', tag: 'Whole-Food Nutrition' },
  { title: 'Kaazos Loaded Mushroom Nachos', category: 'crispy', img: 'assets/images/loaded-mushroom-nachos.jpg', tag: 'Zesty & Crisp' },
  { title: 'Kaazos Apple Cinnamon Cream Shake', category: 'drinks', img: 'assets/images/apple-cinnamon-cream-shake.jpg', tag: 'Craft Shake' },
  { title: 'Kaazos Crispy Chicken Bowl (Regular)', category: 'wraps', img: 'assets/images/crispy-chicken-bowl-regular.jpg', tag: 'Flame-Grilled' },
  { title: 'Kaazos Crispy Chicken Loaded Fries', category: 'crispy', img: 'assets/images/crispy-chicken-loaded-fries.jpg', tag: 'High Protein Crisp' },
  { title: 'Kaazos Brownie & Chocolate Shake', category: 'drinks', img: 'assets/images/brownie-chocolate-shake.jpg', tag: 'Rich Cocoa' },
  { title: 'Kaazos Crispy Chicken Mini Bowl', category: 'wraps', img: 'assets/images/crispy-chicken-mini-bowl.jpg', tag: 'Adobo Seared' },
  { title: 'Kaazos Nachos with Cheese Sauce & Sour Cream', category: 'crispy', img: 'assets/images/nachos-with-cheese-sauce-sour-cream.jpg', tag: 'Savory Dip & Crisp' },
  { title: 'Kaazos Banana Almond Rose Shake', category: 'drinks', img: 'assets/images/banana-almond-rose-shake.jpg', tag: 'Slow Steeped' },
  { title: 'Kaazos Fajita Veg Bowl (Regular)', category: 'wraps', img: 'assets/images/fajita-veg-bowl-regular.jpg', tag: 'Farm-Fresh Harvest' },
  { title: 'Kaazos Crispy Chicken Strips', category: 'crispy', img: 'assets/images/chicken-strips.jpg', tag: 'Daily Crisp' },
  { title: 'Kaazos Banana Oat Breakfast Smoothie', category: 'drinks', img: 'assets/images/banana-oat-breakfast-smoothie.jpg', tag: 'Wholesome Breakfast' },
  { title: 'Kaazos Fajita Veg Mini Bowl', category: 'wraps', img: 'assets/images/fajita-veg-mini-bowl.jpg', tag: 'Clean Macro' },
  { title: 'Kaazos Chipotle Paneer Bowl (Regular Classic)', category: 'wraps', img: 'assets/images/chipotle-paneer-bowl-regular-classic.jpg', tag: 'Vegetarian Classic' },
  { title: 'Kaazos Choco Peanut Butter & Nuts Oatmeal', category: 'drinks', img: 'assets/images/choco-peanut-butter-nuts-oatmeal.jpg', tag: 'Superfood Fuel' },
  { title: 'Kaazos Chatpata Chicken Mini Bowl', category: 'wraps', img: 'assets/images/chatpata-chicken-mini-bowl.jpg', tag: 'Signature Mini Bowl' }
];

let currentMenuCat = 'all';
let currentDietFilter = 'all';
let menuSearchQuery = '';

/* ==========================================================================
   Initialization (Performance-Optimized Core Web Vitals Scheduling)
   - Phase 1 (Immediate / Synchronous): Critical above-the-fold modules (Navbar, Mobile Menu, Hero, Floating Dock)
   - Phase 2 (Micro-task / Idle): Primary interactive content (Menu Showcase & Salad)
   - Phase 3 (Deferred / Idle): Below-the-fold heavy widgets (Nutrition Calculator, Gallery, Reels, Reviews)
   ========================================================================== */
function initAll() {
  // Phase 1: Critical above-the-fold user interface (immediate, 0ms latency)
  initNavbarBlur();
  initMobileMenu();
  initHeroParallaxScroll();
  initFloatingSocialDock();

  // Helper for non-blocking idle scheduling to minimize Total Blocking Time (TBT)
  const scheduleIdle = (typeof window.requestIdleCallback === 'function')
    ? (cb) => window.requestIdleCallback(cb, { timeout: 1500 })
    : (cb) => setTimeout(cb, 16);

  // Phase 2: Primary interactive content (idle priority)
  scheduleIdle(() => {
    initMenu();
    initDeconstructedSalad();
  });

  // Phase 3: Below-the-fold secondary widgets (deferred idle priority)
  scheduleIdle(() => {
    initStuffdNutritionCalculator();
    initGallery();
    initReelsCarousel();
    initGoogleReviewsCarousel();
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAll);
} else {
  initAll();
}

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
        <img src="${item.image}" alt="${item.name}" loading="eager" decoding="async" width="400" height="250">
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

  const DISH_SPOTLIGHT_DATA = {
    bowl_reg: {
      title: 'Kaazos Chatpata Chicken Bowl (Regular)',
      tag: 'Choose Your Own • Regular Bowl',
      desc: 'Cilantro basmati rice base with choice of Grilled Chatpata Chicken, Low-Fat Chipotle Chicken, Chipotle Paneer, Sautéed Mushrooms, or Fajita Veggies, topped with spiced black beans, sweet corn, fresh tomato salsa, sour cream, and guacamole.',
      image: 'assets/images/chatpata-chicken-bowl-regular.jpg'
    },
    bowl_mini: {
      title: 'Kaazos Chipotle Chicken Mini Bowl',
      tag: 'Choose Your Own • Mini Bowl',
      desc: 'Balanced lighter portion of cilantro basmati rice with choice of protein or veggies, spiced black beans, sweet corn, fresh tomato salsa, and zesty house sauces.',
      image: 'assets/images/chipotle-chicken-mini-bowl.jpg'
    },
    burrito: {
      title: 'Kaazos Chipotle Chicken Burrito Wrap',
      tag: 'Choose Your Own • Hand-Rolled Wrap',
      desc: 'Warm toasted 10" flour tortilla layered with cilantro lime rice, spiced black beans, fresh tomato salsa, sour cream, and your choice of freshly prepared fillings.',
      image: 'assets/images/chipotle-chicken-burrito-wrap.jpg'
    }
  };

  // Render current category table rows
  function renderTable(catKey) {
    currentStuffdCategory = catKey;
    const catData = STUFFD_NUTRITION_DATA[catKey];
    if (!catData) return;

    // Update dish preview spotlight
    const spotlightCard = document.getElementById('stuffdDishSpotlight');
    if (spotlightCard && DISH_SPOTLIGHT_DATA[catKey]) {
      const d = DISH_SPOTLIGHT_DATA[catKey];
      spotlightCard.innerHTML = `
        <div class="stuffd-spotlight-visual">
          <img src="${d.image}" alt="${d.title}" class="stuffd-spotlight-img" width="110" height="110" loading="eager">
        </div>
        <div class="stuffd-spotlight-text">
          <span class="stuffd-spotlight-tag">${d.tag}</span>
          <h3 class="stuffd-spotlight-title">${d.title}</h3>
          <p class="stuffd-spotlight-desc">${d.desc}</p>
        </div>
      `;
    }

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
      waBtn.href = `https://wa.me/916360699336?text=${encodeURIComponent(msg)}`;
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
  renderTable('bowl_reg');
}

/* ==========================================================================
   4. Food Gallery & Interactive Photo Lightbox
   ========================================================================== */
function initGallery() {
  const container = document.getElementById('galleryGrid');
  const tabs = document.querySelectorAll('.gallery-filter-btn');
  if (!container) return;

  let currentFilteredGallery = [];
  let currentGalleryIndex = 0;

  // Lightbox elements
  const modal = document.getElementById('galleryLightboxModal');
  const modalImg = document.getElementById('galleryLightboxImg');
  const modalTitle = document.getElementById('galleryLightboxTitle');
  const modalTag = document.getElementById('galleryLightboxTag');
  const modalCounter = document.getElementById('galleryLightboxCounter');
  const closeBtn = document.getElementById('btnGalleryClose');
  const prevBtn = document.getElementById('btnGalleryPrev');
  const nextBtn = document.getElementById('btnGalleryNext');
  const backdrop = document.getElementById('galleryLightboxBackdrop');

  function updateLightbox(index) {
    if (!currentFilteredGallery || currentFilteredGallery.length === 0) return;
    currentGalleryIndex = (index + currentFilteredGallery.length) % currentFilteredGallery.length;
    const item = currentFilteredGallery[currentGalleryIndex];
    if (modalImg) {
      modalImg.src = item.img;
      modalImg.alt = item.title;
    }
    if (modalTitle) modalTitle.textContent = item.title;
    if (modalTag) modalTag.textContent = item.tag;
    if (modalCounter) modalCounter.textContent = `${currentGalleryIndex + 1} of ${currentFilteredGallery.length}`;
  }

  function openGalleryLightbox(index) {
    if (!modal) return;
    updateLightbox(index);
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeGalleryLightbox() {
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Smart randomizer helper that shuffles items while guaranteeing visual variety
  function randomizeGalleryItems(items) {
    const list = [...items];
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
    // Prevent adjacent items with identical wrap scrabble tiles
    for (let i = 0; i < list.length - 1; i++) {
      const aIsWrap = /burrito-wrap/.test(list[i].img);
      const bIsWrap = /burrito-wrap/.test(list[i + 1].img);
      if (aIsWrap && bIsWrap) {
        const swapIdx = (i + 4) % list.length;
        [list[i + 1], list[swapIdx]] = [list[swapIdx], list[i + 1]];
      }
    }
    return list;
  }

  // Pre-randomize collection on load so visitors experience a dynamic, vibrant spread
  const randomizedAllItems = randomizeGalleryItems(GALLERY_ITEMS);

  function renderGallery(cat = 'all') {
    if (cat === 'all') {
      currentFilteredGallery = randomizedAllItems;
    } else {
      currentFilteredGallery = randomizeGalleryItems(GALLERY_ITEMS.filter(item => item.category === cat));
    }
    container.innerHTML = currentFilteredGallery.map((item, idx) => `
      <div class="gallery-frame" data-gallery-index="${idx}" tabindex="0" role="button" aria-label="View photo of ${item.title}">
        <img src="${item.img}" alt="${item.title}" loading="${idx < 8 ? 'eager' : 'lazy'}" decoding="async" width="400" height="400">
        <div class="gallery-hover-overlay">
          <span class="gallery-item-tag">${item.tag}</span>
          <h4 class="gallery-item-title">${item.title}</h4>
          <span class="gallery-view-hint">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
            Click to view
          </span>
        </div>
      </div>
    `).join('');

    // Attach click and keyboard listeners to each frame
    container.querySelectorAll('.gallery-frame').forEach(frame => {
      frame.addEventListener('click', () => {
        const idx = parseInt(frame.getAttribute('data-gallery-index'), 10);
        openGalleryLightbox(idx);
      });
      frame.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const idx = parseInt(frame.getAttribute('data-gallery-index'), 10);
          openGalleryLightbox(idx);
        }
      });
    });
  }

  // Lightbox event handlers
  if (closeBtn) closeBtn.addEventListener('click', closeGalleryLightbox);
  if (backdrop) backdrop.addEventListener('click', closeGalleryLightbox);
  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      updateLightbox(currentGalleryIndex - 1);
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      updateLightbox(currentGalleryIndex + 1);
    });
  }

  window.addEventListener('keydown', (e) => {
    if (!modal || !modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeGalleryLightbox();
    else if (e.key === 'ArrowLeft') updateLightbox(currentGalleryIndex - 1);
    else if (e.key === 'ArrowRight') updateLightbox(currentGalleryIndex + 1);
  });

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
   6. Photorealistic Deconstructed Salad Scroll Animation (GSAP + ScrollTrigger)
   ========================================================================== */
function initDeconstructedSalad() {
  const section = document.getElementById('saladExplodedSection');
  const stage = document.getElementById('saladStage');
  const stack = document.getElementById('saladLayersStack');

  const layerBowl = document.getElementById('layerBowl');
  const layerLettuce = document.getElementById('layerLettuce');
  const layerTomatoes = document.getElementById('layerTomatoes');
  const layerCucumber = document.getElementById('layerCucumber');
  const layerCornVeg = document.getElementById('layerCornVeg');
  const layerBeans = document.getElementById('layerBeans');
  const layerPaneer = document.getElementById('layerPaneer');
  const layerCheese = document.getElementById('layerCheese');
  const layerHerbs = document.getElementById('layerHerbs');
  const layerCheeseHerbs = document.getElementById('layerCheeseHerbs');
  const layerBowlFront = document.getElementById('layerBowlFront');
  const callouts = document.querySelectorAll('.salad-callout');

  if (!section || !stack || !layerLettuce) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Packed offsets inside bowl cavity (assembled state)
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

  const hasGSAP = (typeof window.gsap !== 'undefined') && (typeof window.ScrollTrigger !== 'undefined');

  if (hasGSAP && !prefersReducedMotion) {
    window.gsap.registerPlugin(window.ScrollTrigger);

    // Initial state: gather all layers inside the ceramic bowl
    if (layerHerbs) {
      window.gsap.set(layerHerbs, { yPercent: packed.herbs.y, x: packed.herbs.x, rotation: packed.herbs.rot, scale: packed.herbs.scale });
    }
    if (layerCheese) {
      window.gsap.set(layerCheese, { yPercent: packed.cheese.y, x: packed.cheese.x, rotation: packed.cheese.rot, scale: packed.cheese.scale });
    }
    if (layerCheeseHerbs) {
      window.gsap.set(layerCheeseHerbs, { yPercent: packed.herbs.y, x: packed.herbs.x, rotation: packed.herbs.rot, scale: packed.herbs.scale });
    }
    window.gsap.set(layerPaneer,   { yPercent: packed.paneer.y,  x: packed.paneer.x,  rotation: packed.paneer.rot,  scale: packed.paneer.scale });
    window.gsap.set(layerBeans,    { yPercent: packed.beans.y,   x: packed.beans.x,   rotation: packed.beans.rot,   scale: packed.beans.scale });
    window.gsap.set(layerCornVeg,  { yPercent: packed.corn.y,    x: packed.corn.x,    rotation: packed.corn.rot,    scale: packed.corn.scale });
    window.gsap.set(layerCucumber, { yPercent: packed.cuke.y,    x: packed.cuke.x,    rotation: packed.cuke.rot,    scale: packed.cuke.scale });
    window.gsap.set(layerTomatoes, { yPercent: packed.tomato.y,  x: packed.tomato.x,  rotation: packed.tomato.rot,  scale: packed.tomato.scale });
    window.gsap.set(layerLettuce,  { yPercent: packed.lettuce.y, x: packed.lettuce.x, rotation: packed.lettuce.rot, scale: packed.lettuce.scale });
    window.gsap.set(stack,         { yPercent: packed.stackY });
    window.gsap.set(callouts,      { opacity: 0, pointerEvents: 'none' });

    // Pinned continuous scrub timeline matching requirements
    const isMobile = window.innerWidth <= 720;
    const isTablet = window.innerWidth <= 1024;
    const startTrigger = isMobile ? 'top 60px' : 'top 76px';
    const scrubDistance = isMobile ? '+=650' : (isTablet ? '+=850' : '+=1100');

    const tl = window.gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: startTrigger,
        end: scrubDistance,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true
      }
    });

    // One-Way Scroll Explode: Deconstructs into mid-air layers and STAYS exploded
    // (User does NOT want it to put back in the bowl when scrolling forward)
    tl.to(stack,         { yPercent: exploded.stackY, ease: 'power1.out', duration: 1.0 }, 0);
    if (layerHerbs) {
      tl.to(layerHerbs,  { yPercent: exploded.herbs.y,  x: exploded.herbs.x,  rotation: exploded.herbs.rot,  scale: exploded.herbs.scale,  ease: 'power1.out', duration: 1.0 }, 0);
    }
    if (layerCheese) {
      tl.to(layerCheese, { yPercent: exploded.cheese.y, x: exploded.cheese.x, rotation: exploded.cheese.rot, scale: exploded.cheese.scale, ease: 'power1.out', duration: 1.0 }, 0);
    }
    if (layerCheeseHerbs) {
      tl.to(layerCheeseHerbs, { yPercent: exploded.herbs.y, x: exploded.herbs.x, rotation: exploded.herbs.rot, scale: exploded.herbs.scale, ease: 'power1.out', duration: 1.0 }, 0);
    }
    tl.to(layerPaneer,   { yPercent: exploded.paneer.y,  x: exploded.paneer.x,  rotation: exploded.paneer.rot,  scale: exploded.paneer.scale,  ease: 'power1.out', duration: 1.0 }, 0)
      .to(layerBeans,    { yPercent: exploded.beans.y,   x: exploded.beans.x,   rotation: exploded.beans.rot,   scale: exploded.beans.scale,   ease: 'power1.out', duration: 1.0 }, 0)
      .to(layerCornVeg,  { yPercent: exploded.corn.y,    x: exploded.corn.x,    rotation: exploded.corn.rot,    scale: exploded.corn.scale,    ease: 'power1.out', duration: 1.0 }, 0)
      .to(layerCucumber, { yPercent: exploded.cuke.y,    x: exploded.cuke.x,    rotation: exploded.cuke.rot,    scale: exploded.cuke.scale,    ease: 'power1.out', duration: 1.0 }, 0)
      .to(layerTomatoes, { yPercent: exploded.tomato.y,  x: exploded.tomato.x,  rotation: exploded.tomato.rot,  scale: exploded.tomato.scale,  ease: 'power1.out', duration: 1.0 }, 0)
      .to(layerLettuce,  { yPercent: exploded.lettuce.y, x: exploded.lettuce.x, rotation: exploded.lettuce.rot, scale: exploded.lettuce.scale, ease: 'power1.out', duration: 1.0 }, 0)
      .to(callouts,      { opacity: 1, pointerEvents: 'auto', stagger: 0.04, ease: 'power1.out', duration: 0.5 }, 0.5);

    // Refresh ScrollTrigger when images load to ensure precise pixel measurements
    window.addEventListener('load', () => {
      window.ScrollTrigger.refresh();
    });
  } else {
    // Pure Scroll-Scrub Engine (Fallback / Offline / Native rAF)
    section.classList.add('no-gsap-fallback');

    function lerp(a, b, t) {
      return a + (b - a) * t;
    }

    function onScrollFallback() {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const isMobile = window.innerWidth < 768;
      const navOffset = isMobile ? 60 : 76;
      const totalScroll = section.offsetHeight - (windowHeight - navOffset);
      if (totalScroll <= 0) return;

      const scrolledInside = navOffset - rect.top;
      const rawProgress = Math.max(0, Math.min(1, scrolledInside / totalScroll));

      // Progression from 0 to 1 (stays exploded)
      const t = rawProgress;
      const e = t * t * (3 - 2 * t);

      stack.style.transform = `translateY(${lerp(packed.stackY, exploded.stackY, e)}%)`;

      function setLayer(el, p, exp) {
        if (!el) return;
        const y = lerp(p.y, exp.y, e);
        const x = lerp(p.x, exp.x, e);
        const r = lerp(p.rot, exp.rot, e);
        const s = lerp(p.scale, exp.scale, e);
        el.style.transform = `translate3d(${x}px, ${y}%, 0) rotate(${r}deg) scale(${s})`;
      }

      setLayer(layerHerbs,       packed.herbs,   exploded.herbs);
      setLayer(layerCheese,      packed.cheese,  exploded.cheese);
      setLayer(layerCheeseHerbs, packed.herbs,   exploded.herbs);
      setLayer(layerPaneer,      packed.paneer,  exploded.paneer);
      setLayer(layerBeans,       packed.beans,   exploded.beans);
      setLayer(layerCornVeg,     packed.corn,    exploded.corn);
      setLayer(layerCucumber,    packed.cuke,    exploded.cuke);
      setLayer(layerTomatoes,    packed.tomato,  exploded.tomato);
      setLayer(layerLettuce,     packed.lettuce, exploded.lettuce);

      callouts.forEach(c => {
        const op = Math.max(0, Math.min(1, (e - 0.25) / 0.45));
        c.style.opacity = `${op}`;
        c.style.pointerEvents = op > 0.8 ? 'auto' : 'none';
      });
    }

    onScrollFallback();
    window.addEventListener('scroll', onScrollFallback, { passive: true });
    window.addEventListener('resize', onScrollFallback, { passive: true });
  }

  // Subtle 3D mouse perspective tilt on stage (desktop only)
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

const GOOGLE_REVIEWS_MAPS_URL = 'https://search.google.com/local/reviews?placeid=ChIJG3xHXPkXrj4R-1GN8ukQO_A';
const GOOGLE_MAPS_LOCATION_URL = 'https://www.google.com/maps/search/?api=1&query=Kaazos+Indiranagar+Bengaluru';

function renderMinimalReviewCard(review) {
  const author = review.author_name || review.author || 'Kaazos Patron';
  const tag = review.tag || review.relative_time_description || 'verified diner';
  const text = (review.text || review.quote || '').trim().replace(/^["“]|["”]$/g, '');
  const starsCount = Math.min(5, Math.max(1, review.rating || 5));

  const starSvg = `<svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
  const starsHtml = Array(starsCount).fill(starSvg).join('');

  return `
    <div class="google-review-card" tabindex="0" title="Double-click to verify on Google Reviews">
      <div class="review-top-row">
        <div class="mrc-stars" aria-label="${starsCount} out of 5 stars">
          ${starsHtml}
        </div>
        <a href="${GOOGLE_REVIEWS_MAPS_URL}" target="_blank" rel="noopener noreferrer" class="google-verified-pill" title="View review on Google Maps">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="#4285F4"><path d="M21.35 11.1h-9.17v2.73h5.27c-.23 1.2-1.39 3.51-5.27 3.51-3.17 0-5.76-2.59-5.76-5.76s2.59-5.76 5.76-5.76c1.8 0 3.01.77 3.7 1.43l2.16-2.08C20.47 3.53 17.5 2 12.18 2 6.56 2 2 6.56 2 12.18s4.56 10.18 10.18 10.18c5.87 0 9.77-4.13 9.77-9.95 0-.67-.07-1.18-.18-1.31z"/></svg>
          <span>Google Verified ↗</span>
        </a>
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
      card.setAttribute('tabindex', '0');
      card.setAttribute('title', 'Double-click to open Google Reviews');

      // Inject Google Verified chip header if not present
      const stars = card.querySelector('.mrc-stars');
      if (stars && !card.querySelector('.google-verified-pill')) {
        const topRow = document.createElement('div');
        topRow.className = 'review-top-row';
        stars.parentNode.insertBefore(topRow, stars);
        topRow.appendChild(stars);

        const pill = document.createElement('a');
        pill.href = GOOGLE_REVIEWS_MAPS_URL;
        pill.target = '_blank';
        pill.rel = 'noopener noreferrer';
        pill.className = 'google-verified-pill';
        pill.title = 'View authentic reviews on Google';
        pill.innerHTML = `
          <svg width="12" height="12" viewBox="0 0 24 24" fill="#4285F4"><path d="M21.35 11.1h-9.17v2.73h5.27c-.23 1.2-1.39 3.51-5.27 3.51-3.17 0-5.76-2.59-5.76-5.76s2.59-5.76 5.76-5.76c1.8 0 3.01.77 3.7 1.43l2.16-2.08C20.47 3.53 17.5 2 12.18 2 6.56 2 2 6.56 2 12.18s4.56 10.18 10.18 10.18c5.87 0 9.77-4.13 9.77-9.95 0-.67-.07-1.18-.18-1.31z"/></svg>
          <span>Google Verified ↗</span>
        `;
        topRow.appendChild(pill);
      }

      // Double-click anywhere on the card to open Google Reviews
      card.addEventListener('dblclick', () => {
        window.open(GOOGLE_REVIEWS_MAPS_URL, '_blank', 'noopener,noreferrer');
      });

      // Press Enter to open Google Reviews
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          window.open(GOOGLE_REVIEWS_MAPS_URL, '_blank', 'noopener,noreferrer');
        }
      });

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
function initFloatingSocialDock() {
  const toggle = document.getElementById('floatDockToggle');
  const dock = document.getElementById('floatingDock') || document.querySelector('.floating-social-dock');
  const backdrop = document.getElementById('dockBackdrop');
  if (!toggle || !dock) return;

  // Prevent duplicate event listener registration
  if (toggle.dataset.dockInitialized === 'true') return;
  toggle.dataset.dockInitialized = 'true';

  function closeDock() {
    dock.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    if (backdrop) backdrop.classList.remove('is-open');
  }

  function openDock() {
    dock.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    if (backdrop) backdrop.classList.add('is-open');
  }

  function toggleDock(e) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const isOpen = dock.classList.contains('is-open');
    if (isOpen) {
      closeDock();
    } else {
      openDock();
    }
  }

  toggle.addEventListener('click', toggleDock);

  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      e.stopPropagation();
      closeDock();
    });
  }

  // Close when tapping / clicking anywhere outside the dock on the document
  document.addEventListener('click', (e) => {
    if (dock.classList.contains('is-open') && !dock.contains(e.target)) {
      closeDock();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && dock.classList.contains('is-open')) {
      closeDock();
    }
  });

  // Auto-close when clicking any action link
  dock.querySelectorAll('.float-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setTimeout(closeDock, 300);
    });
  });
}

// Fallback auto-invocation if script executes before/after DOMContentLoaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initFloatingSocialDock);
} else {
  initFloatingSocialDock();
}

/* ==========================================================================
   OFFICIAL IN-STORE MENU LIGHTBOX & TABS LOGIC
   ========================================================================== */
const MENU_BOARDS = [
  {
    tag: 'Board 01',
    title: 'Build Your Menu (Bowls, Wraps, Nachos & Tacos)',
    desc: 'Choose your base (Rice Bowl, Burrito Wrap, Nachos Bowl, Salad Bowl), signature fillings, extras, protein bowls, loaded nachos, and crispy tacos.',
    image: 'assets/images/menu-card-1.jpg'
  },
  {
    tag: 'Board 02',
    title: 'Salads, Oatmeal Bowls, Fruits & Quesadillas',
    desc: 'Exotic salads (Mexican, Caesar, Avocado & Orange), egg protein salads, royal fruit harvest, oatmeal bowls, and golden cheesy quesadillas.',
    image: 'assets/images/menu-card-3.jpg'
  },
  {
    tag: 'Board 03',
    title: 'Appetizers, Juices, Shakes & Desserts',
    desc: 'Salted & peri-peri fries, loaded chicken fries, tenders, pressed juices, mocktails, Oreo Chocodilla, fruit smoothies, and indulgent thickshakes.',
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

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initInstoreMenuTabs);
} else {
  initInstoreMenuTabs();
}


