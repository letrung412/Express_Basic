const express = require("express");
const app = express();
const PORT = 3000;

//Middleware
app.use(express.json());

app.get('/user/:userGender', function (req, res) {
    let arr = customers;
    res.send(req.params)
})
//import data
const customers = require("./customers.json")
//API domain test Postman, Insominia : http://localhost:3000/api
app.get("/api/get", (req, res) => {
    res.json("get method")
})

app.get("/api/list", (req, res) => {
    res.json(customers)
})
var ageCus = function (date) {
    var obj = date.split("-");
    var year = obj[0];
    var month = obj[1];
    var day = obj[2];
    var d = new Date();
    var dmonth = d.getMonth();
    var dyear = d.getFullYear();
    var dday = d.setDate();
    var res;
    if (dmonth > month) res = dyear - year;
    else if (dmonth = month) {
        if (dday >= day) res = dyear - year + 1;
    } else res = dyear - year - 1;
    return res;
}
var config=[] ; 
config = require('./customers.json');
app.get("/api/cus", (req, res) => {
    var gender = req.query.gender;
    var age = req.query.age;
    var vadcus = config.filter((cust) => {
        if (cust.gender ==gender && (ageCus(cust.birthday) > age)) {
            return true;
        }
     
    });
    
 res.json(vadcus); 
 
})
//Listen
app.listen(PORT, (err) => {
    if (err) {
        return console.log(err);
    }
    return console.log(`Server listen on ${PORT}`);
})