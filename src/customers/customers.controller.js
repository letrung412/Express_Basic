module.exports = function Controller(CustomerModel) {
   // this.CustomerModel = CustomerModel;
    const writeFile = require("../../lib/WriteFile"); 
   
    this.listCustomer = async function() {
        const list =await CustomerModel.getAllCustomer(); 
        if(!list){
             return 'Failure ... ' 
        }
         return list ; 
    }

    this.getCustomer = async function(id) {
        const doc = await CustomerModel.getCustomer(id);
        if (!doc) {
            return `Customer with ${Object.keys(id)} : ${Object.values(id)} not found `
        }
        return doc;
   }
    
    this.createCustomer = async function(customer) {
           const listCustomer =await CustomerModel.getAllCustomer() ; 
           listCustomer.unshift(customer); 
           const result = await writeFile(listCustomer); 
           return await CustomerModel.getAllCustomer(); 
    }

    this.updateCustomer = async function(id,name,data ) {
        let customerList  =await CustomerModel.getAllCustomer(); 
        let CustomerUpdate =[]; 
        CustomerUpdate = customerList.map((param) => {
            if(param._id==id){
                 param[name] = data  ;
                 return param;
            }else return param;
       }); 
        const result = await writeFile(CustomerUpdate);
        return await CustomerModel.getAllCustomer(); 
        
    }

    this.deleteCustomer = async function(id) {
        let customerList = await CustomerModel.getAllCustomer() ; 
        let DeleteCustomer = []; 
        DeleteCustomer = customerList.filter((param)=>{
            if(param._id == id){
                  return false ; 
            }else return true  ; 
      });
      const result = await writeFile(DeleteCustomer);
      return await CustomerModel.getAllCustomer(); 
    }
}


