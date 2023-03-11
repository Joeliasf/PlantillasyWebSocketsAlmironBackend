import { Router } from "express";
import ProductManager from "../productManager.js";

const router = Router();

let producto1 = new ProductManager();


router.get('/', async (req, res)=> {
    const productos = await producto1.getProducts();
    const {limit} = req.query;   
    let limiteProductos = productos.slice(0, limit);
    if(!limit){
            res.send(productos);
    }else{
    res.send(limiteProductos);}

    })

router.get('/p:id', async (req, res)=>{
    const {id} = req.params;
    const productosporId =  await producto1.getProductsById(Number(id));
    if (!productosporId) return res.send({ error: "producto no encontrado" });

    res.send(productosporId)

})

router.post("/", async (req, res)=> {
    const { title, description, price, thumbnails, code, stock, category, status } = req.body
    const agregarProducto = await producto1.addProducts(title, description, price, thumbnails, code, stock, category, status);
    return res.json(agregarProducto);
})

router.put("/p:id", async (req, res)=> {
    const {id} = req.params
    const {title, description, price, thumbnails, code, stock, category, status } = req.body;
    const actualizarProductos =  await producto1.updateProducts(Number(id), title, description, price, thumbnails, code, stock, category, status)
    if (!actualizarProductos) {
    return res.status(404).send({error: "Producto no encontrado"});
}       else{
    return res.json(actualizarProductos)
}
})

router.delete ("/p:id", async (req, res)=> {
    const { id } = req.params; 
    const result = await producto1.deleteProducts(Number(id));
    res.send(result)
})

export default router;