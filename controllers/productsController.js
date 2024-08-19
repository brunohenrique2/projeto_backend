const ProductModel = require('../models/productsModel');

class UsersController {
    async listar(req, res) {
        const dados = await ProductModel.findAll(); // aguarda a promeça de dados do banco
        return res.json(dados); // retorna os dados convertidos em json
    }

    async buscarPorId(req, res) {
        const id = req.params.id;
        const dados = await ProductModel.findByPk(id); // Aguardando o resultado
        if (dados) { // Se os dados existir, retorna eles no formato JSON
            return res.json(dados); 
        } else { // Senão, retorna uma mensagem de not found
            return res.status(404).json({ mensagem: "Produto não encontrado" });
        }
    }

    async cadastrar(req, res) {
        // Captura os dados do produto e passa para o UsersModel
        const dados = req.body;
        await ProductModel.create(dados);
        return res.status(201).json({
            mensage: "Produto cadastrado com sucesso"
        });
    }

    async atualizar(req, res) {
        const id = req.params.id;
        const dados = req.body;
        const product = await ProductModel.findByPk(id); // Busca pelo produto que deseja ser atualizado via ID
        if(product) {
            await product.update(dados) // Atualiza o produto buscado passando os novos dados
            return res.json({
                mensagem: "Produto atualizado com sucesso"
            });
        }else {
            return res.status(404).json({ mensagem: "Produto não encontrado" });
        }
    }

    async deletar(req, res) {
        const id = req.params.id;
        const product = await ProductModel.findByPk(id); // Busca pelo produto que deseja ser deletado via ID
        if(product) {
            await product.destroy(); // Deleta o produto buscado
            return res.json({
                mensagem: "Produto deletado com sucesso"
            });
        }else {
            return res.status(404).json({ 
                mensagem: "Produto não encontrado" 
            });
        }
    }
}

module.exports = UsersController;