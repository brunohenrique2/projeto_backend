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
        title: {
            type: DataTypes.STRING,
            allowNull: false // NOT NULL
        },
        shape: {
            type: DataTypes.ENUM,
            values: ["circle", "square"],
            defaultValue: "square"
        },
        radius: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        type: {
            type: DataTypes.ENUM,
            values: ["text", "color"],
            defaultValue: "text"
        }
    },
    {
        tableName: "opcoes_do_produto",  // Nome da tabela no banco de dados
        sequelize: Connection, // Conexão com o banco de dados
        timestamps: false // create_at e update_at
    }
)

module.exports = ProductImagensModel;