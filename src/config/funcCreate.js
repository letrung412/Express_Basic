function makeid() {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  
    for (let i = 0; i <12 ; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }
  function makeCode() {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789qwertyuiopasdfghjklzxcvbnm";
    let random = Math.floor(Math.random()*12) +1 ;
    for (let i = 0; i <random ; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }


  
 module.exports = {
    'makeid' :makeid , 
    'makecode':makeCode , 
} ;  
  //console.log("test:",makeid()) ; 