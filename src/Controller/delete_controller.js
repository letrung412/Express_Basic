const customer = require('../resourse/customers.json'); 
const deleteCus = require('../config/openFile'); 
let DeleteCus=[];
/* DeleteCus.push(2);  */
let arrayu= []; 
 function deleteCustomer(req ,res){
      let idDelete = req.query.id ; 
       DeleteCus = customer.filter((param)=>{
            if(param._id == idDelete){
                  return false ; 
            }else return true  ; 
      });
       
     res.json(DeleteCus); 
     deleteCus(DeleteCus); 
 }
  module.exports = deleteCustomer ; 
  