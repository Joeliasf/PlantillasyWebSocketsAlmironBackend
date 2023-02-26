import ProductManager from "./productManager.js";

const definirProducto = new ProductManager();

const consulta = async () => {
    let primerProducto = await definirProducto.getProducts();
    console.log(primerProducto)
    
}
let producto1 = new ProductManager();



producto1.addProducts("producto prueba", "Este es un producto prueba", 200, "sin imagen", "abc123", 25)


producto1.addProducts("producto prueba", "Este es un producto prueba", 200, "sin imagen", "abhgftf5r78888c123", 25)


producto1.addProducts("producto prueba", "Este es un producto prueba", 200, "sin imagen", "abc123", 25)

producto1.addProducts( "Este es un producto prueba", 200, "sin imagen", "abc123", 25)

/* producto1.getProductsById(1)

producto1.getProductsById(5)

producto1.getProductsById(1) */

consulta()