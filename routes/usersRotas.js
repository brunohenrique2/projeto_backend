const express = require('express');
const UsersController = require('../controllers/usersController');
const usersRouters = express.Router();

const usersController = new UsersController

usersRouters.get("/", usersController.listar)
usersRouters.get("/:id", usersController.buscarPorId)
usersRouters.post("/", usersController.cadastrar)
usersRouters.put("/:id", usersController.atualizar)
usersRouters.delete("/:id", usersController.deletar)

module.exports = usersRouters