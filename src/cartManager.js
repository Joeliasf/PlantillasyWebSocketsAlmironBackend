import fs, { stat } from "fs"
import ProductManager from './productManager.js';
const productManager = new ProductManager();

export default class CartManager{
    constructor(){
        this.path = "./files/Carts.json";
    }
    getCarts = async () => {
        try{
        if (fs.existsSync(this.path)){
            const data = await fs.promises.readFile (this.path, "utf-8");
            if (data === ""){
                return [];
            }else{
            const result = JSON.parse(data);
            return result;}
        }
    } catch (error){
        throw new Error ('error leyendo el archivo')
    }
    };

    getCartsById = async (buscarId) => {
        try{
        const buscarCarrito = await this.getCarts();
        const carritoEncontrado = buscarCarrito.find((e)=> e.id === buscarId );

        if(!carritoEncontrado){
            return("producto no encontrado");
        }else{
            
        return carritoEncontrado;
        }
    } catch (error){
        throw new Error ('error leyendo el archivo')
    }
    } 
    createCart = async () => {
        try{
        const carts = await this.getCarts();
        const cartIds = carts.map((cart) => cart.id);
        const newCartId = cartIds.length === 0 ? 1 : Math.max(...cartIds) + 1;
        const newCart = { id: newCartId, products: [] };
        carts.push(newCart);
        await fs.promises.writeFile(
            this.path,
            JSON.stringify(carts, null, "\t")
        )
            return carts;
        } catch (error){
            throw new Error ('error leyendo el archivo')
        }
      };

       updateCart = async (buscarId, id, quantity) => {
        try{
        const buscarCarrito = await this.getCarts();
        const buscarProducto = await productManager.getProducts();
        const cartIndex = buscarCarrito.findIndex((cart) => cart.id === Number(buscarId));

        if (cartIndex === -1) {
            return `El carrito solicitado con id ${buscarId} no existe`;
          }
        const product = buscarProducto.find((product) => product.id === id);
        if (!product) {
            return `El producto con id ${id} no existe`;
          }

        if (!buscarId || !id || !quantity ) {
          return "Faltan datos en su producto";
        } else if (cartIndex != -1 && product)  {
            const productIndex = buscarCarrito[cartIndex].products.findIndex((product) => product.id === id);
            if (productIndex != -1) {
                const stock = product.stock - quantity;
                if(stock < 0){
                    return `No hay suficiente stock disponible del producto con id ${id}`
                }
                product.stock = stock
              buscarCarrito[cartIndex].products[productIndex].quantity += quantity;
            } else {
                if (product.stock < quantity){
                    return `no hay suficiente stock disponible del producto con id ${id}`
                }
                product.stock -= quantity;
              buscarCarrito[cartIndex].products.push({ id: id, quantity: quantity });
            }
            await fs.promises.writeFile(productManager.path, JSON.stringify(buscarProducto, null, "\t"));
            await fs.promises.writeFile(this.path, JSON.stringify(buscarCarrito, null, "\t"));
            return buscarCarrito[cartIndex];
        } 
    } catch (error){
        throw new Error ('error leyendo el archivo')
    }
      }; 
      

    
}
