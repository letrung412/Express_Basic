module.exports = function Controller(CustomerModel) {
    // this.CustomerModel 


    this.listCustomer = async function () {
        const list = await CustomerModel.listCustomer();
        if (Array.isArray(list)) {
            return list;
        } else return [];
    }

    this.getCustomer = async function (id) {
        const doc = await CustomerModel.getCustomer(id);
        // const contact = await ContactController.getContact(doc.id); 
        if (!doc) return null;
        return doc;;
    }

    this.createCustomer = async function (customer) {
        return await CustomerModel.createCustomer(customer);
    }

    this.updateCustomer = async function (id, doc) {
       let customerList =await CustomerModel.listCustomer();
        let updatelistCustomer =  customerList.map((param)=>{
            if(param._id == id) {
                 param = doc ; return param ; 
            }else{
                 return param ; 
            }
       })
       return await CustomerModel.updateCustomer(updatelistCustomer); 
    }

    this.deleteCustomer = async function (id) {
        let customerList = await CustomerModel.listCustomer();
        let DeleteCustomer = customerList.filter((param) => {
            if (param._id == id) {
                return false;
            } else return true;
        });
        await CustomerModel.deleteCustomer(DeleteCustomer);
        return await CustomerModel.listCustomer();

    }
}