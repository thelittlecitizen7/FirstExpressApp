const express = require('express');
const userHandler = require('../logic/usersLogic');
const { User } = require('../models/user');

var router = express.Router()
let handler = new userHandler.UserHandler();
var users = () => {

    router.get('/api/users',  (req, res) => {
        try {
            let users = handler.getAllUsers()
                
            res.status(200).json(users);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'failed get all users' });
        }
    });

    router.get('/api/user/:id/tests',  (req, res) => {
        try {
            var id = req.params.id
            let user = handler.getUser(id)
            if (user === undefined || user === null) {
                res.status(404).json({ "error":` user with ${id} is not exit in system`});    
            }
                
            res.status(200).json(user);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'failed on get specific username' });
        }
    });
    
    router.post('/api/user',  (req, res) => {
        try {
            
            console.log(req)
            var userName = req.body.name
            var age = req.body.age
            if (handler.isUserExist(userName)){
                res.status(409).json({ "error":`the username ${userName} already exist in system`});    
            }
            else{
                let user = new User(userName,age)
                handler.addUser(user)
                res.status(200).json(handler.getUser(userName));
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: `cannot insert username with err ${err}` });
        }
    });
    return router;
}
module.exports = users;
