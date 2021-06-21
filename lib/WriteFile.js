module.exports =async function writeFile(param){
    const fs = require('fs'); 
    fs.writeFile("\customers.json",JSON.stringify(param),function(err){
        if(err) return false; 
        return true ; 
       
  }); 
//    const file =require('../customers.json'); 
//    console.log(file)
// }
}