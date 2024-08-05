let carrito = [];
let total = 0;

function agregarAlCarrito(producto, precio) {
    carrito.push({ producto, precio });
    total += precio;
    actualizarCarrito();
}

function eliminarDelCarrito(index) {
    total -= carrito[index].precio;
    carrito.splice(index, 1);
    actualizarCarrito();
}

function actualizarCarrito() {
    const carritoElement = document.getElementById('carrito');
    carritoElement.innerHTML = '';

    carrito.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.producto} - $${item.precio}`;

        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.onclick = () => eliminarDelCarrito(index);

        li.appendChild(botonEliminar);
        carritoElement.appendChild(li);
    });

    const totalElement = document.getElementById('total');
    totalElement.textContent = total;
}

function finalizarCompra() {
    if (total === 0) {
        alert('El carrito está vacío.');
    } else {
        alert(`Compra finalizada. El total a pagar es: $${total}`);
        
        actualizarCarrito();
    }
}
