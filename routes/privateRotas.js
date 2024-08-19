const express = require('express');
const usersRotas = require('./usersRotas')
const productsRotas = require('./productsRotas')
const categoriesRotas = require('./categoriesRotas')
const jwt = require('jsonwebtoken');
require('dotenv').config();
const privateRotas = express.Router()

// Middleware para verificar token de autorização
privateRotas.use((req, res, next) => {
    if(req.headers.token) {
        const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

        try {
            // Verificar se o token é válido
            jwt.verify(token, process.env.APP_AUTH_TOKEN, (err, decoded) => {
                if(err) {
                    return res.status(401).send({message: 'Token inválido'})
                }

                req.user = decoded
                // Token válido, continuar com a requisição
                next()
            })

        } catch (error) {
            // Senão, retornar um erro 401 (Unauthorized)
            return res.status(401).send(error)
        }
    }
})

// Rotas de Usuários
privateRotas.use("/users", usersRotas)

// Rotas de Produtos
privateRotas.use("/products", productsRotas)

//Rotas de Categorias
privateRotas.use("/categories", categoriesRotas)

module.exports = privateRotas

// c:\Users\Dell\Desktop\estudos\projeto_backend\routes\privateRotas.j

module.exports = privateRotas