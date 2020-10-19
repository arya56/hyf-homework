// rewrite settimeout and getcurrentposition
let latitude,longitude
function setTimeoutPromise(resolveAfter){
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(resolveAfter)
        },resolveAfter)
    })
}



//   call the promise in Then Way
setTimeoutPromise(3000)
    .then((time) => {
        console.log(`Called after ${time} seconds`);
    })

//  call the promise in Async WAy
 async function setTimeoutCaller(time){
    try{
           const result= await setTimeoutPromise(time)
           console.log(`Called after ${result} seconds`);
    }catch(error){
        console.log(error);
    }
 }  

 setTimeoutCaller(5000)

 
//        rewrite getCurrentPosinton with Promise
function getCurrentLocation(){
    return new Promise( (resolve,reject)=> {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(resolve)
        }
        else{
            reject("Geolocation doesn't support by this browser"); 
        } 

    })
}

getCurrentLocation()
    .then((position) => {
        // called when the users position is found
        console.log(position);
    })
    .catch((error) => {
        // called if there was an error getting the users location
        console.log(error);
    });

 