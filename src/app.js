/* import ProductManager from "./productManager.js"; */
/* import CartManager from "./cartManager.js" */
import express from 'express'
import productsRouter from './routes/products.router.js'
import cartRouter from './routes/cart.router.js'

/* let producto1 = new ProductManager(); */
/* let carrito = new CartManager(); */

const app = express();

app.use(express.json())

/* app.get('/api/products', async (req, res)=> {
        const productos = await producto1.getProducts();
        const {limit} = req.query;   
        let limiteProductos = productos.slice(0, limit);
        if(!limit){
                res.send(productos);
        }else{
        res.send(limiteProductos);}

        })

app.get('/api/products/p:id', async (req, res)=>{
        const {id} = req.params;
        const productosporId =  await producto1.getProductsById(Number(id));
        if (!productosporId) return res.send({ error: "producto no encontrado" });

        res.send(productosporId)

})

app.post("/api/products", async (req, res)=> {
        const { title, description, price, thumbnails, code, stock, category, status } = req.body
        const agregarProducto = await producto1.addProducts(title, description, price, thumbnails, code, stock, category, status);
        return res.json(agregarProducto);
})

app.put("/api/products/p:id", async (req, res)=> {
        const {id} = req.params
        const {title, description, price, thumbnails, code, stock, category, status } = req.body;
        const actualizarProductos =  await producto1.updateProducts(Number(id), title, description, price, thumbnails, code, stock, category, status)
        if (!actualizarProductos) {
        return res.status(404).send({error: "Producto no encontrado"});
}       else{
        return res.json(actualizarProductos)
}
})

app.delete ("/api/products/p:id", async (req, res)=> {
        const { id } = req.params; 
        const result = await producto1.deleteProducts(Number(id));
        res.send(result)
}) */

/* app.get('/api/carts/c:id', async (req, res)=> {
        const {id} = req.params;
        const carritosPorId =  await carrito.getCartsById(Number(id));
        if (!carritosPorId) return res.send({ error: "carrito no encontrado" });

        res.send(carritosPorId)
 });

 app.post('/api/carts', async (req, res) => {
        const cart = await carrito.createCart();
        res.send(cart);
      });

app.post("/api/carts/c:id", async (req, res)=> {
        const { id, quantity } = req.body;
        const buscarId = req.params.id;
        const agregarProductoAlCarrito = await carrito.updateCart(Number(buscarId), id, quantity);
        return res.json(agregarProductoAlCarrito);
      }); */

app.listen(8080, () => {
        console.log("Servidor arriba en el puerto 8080");
 });
     
 app.use("/api/products", productsRouter)

 app.use("/api/carts", cartRouter )