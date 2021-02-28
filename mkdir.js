let fs = require("fs");
( function() {
let n = process.argv[2];
let name = process.argv[3];
if(!Number.isInteger(+n) ||  n<=0){
    console.log("invalid input");
    return;
}
try{
   if ( fs.existsSync(`${name} - 0`)){
   for(let i = 0; i < n; i++){
    fs.mkdirSync(`${name} - ${i}`);
     }
    }else{
         for(let i = 0; i < n; i++){
             fs.mkdirSync(`${name} - ${i}`)
         }
     }
    
}

catch(err) {
    console.log("Some error occured")
}
}
)();
