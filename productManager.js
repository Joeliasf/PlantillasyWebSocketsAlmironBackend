class ProductManager{
    constructor(){
        this.products = [];
    }

    getProducts = () => {
        return this.products;
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

        if(this.products.includes ((e)=> e.code === "abc123")){
            console.log("este objeto ya existe");
            return;
        }

        this.products.push(producto)
        return;

       
    }

    getProductsById = (buscarId) => {
        const productoEncontrado = this.products.find((producto)=> producto.id === buscarId );
        
        if(!productoEncontrado){
            console.log("Not found")
            return;
        }else{
        console.log(productoEncontrado);
        return;}
    }

}

let producto1 = new ProductManager();

producto1.addProducts("producto prueba", "Este es un producto prueba", 200, "sin imagen", "abc123", 25
    )
/* producto1.addProducts("sdsd", "aaaaaa prueba", 2200, "fafasfmagen", "3324234", 252
    ) */

/* console.log(producto1.getProducts())
 */
producto1.addProducts("producto prueba", "Este es un producto prueba", 200, "sin imagen", "ab23aasdas", 25
    )
producto1.addProducts("producto prueba", "Este es un producto prueba", 200, "sin imagen", "ab23aaasdawe2224235235235sdas", 25
    )
    producto1.addProducts("producto prueba", "Este es un producto prueba", 200, "sin imagen", "abc123", 25
    )
console.log(producto1.getProducts())