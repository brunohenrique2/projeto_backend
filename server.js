const express = require('express');
const privateRotas = require('./routes/privateRotas');
const publicsRotas = require('./routes/publicsRotas');

const app = express();

const port = 3001

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.post("/teste/:codigo", (req, res) => {
    // Capturando dados via query
    const query = req.query
    let dados = "Query: " + query.nome

    // Capturando dados via params
    const params = req.params
    dados += "<br> Params: " + params.codigo

    // Capturando dados via body
    const body = req.body
    dados += "<br> Body: " + JSON.stringify(body)

    return res.send(dados)
})

// Utilize JSON
app.use(express.json())

// Utilize rotas públicas
app.use("/public", publicsRotas)

// Utilize rotas privadas
app.use("/private", privateRotas)

app.listen(port);