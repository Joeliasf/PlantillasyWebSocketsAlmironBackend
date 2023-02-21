class ProductManager{
    constructor(){
        this.products = [];
    }

    getProducts = () => {
        return console.log(this.products);
        
    }
    

    addProducts = (title, description, price ,thumbnail, code, stock,
    ) => {
        const producto = {
            id : this.products.length + 1,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        }

        const indiceProducto = this.products.findIndex((e)=> e.code === code)
    
        if(!title || !description || !price || !thumbnail || !code || !stock){
            console.log("faltan datos en su producto")
            return;
        }
        else if(indiceProducto === -1){
            this.products.push(producto)

        } else {
            
            console.log("producto ya ingresado")
            return;
        }
    
            

    }

    getProductsById = (buscarId) => {
        const productoEncontrado = this.products.find((e)=> e.id === buscarId );

        if(!productoEncontrado){
            console.log("producto no encontrado")
            return;
        }else{
        console.log(productoEncontrado);
}
    }

}

let producto1 = new ProductManager();

producto1.getProducts()

producto1.addProducts("producto prueba", "Este es un producto prueba", 200, "sin imagen", "abc123", 25)

producto1.getProducts()

producto1.addProducts("producto prueba", "Este es un producto prueba", 200, "sin imagen", "abhgftf5r78888c123", 25)

producto1.getProducts()

producto1.addProducts("producto prueba", "Este es un producto prueba", 200, "sin imagen", "abc123", 25)

producto1.getProducts()

producto1.addProducts( "Este es un producto prueba", 200, "sin imagen", "abc123", 25)

producto1.getProductsById(1)

producto1.getProductsById(5)
/*




producto1.getProductsById(1)
producto1.getProductsById(3)
 */
