const CategoryModel = require('../models/categoriesModel');

class CategoriesController {
    async listar(req, res) {
        /*const limit = parseInt(req.params.limit) || 12 // Quantos itens seram retornados por pagina
        const page = parseInt(req.params.page) || 1 // Qual pagina será retornada
        const fields = req.params.fields ? req.params.fields.split(",") : null // Quais campos serão retornados na resposta. `split(',')` separa os campos em um array.
        const use_in_menu = req_params.use_in_menu === true // Um filtro para retornar apenas categorias que podem aparecer no menu. Verifica se o valor é "true".
        const offset = (page - 1) * limit; // Calcula o offset para limitar a quantidade de dados retornados por página*/
        let query = req.query
        query = query.fields.split(",")
        const dados = await CategoryModel.findAll({
            attributes: query
        }); // aguarda a promeça de dados do banco
        return res.json(dados); // retorna os dados convertidos em json
    }

    async buscarPorId(req, res) {
        const id = req.params.id;
        const dados = await CategoryModel.findByPk(id); // Aguardando o resultado
        if (dados) { // Se os dados existir, retorna eles no formato JSON
            return res.json(dados); 
        } else { // Senão, retorna uma mensagem de not found
            return res.status(404).json({ mensagem: "Categoria não encontrada" });
        }
    }

    async cadastrar(req, res) {
        // Captura os dados da categoria e passa para o CategoriesModel
        const dados = req.body;
        await CategoryModel.create(dados);
        return res.status(201).json({
            mensage: "categoria cadastrado com sucesso"
        });
    }

    async atualizar(req, res) {
        const id = req.params.id;
        const dados = req.body;
        if(id) {
            // Atualiza a categoria onde for igual ao id e passa os novos dados
            await CategoryModel.update(dados, { where: {id} })
            return res.json({
                mensagem: "Categoria atualizada com sucesso"
            });
        }else {
            // Senão, retorna um erro not found(404)
            return res.status(404).json({ mensagem: "Categoria não encontrada" });
        }
    }

    async deletar(req, res) {
        const id = req.params.id;
        if(id) {
            await CategoryModel.destroy({ where: {id} }); // Deleta a categoria buscada
            return res.json({
                mensagem: "Categoria deletada com sucesso"
            });
        }else {
            return res.status(404).json({ 
                mensagem: "Categoria não encontrada" 
            });
        }
    }
}

module.exports = CategoriesController;