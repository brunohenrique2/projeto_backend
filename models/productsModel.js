/*class ProductModel {
    static productsList = [
        {
            "id": 1,
            "enabled": false,
            "name": "Notebook Asus Vivobook Edition",
            "slug": "notebook-asus-vivobook-edition",
            "use_in_menu": false,
            "stock": 20,
            "description": "",
            "price": 10.99,
            "price_with_discount": 0.30
        },
        {
            "id": 2,
            "enabled": true,
            "name": "Monitor Samsung QE278H",
            "slug": "monitor-samsung-qe278h",
            "use_in_menu": true,
            "stock": 15,
            "description": "",
            "price": 25.99,
            "price_with_discount": 0.20
        },
        {
            "id": 3,
            "enabled": true,
            "name": "Mouse Logitech G15",
            "slug": "mouse-logitech-g15",
            "use_in_menu": true,
            "stock": 30,
            "description": "",
            "price": 8.99,
            "price_with_discount": 0.15
        },
        {
            "id": 4,
            "enabled": false,
            "name": "Teclado Dell Inspiron 15",
            "slug": "teclado-dell-inspiron-15",
            "use_in_menu": false,
            "stock": 25,
            "description": "",
            "price": 12.99,
            "price_with_discount": 0.10
        },
        {
            "id": 5,
            "enabled": true,
            "name": "Headset Sony MDR-7506",
            "slug": "headset-sony-mdr-7506",
            "use_in_menu": true,
            "stock": 10,
            "description": "",
            "price": 19.99,
            "price_with_discount": 0.05
        },
        {
            "id": 6,
            "enabled": true,
            "name": "Processador AMD Ryzen 5 3600",
            "slug": "processador-amd-ryzen-5-3600",
            "use_in_menu": true,
            "stock": 18,
            "description": "",
            "price": 34.99,
            "price_with_discount": 0.00
        }
    ]

    constructor(id, productName, price, priceWithDiscount, quantity, category, marca) {
        this.id = id;
        this.productName = productName;
        this.price = price;
        this.priceWithDiscount = priceWithDiscount;
        this.quantity = quantity;
        this.category = category;
        this.marca = marca;
    }

    // Implementar os metodos para cada operacao do banco de dados
    static listar() {
        // Retornar a lista de produtos
        return this.productsList;
    }

    static buscarPorId(id) {
        // Implementar aqui a query para buscar um produto pelo id
        const dados = this.productsList.filter(user => user.id == id)
        return dados
    }

    static cadastrar(dados) {
        // Inserir o novo produto na lista
        return this.productsList.push(dados)
    }

    static atualizar(id, data) {
        // Atualizar os dados do produto na lista pelo index
        const index = this.productsList.findIndex(user => user.id == id);
        return this.productsList[index] = data
    }

    static deletar(id) {
        // Implementar aqui a query para excluir um produto pelo id
        const dados = this.productsList.filter(user => user.id != id)
        return this.productsList = dados
    }
}
*/

const { DataTypes, Model } = require("sequelize");
const Connection = require("../config/connection");

class ProductModel extends Model {};

ProductModel.init(
    {
        // Os atributos do Model são definidos aqui
        enabled: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },        
        slug: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        use_in_menu: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        stock: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: true
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        price: {
            type: DataTypes.FLOAT(10, 2),
            allowNull: false
        },
        price_with_discount: {
            type: DataTypes.FLOAT(10, 2),
            allowNull: false
        }
        
    },
    {
        tableName: "produtos",  // Nome da tabela no banco de dados
        sequelize: Connection, // Conexão com o banco de dados
        timestamps: true // create_at e update_at
    }
)

module.exports = ProductModel;