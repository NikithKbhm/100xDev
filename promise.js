function random(resolve){//resolve is also a function 
   setTimeout(resolve,3000);
}
let p = new Promise(random);//supposed to return eventually


function callback(){    
    console.log("Promise succeded");
}
p.then(callback);