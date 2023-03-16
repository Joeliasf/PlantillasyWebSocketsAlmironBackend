import { Router } from "express";
import ProductManager from "../productManager.js";

let producto = new ProductManager();

const router = Router();

router.get('/', async (req, res)=> {
  try{
      const listaProducto = await producto.getProducts();
      res.render('index', { title: 'Productos', listaProducto, layout: 'home'} );
    }catch (error){
      console.log(error)
      res.status(500).send({error: "problema de servidor"})
    }
})

 router.get("/realtimeproducts", async (req, res) => {
    const listaProducto = await producto.getProducts();
    res.render("realtimeproducts", {title : 'Productos actualizados', listaProducto, layout: "home"});
  }); 
  
export default router;