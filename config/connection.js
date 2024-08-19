const { Sequelize } = require("sequelize")


const Connection = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'digital_store'
})

Connection.sync()

module.exports = Connection