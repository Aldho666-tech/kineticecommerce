const path = require('path');

let sqlite3 = null;
let db = null;
const isVercel = process.env.VERCEL || process.env.NOW_BUILDER;

// Ephemeral in-memory database storage for Vercel serverless compatibility
let memoryProducts = [];
let memoryOrders = [];
let nextProductId = 1;
let nextOrderId = 1;

// Dynamic loader: bypasses native compiled binary compilation limits in serverless environments like Vercel
try {
  if (isVercel) {
    throw new Error("Running in a Vercel Serverless environment. Bypassing native sqlite3 module require to prevent binary compilation crash.");
  }
  sqlite3 = require('sqlite3').verbose();
  const dbPath = path.resolve(__dirname, 'ecom.db');
  db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
      console.error('Error opening SQLite database:', err.message);
    } else {
      console.log('Connected to SQLite database at:', dbPath);
    }
  });
} catch (e) {
  console.log("Using dynamic JSON/In-Memory database fallback:", e.message);
}

// Helper to run query with promise (SQLite mode only)
function run(sql, params = []) {
  return new Promise((resolve, reject) => {
    if (!db) return reject(new Error("Database not connected."));
    db.run(sql, params, function (err) {
      if (err) reject(err);
      else resolve(this);
    });
  });
}

// Helper to get multiple rows (SQLite mode only)
function all(sql, params = []) {
  return new Promise((resolve, reject) => {
    if (!db) return reject(new Error("Database not connected."));
    db.all(sql, params, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
}

// Helper to get single row (SQLite mode only)
function get(sql, params = []) {
  return new Promise((resolve, reject) => {
    if (!db) return reject(new Error("Database not connected."));
    db.get(sql, params, (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });
}

// Default premium products seeder config
function getInitialProducts() {
  return [
    {
      name: 'Marshal Zegama-X',
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
      name: 'Marshal Utility Vest',
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
}

// Initialize tables
async function initDb() {
  if (db) {
    await run(`
      CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        category TEXT NOT NULL,
        price REAL NOT NULL,
        sale_price REAL,
        promo_badge TEXT,
        description TEXT NOT NULL,
        colors TEXT NOT NULL,
        sizes TEXT NOT NULL,
        images TEXT NOT NULL,
        stock INTEGER DEFAULT 10
      )
    `);

    await run(`
      CREATE TABLE IF NOT EXISTS orders (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        customer_name TEXT NOT NULL,
        customer_email TEXT NOT NULL,
        items TEXT NOT NULL,
        total_price REAL NOT NULL,
        status TEXT DEFAULT 'pending',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    const countRow = await get('SELECT COUNT(*) as count FROM products');
    if (countRow.count === 0) {
      console.log('Seeding initial premium products...');
      const initialProducts = getInitialProducts();
      for (const p of initialProducts) {
        await run(
          `INSERT INTO products (name, category, price, sale_price, promo_badge, description, colors, sizes, images, stock)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [p.name, p.category, p.price, p.sale_price, p.promo_badge, p.description, p.colors, p.sizes, p.images, p.stock]
        );
      }
      console.log('Seeded products successfully.');
    }
  } else {
    // In-memory fallback
    if (memoryProducts.length === 0) {
      console.log('Seeding in-memory products on Vercel serverless...');
      const seeded = getInitialProducts().map(p => ({
        id: nextProductId++,
        name: p.name,
        category: p.category,
        price: p.price,
        sale_price: p.sale_price,
        promo_badge: p.promo_badge,
        description: p.description,
        colors: p.colors,
        sizes: p.sizes,
        images: p.images,
        stock: p.stock
      }));
      memoryProducts = seeded;
      console.log('Seeded in-memory products successfully.');
    }
  }
}

// Get filtered and sorted products
async function getProducts(filters = {}) {
  if (db) {
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
        sql += ' ORDER BY id DESC';
      }
    } else {
      sql += ' ORDER BY id DESC';
    }

    return await all(sql, params);
  } else {
    // In-memory search & filter implementation
    let result = [...memoryProducts];

    if (filters.category) {
      result = result.filter(p => p.category === filters.category);
    }

    if (filters.search) {
      const query = filters.search.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.description.toLowerCase().includes(query) || 
        p.category.toLowerCase().includes(query)
      );
    }

    if (filters.minPrice) {
      result = result.filter(p => {
        const actualPrice = p.sale_price !== null && p.sale_price !== undefined ? p.sale_price : p.price;
        return actualPrice >= parseFloat(filters.minPrice);
      });
    }

    if (filters.maxPrice) {
      result = result.filter(p => {
        const actualPrice = p.sale_price !== null && p.sale_price !== undefined ? p.sale_price : p.price;
        return actualPrice <= parseFloat(filters.maxPrice);
      });
    }

    if (filters.sortBy) {
      if (filters.sortBy === 'price-low') {
        result.sort((a, b) => {
          const priceA = a.sale_price !== null && a.sale_price !== undefined ? a.sale_price : a.price;
          const priceB = b.sale_price !== null && b.sale_price !== undefined ? b.sale_price : b.price;
          return priceA - priceB;
        });
      } else if (filters.sortBy === 'price-high') {
        result.sort((a, b) => {
          const priceA = a.sale_price !== null && a.sale_price !== undefined ? a.sale_price : a.price;
          const priceB = b.sale_price !== null && b.sale_price !== undefined ? b.sale_price : b.price;
          return priceB - priceA;
        });
      } else if (filters.sortBy === 'name') {
        result.sort((a, b) => a.name.localeCompare(b.name));
      } else {
        result.sort((a, b) => b.id - a.id); // newest
      }
    } else {
      result.sort((a, b) => b.id - a.id);
    }

    return result;
  }
}

// Get single product
async function getProductById(id) {
  if (db) {
    return await get('SELECT * FROM products WHERE id = ?', [id]);
  } else {
    const prod = memoryProducts.find(p => p.id === parseInt(id));
    return prod || null;
  }
}

// Add product
async function createProduct(product) {
  if (db) {
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
  } else {
    const newProd = {
      id: nextProductId++,
      name: product.name,
      category: product.category,
      price: parseFloat(product.price),
      sale_price: product.sale_price ? parseFloat(product.sale_price) : null,
      promo_badge: product.promo_badge || null,
      description: product.description,
      colors: JSON.stringify(product.colors || []),
      sizes: JSON.stringify(product.sizes || []),
      images: JSON.stringify(product.images || {}),
      stock: parseInt(product.stock || 10)
    };
    memoryProducts.push(newProd);
    return newProd.id;
  }
}

// Delete product
async function deleteProduct(id) {
  if (db) {
    return await run('DELETE FROM products WHERE id = ?', [id]);
  } else {
    memoryProducts = memoryProducts.filter(p => p.id !== parseInt(id));
    return true;
  }
}

// Create order
async function createOrder(order) {
  if (db) {
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
  } else {
    const newOrder = {
      id: nextOrderId++,
      customer_name: order.customer_name,
      customer_email: order.customer_email,
      items: JSON.stringify(order.items),
      total_price: parseFloat(order.total_price),
      status: 'pending',
      created_at: new Date().toISOString()
    };
    memoryOrders.push(newOrder);
    return newOrder.id;
  }
}

// Get all orders
async function getOrders() {
  if (db) {
    return await all('SELECT * FROM orders ORDER BY id DESC');
  } else {
    return [...memoryOrders].sort((a, b) => b.id - a.id);
  }
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
