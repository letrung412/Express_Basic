const searchCustomer = require('../config/funcSearch');

const cus = require('../resourse/customers.json');

class searchController {
    searchCusController(req, res) {

        let gender = req.query.gender;
        let age = req.query.age;
        let vadcus = cus.filter((cust) => {
            if (cust.gender == gender && (searchCustomer(cust.birthday) > age)) {
                return true;
            }
        });
        res.json(vadcus);
    }

}
module.exports = new searchController;