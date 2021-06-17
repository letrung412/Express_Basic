module.exports = function NewAPICustomers(CustomerCTL) {
    const express = require("express");
    const app = express();
    app.use(express.json());
    
    //function random && err
    const Random = require("../../lib/random");
    const random = new Random();

 
    //Read
    app.get("/customers/get" , async(req,res) => {
        const id = req.query.id;
        const doc = await CustomerCTL.getCustomer(id);
        res.json(doc);
    })
    
    //List
    app.get("/customers/list" , async(req,res) => {
        
    })

    //Create
    app.post("/customers/create" , async(req,res) => {
        
    })

    //Update
    app.post("/customers/update" , async(req,res) => {
       
    })

    //delete
    app.get("/customers/delete" , async(req,res) => {
     
    })
    return app;
}