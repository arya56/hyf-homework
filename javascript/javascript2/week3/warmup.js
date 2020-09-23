
//  1  Log out the text Called after 2.5 seconds


        setTimeout( () => { console.log('2.5 seconds after the script is loaded')},2500);

//  2  Create a function that takes 2 parameters: delay and stringToLog


    function delay2Logout( delay, stringTolog){
        setTimeout( () => { console.log(stringTolog)},delay*1000);
    }

    delay2Logout(3,'Hello the future of  the coding');


//  3   Create a button in html  & log out the text after 5 seconds after the button is clicked.

                const button = document.getElementById("button1");

                button.addEventListener('click',callback);

                function callback(){
                    delay2Logout(5,'This string is logged after 5 seconds after button is clicked');
                }

//   4   Create two functions and assign them to two different variables. 
//One function logs out Earth, the other function logs out Saturn. 
//Now create a new third function that has one parameter: planetLogFunction. 
//The only thing the third function should do is call the provided parameter function.
// Try call the third function once with the Earth function and once with the Saturn function.

                const earthLog = function earthLogger(){ 
                    console.log('Earth');
                }

                const saturnLog= function saturnLogger(){
                    console.log('Saturn');
                }   
                function planetLogFunction(providerFunction){
                    providerFunction();
                }

                planetLogFunction(earthLog);
                planetLogFunction(saturnLog);


//    5   Create a button with the text called "Log location".
 //       When this button is clicked the location (latitude, longitude) of the user should be
 //      logged out using this browser api


    // const button2 = document.querySelector('location');
    const indicatorTag = document.getElementById("positionIndicator");
    
 //button2.addEventListener('click', function(e){console.log(e)});

                    function locationFinder(){
                                if( navigator.geolocation){
                                    navigator.geolocation.getCurrentPosition(showThePosition)
                                }
                                else{
                                    indicatorTag.innerHTML = `Geolocation doesn't support by this browser`; 
                                }
                            }
                    
                    function showThePosition(position){
                        indicatorTag.innerHTML = "This is the Latitude: " +position.coords.latitude+ 
                        "<br>This is the Longitude: " +position.coords.longitude;
                    }


    // 6   Optional Now show that location on a map using fx the Google maps api




//  7   Create a function called runAfterDelay. It has two parameters: delay and callback.
// When called the function should wait delay seconds and then call the provided callback function. 
// Try and call this function with different delays and different callback functions


                function runAfterDelay(delay , callback) {
                setTimeout(()=>{
                    console.log('this is the call of ' +callback.name+ ' function after: '+delay+ ' seconds');
                    callback(); }
                    ,delay*1000);
                }
// call 2 different callback functions
                runAfterDelay(6,locationFinder);

                runAfterDelay(8,saturnLog);


// 8    Check if we have double clicked on the page. A double click is defined by two clicks 

//         within 0.5 seconds.If a double click has been detected, log out the text: "double click!"





                            window.addEventListener('dblclick', function (e) {
                            console.log("double click!");
                            });


//  9   Create a function called jokeCreator that has three parameters: shouldTellFunnyJoke 
//  - boolean, logFunnyJoke - function and logBadJoke - function. If you set tellFunnyJoke to 
//  true it should call the logFunnyJoke function that should log out a funny joke. And vice versa.


                var jokes= ['Guess the number of programmers it takes to change a light bulb? Zero its a hardware problem','There are only 10 kinds of people in this world: those who know binary and those who don’t.','Real programmers count from 0.', 'Why did the programmer quit his job? Because he didnt get arrays.', 'A foo walks into a bar takes a look around and says Hello World','0 is false 1 is true right? 1','Things arent always #000000 and #FFFFFF.','What is the most used language in programming? Profanity','!False its funny because its True','You had me at Hello World','2b||!2b','Yesterday I changed the name on my wifi to Hack if you can. Today I found it named Challenge Accepted','A programmer is a person who fixed a problem that you didnt know you had in a way you dont understand','How can you tell if a computer geek is an extrovert? They stare at your shoes when you talk instead of their own.','I would love to change the world but they wont give me the source code.','If at first you dont succedd call it version 1.0','Computers make very fast very accurate mistakes','I farted in the Apple store and everyone got mad at me. Not my fault they dont have Windows.','Knock Knock... Whos there? Art... Art Who? R2D2','Hilarious and amazingly true thing: if a pizza has a radius (z) and a depth (a) that pizzas volume can be defined Pi*z*z*a.']


                            function jokeCreator(tellFunnyJoke, logFunnyJoke, logBadJoke ){
                                if (tellFunnyJoke){
                                    logFunnyJoke();
                                }
                                else{
                                    logBadJoke();
                                }
                            }

                    const logFunnyJoke=function (){
                        console.log(jokes[Math.floor(Math.random()*(20))])
                    }

                    const logBadJoke = function (){
                        console.log("There is no need to repeat a bad joke!");
                    }
                    console.log('Now Time to have jokes!');
                    jokeCreator(true,logFunnyJoke,logBadJoke);