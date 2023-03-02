import ProductManager from "./productManager.js";
import express from 'express'

let producto1 = new ProductManager();

const productos = await producto1.getProducts();

const index = express();



index.get('/products', (req, res)=> {
        const limit = req.query.limit;   
        let limiteProductos = productos.slice(0, limit);
        if(!limit){
                res.send(productos);
        }else{
        res.send(limiteProductos);}

        })

index.get('/products/:idProducto', (req, res)=>{
        const idProducto = req.params.idProducto;
        const buscarProducto = productos.find((e) => e.id = idProducto);
        console.log(idProducto)
        console.log(productos)
        if(!buscarProducto){
                return res.send({error : "ese producto no existe"})
        }else{
                res.send(buscarProducto)
        }
})

index.listen(8080, () => {
        console.log("Servidor arriba en el puerto 8080");
      });
      