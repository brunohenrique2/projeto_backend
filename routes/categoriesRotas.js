const express = require('express');
const CategoriesController = require('../controllers/categoriesController');
const categoriesRouters = express.Router();

const categoriesController = new CategoriesController

categoriesRouters.get("/", categoriesController.listar)
categoriesRouters.get("/:id", categoriesController.buscarPorId)
categoriesRouters.post("/", categoriesController.cadastrar)
categoriesRouters.put("/:id", categoriesController.atualizar)
categoriesRouters.delete("/:id", categoriesController.deletar)

module.exports = categoriesRouters