module.exports = class Model {
    constructor(database) {
        this.database = database;
    }

    async getCustomer(id) {
        const doc = this.database.find(customer => customer._id == id);
        return doc;
    }
    async getAllCustomer() {
        const list = this.database;
        return list;
    }
   
}