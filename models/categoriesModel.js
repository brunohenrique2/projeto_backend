const { DataTypes, Model } = require("sequelize");
const Connection = require("../config/connection");

class CategoryModel extends Model {}; 

CategoryModel.init(
    {
        // Os atributos do Model são definidos aqui
        name: {
            type: DataTypes.STRING,
            allowNull: false // NOT NULL
        },
        slug: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true // UNIQUE
        },
        use_in_menu: {
            type: DataTypes.BOOLEAN,
            defaultValue: false // DEFAULT FALSE
        }
    },
    {
        tableName: "categorias",  // Nome da tabela no banco de dados
        sequelize: Connection, // Conexão com o banco de dados
        timestamps: true // create_at e update_at
    }
)

Connection.sync()

module.exports = CategoryModel;