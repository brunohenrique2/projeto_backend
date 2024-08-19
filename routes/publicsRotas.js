const express = require('express');
const AuthController = require('../controllers/authController');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const publicsRotas = express.Router()

publicsRotas.post("/login", (req, res) => {
    const {email, password} = req.body
    const authController = new AuthController();
    const user = authController.login(email, password)
    if(user) {
        const token = jwt.sign({id: user.id, email: user.email}, process.env.APP_AUTH_TOKEN, {expiresIn: '1h'})
        return res.json({
            token: token
        })
    }
    return res.status(401).json({
        error: "Email ou senha inválidos"
    })
    
})

module.exports = publicsRotas;