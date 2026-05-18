const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, 'ecom.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening SQLite database:', err.message);
  } else {
    console.log('Connected to SQLite database at:', dbPath);
  }
});

// Helper to run query with promise
function run(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.run(sql, params, function (err) {
      if (err) reject(err);
      else resolve(this);
    });
  });
}

// Helper to get multiple rows
function all(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.all(sql, params, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
}

// Helper to get single row
function get(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.get(sql, params, (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });
}

// Initialize tables
async function initDb() {
  await run(`
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      category TEXT NOT NULL,
      price REAL NOT NULL,
      sale_price REAL,
      promo_badge TEXT,
      description TEXT NOT NULL,
      colors TEXT NOT NULL, -- JSON array of color names
      sizes TEXT NOT NULL,  -- JSON array of sizes
      images TEXT NOT NULL, -- JSON object: { "ColorName": "SVG_or_Image_Data_or_Path" }
      stock INTEGER DEFAULT 10
    )
  `);

  await run(`
    CREATE TABLE IF NOT EXISTS orders (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      customer_name TEXT NOT NULL,
      customer_email TEXT NOT NULL,
      items TEXT NOT NULL, -- JSON array of items: [{id, name, color, size, quantity, price}]
      total_price REAL NOT NULL,
      status TEXT DEFAULT 'pending',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Check if products exist, if not seed them
  const countRow = await get('SELECT COUNT(*) as count FROM products');
  if (countRow.count === 0) {
    console.log('Seeding initial premium products...');
    const initialProducts = [
      {
        name: 'Kinetic Zegama-X',
        category: 'Running',
        price: 160.00,
        sale_price: 129.99,
        promo_badge: 'Just In',
        description: 'Engineered for the absolute terrain. Features a rugged high-grip traction pattern, dynamic responsive foam, and dual-density engineered mesh for extreme stability and endurance.',
        colors: JSON.stringify(['Alpine Teal', 'Crimson Red', 'Triple Black']),
        sizes: JSON.stringify(['US 8', 'US 8.5', 'US 9', 'US 9.5', 'US 10', 'US 10.5', 'US 11', 'US 12']),
        images: JSON.stringify({
          'Alpine Teal': 'teal',
          'Crimson Red': 'red',
          'Triple Black': 'black'
        }),
        stock: 12
      },
      {
        name: 'Aura Zoom Max',
        category: 'Running',
        price: 180.00,
        sale_price: null,
        promo_badge: 'Best Seller',
        description: 'The pinnacle of marathon racing comfort. Featuring our thickest responsive cushion core, structural energy carbon-fiber plate, and seamless micro-weave upper for record-breaking speed.',
        colors: JSON.stringify(['Volt Green', 'Platinum Pink', 'Pure White']),
        sizes: JSON.stringify(['US 8', 'US 9', 'US 9.5', 'US 10', 'US 10.5', 'US 11', 'US 11.5', 'US 12']),
        images: JSON.stringify({
          'Volt Green': 'volt',
          'Platinum Pink': 'pink',
          'Pure White': 'white'
        }),
        stock: 8
      },
      {
        name: 'Trailbreaker Shell Jacket',
        category: 'Apparel',
        price: 220.00,
        sale_price: 189.99,
        promo_badge: 'Recycled Materials',
        description: 'Storm-proof ventilation for high-exertion training. Built with 100% recycled high-tensile ripstop nylon, fully taped internal seams, and an athletic ergonomic hood structure.',
        colors: JSON.stringify(['Obsidian Blue', 'Storm Grey', 'Alpine Green']),
        sizes: JSON.stringify(['S', 'M', 'L', 'XL']),
        images: JSON.stringify({
          'Obsidian Blue': 'obsidian',
          'Storm Grey': 'grey',
          'Alpine Green': 'green'
        }),
        stock: 15
      },
      {
        name: 'VaporVent Active Tee',
        category: 'Apparel',
        price: 45.00,
        sale_price: null,
        promo_badge: 'New Arrival',
        description: 'Vapor-wicking hyper-breathable training tee. Engineered with zoned cooling patterns, flat-locked friction-less seams, and anti-odor high-durability synthetic microfibers.',
        colors: JSON.stringify(['Pure Black', 'Cloud Pink', 'Slate Blue']),
        sizes: JSON.stringify(['XS', 'S', 'M', 'L', 'XL']),
        images: JSON.stringify({
          'Pure Black': 'black',
          'Cloud Pink': 'pink',
          'Slate Blue': 'slate'
        }),
        stock: 20
      },
      {
        name: 'AeroShield Running Cap',
        category: 'Accessories',
        price: 30.00,
        sale_price: null,
        promo_badge: 'Member Exclusive',
        description: 'Weightless peak protection. Aerated side-mesh paneling, moisture-absorbency inner sweatband, and quick-adjust low-profile rear clasp designed to endure high winds and heat.',
        colors: JSON.stringify(['Pure White', 'Triple Black', 'Neon Volt']),
        sizes: JSON.stringify(['One Size']),
        images: JSON.stringify({
          'Pure White': 'white',
          'Triple Black': 'black',
          'Neon Volt': 'volt'
        }),
        stock: 30
      },
      {
        name: 'Kinetic Utility Vest',
        category: 'Accessories',
        price: 110.00,
        sale_price: 89.99,
        promo_badge: 'Highly Technical',
        description: 'The ultimate storage and hydration companion for ultra-distance runners. Featuring dual front flask pockets, secure zippered key compartments, and micro-mesh back cooling.',
        colors: JSON.stringify(['Alpine Green', 'Desert Stone', 'Midnight Black']),
        sizes: JSON.stringify(['S/M', 'L/XL']),
        images: JSON.stringify({
          'Alpine Green': 'green',
          'Desert Stone': 'stone',
          'Midnight Black': 'black'
        }),
        stock: 5
      }
    ];

    for (const p of initialProducts) {
      await run(
        `INSERT INTO products (name, category, price, sale_price, promo_badge, description, colors, sizes, images, stock)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [p.name, p.category, p.price, p.sale_price, p.promo_badge, p.description, p.colors, p.sizes, p.images, p.stock]
      );
    }
    console.log('Seeded products successfully.');
  }
}

// Get filtered and sorted products
async function getProducts(filters = {}) {
  let sql = 'SELECT * FROM products WHERE 1=1';
  const params = [];

  if (filters.category) {
    sql += ' AND category = ?';
    params.push(filters.category);
  }

  if (filters.search) {
    sql += ' AND (name LIKE ? OR description LIKE ? OR category LIKE ?)';
    const searchParam = `%${filters.search}%`;
    params.push(searchParam, searchParam, searchParam);
  }

  if (filters.minPrice) {
    sql += ' AND COALESCE(sale_price, price) >= ?';
    params.push(parseFloat(filters.minPrice));
  }

  if (filters.maxPrice) {
    sql += ' AND COALESCE(sale_price, price) <= ?';
    params.push(parseFloat(filters.maxPrice));
  }

  if (filters.sortBy) {
    if (filters.sortBy === 'price-low') {
      sql += ' ORDER BY COALESCE(sale_price, price) ASC';
    } else if (filters.sortBy === 'price-high') {
      sql += ' ORDER BY COALESCE(sale_price, price) DESC';
    } else if (filters.sortBy === 'name') {
      sql += ' ORDER BY name ASC';
    } else {
      sql += ' ORDER BY id DESC'; // Default latest
    }
  } else {
    sql += ' ORDER BY id DESC';
  }

  return await all(sql, params);
}

// Get single product
async function getProductById(id) {
  return await get('SELECT * FROM products WHERE id = ?', [id]);
}

// Add product
async function createProduct(product) {
  const result = await run(
    `INSERT INTO products (name, category, price, sale_price, promo_badge, description, colors, sizes, images, stock)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      product.name,
      product.category,
      parseFloat(product.price),
      product.sale_price ? parseFloat(product.sale_price) : null,
      product.promo_badge || null,
      product.description,
      JSON.stringify(product.colors || []),
      JSON.stringify(product.sizes || []),
      JSON.stringify(product.images || {}),
      parseInt(product.stock || 10)
    ]
  );
  return result.lastID;
}

// Delete product
async function deleteProduct(id) {
  return await run('DELETE FROM products WHERE id = ?', [id]);
}

// Create order
async function createOrder(order) {
  const result = await run(
    `INSERT INTO orders (customer_name, customer_email, items, total_price, status)
     VALUES (?, ?, ?, ?, 'pending')`,
    [
      order.customer_name,
      order.customer_email,
      JSON.stringify(order.items),
      parseFloat(order.total_price)
    ]
  );
  return result.lastID;
}

// Get all orders
async function getOrders() {
  return await all('SELECT * FROM orders ORDER BY id DESC');
}

module.exports = {
  initDb,
  getProducts,
  getProductById,
  createProduct,
  deleteProduct,
  createOrder,
  getOrders
};
