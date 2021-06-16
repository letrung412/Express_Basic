const express =require('express'); 
const getList_route = express.Router(); 
const getAllCustomer = require('../Controller/getAll_Controller'); 

getList_route.use('/',getAllCustomer); 
 
module.exports = getList_route ; 