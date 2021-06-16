
function ConnecFileJson(param){
    const fs = require('fs'); 
    fs.writeFile('\src\\resourse\\customers.json',JSON.stringify(param),function(err){
        if(err) console.log(err); 
  }); 
}
module.exports = ConnecFileJson ; 