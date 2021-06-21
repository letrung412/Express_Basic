module.exports = function NewAPICustomers(CustomerCTL) {
    const express = require("express");
    const app = express();
    app.use(express.json());

    //function random && err
    const Random = require("../../lib/random");
    const random = new Random();

    //Read
    app.get("/get", async (req, res) => {
        //  res.json("hello world !") ; 
        const id = req.query.id;
        const doc = await CustomerCTL.getCustomer(id);
        res.json(doc);
    });

    //List
    app.get("/list", async (req, res) => {
        const list = await CustomerCTL.listCustomer();
        res.json(list);
    });

    //Create
    app.post("/create", async (req, res) => {
        const full_name = req.body.fullname;
        const birthday = req.body.birthday;
        const gender = req.body.gender;
        const customer = {
            _id: random.alphabet(12),
            full_name: full_name,
            birthday: birthday,
            gender: gender,
            code: random.alphabet(12),
        };
        const list = await CustomerCTL.createCustomer(customer);
        res.json(list);
        //console.log(list)
    });

    //Update
    app.post("/update", async (req, res) => { //api/customer?id=
        let id = req.body.id;
        let doc = await CustomerCTL.getCustomer(id);
        let name = req.body.name;
        let value = req.body.value;
        doc[name] = value;
        let updateCustomer = await CustomerCTL.updateCustomer(id, doc);
        res.json(updateCustomer);
    });

    //delete
    app.get("/delete", async (req, res) => {
        const id = req.query.id;
        let CustomerDelete = await CustomerCTL.deleteCustomer(id);
        res.json(CustomerDelete);
    });
    return app;
}