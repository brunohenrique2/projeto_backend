const UsersModel = require('../models/usersModel');
const bcrypt = require('bcrypt');

class UsersController {
    async listar(req, res) {
        const dados = await UsersModel.findAll(); // aguarda a promeça de dados do banco
        return res.json(dados); // retorna os dados convertidos em json
    }

    async buscarPorId(req, res) {
        const id = req.params.id;
        const dados = await UsersModel.findByPk(id); // Aguardando o resultado
        if (dados) { // Se os dados existir, retorna eles no formato JSON
            return res.json(dados); 
        } else { // Senão, retorna uma mensagem de not found
            return res.status(404).json({ mensagem: "Usuário não encontrado" });
        }
    }

    async cadastrar(req, res) {
        // Captura os dados do usuario e passa para o UsersModel
        const dados = req.body;
        await UsersModel.create(dados);
        return res.status(201).json({
            mensage: "usuario cadastrado com sucesso"
        });
    }

    async atualizar(req, res) {
        const id = req.params.id;
        const dados = req.body;
        if(id) {
            await user.update(dados, { where: {id} }) // Atualiza o usuario onde for igual ao ID passando os novos dados
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