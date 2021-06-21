const writeFile = require("../../lib/WriteFile"); 
module.exports = class Model {
    constructor(database) {
        this.database = database;
    }
    //collection customer -- contact (customer_id)
    async getCustomer(id) {
        const doc = this.database.find(customer => customer._id == id);
        return doc;
    }
    async listCustomer() {
        const list = this.database;
       return list;
    }
    async createCustomer(customer){
          let listCustomer  =await this.listCustomer(); 
          listCustomer.unshift(customer);  
          await writeFile(listCustomer); 
          return listCustomer ;
    }
    async updateCustomer(customer){
        await writeFile(customer); 
        return customer ; 

    }
    async deleteCustomer(customer){
        return await writeFile(customer); 
    }
   
}