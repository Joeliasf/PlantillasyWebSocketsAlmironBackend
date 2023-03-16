const socket = io();

socket.on('listaProductos', (productosActualizados) => {
    const productsList = document.getElementById('products-list');
    productsList.innerHTML = '';
    productosActualizados.forEach((product) => {
      const li = document.createElement('li');
      li.innerText = `id : ${product.id} Title : ${product.title} - Description : ${product.description} - Price : ${product.price} - Thumbnails : ${product.thumbnails} - Code : ${product.code} - Stock : ${product.stock} - Category : ${product.category} - Status : ${product.status}`;
      productsList.appendChild(li);
    });
  });
