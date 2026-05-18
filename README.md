# ⚡ KINETIC Athletics — Premium E-Commerce Application

KINETIC Athletics is a state-of-the-art, high-end athletic footwear and performance apparel single-page e-commerce application. Adhering to the rigorous design principles outlined in `Design.MD`, it features a photography-first aesthetic, extreme typographic contrast, smooth micro-animations, and a completely customized interactive frontend backed by a robust Express & SQLite database.

---

## ✨ Design Philosophy & Visual Excellence

Adhering to a premium, "Nike/ACG-style" design language:
- **Harmonious Palette**: Focused on absolute black (`#111111`), pristine canvas white (`#ffffff`), soft cloud highlights (`#f5f5f5`), and a striking crimson red (`#d30005`) for dynamic sale pricing and indicators.
- **High Typographic Contrast**: Dynamic editorial headlines set in `Bebas Neue` contrasted against highly legible, structured copy in `Inter`.
- **Flat UI Elements**: Elements sit flat on the `#f5f5f5` canvas with `0px` borders, subtle circular swatches, and clean line indicators.
- **Dynamic Vector Engine**: Renders custom customizable vector SVGs for products in real-time, allowing users to watch shoes, hats, and apparel instantly adapt to selected colorways without reloading assets.

---

## 🚀 Core Features

1. **Product Listing Page (PLP)**:
   - Dynamic real-time product search with search input debouncing (400ms buffer).
   - Instant filtering by Category (Running, Apparel, Accessories) and Price Ranges (Min/Max limits).
   - Instant product sorting (Newest, Price: Low-High, Price: High-Low, Alphabetical).
   - Multi-color swatches on individual product cards allowing immediate grid-level color changes.

2. **Product Details Page (PDP) Modal**:
   - Immersive centered detail window over a rich translucent backdrop.
   - Interactive thumbnail vertical gallery with dynamic angles (scale, tilt, transform transitions).
   - Active colorway swatch selection with instant vector re-coloring.
   - Size grid selectors with proper disabled/available states based on database stocks.
   - Product feature disclosures (reviews, shipping, sustainability) built using smooth height-transition accordions.

3. **Shopping Bag Drawer**:
   - Slides smoothly from the right edge with automatic background dimming.
   - Dynamically updates counts, subtotal sums, VAT/taxes (10% standard rate), and shipping (free on purchases over $150).
   - Incremental quantity selectors and quick removal triggers.

4. **Secure Checkout & Success Confirmation**:
   - Elegant modal form capturing name, email, shipping address, and mock credit card data.
   - Live order submission linked directly to the Express backend database.
   - Success screen featuring a premium green validation mark and auto-generated Order ID.

5. **Store Manager Dashboard (Developer Console)**:
   - Hidden link placed securely in the top-left utility bar.
   - **New Product Form**: Dynamically add new products to the catalog (name, category, badge, price, sale price, description, colorways, and sizes).
   - **All Products Log**: List catalog and delete products in real-time.
   - **Orders Log**: Monitor all successfully placed customer orders in real-time.

---

## 🛠️ Technology Stack

- **Frontend**: Vanilla HTML5, Vanilla CSS3 (Custom Design Tokens, GPU transitions), JavaScript (ES6+ reactive state).
- **Backend**: Node.js, Express v5 (high-performance routing).
- **Database**: SQLite3 (automatically initialized, seeded with 6 premium athletic items on startup).

---

## 📂 Project Directory Structure

```bash
d:/E Commere/
├── db.js                 # SQLite database configurations, relational schemas, & seeders
├── server.js             # Express API Server and static files distributor
├── package.json          # Node dependencies and execution scripts
├── public/               # Frontend Assets Directory
│   ├── index.html        # Main HTML viewport (Single Page Architecture)
│   ├── style.css         # Design Tokens and comprehensive CSS layout
│   └── app.js            # Client-side reactivity, interactive SVG engine, & API calls
└── README.md             # Project documentation (this file)
```

---

## 💻 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone or download the repository into your active workspace.
2. Open your terminal in the project directory and install the necessary dependencies:
   ```bash
   npm install
   ```

### Running the Application

Start the Express development server:
```bash
npm run dev
```

The console will output:
```text
KINETIC E-Commerce Server is running on http://localhost:5000
Connected to SQLite database at: D:\E Commere\ecom.db
Database initialized successfully.
```

Open your browser and navigate to:
👉 **[http://localhost:5000/](http://localhost:5000/)**

---

## 🧪 Developer Admin Access

To access the backend **Store Manager Panel**:
1. Click the **Store Manager (Backend Dev)** link at the top-left of the utility bar.
2. The Admin Panel drawer will slide in from the left.
3. Switch between **New Product**, **All Products**, and **Orders Log** tabs to manage the database records interactively.

---

## 📄 License
This application is proprietary and built in pair programming with **Antigravity**. All rights reserved.
