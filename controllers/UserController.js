const User = require('../models/Users');
const { all } = require('../app');
const { findOne } = require('../models/Users');
const { param } = require('../routes/userRoutes');

// req : Lo que viene por la URL.
// res : Respuesta que va a retornar.
function create(req, res){
    var user = new User(); // vamos a crear un nuevo usuario teniendo en cuenta este modelo de usuario.
    var params = req.body;
    //console.log("Parametros -> ", params);
    
    user.firstName = params.firstName;
    user.lastName = params.lastName;
    user.email = params.email;
    user.age = params.age;
    user.password = params.password;
    user.role = params.role;

    console.log(user);

    user.save( (error, usercreated) => {
        if (error){
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor",
            })
        }else{
            if(!usercreated){
                res.status(400).send({
                    statusCode: 400,
                    message: "Error al crear el usuario"
                })
            }else{
                res.status(200).send({
                    statusCode :200,
                    message: "Usuario creado corectamente",
                    dataUser: usercreated,
                })
            }
        }
    })
};

function update(req, res){
    var userId =req.params.idUser;
    var userUpdate = req.body;

    User.findByIdAndUpdate(userId, userUpdate, (error, userUpdated) => { 
        if(error){
            res.send({
                statusCode: 500,
                message: "Error al conectar con el servidor",
            })
        }else{
            if(!userUpdated){
                res.send({
                    statusCode: 400,
                    message: "No fue posible actualizar la data",
                })
            }else{
                res.send({
                    statusCode: 200,
                    message: "Usuario actualizado correctamente",
                    message: "Exito",
                })
            }
        }
    })
};

function remove(req, res){
    var userId = req.params.idUser; 

    User.findByIdAndDelete(userId, (error, userDeleted) => { 
        if(error){
            res.send({
            statusCode: 500,
            message: "Error al conectarnos al servidor",
            })
        }else{
            if(!userDeleted){
                res.send({
                    statusCode: 400,
                    message: "No fue posible  eliminar el usuario",
                })
            }else{
                res.send({
                    statusCode: 200,
                    message: "Usuario eliminado correctamente",
                })
            }
        }  
    })
};

function getAllUsers(req, res) {
    //var role = req.params.role;

    User.find({  }, (error, allUsers) => {
        if (error) {
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor"
            })
        } else {
            res.status(200).send({
                statusCode: 200,
                message: "Todos los usuarios",
                allUsers: allUsers
            })
        }
    })
};

function login(req,res) {
    var params = req.body;

    User.findOne({ email: params.email }, (error, userLogged) => { 
        if(error) { 
            res.send({
                message: "Error en el servidor",
                statusCode: 500,
            })
        } else {
            if (!userLogged){
                res.send({
                    message: "El usuario no existe",
                    statusCode: 400,
                })
            } else {
                if(userLogged.password == params.password){
                    res.send({
                        message: "Bienvenido",
                        statusCode: 200,
                    })
                } else {
                    res.send({
                        message: "Los datos no coinciden",
                        statusCode: 401,
                    })
                }
            }
        }
    })
};

function getUser(req, res){
    let idUser = req.params.id;
    User.findById(idUser, (error, dataUser) => {
        if (error) {
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor"
            })
        } else {
            res.status(200).send({
                statusCode: 200,
                message: "Todos los usuarios",
                dataUser: dataUser
            })
        }
    })
};

module.exports ={
    create,
    update,
    remove,
    login,
    getUser,
    getAllUsers
}