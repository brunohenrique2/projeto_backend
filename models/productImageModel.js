const { DataTypes, Model } = require("sequelize");
const Connection = require("../config/connection");

class ProductImagensModel extends Model {}; 

ProductImagensModel.init(
    {
        // Os atributos do Model são definidos aqui
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false // NOT NULL
        },
        enabled: {
            type: DataTypes.BOOLEAN,
            defaultValue: true // DEFAULT TRUE
        },
        path: {
            type: DataTypes.STRING,
            allowNull: false // NOT NULL
        }
    },
    {
        tableName: "imagens_do_produto",  // Nome da tabela no banco de dados
        sequelize: Connection, // Conexão com o banco de dados
        timestamps: false // create_at e update_at
    }
)

module.exports = ProductImagensModel;