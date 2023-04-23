const index = require("../controllers/product.controller");  //abbiamo importato index 
const express = require("express")
const route = express.Router();  //router è un metodo che restituisce il router
route.get("/products", index) // richiamo index
module.exports = route; // esportiamo route