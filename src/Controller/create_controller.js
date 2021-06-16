const createCust = require('../config/funcCreate'); 
const Cus_List= require('../resourse/customers.json'); 
const createCustomer = require('../config/openFile')
/* const app = express(); 
app.use(express.json()); */

class create_controller {
     create_controll(req,res) {
       
          let full_nameCus =req.query.full_name;
          let genderCus =req.query.gender ; 
          let birthdayCus =req.query.birthday ;
          let idCus = createCust.makeid; 
          let codeCus = createCust.makecode ;
          let customer ={
               _id : idCus(), 
               full_name :full_nameCus , 
               gender:genderCus , 
               birthday : birthdayCus , 
               code : codeCus() , 
          }; 
     
      Cus_List.unshift(customer); 
      createCustomer(Cus_List);  //ghi vao file 
      res.json(Cus_List);
       
     }
}
//console.log(Cus_List); 
module.exports = new create_controller ; 