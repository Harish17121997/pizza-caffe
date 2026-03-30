// types: 'veg' | 'egg' | 'nonveg'

export const CATEGORIES = [
  'All', 'Sandwiches', 'Burgers', 'Pizza',
  'Hot Beverages', 'Cold Beverages', 'Choco Cream',
  'Mastani', 'Milkshakes', 'Maggi', 'Snacks', 'Brownie', 'Ice Cream'
]

export const MENU = [
  // ── SANDWICHES
  { cat: 'Sandwiches', type: 'veg',    name: 'Veg Sandwich',                          price: 90,  desc: 'Onion, Tomato, Cucumber, Capsicum' },
  { cat: 'Sandwiches', type: 'veg',    name: 'Veg Cheese Sandwich',                   price: 100, desc: 'Cheese, Onion, Tomato, Cucumber, Capsicum' },
  { cat: 'Sandwiches', type: 'veg',    name: 'Spicy Cheese Sandwich',                 price: 100, desc: 'Cheese, Special Spicy Sauce, Onion, Tomato, Cucumber, Capsicum' },
  { cat: 'Sandwiches', type: 'veg',    name: 'Schezwan Cheese Sandwich',              price: 100, desc: 'Cheese, Special Schezwan Sauce, Onion, Tomato, Cucumber, Capsicum' },
  { cat: 'Sandwiches', type: 'veg',    name: 'Chocolate Cheese Sandwich',             price: 90,  desc: 'Brown Bread, Chocolate, Cheese' },
  { cat: 'Sandwiches', type: 'veg',    name: 'Paneer Cheese Sandwich',                price: 110, desc: 'Cheese, Paneer, Onion, Tomato, Capsicum' },
  { cat: 'Sandwiches', type: 'veg',    name: 'Corn Cheese Sandwich',                  price: 110, desc: 'Cheese, Sweet-Corn, Onion, Tomato, Capsicum' },
  { cat: 'Sandwiches', type: 'veg',    name: 'Mushroom Cheese Sandwich',              price: 110, desc: 'Cheese, Mushroom, Onion, Tomato, Capsicum' },
  { cat: 'Sandwiches', type: 'veg',    name: 'Bombay Club Cheese Sandwich',           price: 120, desc: 'Bombay Masala, Cheese, Onion, Tomato, Capsicum' },
  { cat: 'Sandwiches', type: 'veg',    name: 'Cheese Garlic Sandwich',                price: 100, desc: 'Cheese, Chopped Garlic, Garlic Sauce' },
  { cat: 'Sandwiches', type: 'veg',    name: 'Cheese Chilli Toast',                   price: 100, desc: 'Cheese, Chilli Flakes, Oregano' },
  { cat: 'Sandwiches', type: 'egg',    name: 'Egg Omlate Sandwich',                   price: 110, desc: 'Egg Omlate, Onion, Tomato' },
  { cat: 'Sandwiches', type: 'egg',    name: 'Egg Cheese Omlate Sandwich',            price: 120, desc: 'Egg Omlate, Cheese, Onion, Tomato' },
  { cat: 'Sandwiches', type: 'egg',    name: 'Mushroom Egg Omlate Sandwich',          price: 110, desc: 'Egg Omlate, Mushroom, Onion, Tomato' },
  { cat: 'Sandwiches', type: 'egg',    name: 'Mushroom Cheese Egg Omlate Sandwich',   price: 120, desc: 'Egg Omlate, Mushrooms, Cheese, Onion, Tomato' },
  { cat: 'Sandwiches', type: 'nonveg', name: 'Chicken Sandwich',                      price: 110, desc: 'Chicken, Onion' },
  { cat: 'Sandwiches', type: 'nonveg', name: 'Chicken Cheese Sandwich',               price: 120, desc: 'Chicken, Cheese, Onion' },
  { cat: 'Sandwiches', type: 'nonveg', name: 'Chicken Khima Sandwich',                price: 120, desc: 'Chicken Khima, Capsicum, Onion' },

  // ── BURGERS
  { cat: 'Burgers', type: 'veg',    name: 'Veg Burger',              price: 100, desc: 'Burger Tikki, Onions, Tomato' },
  { cat: 'Burgers', type: 'veg',    name: 'Veg Cheese Burger',       price: 110, desc: 'Cheese, Burger Tikki, Onions, Tomato' },
  { cat: 'Burgers', type: 'veg',    name: 'Aloo Tikki Cheese Burger',price: 110, desc: 'Aloo Tikki, Cheese, Onions, Tomato' },
  { cat: 'Burgers', type: 'veg',    name: 'Herb Chilli Cheese Burger',price:110, desc: 'Herbs Tikki, Cheese, Onions, Tomato' },
  { cat: 'Burgers', type: 'veg',    name: 'Schezwan Cheese Burger',  price: 110, desc: 'Schezwan Burger Tikki, Cheese, Onions, Tomato' },
  { cat: 'Burgers', type: 'veg',    name: 'Paneer Cheese Burger',    price: 120, desc: 'Paneer Tikki, Cheese, Onion, Tomato' },
  { cat: 'Burgers', type: 'veg',    name: 'Spicy Cheese Burger',     price: 110, desc: 'Spicy Tikki, Cheese, Onion, Tomato' },
  { cat: 'Burgers', type: 'veg',    name: 'Double Tikki Veg Burger', price: 150, desc: 'Double Veg Tikki, Cheese, Onions, Tomato' },
  { cat: 'Burgers', type: 'nonveg', name: 'Chicken Burger',          price: 120, desc: 'Chicken Tikki, Onion' },
  { cat: 'Burgers', type: 'nonveg', name: 'Chicken Cheese Burger',   price: 130, desc: 'Chicken Tikki, Cheese, Onions' },
  { cat: 'Burgers', type: 'nonveg', name: 'Double Tikki Burger',     price: 170, desc: 'Double Chicken Tikki, Cheese, Onions, Tomato' },

  // ── PIZZA
  { cat: 'Pizza', type: 'veg',    name: 'Margarita Pizza',           price: 180, desc: 'Mozzarella Cheese' },
  { cat: 'Pizza', type: 'veg',    name: 'Veg Cheese Pizza',          price: 200, desc: 'Mozzarella Cheese, Capsicum, Tomato, Onions' },
  { cat: 'Pizza', type: 'veg',    name: 'Veg Cheese Corn Pizza',     price: 210, desc: 'Mozzarella Cheese, Sweet-Corn, Capsicum, Tomato, Jalapeno, Onions' },
  { cat: 'Pizza', type: 'veg',    name: 'Peri-Peri Paneer Pizza',    price: 220, desc: 'Mozzarella Cheese, Onion, Capsicum, Black Olives, Paneer, Peri-Peri Sprinklers' },
  { cat: 'Pizza', type: 'veg',    name: 'Veg Schezwan Cheese Pizza', price: 210, desc: 'Mozzarella Cheese, Schezwan Sauce, Tomato, Capsicum, Onions, Black Olives' },
  { cat: 'Pizza', type: 'veg',    name: 'Veg Cheese Paneer Pizza',   price: 210, desc: 'Mozzarella Cheese, Paneer, Onions, Capsicum, Tomato, Jalapeno, Black Olives' },
  { cat: 'Pizza', type: 'veg',    name: 'Veg Mushroom Cheese Pizza', price: 210, desc: 'Mozzarella Cheese, Mushrooms, Onions, Capsicum, Black Olives' },
  { cat: 'Pizza', type: 'veg',    name: 'Tandoor Paneer Cheese Pizza',price:210, desc: 'Mozzarella Cheese, Tandoor Paneer, Onions, Black Olives, Tomato, Capsicum' },
  { cat: 'Pizza', type: 'nonveg', name: 'Chicken Kheema Pizza',      price: 210, desc: 'Mozzarella Cheese, Onions, Capsicum, Chicken Kheema' },
  { cat: 'Pizza', type: 'nonveg', name: 'Chicken Tikka Pizza',       price: 230, desc: 'Chicken Tikka, Mozzarella Cheese, Onions, Tomato' },

  // ── HOT BEVERAGES
  { cat: 'Hot Beverages', type: 'veg', name: 'Hot Coffee',      price: 30, desc: 'Classic hot brewed coffee' },
  { cat: 'Hot Beverages', type: 'veg', name: 'Black Coffee',    price: 30, desc: 'Pure black, no milk' },
  { cat: 'Hot Beverages', type: 'veg', name: 'Hot Chocolate',   price: 50, desc: 'Rich creamy hot chocolate' },
  { cat: 'Hot Beverages', type: 'veg', name: 'Hot Moka',        price: 50, desc: 'Mocha flavoured hot coffee' },
  { cat: 'Hot Beverages', type: 'veg', name: 'Hot Bournvita',   price: 50, desc: 'Warm comforting Bournvita' },

  // ── COLD BEVERAGES
  { cat: 'Cold Beverages', type: 'veg', name: 'Cold Coffee',                      price: 50, desc: 'Classic chilled coffee' },
  { cat: 'Cold Beverages', type: 'veg', name: 'Cold Coffee (Thick)',              price: 45, desc: 'Extra thick cold coffee blend' },
  { cat: 'Cold Beverages', type: 'veg', name: 'Cold Coffee Crunch',               price: 60, desc: 'Cold coffee with a crunchy twist' },
  { cat: 'Cold Beverages', type: 'veg', name: 'Cold Coffee Ice-Cream',            price: 65, desc: 'Cold coffee topped with ice cream' },
  { cat: 'Cold Beverages', type: 'veg', name: 'White Cold Coffee',                price: 65, desc: 'Milky white cold coffee' },
  { cat: 'Cold Beverages', type: 'veg', name: 'Oreo Cold Coffee',                 price: 65, desc: 'Cold coffee blended with Oreo' },
  { cat: 'Cold Beverages', type: 'veg', name: 'Moka Cold Coffee',                 price: 60, desc: 'Mocha cold coffee' },
  { cat: 'Cold Beverages', type: 'veg', name: 'Moka Cold Coffee with Crush',      price: 65, desc: 'Mocha cold coffee with crush' },
  { cat: 'Cold Beverages', type: 'veg', name: 'Moka Cold Coffee with Ice-Cream',  price: 70, desc: 'Mocha cold coffee with ice cream' },
  { cat: 'Cold Beverages', type: 'veg', name: 'Irish Cold Coffee',                price: 75, desc: 'Irish style cold coffee' },
  { cat: 'Cold Beverages', type: 'veg', name: 'Irish Cold Coffee with Crush',     price: 85, desc: 'Irish cold coffee with crush' },
  { cat: 'Cold Beverages', type: 'veg', name: 'Irish Cold Coffee with Ice-Cream', price: 95, desc: 'Irish cold coffee with ice cream scoop' },
  { cat: 'Cold Beverages', type: 'veg', name: 'Lemon Ice Tea',                    price: 50, desc: 'Refreshing lemon iced tea' },
  { cat: 'Cold Beverages', type: 'veg', name: 'Peach Ice Tea',                    price: 50, desc: 'Sweet peach iced tea' },

  // ── CHOCO CREAM
  { cat: 'Choco Cream', type: 'veg', name: 'Choco Cream M (CAD-M)',    price: 90, desc: 'Medium Cadbury chocolate cream drink' },
  { cat: 'Choco Cream', type: 'veg', name: 'Choco Cream B (CAD-B)',    price: 95, desc: 'Big Cadbury chocolate cream drink' },
  { cat: 'Choco Cream', type: 'veg', name: 'White Choco Cream',        price: 95, desc: 'White chocolate cream' },
  { cat: 'Choco Cream', type: 'veg', name: 'Ferrero Choco Cream',      price: 95, desc: 'Ferrero Rocher chocolate cream' },
  { cat: 'Choco Cream', type: 'veg', name: 'Kit-Kat Choco Cream',      price: 95, desc: 'Kit-Kat chocolate cream' },

  // ── MASTANI
  { cat: 'Mastani', type: 'veg', name: 'Mango Mastani',    price: 90, desc: 'Thick mango ice cream mastani' },
  { cat: 'Mastani', type: 'veg', name: 'Strawberry Mastani', price: 90, desc: 'Strawberry ice cream mastani' },
  { cat: 'Mastani', type: 'veg', name: 'Dry Fruit Mastani',  price: 90, desc: 'Rich dry fruit topped mastani' },

  // ── MILKSHAKES
  { cat: 'Milkshakes', type: 'veg', name: 'Vanilla Shake',         price: 50, desc: 'Classic vanilla milkshake' },
  { cat: 'Milkshakes', type: 'veg', name: 'Strawberry Shake',      price: 50, desc: 'Fresh strawberry milkshake' },
  { cat: 'Milkshakes', type: 'veg', name: 'Pista Shake',           price: 50, desc: 'Pistachio flavoured milkshake' },
  { cat: 'Milkshakes', type: 'veg', name: 'Butterscotch Shake',    price: 60, desc: 'Creamy butterscotch milkshake' },
  { cat: 'Milkshakes', type: 'veg', name: 'Black Current Shake',   price: 60, desc: 'Black currant milkshake' },
  { cat: 'Milkshakes', type: 'veg', name: 'Mango Shake',           price: 60, desc: 'Fresh mango milkshake' },
  { cat: 'Milkshakes', type: 'veg', name: 'Dry Fruit Shake',       price: 60, desc: 'Premium dry fruit milkshake' },
  { cat: 'Milkshakes', type: 'veg', name: 'Oreo Shake',            price: 50, desc: 'Oreo cookie milkshake' },
  { cat: 'Milkshakes', type: 'veg', name: 'Oreo Chocolate Shake',  price: 60, desc: 'Double Oreo chocolate shake' },
  { cat: 'Milkshakes', type: 'veg', name: 'Browni Shake',          price: 70, desc: 'Brownie blended milkshake' },
  { cat: 'Milkshakes', type: 'veg', name: 'CC Shot',               price: 50, desc: 'Cold coffee shot shake' },
  { cat: 'Milkshakes', type: 'veg', name: 'Choco Shake',           price: 50, desc: 'Classic chocolate milkshake' },
  { cat: 'Milkshakes', type: 'veg', name: 'Choco Shake with Crush',price: 60, desc: 'Chocolate shake with crush' },

  // ── MAGGI
  { cat: 'Maggi', type: 'veg',    name: 'Plain Maggi',        price: 60, desc: 'Classic plain Maggi noodles' },
  { cat: 'Maggi', type: 'veg',    name: 'Tadka Maggi',        price: 70, desc: 'Maggi with Indian tadka' },
  { cat: 'Maggi', type: 'veg',    name: 'Corn Cheese Maggi',  price: 80, desc: 'Maggi with sweet corn and cheese' },
  { cat: 'Maggi', type: 'veg',    name: 'Paneer Cheese Maggi',price: 80, desc: 'Maggi with paneer and cheese' },
  { cat: 'Maggi', type: 'veg',    name: 'Masala Maggi',       price: 80, desc: 'Spicy masala Maggi' },
  { cat: 'Maggi', type: 'egg',    name: 'Egg Maggi',          price: 90, desc: 'Maggi with egg' },
  { cat: 'Maggi', type: 'nonveg', name: 'Chicken Maggi',      price: 90, desc: 'Maggi with chicken pieces' },

  // ── SNACKS
  { cat: 'Snacks', type: 'veg',    name: 'French Fries',             price: 90,  desc: 'Crispy golden french fries' },
  { cat: 'Snacks', type: 'veg',    name: 'Masala Fries',             price: 100, desc: 'French fries with masala seasoning' },
  { cat: 'Snacks', type: 'veg',    name: 'Peri Peri Fries',          price: 110, desc: 'Fries with peri peri spice' },
  { cat: 'Snacks', type: 'veg',    name: 'Cheese Fries',             price: 120, desc: 'Fries loaded with cheese sauce' },
  { cat: 'Snacks', type: 'veg',    name: 'Aloo Tikki',               price: 90,  desc: 'Classic spiced potato patty' },
  { cat: 'Snacks', type: 'nonveg', name: 'Chicken Popcorn (8 pcs)',  price: 110, desc: '8 pieces of crispy chicken popcorn' },
  { cat: 'Snacks', type: 'nonveg', name: 'Chicken Nuggets (8 pcs)',  price: 110, desc: '8 pieces of chicken nuggets' },

  // ── BROWNIE
  { cat: 'Brownie', type: 'veg', name: 'American Fudge Brownie',                              price: 130, desc: 'Rich, dense American fudge brownie' },
  { cat: 'Brownie', type: 'veg', name: 'American Fudge Brownie with Ice-Cream & Choco Sauce', price: 150, desc: 'Brownie topped with ice cream and hot chocolate sauce' },

  // ── ICE CREAM
  { cat: 'Ice Cream', type: 'veg', name: 'Vanilla',         price: 50, desc: 'With vanilla cone ₹50 / chocolate cone ₹55' },
  { cat: 'Ice Cream', type: 'veg', name: 'Strawberry',      price: 50, desc: 'With vanilla cone ₹50 / chocolate cone ₹55' },
  { cat: 'Ice Cream', type: 'veg', name: 'Pista',           price: 50, desc: 'With vanilla cone ₹50 / chocolate cone ₹55' },
  { cat: 'Ice Cream', type: 'veg', name: 'Butterscotch',    price: 60, desc: 'With vanilla cone ₹60 / chocolate cone ₹65' },
  { cat: 'Ice Cream', type: 'veg', name: 'Chocolate',       price: 70, desc: 'With vanilla cone ₹70 / chocolate cone ₹75' },
  { cat: 'Ice Cream', type: 'veg', name: 'Mango',           price: 70, desc: 'With vanilla cone ₹70 / chocolate cone ₹75' },
  { cat: 'Ice Cream', type: 'veg', name: 'Anjeer Badam',    price: 70, desc: 'Fig & almond — vanilla cone ₹70 / choc ₹75' },
  { cat: 'Ice Cream', type: 'veg', name: 'Kaju Kashmish',   price: 70, desc: 'Cashew & raisin — vanilla ₹70 / choc ₹75' },
  { cat: 'Ice Cream', type: 'veg', name: 'Rajbhog',         price: 70, desc: 'With vanilla cone ₹70 / chocolate cone ₹75' },
  { cat: 'Ice Cream', type: 'veg', name: 'American Dryfruit',price:70, desc: 'With vanilla cone ₹70 / chocolate cone ₹75' },
  { cat: 'Ice Cream', type: 'veg', name: 'Gulkand',         price: 70, desc: 'Rose petal jam — vanilla ₹70 / choc ₹75' },
  { cat: 'Ice Cream', type: 'veg', name: 'Black Current',   price: 70, desc: 'With vanilla cone ₹70 / chocolate cone ₹75' },
]
