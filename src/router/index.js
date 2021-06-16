const search = require('./search_route') ;
const create_route =require('./create_route'); 
const getList_route =require('./getAll_route'); 
const delete_route =require('./delete_route'); 
const update_route =require('./update_route'); 
function route(app){
     app.use('/api/search',search);         //api/search?age=..&gender 

     app.use('/api/create' ,create_route);  //api/create/?full_name=..&birthday=..&gender=...

     app.get('/api/list',getList_route) ;   //api/list 

     app.get('/api/delete',delete_route);   //api/delete?id=...

     app.post('/api/update',update_route);  //api/update?id=..&name=..&newValue=.. 
}

module.exports = route; 