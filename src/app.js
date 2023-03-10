import ProductManager from "./productManager.js";
import express from 'express'

let producto1 = new ProductManager();

const app = express();



app.get('/products', async (req, res)=> {
        const productos = await producto1.getProducts();
        const limit = req.query.limit;   
        let limiteProductos = productos.slice(0, limit);
        if(!limit){
                res.send(productos);
        }else{
        res.send(limiteProductos);}

        })

app.get('/products/:id', async (req, res)=>{
        const idProducto = req.params.id;
        const productosporId =  await producto1.getProductsById(Number(idProducto));
        if (!productosporId) return res.send({ error: "producto no encontrado" });

        res.send(productosporId)

})

app.listen(8080, () => {
        console.log("Servidor arriba en el puerto 8080");
      });
      