import { Router } from "express";
import ProductManager from "../productManager.js";

const router = Router();

let producto1 = new ProductManager();

router.get('/', async (req, res)=> {
    try {
        const productos = await producto1.getProducts();
        const {limit} = req.query;   
        let limiteProductos = productos.slice(0, limit);
        if(!limit) {
            res.send(productos);
        } else {
            res.send(limiteProductos);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'error de servidor.' });
        }
    });

router.get('/:pid', async (req, res)=>{
    try {
    const id = req.params.pid
    const productosporId =  await producto1.getProductsById(Number(id));
    if (!productosporId) return res.send({ error: "producto no encontrado" });

    res.send(productosporId)
    } catch (error) {
        console.error(error);
        res.status(500).send({error : 'error de servidor'})
    }
})

router.post("/", async (req, res)=> {
    try {
    const { title, description, price, thumbnails, code, stock, category, status } = req.body
    const agregarProducto = await producto1.addProducts(title, description, price, thumbnails, code, stock, category, status);
    return res.json(agregarProducto);
} catch (error) {
    console.error(error);
    res.status(500).send({error : 'error de servidor'})
}
})

router.put("/p:id", async (req, res)=> {
    try{
    const {id} = req.params
    const {title, description, price, thumbnails, code, stock, category, status } = req.body;
    const actualizarProductos =  await producto1.updateProducts(Number(id), title, description, price, thumbnails, code, stock, category, status)
    if (!actualizarProductos) {
    return res.status(404).send({error: "Producto no encontrado"});
}       else{
    return res.json(actualizarProductos)
}
} catch (error) {
    if (error.message === 'status tiene que ser un boolean'){
    return res.status(400).send({error : error.message})
} else{
    console.error(error);
    return res.status(500).send({error : 'error de servidor'});
}   
}
})

router.delete ("/p:id", async (req, res)=> {
    try{
    const { id } = req.params; 
    const result = await producto1.deleteProducts(Number(id));
    res.send(result)
} catch (error) {
    console.error(error);
    res.status(500).send({error : 'error de servidor'})
}
})

export default router;