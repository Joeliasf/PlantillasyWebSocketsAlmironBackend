import express from 'express'
import productsRouter from './routes/products.router.js'
import cartRouter from './routes/cart.router.js'
import viewsRouter from './routes/views.router.js'
import handlebars from 'express-handlebars'
import __dirname from "./utils.js"
import { Server } from 'socket.io'

const app = express();
const httpServer = app.listen(8080, () => {
        console.log("Servidor arriba en el puerto 8080");
 });
const socketServer = new Server(httpServer)  

socketServer.on("connection", (socket)=> {
        console.log("nuevo cliente conectado")
})   

app.engine("handlebars", handlebars.engine())
app.set("views", `${__dirname}/views`)
app.set("view engine", "handlebars")

app.use(express.json())
app.use(express.static(`${__dirname}/public`));     

app.use("/api/products", productsRouter)

app.use("/api/carts", cartRouter )

app.use("/", viewsRouter)

export default socketServer;   