const express = require("express");
const app = express();
const PORT = 3000;
//const searchCus =require('./src/Controller/search'); 

//Middleware
//app.use(express.json());
const route = require('./router/index'); 

route(app); 
const customers = require("./resourse/customers.json")
app.get("/api/list", (req, res) => {
    res.json(customers)
})
/* app.get('/user/:userGender', function (req, res) {
    let arr = customers;
    res.send(req.params)
})
//import data
const customers = require("../customers.json")
//API domain test Postman, Insominia : http://localhost:3000/api
app.get("/api/get", (req, res) => {
    res.json("get method")
})

app.get("/api/list", (req, res) => {
    res.json(customers)
})

 */


/* app.get("/api/cus", (req, res) => {
    let gender = req.query.gender;
    let age = req.query.age;
    let vadcus = config.filter((cust) => {
        if (cust.gender == gender && (searchCus.searchCustomer(cust.birthday) > age)) {
            return true;
        }

    });

    res.json(vadcus);

}) */
 


/*  app.get("/api/create",(req ,res)=>{
     
 }) */
//create, upate, delete /api/customer/create-->post(body), id(data update), id,code 
//Listen
app.listen(PORT, (err) => {
    if (err) {
        return console.log(err);
    }
    return console.log(`Server listen on ${PORT}`);
})

