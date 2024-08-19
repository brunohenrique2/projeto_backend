const Connection = require("../config/connection");

//Importando os models
require("../models/usersModel");
require("../models/productsModel");
require("../models/categoryModel");
require("../models/productImageModel");
require("../models/productOptionsModel");

Connection.sync({force: true})

.then(() => {
    console.log('Banco de dados sincronizado com sucesso!');
  })
  .catch(err => {
    console.error('Erro ao sincronizar o banco de dados:', err);
  });