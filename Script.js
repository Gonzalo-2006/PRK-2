/*

Con el uso de la API


const productsGrid = document.getElementById('products-grid');
const cartCount = document.getElementById('cart-count');

// Fetch products and display them
fetch('http://localhost:5000/api/products')
  .then(response => response.json('json/Productos.json'))
  .then(products => {
    products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
      productCard.innerHTML = `
        <div class="product-image">
          <span>[Imagen del producto]</span>
        </div>
        <div class="product-info">
          <h3 class="product-title">${product.title}</h3>
          <p class="product-price">$${product.price}</p>
          <button class="add-to-cart-btn" data-id="${product.id}">Agregar al carrito</button>
        </div>
      `;
      productsGrid.appendChild(productCard);
    });

    // Attach event listeners to buttons
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
      button.addEventListener('click', () => {
        const productId = button.getAttribute('data-id');
        addToCart(productId);
      });
    });
  });

// Add product to cart
function addToCart(productId) {
  fetch('http://localhost:5000/api/cart', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: productId })
  })
    .then(response => response.json())
    .then(cart => {
      cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    });
}*/

/*De manera local para pruebas */
// Productos locales de prueba
const products = [
    { id: 1, title: 'Producto 1', price: '99.990', imageUrl: '' },
    { id: 2, title: 'Producto 2', price: '149.990', imageUrl: '' },
    { id: 3, title: 'Producto 3', price: '79.990', imageUrl: '' },
    { id: 4, title: 'Producto 4', price: '199.990', imageUrl: '' },
    { id: 5, title: 'Producto 5', price: '129.990', imageUrl: '' },
    { id: 6, title: 'Producto 6', price: '89.990', imageUrl: '' },
  ];
  
  let cart = [];
  const productsGrid = document.getElementById('products-grid');
  const cartCount = document.getElementById('cart-count');
  
  // Mostrar productos en la página
  function displayProducts() {
    products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
      productCard.innerHTML = `
        <div class="product-image">
          <span>${product.imageUrl ? `<img src="${product.imageUrl}" alt="${product.title}">` : '[Imagen del producto]'}</span>
        </div>
        <div class="product-info">
          <h3 class="product-title">${product.title}</h3>
          <p class="product-price">$${product.price}</p>
          <button class="add-to-cart-btn" data-id="${product.id}">Agregar al carrito</button>
        </div>
      `;
      productsGrid.appendChild(productCard);
    });
  
    // Agregar eventos a los botones
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
      button.addEventListener('click', () => {
        const productId = parseInt(button.getAttribute('data-id'));
        addToCart(productId);
      });
    });
  }
  
  // Agregar un producto al carrito
  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
  
    const existingProduct = cart.find(item => item.id === productId);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
  
    updateCartCount();
  }
  
  // Actualizar contador del carrito
  function updateCartCount() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
  }
  
  // Inicializar
  displayProducts();
  
