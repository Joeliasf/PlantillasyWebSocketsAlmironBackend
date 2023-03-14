import { Router } from "express";
import CartManager from "../cartManager.js"

const router = Router();

let carrito = new CartManager();

router.get('/c:id', async (req, res)=> {
  try{
    const {id} = req.params;
    const carritosPorId =  await carrito.getCartsById(Number(id));
    if (!carritosPorId) return res.send({ error: "carrito no encontrado" });

    res.send(carritosPorId)
  } catch (error) {
    console.error(error);
    res.status(500).send({error : 'error de servidor'})
}
});

router.post('/', async (req, res) => {
  try{
    const cart = await carrito.createCart();
    res.send(cart);
  } catch (error) {
    console.error(error);
    res.status(500).send({error : 'error de servidor'})
}
  });

router.post("/:cid/products/:pid", async (req, res)=> {
  try{
    const { quantity } = req.body;
    const buscarId = req.params.cid;
    const id = req.params.pid;
    const agregarProductoAlCarrito = await carrito.updateCart(Number(buscarId), Number(id), quantity);
    return res.json(agregarProductoAlCarrito);
  } catch (error) {
    console.error(error);
    res.status(500).send({error : 'error de servidor'})
}
  });


  
export default router;