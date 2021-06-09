const express = require("express");
const app = express();
const PORT = 3000;

//Middleware
app.use(express.json());

//import data
const customers = require("./customers.json")
//API domain test Postman, Insominia : http://localhost:3000/api
app.get("/api/get" , (req,res) => {
    res.json("get method")
})

app.get("/api/list", (req,res) => {
    res.json(customers)
})

//Listen
app.listen(PORT, (err) => {
    if (err) {
        return console.log(err);
    }
    return console.log(`Server listen on ${PORT}`);
})