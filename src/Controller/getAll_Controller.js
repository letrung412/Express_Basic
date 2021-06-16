const customer =require('../resourse/customers.json'); 
 function getAllCustomer(req,res){
    res.json(customer); 
 }
module.exports =getAllCustomer; 