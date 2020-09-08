const express = require('express');
const routes = express.Router();

const userController = require('../controllers/userController');
const { userDelete } = require('../controllers/userController');

routes.post('/users', userController.insert);
routes.get('/users', userController.userIndex);
routes.get('/users/:id', userController.userDetails);
routes.put('/users/:id', userController.userUpdate);
routes.delete('/users/:id', userController.userDelete);

module.exports =  routes;