const express =require('express'); 
const deleteRoute = express.Router(); 
const deleteCustomer = require('../Controller/delete_controller'); 


deleteRoute.use('/',deleteCustomer); 

 module.exports = deleteRoute ; 