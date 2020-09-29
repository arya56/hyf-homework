const weather_Api = 'https://api.openweathermap.org/data/2.5/weather?q=tehran&appid=1fa178d7ac2b383598fae81ce7953bc7&units=metric'
function wait3Second(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            const promise = fetch(weather_Api)
            resolve(promise.then(promise=>promise.json()))
        }, 3000);
    })
}

console.log('Waiting for 3 seconds');
wait3Second()
    .then((data)=>{
        console.log(`This is with .THEN: It's ${Math.floor(data.main.temp)}c in ${data.name} `);

    }).catch((error)=>{
        console.log(error);
    })
// Write it in Async Await Way

async function asnycWaits3Seconds(){
    try{
    const weather = await wait3Second()
    console.log(`Now from Async Function :It's ${Math.floor(weather.main.temp)}c in ${weather.name} `);
    }catch(error){
        console.log(error);
    }
}
asnycWaits3Seconds()