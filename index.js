const express = require("express") //importato express
const productRoute = require("./src/routes/product.route")
const app = express() //inizializzato app express (NOSTRA APPLICAZIONE che gestisce API)

app.use(productRoute); //richiama il express.router che è in product.route

app.listen(3000, function(){ //messo in ascolto app alla porta 3000 
    console.log("start") 
} ) 


