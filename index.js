import ProductManager from "./productManager.js";


const consulta = async () => {


        await producto1.getProducts();
        
        await producto1.addProducts("producto prueba","Este es un producto prueba", 200, "sin imagen", "abc123", 25);
        
        await producto1.getProducts();
        
        await producto1.getProductsById(1)
        
        await producto1.getProductsById(5)
        
        await producto1.updateProducts (1, "esto es un cambio al producto", "cambiando el producto");
        
        await producto1.updateProducts (1, "esto es un cambio al producto", "cambiando el producto", 500, "nueva imagen", "codigonuevo", 10);
        
        await producto1.deleteProducts(7) 
        
        await producto1.deleteProducts(1)
        
        }
        

let producto1 = new ProductManager();


consulta()