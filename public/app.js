/**
 * KINETIC Athletics - Single Page Application Core
 * Adhering to Design.MD premium visual & functional specifications.
 */

// ==========================================================================
// COLOR REGISTRY FOR DYNAMIC PRODUCT VECTOR GENERATION
// ==========================================================================
const ColorRegistry = {
  // Teal group
  'Alpine Teal': { primary: '#0a7281', secondary: '#f5f5f5', accent: '#ccff00', ink: '#111111' },
  'Trail Teal': { primary: '#0a7281', secondary: '#cacacb', accent: '#ed1aa0', ink: '#111111' },
  'Slate Blue': { primary: '#4a6b82', secondary: '#f5f5f5', accent: '#beaffd', ink: '#111111' },
  'Obsidian Blue': { primary: '#1a2b3c', secondary: '#39393b', accent: '#ed1aa0', ink: '#ffffff' },
  
  // Red/Pink group
  'Crimson Red': { primary: '#d30005', secondary: '#f5f5f5', accent: '#111111', ink: '#111111' },
  'Volt Crimson': { primary: '#d30005', secondary: '#111111', accent: '#ccff00', ink: '#ffffff' },
  'Cloud Pink': { primary: '#ffb0dd', secondary: '#ffffff', accent: '#beaffd', ink: '#111111' },
  'Platinum Pink': { primary: '#ed1aa0', secondary: '#f5f5f5', accent: '#beaffd', ink: '#111111' },
  
  // Grey/Black/White group
  'Triple Black': { primary: '#111111', secondary: '#39393b', accent: '#707072', ink: '#ffffff' },
  'Midnight Black': { primary: '#111111', secondary: '#f5f5f5', accent: '#ccff00', ink: '#ffffff' },
  'Pure Black': { primary: '#111111', secondary: '#ffffff', accent: '#707072', ink: '#ffffff' },
  'Storm Grey': { primary: '#707072', secondary: '#e5e5e5', accent: '#111111', ink: '#111111' },
  'Desert Stone': { primary: '#beaffd', secondary: '#cacacb', accent: '#111111', ink: '#111111' },
  'Pure White': { primary: '#ffffff', secondary: '#e5e5e5', accent: '#707072', ink: '#111111' },
  'White/Gold': { primary: '#ffffff', secondary: '#e5e5e5', accent: '#beaffd', ink: '#111111' },
  
  // Brights group
  'Volt Green': { primary: '#1eaa52', secondary: '#f5f5f5', accent: '#111111', ink: '#111111' },
  'Neon Volt': { primary: '#ccff00', secondary: '#111111', accent: '#ffffff', ink: '#111111' },
  'Alpine Green': { primary: '#007d48', secondary: '#f5f5f5', accent: '#ccff00', ink: '#111111' }
};

// Generate a customizable, high-end inline SVG vector image for a given product type and colorway
function generateProductSVG(type, colorName, width = '100%', height = '100%') {
  const colors = ColorRegistry[colorName] || { primary: '#707072', secondary: '#f5f5f5', accent: '#111111', ink: '#111111' };

  if (type === 'Running') {
    // Premium athletic trail runner vector
    return `
      <svg width="${width}" height="${height}" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Shadow backdrop -->
        <ellipse cx="100" cy="155" rx="55" ry="8" fill="#e5e5e5" />
        
        <!-- Outsole / Grip -->
        <path d="M40 148 L155 148 Q165 148, 168 142 L172 134 L165 136 L40 142 Z" fill="${colors.accent}" stroke="${colors.ink}" stroke-width="2.5" />
        
        <!-- Cush Foam Midsole -->
        <path d="M35 142 Q80 135, 165 136 Q170 128, 162 120 Q120 120, 35 130 Q30 136, 35 142 Z" fill="${colors.secondary}" stroke="${colors.ink}" stroke-width="2" />
        
        <!-- Foam core insert -->
        <path d="M60 136 Q100 130, 150 133 L145 125 Q100 125, 60 130 Z" fill="${colors.accent}" opacity="0.8" />
        
        <!-- Main Upper Body -->
        <path d="M35 130 Q30 120, 42 110 Q65 92, 105 82 Q125 78, 130 92 L140 102 Q158 114, 162 120 Q120 120, 35 130 Z" fill="${colors.primary}" stroke="${colors.ink}" stroke-width="2" />
        
        <!-- Collar/Ankle Lining -->
        <path d="M100 83 Q112 70, 130 92 Q122 92, 108 85 Z" fill="${colors.accent}" stroke="${colors.ink}" stroke-width="1.5" />
        
        <!-- Swoosh/Kinetic Accent Wing -->
        <path d="M68 116 Q105 105, 140 90 Q128 115, 85 124 Z" fill="${colors.accent}" stroke="${colors.ink}" stroke-width="1" />
        
        <!-- Toe Guard protection -->
        <path d="M35 130 Q30 125, 34 122 Q38 120, 44 126 Z" fill="${colors.ink}" />
        
        <!-- Lacing System and Laces -->
        <path d="M92 98 L112 88 M98 104 L118 94 M104 110 L124 100" stroke="${colors.accent}" stroke-width="3" stroke-linecap="round" />
        <path d="M112 88 Q118 80, 110 74 Q102 78, 110 88" fill="none" stroke="${colors.accent}" stroke-width="2" />
      </svg>
    `;
  } else if (type === 'Apparel') {
    // High-tech athletic performance tee/jacket vector
    return `
      <svg width="${width}" height="${height}" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Body main fabric -->
        <path d="M55 50 L65 30 L80 32 L100 38 L120 32 L135 30 L145 50 L132 80 L135 160 L65 160 L68 80 L55 50 Z" fill="${colors.primary}" stroke="${colors.ink}" stroke-width="2.5" />
        
        <!-- Sleeve cuffs panel -->
        <path d="M55 50 L68 80 L62 82 L48 54 Z M145 50 L132 80 L138 82 L152 54 Z" fill="${colors.secondary}" stroke="${colors.ink}" stroke-width="2" />
        
        <!-- Mesh side venting panel -->
        <path d="M70 95 L72 155 L67 155 L69 95 Z M130 95 L128 155 L133 155 L131 95 Z" fill="${colors.accent}" opacity="0.9" />
        
        <!-- Neck rib / Collar -->
        <path d="M85 33 Q100 45, 115 33 L120 32 Q100 42, 80 32 Z" fill="${colors.secondary}" stroke="${colors.ink}" stroke-width="1.5" />
        
        <!-- Brand logo center chest -->
        <path d="M90 65 C 95 58, 108 55, 112 53 C 103 62, 95 66, 90 65 Z" fill="${colors.accent}" />
        
        <!-- Technical seam stitching line -->
        <path d="M100 38 L100 160" stroke="${colors.ink}" stroke-width="1" stroke-dasharray="3 3" opacity="0.6" />
      </svg>
    `;
  } else {
    // Technical running cap or general active accessories vector
    return `
      <svg width="${width}" height="${height}" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Shadow -->
        <ellipse cx="100" cy="150" rx="45" ry="6" fill="#e5e5e5" />
        
        <!-- Peak/Visor -->
        <path d="M40 120 Q70 135, 130 132 Q145 125, 125 118 Q70 120, 40 120 Z" fill="${colors.secondary}" stroke="${colors.ink}" stroke-width="2.5" />
        <path d="M60 121 Q85 128, 115 126" fill="none" stroke="${colors.accent}" stroke-width="2" />
        
        <!-- Cap crown main panel -->
        <path d="M100 55 Q55 60, 45 118 Q75 120, 125 118 Q140 85, 100 55 Z" fill="${colors.primary}" stroke="${colors.ink}" stroke-width="2.5" />
        
        <!-- Aero ventilated side panel mesh -->
        <path d="M70 70 Q55 90, 58 112 Q80 108, 95 76 Q85 70, 70 70 Z" fill="${colors.secondary}" stroke="${colors.ink}" stroke-width="1.5" opacity="0.9" />
        <path d="M72 80 L58 105 M80 76 L65 110 M88 78 L80 108" stroke="${colors.accent}" stroke-width="1" />
        
        <!-- Top button eyelet -->
        <circle cx="100" cy="55" r="4" fill="${colors.accent}" stroke="${colors.ink}" stroke-width="1.5" />
        
        <!-- Swoosh logo small -->
        <path d="M105 95 C 108 92, 115 90, 117 89 C 112 94, 108 96, 105 95 Z" fill="${colors.accent}" />
      </svg>
    `;
  }
}

// Helper to translate string colorway list safely to arrays
function parseColorsList(colorsField) {
  if (Array.isArray(colorsField)) return colorsField;
  try {
    return JSON.parse(colorsField);
  } catch (e) {
    if (typeof colorsField === 'string') {
      return colorsField.split(',').map(s => s.trim());
    }
  }
  return [];
}

// Helper to translate sizes safely to arrays
function parseSizesList(sizesField) {
  if (Array.isArray(sizesField)) return sizesField;
  try {
    return JSON.parse(sizesField);
  } catch (e) {
    if (typeof sizesField === 'string') {
      return sizesField.split(',').map(s => s.trim());
    }
  }
  return [];
}

// Helper to translate images config safely
function parseImagesConfig(imagesField) {
  if (typeof imagesField === 'object' && imagesField !== null) return imagesField;
  try {
    return JSON.parse(imagesField);
  } catch (e) {
    return {};
  }
}


// ==========================================================================
// STATE MANAGEMENT
// ==========================================================================
const AppState = {
  products: [],
  cart: JSON.parse(localStorage.getItem('marshal_cart') || '[]'),
  filters: {
    category: '',
    search: '',
    minPrice: null,
    maxPrice: null
  },
  sortBy: 'newest',
  currentPdpProduct: null,
  currentPdpColor: '',
  currentPdpSize: ''
};

// Save current cart structure to LocalStorage
function saveCart() {
  localStorage.setItem('marshal_cart', JSON.stringify(AppState.cart));
}


// ==========================================================================
// CORE FRONTEND FUNCTIONS & API INTEGRATION
// ==========================================================================

// Load products list from Express Server database
async function fetchProducts() {
  try {
    let url = '/api/products?';
    
    // Add current filters to query string
    if (AppState.filters.category) {
      url += `category=${encodeURIComponent(AppState.filters.category)}&`;
    }
    if (AppState.filters.search) {
      url += `search=${encodeURIComponent(AppState.filters.search)}&`;
    }
    if (AppState.filters.minPrice) {
      url += `minPrice=${AppState.filters.minPrice}&`;
    }
    if (AppState.filters.maxPrice) {
      url += `maxPrice=${AppState.filters.maxPrice}&`;
    }
    if (AppState.sortBy) {
      url += `sortBy=${AppState.sortBy}&`;
    }

    const response = await fetch(url);
    if (!response.ok) throw new Error('API server returned error status.');
    
    AppState.products = await response.json();
    renderProducts();
  } catch (error) {
    console.error('Error fetching catalog products:', error);
  }
}

// Render product list inside the grid
function renderProducts() {
  const grid = document.getElementById('product-grid');
  const noProducts = document.getElementById('no-products');
  grid.innerHTML = '';

  if (AppState.products.length === 0) {
    grid.style.display = 'none';
    noProducts.style.display = 'block';
    return;
  }

  grid.style.display = 'grid';
  noProducts.style.display = 'none';

  AppState.products.forEach(p => {
    const colors = parseColorsList(p.colors);
    const activeColor = colors[0] || 'Triple Black';
    
    const card = document.createElement('article');
    card.className = 'product-card';
    card.setAttribute('data-id', p.id);

    // Promo badge HTML
    const badgeHTML = p.promo_badge ? `<span class="badge-promo">${p.promo_badge}</span>` : '';

    // Swatches rendering HTML (3-6 dots at 12px circular, concentring ring selected states)
    let swatchesHTML = '';
    if (colors.length > 1) {
      swatchesHTML = `<div class="swatch-dots-row">`;
      colors.forEach((col, idx) => {
        const activeClass = idx === 0 ? 'active' : '';
        const colorVal = ColorRegistry[col] ? ColorRegistry[col].primary : '#707072';
        swatchesHTML += `<span class="swatch-dot ${activeClass}" title="${col}" data-color="${col}" style="background-color: ${colorVal};"></span>`;
      });
      swatchesHTML += `</div>`;
    }

    // Price Row HTML
    let priceHTML = '';
    if (p.sale_price) {
      const discount = Math.round(((p.price - p.sale_price) / p.price) * 100);
      priceHTML = `
        <span class="price-sale">$${p.sale_price.toFixed(2)}</span>
        <span class="price-original">$${p.price.toFixed(2)}</span>
        <span class="price-percent">${discount}% off</span>
      `;
    } else {
      priceHTML = `<span class="price-regular">$${p.price.toFixed(2)}</span>`;
    }

    // Build complete card layout
    card.innerHTML = `
      <div class="product-card-image-wrapper">
        ${badgeHTML}
        <div class="product-card-image-inner" id="card-img-${p.id}" style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background-color: var(--color-soft-cloud);">
          ${generateProductSVG(p.category, activeColor, '80%', '80%')}
        </div>
      </div>
      <div class="product-card-metadata">
        ${swatchesHTML}
        <h3 class="product-card-name">${p.name}</h3>
        <span class="product-card-subtitle">${p.category === 'Running' ? "Men's Trail Running Shoes" : p.category + " Gear"}</span>
        <div class="product-card-price-row">${priceHTML}</div>
      </div>
    `;

    // Hook events inside card
    grid.appendChild(card);

    // Clicking swatches changes product colorway inside grid immediately
    const dots = card.querySelectorAll('.swatch-dot');
    dots.forEach(dot => {
      dot.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent opening PDP
        
        // Remove active from peers
        dots.forEach(d => d.classList.remove('active'));
        dot.classList.add('active');

        const selectedColor = dot.getAttribute('data-color');
        const imgFrame = card.querySelector('.product-card-image-inner');
        imgFrame.innerHTML = generateProductSVG(p.category, selectedColor, '80%', '80%');
      });
    });

    // Clicking product card launches Product Details Modal
    card.addEventListener('click', () => {
      openPdp(p.id);
    });
  });
}


// ==========================================================================
// PRODUCT DETAIL VIEW MODAL (PDP) CAPABILITIES
// ==========================================================================

// Launch immersive PDP modal panel
async function openPdp(productId) {
  try {
    const response = await fetch(`/api/products/${productId}`);
    if (!response.ok) throw new Error('API server failed fetching product.');

    const p = await response.json();
    AppState.currentPdpProduct = p;

    const colors = parseColorsList(p.colors);
    const sizes = parseSizesList(p.sizes);
    
    // Set default PDP options
    AppState.currentPdpColor = colors[0] || 'Triple Black';
    AppState.currentPdpSize = '';

    // Map DOM elements
    document.getElementById('pdp-category').textContent = p.category === 'Running' ? "Men's Trail Running Shoes" : p.category + " Gear";
    document.getElementById('pdp-title').textContent = p.name;
    document.getElementById('pdp-description').textContent = p.description;

    // Price rendering
    const priceEl = document.getElementById('pdp-price');
    if (p.sale_price) {
      priceEl.innerHTML = `
        <span style="color: var(--color-sale); font-weight: 600; margin-right: 6px;">$${p.sale_price.toFixed(2)}</span>
        <span style="color: var(--color-mute); text-decoration: line-through; font-size: 16px; font-weight: 400;">$${p.price.toFixed(2)}</span>
      `;
    } else {
      priceEl.textContent = `$${p.price.toFixed(2)}`;
    }

    // Set Active Swatches
    const swatchContainer = document.getElementById('pdp-color-swatches');
    swatchContainer.innerHTML = '';
    colors.forEach(col => {
      const activeClass = col === AppState.currentPdpColor ? 'active' : '';
      const colorVal = ColorRegistry[col] ? ColorRegistry[col].primary : '#707072';
      swatchContainer.innerHTML += `
        <span class="swatch-dot ${activeClass}" title="${col}" data-color="${col}" 
              style="background-color: ${colorVal}; width: 16px; height: 16px;"></span>
      `;
    });

    // Register swatch clicks inside PDP
    swatchContainer.querySelectorAll('.swatch-dot').forEach(dot => {
      dot.addEventListener('click', () => {
        swatchContainer.querySelectorAll('.swatch-dot').forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
        AppState.currentPdpColor = dot.getAttribute('data-color');
        updatePdpGallery();
      });
    });

    // Set Sizes Grid selection
    const sizeGrid = document.getElementById('pdp-size-grid');
    sizeGrid.innerHTML = '';
    
    const standardSizes = p.category === 'Running' 
      ? ['US 8', 'US 8.5', 'US 9', 'US 9.5', 'US 10', 'US 10.5', 'US 11', 'US 12']
      : ['XS', 'S', 'M', 'L', 'XL'];
      
    standardSizes.forEach(sz => {
      const isAvailable = sizes.includes(sz);
      const disabledClass = isAvailable ? '' : 'disabled';
      sizeGrid.innerHTML += `
        <button class="size-box ${disabledClass}" data-size="${sz}" ${isAvailable ? '' : 'disabled'}>${sz}</button>
      `;
    });

    // Register size clicks
    sizeGrid.querySelectorAll('.size-box:not(.disabled)').forEach(box => {
      box.addEventListener('click', () => {
        sizeGrid.querySelectorAll('.size-box').forEach(b => b.classList.remove('active'));
        box.classList.add('active');
        AppState.currentPdpSize = box.getAttribute('data-size');
      });
    });

    // Draw media panels
    updatePdpGallery();

    // Show Overlay
    document.getElementById('pdp-overlay').classList.add('active');
  } catch (error) {
    console.error('Error opening PDP:', error);
  }
}

// Refresh PDP media sliders based on selected Color
function updatePdpGallery() {
  const p = AppState.currentPdpProduct;
  const col = AppState.currentPdpColor;

  const mainWrapper = document.getElementById('pdp-main-image-wrapper');
  mainWrapper.innerHTML = generateProductSVG(p.category, col, '70%', '70%');

  const thumbWrapper = document.getElementById('pdp-thumbnails');
  thumbWrapper.innerHTML = '';

  // Generate 3 elegant vertical angles
  for (let idx = 1; idx <= 3; idx++) {
    const activeClass = idx === 1 ? 'active' : '';
    const thBtn = document.createElement('button');
    thBtn.className = `pdp-thumb ${activeClass}`;
    thBtn.innerHTML = generateProductSVG(p.category, col, '80%', '80%');
    thBtn.setAttribute('data-angle', idx);
    
    thBtn.addEventListener('click', () => {
      thumbWrapper.querySelectorAll('.pdp-thumb').forEach(t => t.classList.remove('active'));
      thBtn.classList.add('active');
      
      // Dynamic zoom/view transition
      const mainSvg = mainWrapper.querySelector('svg');
      if (idx === 2) {
        mainSvg.style.transform = 'scale(1.2) rotate(-5deg)';
      } else if (idx === 3) {
        mainSvg.style.transform = 'scale(1.3) translate(10px, 10px)';
      } else {
        mainSvg.style.transform = 'scale(1)';
      }
      mainSvg.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
    });
    thumbWrapper.appendChild(thBtn);
  }
}


// ==========================================================================
// SHOPPING CART SYSTEM
// ==========================================================================

// Add selected options inside PDP to checkout bag
function addToBag() {
  const p = AppState.currentPdpProduct;
  if (!p) return;

  if (!AppState.currentPdpSize) {
    alert('Please select your size before adding to bag.');
    return;
  }

  // Check if item already exists
  const existingItemIndex = AppState.cart.findIndex(
    item => item.id === p.id && item.color === AppState.currentPdpColor && item.size === AppState.currentPdpSize
  );

  const finalPrice = p.sale_price ? p.sale_price : p.price;

  if (existingItemIndex > -1) {
    AppState.cart[existingItemIndex].quantity += 1;
  } else {
    AppState.cart.push({
      id: p.id,
      name: p.name,
      category: p.category,
      color: AppState.currentPdpColor,
      size: AppState.currentPdpSize,
      price: finalPrice,
      quantity: 1
    });
  }

  saveCart();
  renderCart();
  updateCartBadge();

  // Close modal and pop shopping bag drawer (Premium fluid workflow!)
  document.getElementById('pdp-overlay').classList.remove('active');
  document.getElementById('cart-drawer-overlay').classList.add('active');
}

// Render item cards inside bag list
function renderCart() {
  const container = document.getElementById('cart-items-container');
  container.innerHTML = '';

  let subtotal = 0;

  if (AppState.cart.length === 0) {
    container.innerHTML = `
      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 200px; text-align: center; gap: 12px;">
        <svg viewBox="0 0 24 24" width="40" height="40" stroke="var(--color-mute)" stroke-width="1.5" fill="none">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
          <line x1="3" y1="6" x2="21" y2="6"></line>
        </svg>
        <span class="body-strong" style="color: var(--color-mute);">Your bag is currently empty.</span>
      </div>
    `;
    updateSummary(0);
    return;
  }

  AppState.cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;

    const row = document.createElement('div');
    row.className = 'cart-item';
    row.innerHTML = `
      <div class="cart-item-img-wrapper">
        ${generateProductSVG(item.category, item.color, '85%', '85%')}
      </div>
      <div class="cart-item-details">
        <h4 class="cart-item-name">${item.name}</h4>
        <span class="cart-item-meta">Size: ${item.size}</span>
        <span class="cart-item-meta">Color: ${item.color}</span>
        <div class="cart-item-actions">
          <div class="qty-selector">
            <button class="qty-btn dec-qty" data-index="${index}">-</button>
            <span class="qty-num">${item.quantity}</span>
            <button class="qty-btn inc-qty" data-index="${index}">+</button>
          </div>
          <button class="cart-item-remove" data-index="${index}">Remove</button>
        </div>
      </div>
      <div class="cart-item-price">$${itemTotal.toFixed(2)}</div>
    `;

    container.appendChild(row);
  });

  // Action listeners inside bag drawer
  container.querySelectorAll('.inc-qty').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-index'));
      AppState.cart[idx].quantity += 1;
      saveCart();
      renderCart();
      updateCartBadge();
    });
  });

  container.querySelectorAll('.dec-qty').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-index'));
      if (AppState.cart[idx].quantity > 1) {
        AppState.cart[idx].quantity -= 1;
      } else {
        AppState.cart.splice(idx, 1);
      }
      saveCart();
      renderCart();
      updateCartBadge();
    });
  });

  container.querySelectorAll('.cart-item-remove').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-index'));
      AppState.cart.splice(idx, 1);
      saveCart();
      renderCart();
      updateCartBadge();
    });
  });

  updateSummary(subtotal);
}

// Compute checkout details subtotals, tax rate, shipping limits
function updateSummary(subtotal) {
  const shippingVal = subtotal >= 150 || subtotal === 0 ? 0 : 15;
  const taxVal = subtotal * 0.1; // 10% VAT
  const totalVal = subtotal + shippingVal + taxVal;

  document.getElementById('cart-subtotal').textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById('cart-shipping').textContent = shippingVal === 0 ? 'Free' : `$${shippingVal.toFixed(2)}`;
  document.getElementById('cart-tax').textContent = `$${taxVal.toFixed(2)}`;
  document.getElementById('cart-total').textContent = `$${totalVal.toFixed(2)}`;
}

// Update primary Nav badge counts
function updateCartBadge() {
  const badge = document.getElementById('cart-badge');
  const count = AppState.cart.reduce((sum, item) => sum + item.quantity, 0);
  badge.textContent = count;
}


// ==========================================================================
// SECURE ORDER CHECKOUT & API PIPELINES
// ==========================================================================

async function submitOrder() {
  const name = document.getElementById('cust-name').value.trim();
  const email = document.getElementById('cust-email').value.trim();
  const address = document.getElementById('cust-address').value.trim();

  if (!name || !email || !address) {
    alert('Please fulfill all required delivery coordinates.');
    return;
  }

  const subtotal = AppState.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal >= 150 ? 0 : 15;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  const orderData = {
    customer_name: name,
    customer_email: email,
    items: AppState.cart,
    total_price: total
  };

  try {
    const response = await fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData)
    });

    if (!response.ok) throw new Error('API server rejected order processing.');
    
    const result = await response.json();

    if (result.success) {
      // Clear local states
      AppState.cart = [];
      saveCart();
      updateCartBadge();

      // Trigger success confirmation details
      document.getElementById('success-buyer-name').textContent = name;
      document.getElementById('success-order-id').textContent = result.orderId;

      // Swap modal displays
      document.getElementById('checkout-overlay').classList.remove('active');
      document.getElementById('success-overlay').classList.add('active');
    }
  } catch (error) {
    console.error('Checkout API error:', error);
    alert('Order processing encountered an internal error. Please try again.');
  }
}


// ==========================================================================
// STORE MANAGER OPERATIONS (ADMIN/BACKEND INTERFACES)
// ==========================================================================

// Initialize administration capabilities
function initAdmin() {
  const drawer = document.getElementById('admin-drawer-overlay');
  
  // Drawer close/open toggling hooks
  document.getElementById('open-admin-btn').addEventListener('click', () => {
    drawer.classList.add('active');
    loadAdminTab('sec-add-product');
  });

  document.getElementById('admin-close-btn').addEventListener('click', () => {
    drawer.classList.remove('active');
  });

  // Tab selections
  document.getElementById('tab-add-product').addEventListener('click', () => {
    loadAdminTab('sec-add-product');
  });

  document.getElementById('tab-manage-products').addEventListener('click', () => {
    loadAdminTab('sec-manage-products');
    loadAdminProductsList();
  });

  document.getElementById('tab-orders').addEventListener('click', () => {
    loadAdminTab('sec-orders');
    loadAdminOrdersLog();
  });

  // Form Adding new product
  document.getElementById('add-product-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('admin-p-name').value.trim();
    const category = document.getElementById('admin-p-cat').value;
    const badge = document.getElementById('admin-p-badge').value.trim();
    const price = parseFloat(document.getElementById('admin-p-price').value);
    const saleField = document.getElementById('admin-p-saleprice').value.trim();
    const sale_price = saleField ? parseFloat(saleField) : null;
    const description = document.getElementById('admin-p-desc').value.trim();
    const colors = document.getElementById('admin-p-colors').value.split(',').map(c => c.trim());
    const sizes = document.getElementById('admin-p-sizes').value.split(',').map(s => s.trim());

    // Generate dynamic simple map images based on colors entered
    const imagesMap = {};
    colors.forEach(col => {
      imagesMap[col] = col.toLowerCase();
    });

    const newProduct = {
      name,
      category,
      price,
      sale_price,
      promo_badge: badge || null,
      description,
      colors,
      sizes,
      images: imagesMap,
      stock: 12
    };

    try {
      const res = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProduct)
      });

      if (!res.ok) throw new Error('Adding product failed on server.');

      const result = await res.json();
      if (result.success) {
        alert(result.message);
        document.getElementById('add-product-form').reset();
        fetchProducts(); // Reload PLP
        loadAdminTab('sec-manage-products');
        loadAdminProductsList();
      }
    } catch (err) {
      console.error('Error adding product:', err);
    }
  });
}

// Toggle active Admin subviews
function loadAdminTab(sectionId) {
  const panels = document.querySelectorAll('.admin-panel-section');
  const tabs = document.querySelectorAll('.admin-tab');

  panels.forEach(p => p.classList.remove('active'));
  tabs.forEach(t => t.classList.remove('active'));

  document.getElementById(sectionId).classList.add('active');
  
  if (sectionId === 'sec-add-product') {
    document.getElementById('tab-add-product').classList.add('active');
  } else if (sectionId === 'sec-manage-products') {
    document.getElementById('tab-manage-products').classList.add('active');
  } else if (sectionId === 'sec-orders') {
    document.getElementById('tab-orders').classList.add('active');
  }
}

// Display product rows for editing / deletions
async function loadAdminProductsList() {
  const container = document.getElementById('admin-products-list');
  container.innerHTML = `
    <div style="padding: 20px 0; text-align: center; color: var(--color-mute);">Loading server catalog...</div>
  `;

  try {
    const res = await fetch('/api/products');
    const catalog = await res.json();

    container.innerHTML = '';
    if (catalog.length === 0) {
      container.innerHTML = `<p style="padding:20px 0; text-align:center;">No products inside catalog.</p>`;
      return;
    }

    catalog.forEach(p => {
      const colors = parseColorsList(p.colors);
      const activeColor = colors[0] || 'Triple Black';
      
      const row = document.createElement('div');
      row.className = 'product-row-admin';
      row.innerHTML = `
        <div class="product-row-admin-details">
          <div class="product-row-admin-img">
            ${generateProductSVG(p.category, activeColor, '100%', '100%')}
          </div>
          <div>
            <h4 style="font-size: 14px; font-weight: 700; color: var(--color-ink);">${p.name}</h4>
            <span style="font-size: 12px; color: var(--color-mute);">${p.category} · $${p.price.toFixed(2)}</span>
          </div>
        </div>
        <button class="product-delete-btn" data-id="${p.id}">Delete</button>
      `;

      container.appendChild(row);
    });

    // Delete buttons callbacks
    container.querySelectorAll('.product-delete-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        const id = btn.getAttribute('data-id');
        if (confirm('Are you sure you wish to delete this item? This is non-reversible.')) {
          try {
            const res = await fetch(`/api/products/${id}`, { method: 'DELETE' });
            if (!res.ok) throw new Error('API delete failed.');
            
            alert('Product removed.');
            loadAdminProductsList();
            fetchProducts(); // Refresh PLP
          } catch (e) {
            console.error('Delete item err:', e);
          }
        }
      });
    });

  } catch (error) {
    console.error('Failed listing products:', error);
  }
}

// Display orders submitted in backend
async function loadAdminOrdersLog() {
  const container = document.getElementById('admin-orders-list');
  container.innerHTML = `
    <div style="padding: 20px 0; text-align: center; color: var(--color-mute);">Loading customer orders...</div>
  `;

  try {
    const res = await fetch('/api/orders');
    const orders = await res.json();

    container.innerHTML = '';
    if (orders.length === 0) {
      container.innerHTML = `<p style="padding:20px 0; text-align:center;">No purchases placed yet.</p>`;
      return;
    }

    orders.forEach(ord => {
      let itemsList = '';
      const itemsArr = JSON.parse(ord.items);
      
      itemsArr.forEach(i => {
        itemsList += `<div>· ${i.name} (Size: ${i.size}, Color: ${i.color}) x ${i.quantity} — $${i.price.toFixed(2)}</div>`;
      });

      const card = document.createElement('div');
      card.className = 'order-card-admin';
      card.innerHTML = `
        <div class="order-card-header">
          <span>Order ID: #100${ord.id}</span>
          <span>$${ord.total_price.toFixed(2)}</span>
        </div>
        <div style="font-size: 13px; color: var(--color-charcoal);">
          <strong>Buyer:</strong> ${ord.customer_name} (${ord.customer_email})<br>
          <strong>Date:</strong> ${new Date(ord.created_at).toLocaleString()}
        </div>
        <div class="order-card-items-list">
          <strong>Items Purchased:</strong>
          ${itemsList}
        </div>
      `;
      container.appendChild(card);
    });

  } catch (error) {
    console.error('Failed fetching orders:', error);
  }
}


// ==========================================================================
// INITIALIZERS & DOM INTERACTION
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initial Data Fetching
  fetchProducts();
  updateCartBadge();
  initAdmin();

  // 2. Main Page Setup Navigation Links
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      const cat = link.getAttribute('data-category');
      AppState.filters.category = cat;
      
      // Update checkbox filters on sidebar
      document.querySelectorAll('.cat-filter').forEach(chk => {
        chk.checked = chk.value === cat;
      });

      // Update Breadcrumbs
      const crumbSpan = document.querySelector('#breadcrumbs span');
      crumbSpan.textContent = cat ? cat : 'All Products';

      fetchProducts();
    });
  });

  // Logo Home callback
  document.getElementById('logo-home').addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    document.querySelector('[data-category=""]').classList.add('active');
    AppState.filters.category = '';
    document.querySelectorAll('.cat-filter').forEach(chk => chk.checked = false);
    document.querySelector('#breadcrumbs span').textContent = 'All Products';
    fetchProducts();
  });

  // Hero Shop Collection Button
  document.getElementById('hero-cta').addEventListener('click', () => {
    // Scrolls smoothly down into the catalog grid view
    document.querySelector('.catalog-section').scrollIntoView({ behavior: 'smooth' });
  });

  // 3. Search Field Action and Debounce
  let searchTimeout;
  const searchInput = document.getElementById('search-input');
  searchInput.addEventListener('input', () => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      AppState.filters.search = searchInput.value.trim();
      fetchProducts();
    }, 400); // 400ms debounce buffer
  });

  // 4. Sidebar Checkbox Category Filters
  const chkFilters = document.querySelectorAll('.cat-filter');
  chkFilters.forEach(chk => {
    chk.addEventListener('change', () => {
      // Build selected categories list
      const checkedVals = Array.from(chkFilters).filter(c => c.checked).map(c => c.value);
      
      // Multi category standard simple mapping or single-selection
      if (checkedVals.length > 0) {
        AppState.filters.category = checkedVals[0]; // Simple single category filter
      } else {
        AppState.filters.category = '';
      }

      // Synchronize primary navbar links active class
      navLinks.forEach(l => {
        const cat = l.getAttribute('data-category');
        if (cat === AppState.filters.category) {
          l.classList.add('active');
        } else {
          l.classList.remove('active');
        }
      });

      const crumbSpan = document.querySelector('#breadcrumbs span');
      crumbSpan.textContent = AppState.filters.category ? AppState.filters.category : 'All Products';

      fetchProducts();
    });
  });

  // 5. Price Min/Max input limits filters
  const priceMinInput = document.getElementById('price-min');
  const priceMaxInput = document.getElementById('price-max');
  
  const handlePriceFilters = () => {
    AppState.filters.minPrice = priceMinInput.value ? parseFloat(priceMinInput.value) : null;
    AppState.filters.maxPrice = priceMaxInput.value ? parseFloat(priceMaxInput.value) : null;
    fetchProducts();
  };

  priceMinInput.addEventListener('change', handlePriceFilters);
  priceMaxInput.addEventListener('change', handlePriceFilters);

  // Clear Filters Action
  document.getElementById('clear-filters-btn').addEventListener('click', () => {
    priceMinInput.value = '';
    priceMaxInput.value = '';
    AppState.filters.minPrice = null;
    AppState.filters.maxPrice = null;
    AppState.filters.category = '';
    AppState.filters.search = '';
    searchInput.value = '';
    
    chkFilters.forEach(chk => chk.checked = false);
    navLinks.forEach(l => l.classList.remove('active'));
    document.querySelector('[data-category=""]').classList.add('active');
    document.querySelector('#breadcrumbs span').textContent = 'All Products';

    fetchProducts();
  });

  // 6. Sort By Dropdown selection
  document.getElementById('sort-select').addEventListener('change', (e) => {
    AppState.sortBy = e.target.value;
    fetchProducts();
  });

  // 7. Toggle Filters Button control
  const filterSidebar = document.getElementById('filter-sidebar');
  const filterBtnText = document.getElementById('filter-btn-text');
  
  document.getElementById('toggle-filter-btn').addEventListener('click', () => {
    filterSidebar.classList.toggle('collapsed');
    if (filterSidebar.classList.contains('collapsed')) {
      filterBtnText.textContent = 'Show Filters';
    } else {
      filterBtnText.textContent = 'Hide Filters';
    }
  });

  // 8. PDP Close hooks
  document.getElementById('pdp-close').addEventListener('click', () => {
    document.getElementById('pdp-overlay').classList.remove('active');
  });

  // 9. PDP Add to Bag click
  document.getElementById('pdp-add-to-bag-btn').addEventListener('click', addToBag);

  // 10. Accordion headers disclosures setup
  const headers = document.querySelectorAll('.pdp-disclosure-header');
  headers.forEach(h => {
    h.addEventListener('click', () => {
      const row = h.parentElement;
      row.classList.toggle('active');
    });
  });

  // 11. Shopping Bag Open/Close slide drawers
  const cartDrawer = document.getElementById('cart-drawer-overlay');
  
  document.getElementById('cart-btn').addEventListener('click', () => {
    renderCart();
    cartDrawer.classList.add('active');
  });

  document.getElementById('cart-close-btn').addEventListener('click', () => {
    cartDrawer.classList.remove('active');
  });

  cartDrawer.addEventListener('click', (e) => {
    if (e.target === cartDrawer) {
      cartDrawer.classList.remove('active');
    }
  });

  // 12. Checkout Form drawer activations
  const checkoutDrawer = document.getElementById('checkout-overlay');

  document.getElementById('checkout-drawer-btn').addEventListener('click', () => {
    if (AppState.cart.length === 0) {
      alert('Your bag is currently empty.');
      return;
    }
    cartDrawer.classList.remove('active');
    checkoutDrawer.classList.add('active');
  });

  document.getElementById('checkout-close').addEventListener('click', () => {
    checkoutDrawer.classList.remove('active');
  });

  // Place Order Submissions pipeline
  document.getElementById('checkout-submit-btn').addEventListener('click', submitOrder);

  // 13. Order Success Close and continue shopping
  const successDrawer = document.getElementById('success-overlay');
  
  document.getElementById('success-close-btn').addEventListener('click', () => {
    successDrawer.classList.remove('active');
    fetchProducts(); // Refresh PLP catalog
  });

  // ==========================================================================
  // 14. MOBILE NAVIGATION DRAWER & DRAWER ACTIONS
  // ==========================================================================
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileNavOverlay = document.getElementById('mobile-nav-overlay');
  const mobileNavClose = document.getElementById('mobile-nav-close');
  const mobileOpenAdminBtn = document.getElementById('mobile-open-admin-btn');
  
  if (mobileMenuBtn && mobileNavOverlay) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileNavOverlay.classList.add('active');
    });
  }

  if (mobileNavClose && mobileNavOverlay) {
    mobileNavClose.addEventListener('click', () => {
      mobileNavOverlay.classList.remove('active');
    });
  }

  if (mobileNavOverlay) {
    mobileNavOverlay.addEventListener('click', (e) => {
      if (e.target === mobileNavOverlay) {
        mobileNavOverlay.classList.remove('active');
      }
    });
  }

  if (mobileOpenAdminBtn) {
    mobileOpenAdminBtn.addEventListener('click', () => {
      if (mobileNavOverlay) mobileNavOverlay.classList.remove('active');
      const adminDrawer = document.getElementById('admin-drawer-overlay');
      if (adminDrawer) adminDrawer.classList.add('active');
      loadAdminTab('sec-add-product');
    });
  }

  // Handle Mobile Menu links
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileNavLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      const cat = link.getAttribute('data-category');
      AppState.filters.category = cat;

      // Update primary nav active state
      const primaryLinks = document.querySelectorAll('.nav-link');
      primaryLinks.forEach(l => {
        if (l.getAttribute('data-category') === cat) l.classList.add('active');
        else l.classList.remove('active');
      });

      // Update checkbox filters on sidebar
      document.querySelectorAll('.cat-filter').forEach(chk => {
        chk.checked = chk.value === cat;
      });

      // Update Breadcrumbs
      const crumbSpan = document.querySelector('#breadcrumbs span');
      if (crumbSpan) {
        crumbSpan.textContent = cat ? cat : 'All Products';
      }

      if (mobileNavOverlay) mobileNavOverlay.classList.remove('active');
      fetchProducts();
    });
  });

  // ==========================================================================
  // 15. MOBILE SEARCH COLLAPSIBLE TRIGGER
  // ==========================================================================
  const searchIconTrigger = document.getElementById('search-icon-trigger');
  const searchPillWrapper = document.getElementById('search-pill-wrapper');
  const searchCloseMobile = document.getElementById('search-close-mobile');
  
  if (searchIconTrigger && searchPillWrapper) {
    searchIconTrigger.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        searchPillWrapper.classList.add('search-expanded');
        const input = document.getElementById('search-input');
        if (input) input.focus();
        e.stopPropagation();
      }
    });
  }

  if (searchCloseMobile && searchPillWrapper) {
    searchCloseMobile.addEventListener('click', (e) => {
      searchPillWrapper.classList.remove('search-expanded');
      e.stopPropagation();
    });
  }

  document.addEventListener('click', (e) => {
    if (searchPillWrapper && searchPillWrapper.classList.contains('search-expanded')) {
      if (!searchPillWrapper.contains(e.target)) {
        searchPillWrapper.classList.remove('search-expanded');
      }
    }
  });

  // ==========================================================================
  // 16. MOBILE FILTERS DRAWER CLOSE ACTION
  // ==========================================================================
  const closeFiltersBtn = document.getElementById('close-filters-btn');
  if (closeFiltersBtn) {
    closeFiltersBtn.addEventListener('click', () => {
      const filterSidebar = document.getElementById('filter-sidebar');
      const filterBtnText = document.getElementById('filter-btn-text');
      if (filterSidebar) filterSidebar.classList.add('collapsed');
      if (filterBtnText) filterBtnText.textContent = 'Show Filters';
    });
  }
});

