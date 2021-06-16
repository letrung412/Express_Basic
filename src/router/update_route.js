const express =require('express'); 
const updateRoute = express.Router(); 
const updateCustomer = require('../Controller/update_controller'); 
 
updateRoute.use('/',updateCustomer); 

 module.exports = updateRoute ; 