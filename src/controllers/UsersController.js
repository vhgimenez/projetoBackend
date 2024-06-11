const knex = require("../database");

class UsersController {

    async getUsers(req, res) {

        const users = await knex("users");
        res.status(200).json(users);
        
    };

    async addUsers(req, res) {

        try {

            console.log('Dados Recebidos:', req.body);
  
              const {
                  name,
                  email,
                  phone,
                  plan,
                  add
              } = req.body;

              const insertedUsers = await knex("users").insert({
                name,
                email,
                phone,
                plan,
                add
            }).returning('*');

            return res.status(200).json({
                message: "Usuário Cadastrado!",
                user: insertedUsers[0]
            });

            } catch (error) {
            
                console.error('Erro ao cadastrar usuário:', error);
                    return res.status(500).json({
                    error: `Ocorreu um erro ao processar a solicitação: ${error.message}.`
                });

            }
    };

}

module.exports = UsersController;