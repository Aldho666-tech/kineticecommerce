const express = require('express');
const path = require('path');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Initialize database when starting the server
db.initDb()
  .then(() => {
    console.log('Database initialized successfully.');
  })
  .catch((err) => {
    console.error('Failed to initialize database:', err);
  });

// API Routes

// Get products with optional filters
app.get('/api/products', async (req, res) => {
  try {
    const filters = {
      category: req.query.category,
      search: req.query.search,
      minPrice: req.query.minPrice,
      maxPrice: req.query.maxPrice,
      sortBy: req.query.sortBy
    };
    const products = await db.getProducts(filters);
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get a single product by ID
app.get('/api/products/:id', async (req, res) => {
  try {
    const product = await db.getProductById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Add a product (Store Manager/Admin)
app.post('/api/products', async (req, res) => {
  try {
    const { name, category, price, sale_price, promo_badge, description, colors, sizes, images, stock } = req.body;
    
    if (!name || !category || !price || !description) {
      return res.status(400).json({ error: 'Missing required product information.' });
    }

    const productId = await db.createProduct({
      name,
      category,
      price,
      sale_price,
      promo_badge,
      description,
      colors,
      sizes,
      images,
      stock
    });

    res.status(201).json({ success: true, productId, message: 'Product added successfully!' });
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete a product (Store Manager/Admin)
app.delete('/api/products/:id', async (req, res) => {
  try {
    await db.deleteProduct(req.params.id);
    res.json({ success: true, message: 'Product deleted successfully.' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Submit a new order
app.post('/api/orders', async (req, res) => {
  try {
    const { customer_name, customer_email, items, total_price } = req.body;

    if (!customer_name || !customer_email || !items || !total_price) {
      return res.status(400).json({ error: 'Missing required order details.' });
    }

    const orderId = await db.createOrder({
      customer_name,
      customer_email,
      items,
      total_price
    });

    res.status(201).json({ success: true, orderId, message: 'Order placed successfully!' });
  } catch (error) {
    console.error('Error processing order:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get all orders (Store Manager/Admin)
app.get('/api/orders', async (req, res) => {
  try {
    const orders = await db.getOrders();
    res.json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



// Start Server
app.listen(PORT, () => {
  console.log(`KINETIC E-Commerce Server is running on http://localhost:${PORT}`);
});

module.exports = app;
