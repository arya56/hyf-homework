
//  1   Create an input and a button in html. When the button is clicked, get the value of the input.
//   This value will be the amount of time the game should run.

function fastesPresser(){

   // import ConfettiGenerator from "confetti-js";
console.clear();
console.log('Hello Game lovers!');
let timeToChaleng= 1;
let timeToDeliverResult = timeToChaleng+0.01;

let counterL = 0 , counterS = 0;

const button = document.getElementById('button1');
const restartButton = document.getElementById('button2');

const containerL = document.getElementById('containerL');
const containerS = document.getElementById('containerS');
const body = document.querySelector('body')

const prompt = document.createElement('p');
body.appendChild(prompt);



button.addEventListener('click',counterKeyPress);
restartButton.addEventListener('click',makeClean);


function counterKeyPress(){
    timeToChaleng = document.getElementById('numberAsTimes').value;
    timeCountdown(timeToChaleng);
    window.addEventListener('keyup',keyupcount)
    if (!isNaN(timeToChaleng) && timeToChaleng ){
        console.log(timeToChaleng)

        setTimeout(()=>{
            console.log('times run out');
            window.removeEventListener('keyup',keyupcount);
            winer();
            },timeToChaleng*1000);
            
        } 
    else if (isNaN(timeToChaleng)){
        setTimeout(fastesPresser,3000);

        console.log('Please write a number to start!')
    }
    button.removeEventListener('click',counterKeyPress);   
}

//   to count pressed key 
function keyupcount(event) {
    if (event.key === 'l'){
        prompt.innerHTML =''
        counterL++ ;
    containerL.innerHTML = 'L: '+counterL;

    }
    else if (event.key === 's'){
        prompt.innerHTML =''
        counterS++ ;
   containerS.innerHTML = 'S: '+counterS;
    }
    else {
        setTimeout(() => {
            prompt.innerHTML = `Play with S or L`;
    },200)
    }

}

//  settimeout here to make a bit extra time to do the comparisons
function winer(){
    setTimeout(()=>{
        prompt.innerHTML ='';
if (counterL >  counterS ) {
    console.log('L presser won!');
    containerL.style.backgroundColor = 'blue'
}
else if ( counterS > counterL ){
    console.log('S presser won!');
    containerS.style.backgroundColor = 'blue'

}
else {
    console.log('Both equal!')
}
},timeToDeliverResult*1000)}

}
// A function to clean up tag inner text when we restart game
function makeClean(){

    containerL.style.backgroundColor = 'white';
    containerS.style.backgroundColor = 'white';
    prompt.innerHTML ='';
    containerS.innerHTML = '';
    containerL.innerHTML = '';
    document.getElementById('numberAsTimes').value = '';
    document.getElementById('countdown').innerHTML = '';
    fastesPresser();

}

//  to count down the second to zero
function timeCountdown(timeToChaleng){
    
const timePrompt = document.getElementById('countdown');
let timeToIndicat = timeToChaleng;

let myInterval=setInterval(function(){ 

    if (timeToIndicat < 0) {
        clearInterval(myInterval);
    }
    else {
    timePrompt.innerHTML = `${timeToIndicat}`;
    timeToIndicat--;}
 }, 1000);
}

fastesPresser();