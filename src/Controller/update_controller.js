const customer = require('../resourse/customers.json');
const updateCus = require('../config/openFile');
 // [POST] /api/update?id=..&name=..&newValue=..

function updateCustomer(req, res) {
    let CusUpdate=[] ; 
    let idCus = req.query.id;
    let nameUpdate = req.query.name;
    let valueUpdate = req.query.newValue;
   /* 
     for(let i =0; i<customer.length; i ++){
          if(customer[i]._id == idCus){
             customer[i][nameUpdate] = valueUpdate ; 
          }
     } */
     CusUpdate = customer.map((param) => {
         if(param._id==idCus){
              param[nameUpdate] = valueUpdate ;
              return param;
         }else return param;
    }); 
    res.json(CusUpdate); 
    updateCus(customer);

}
 // console.log();
//console.log(CusUpdate); 
module.exports = updateCustomer;