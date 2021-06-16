const express =require('express'); 
const create_controller = require('../Controller/create_controller'); 
const route_create = express.Router(); 


route_create.use('/',create_controller.create_controll); 


module.exports =route_create ; 