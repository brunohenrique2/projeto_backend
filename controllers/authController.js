const UsersModel = require("../models/usersModel");
const bcrypt = require("bcrypt");

class AuthController {
    async login(email, password) {
        try {
            const user = UsersModel.findOne({ where: {email} });
            if(!user) {
                throw new Error("Usuário não encontrado");
            }

            const isMath = await bcrypt.compare(password, user.password);
            if(!isMath) {
                throw new Error("Senha inválida");
            }

            return user;
        } catch (err) {
            console.error("Erro ao tentar autenticar: ", err);
            return null;
        }
    }
}

module.exports = AuthController;