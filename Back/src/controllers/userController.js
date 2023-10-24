const UserModel = require('../models/users');

const usersController = {};
usersController.createUser = async (req, res) => {
    try{
        const newUser = new UserModel(req.body);
        await newUser.save();
        res.json({msj: 'Usuario creado con exito'});
    } catch (error) {
        console.error('Error al Crear un Usuario: ' ,error);
        res.status(500).json({msj: 'Error interno del servidor'});
    }
};
module.exports = {
     usersController,
}
