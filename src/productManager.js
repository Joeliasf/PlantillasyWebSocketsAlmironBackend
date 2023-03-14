import fs, { stat } from "fs"

export default class ProductManager{
    constructor(){
        this.path = "./files/Productos.json";
    }

    getProducts = async () => {
        try{
        if (fs.existsSync(this.path)){
            const data = await fs.promises.readFile (this.path, "utf-8");
            if (data == ""){
                console.log([])
                return [];
            }else{
            const result = JSON.parse(data);
            return result;}
        }
    } catch (error){
        throw new Error ('error leyendo el archivo')
    }
    };

    addProducts = async (title, description, price ,thumbnails, code, stock, category, status
    ) => {
        try{
        const productosIngresados = await this.getProducts();
        const producto = {
            title,
            description,
            price,
            thumbnails,
            code,
            stock,
            category,
            status : Boolean(status)

        }
        if (productosIngresados.length === 0){
            producto.id = 1
        }else {
            producto.id = productosIngresados[productosIngresados.length -1].id + 1;
        }

        const indiceProducto = productosIngresados.findIndex((e)=> e.code === code)
        if (typeof status !== 'boolean') {
            throw new Error('status tiene que ser un boolean');
          }
        if(!title || !description || !price || !thumbnails || !code || !stock || !category||!Boolean(status)){
            return("faltan datos en su producto");
        }
        else if(indiceProducto === -1){
            productosIngresados.push(producto)
            await fs.promises.writeFile(
                this.path,
                JSON.stringify(productosIngresados, null, "\t")
            )
                return producto;
        } else {
            return("producto ya ingresado");
        }
    } catch (error){
        console.error(error.message)
    }
            

    }

   getProductsById = async (buscarId) => {
    try{
        const buscarProducto = await this.getProducts();
        const productoEncontrado = buscarProducto.find((e)=> e.id === buscarId );

        if(!productoEncontrado){
            return("producto no encontrado");
        }else{
            
        return productoEncontrado;
        }
    } catch (error){
        throw new Error ('error leyendo el archivo')
    }
    } 

    updateProducts = async (buscarId, title, description, price ,thumbnails, code, stock, category, status) => {
        try{
        const buscarProducto = await this.getProducts();
        for (var i = 0; i < buscarProducto.length; i++){
        if(!buscarId || !title || !description || !price || !thumbnails || !code || !stock || !category || !status){
            
            return("faltan datos en su producto");
        }
        else if(buscarProducto[i].id === buscarId) {
            if (buscarProducto[i].code === code){
            buscarProducto[i].title = title;
            buscarProducto[i].description = description;
            buscarProducto[i].price = price;
            buscarProducto[i].thumbnails = thumbnails;
            buscarProducto[i].code = code;
            buscarProducto[i].stock = stock;
            buscarProducto[i].category = category;
            buscarProducto[i].status = status;
            break;
          }else {
            return "el codigo del producto no coincide"
          }
        }
        }
          await fs.promises.writeFile(
            this.path,
            JSON.stringify(buscarProducto, null, "\t")
          );
          return buscarProducto.find(product => product.id === buscarId);
        } catch (error){
            throw new Error ('error leyendo el archivo')
        }
            } ; 

        deleteProducts = async (buscarId) => {
            try{
            const buscarProductos = await this.getProducts();
            const borrarProducto = buscarProductos.findIndex((e) => e.id === buscarId);
          
            if (borrarProducto === -1) {
              return "el producto solicitado no existe";
            } else {
              buscarProductos.splice(borrarProducto, 1);
            }
          
            await fs.promises.writeFile(
              this.path,
              JSON.stringify(buscarProductos, null, "\t")
            )
            return buscarProductos;
        } catch (error){
            throw new Error ('error leyendo el archivo')
        }
          }
}




