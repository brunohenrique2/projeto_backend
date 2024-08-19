const express = require('express');
const ProductsController = require('../controllers/productsController');
const productsRouters = express.Router();

const productsController = new ProductsController

productsRouters.get("/", productsController.listar)
productsRouters.get("/:id", productsController.buscarPorId)
productsRouters.post("/", productsController.cadastrar)
productsRouters.put("/:id", productsController.atualizar)
productsRouters.delete("/:id", productsController.deletar)


module.exports = productsRouters