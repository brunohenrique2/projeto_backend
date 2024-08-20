const UsersModel = require('../models/usersModel');
const bcrypt = require('bcrypt');

class UsersController {
    async listar(req, res) {
        const dados = await UsersModel.findAll(); // aguarda a promeça de dados do banco
        return res.json(dados); // retorna os dados convertidos em json
    }

    async buscarPorId(req, res) {
        try {
            const id = req.params.id;
            console.log(id)
            // busca o usuario pelo ID passado como parametro na URL
            const dados = await UsersModel.findByPk(id);
    
            if (dados) { // Se os dados existir, retorna eles no formato JSON
                return res.json(dados); 
            } else { // Senão, retorna uma mensagem de not found
                return res.status(404).json({ mensagem: "Usuário não encontrado" });
            }
        } catch (error) {
            // Captura qualquer erro inesperado e retorna uma mensagem de erro com status 500
            return res.status(500).json({ mensagem: "Erro ao buscar usuário", error: error.message });
        }
    
    }

    async cadastrar(req, res) {
        // Captura os dados do usuario e passa para o UsersModel
        const { firstname, surname, email, password} = req.body;
        try {
            // Gera o hash da senha
            const hashedPassword = await bcrypt.hash(password, 10);
            const dados = {
                firstname,
                surname,
                email,
                password: hashedPassword,
            };
            await UsersModel.create(dados);
            return res.status(201).json({
                mensage: "usuario cadastrado com sucesso"
            });
        } catch (err) {
            return res.status(500).json({ mensagem: "Erro ao cadastrar usuário", erro: err.message });
        }
    }

    async atualizar(req, res) {
        const id = req.params.id;
        const dados = req.body;
        if(id) {
            await UsersModel.update(dados, { where: {id} }) // Atualiza o usuario onde for igual ao ID passando os novos dados
            return res.json({
                mensagem: "usuario atualizado com sucesso"
            });
        }else {
            return res.status(404).json({ mensagem: "Usuário não encontrado" });
        }
    }

    async deletar(req, res) {
        const id = req.params.id;
        const user = await UsersModel.findByPk(id); // Busca pelo usuario que deseja ser deletado via ID
        if(user) {
            await user.destroy(); // Deleta o usuario buscado
            return res.json({
                mensagem: "Usuario deletado com sucesso"
            });
        }else {
            return res.status(404).json({ 
                mensagem: "Usuário não encontrado" 
            });
        }
    }
}

module.exports = UsersController;