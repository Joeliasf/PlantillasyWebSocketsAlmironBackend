import { Router } from "express";
import CartManager from "../cartManager.js"

const router = Router();

let carrito = new CartManager();

router.get('/c:id', async (req, res)=> {
    const {id} = req.params;
    const carritosPorId =  await carrito.getCartsById(Number(id));
    if (!carritosPorId) return res.send({ error: "carrito no encontrado" });

    res.send(carritosPorId)
});

router.post('/', async (req, res) => {
    const cart = await carrito.createCart();
    res.send(cart);
  });

router.post("/c:id", async (req, res)=> {
    const { id, quantity } = req.body;
    const buscarId = req.params.id;
    const agregarProductoAlCarrito = await carrito.updateCart(Number(buscarId), id, quantity);
    return res.json(agregarProductoAlCarrito);
  });

export default router;