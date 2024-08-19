const { DataTypes, Model } = require("sequelize");
const Connection = require("../config/connection");

class UsersModel extends Model {};

UsersModel.init(
    {
        // Os atributos do Model são definidos aqui
        firstname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        surname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
        
    },
    {
        tableName: "usuarios",  // Nome da tabela no banco de dados
        sequelize: Connection, // Conexão com o banco de dados
        timestamps: false // create_at e update_at
    }
)

module.exports = UsersModel;


/*class UsersModel {
    constructor(id, firstname, surname, email, password) {
        this.id = id;
        this.firstname = firstname;
        this.surname = surname;
        this.email = email;
        this.password = password;
    }

    static usersList = [
        {
            id: 1,
            firstname: "John",
            surname: "Doe",
            email: "john.doe@example.com",
            password: "senha123"
        },
        {
            id: 2,
            firstname: "Jane",
            surname: "Smith",
            email: "jane.smith@example.com",
            password: "senha456"
        },
        {
            id: 3,
            firstname: "Alice",
            surname: "Johnson",
            email: "alice.johnson@example.com",
            password: "senha789"
        },
        {
            id: 4,
            firstname: "Bob",
            surname: "Brown",
            email: "bob.brown@example.com",
            password: "senha1234"
        },
        {
            id: 5,
            firstname: "Charlie",
            surname: "Davis",
            email: "charlie.davis@example.com",
            password: "senha5678"
        }
    ];

    // Implementar os métodos para cada operação do banco de dados

    static authenticate(email, password) {
        // Implementar aqui a query para realizar o login do usuário
        const index = this.usersList.findIndex(user => user.email === email && user.password === password);
        return this.usersList[index];
    }

    static listar() {
        // Retorna a lista de usuários
        return this.usersList;
    }

    static buscarPorId(id) {
        // Implementar aqui a query para buscar um usuário pelo id
        return this.usersList.find(user => user.id === id);
    }

    static cadastrar(dados) {
        // Inserir o novo usuário na lista
        this.usersList.push(dados);
        return dados;
    }

    static atualizar(id, data) {
        // Atualizar os dados do usuário na lista pelo index
        const index = this.usersList.findIndex(user => user.id === id);
        this.usersList[index] = data;
        return this.usersList[index];
    }

    static deletar(id) {
        // Implementar aqui a query para excluir um usuário pelo id
        this.usersList = this.usersList.filter(user => user.id !== id);
        return this.usersList;
    }
}*/
