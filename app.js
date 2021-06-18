async function main() {
    const express = require("express");
    const app = express();
    const cors = require("cors");
    const dotenv = require("dotenv").config();
    const now = new Date().toISOString();
    //middleware

    app.use(express.json());
    app.use(cors());
    app.disable("x-powered-by");

    //data
    const database = require("./customers.json");
    //import Controller
    const NewAPICustomers = require("./src/customers/customers.api")  ;
    const Controller = require("./src/customers/customers.controller");
    const Model = require("./src/customers/customers.model");
    const CustomerModel = new Model(database);
    const CustomerCTL   = new Controller(CustomerModel)   ;

    //domain api
    app.use("/api/customers" , NewAPICustomers(CustomerCTL));
    /****************************************************************************/
    //server listen
    console.log(`${now} - Server listen on ${process.env.PORT}`);
    app.listen(process.env.PORT, (err) => {
        if (err) {
            console.log(err);
        }
    });
}

main().catch(err => console.log(err));
