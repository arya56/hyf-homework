
//      Creating the promise
function promiseAfterDelaySecond(resolveAfter){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`I am called asynchronously after ${resolveAfter} seconds!`);
        },resolveAfter*1000)
    })
}
//  Here is the consumption part ! where I use the promise
async function callup(timer){

    console.log('Waiting to resolve');
 try{
    const result = await promiseAfterDelaySecond(timer)
    console.log(result);

}catch(error){
        console.log(error);
}
}

callup(4)

// try to use .then function to compare

promiseAfterDelaySecond(5)
.then(() => {
    console.log('I am also called asynchronously 1 second later!'); 
})