module.exports = function Controller(CustomerModel) {
    this.CustomerModel = CustomerModel;

    this.listCustomer = async function() {
        
    }

    this.getCustomer = async function(id) {
        const doc = await this.CustomerModel.getCustomer(id);
        if (!doc) {
            return `Customer with ${Object.keys(id)} : ${Object.values(id)} not found`
        }
        return doc;
    }

    this.createCustomer = async function(customer) {
        
    }

    this.updateCustomer = async function(id , data) {
        
    }

    this.deleteCustomer = async function(params) {
        
    }
}


