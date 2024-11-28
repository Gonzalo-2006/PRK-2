// Función para cargar productos
async function cargarProductos() {
    try {
        // Cargar productos desde el archivo JSON
        const respuesta = await fetch('../json/Productos.json');
        const data = await respuesta.json();
        const productos = data.productos;
        
        const contenedor = document.getElementById('productos-container');
        
        // Limpiar contenedor antes de agregar productos
        contenedor.innerHTML = '';
        
        // Generar tarjeta para cada producto
        productos.forEach(producto => {
            const columna = document.createElement('div');
            columna.className = 'col-md-4 mb-4';
            
            columna.innerHTML = `
                <div class="card h-100">
                    <div class="card-img-top-container">
                        <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">${producto.descripcion}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="h5 mb-0">$${producto.precio.toFixed(3)}</span>
                            <button class="btn btn-primary">Comprar</button>
                        </div>
                    </div>
                </div>
            `;
            
            contenedor.appendChild(columna);
        });
    } catch (error) {
        console.error('Error al cargar productos:', error);
    }
}

// Función para filtrar productos por categoría
async function filtrarProductos(categoria) {
    try {
        const respuesta = await fetch('productos.json');
        const data = await respuesta.json();
        const productos = data.productos;
        
        const contenedor = document.getElementById('productos-container');
        
        // Limpiar contenedor
        contenedor.innerHTML = '';
        
        // Filtrar productos por categoría
        const productosFiltrados = categoria 
            ? productos.filter(p => p.categoria === categoria)
            : productos;
        
        // Generar tarjetas de productos filtrados
        productosFiltrados.forEach(producto => {
            const columna = document.createElement('div');
            columna.className = 'col-md-4 mb-4';
            
            columna.innerHTML = `
                <div class="card h-100">
                    <div class="card-img-top-container">
                        <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">${producto.descripcion}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="h5 mb-0">$${producto.precio.toFixed(3)}</span>
                            <button class="btn btn-primary">Comprar</button>
                        </div>
                    </div>
                </div>
            `;
            
            contenedor.appendChild(columna);
        });
    } catch (error) {
        console.error('Error al filtrar productos:', error);
    }
}

// Cargar productos cuando se carga la página
document.addEventListener('DOMContentLoaded', cargarProductos);