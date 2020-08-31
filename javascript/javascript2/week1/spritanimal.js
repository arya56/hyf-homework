
const inpSelect = document.querySelectorAll('[name="ChooseKey"]');
console.log(inpSelect.values);
const spritAnimal=['The dreamer bat','Horse passion & freedom','The foxy mentor','The lion win','wisdom owl','Fertilit rabbit','Honoring nature turkey','The creative spider','Source of life snake','Intentions and will raven'];
// counter: make limitation to just one time click on the button or once button
let counter=0;
const button=document.getElementById('Btn');
const button2=document.getElementById('Btn2');
const hover=document.getElementById('hover');
const writtenTxt=document.getElementById('textWritten');

//  if radio button clicked
function buttonFunction(){
    document.getElementById("myName").removeEventListener('input',spritName3)
    TheLittlebutton();
}
// if hover button clicked
function hoverFunction(){
    
    button.removeEventListener('click',spritName)
    button2.removeEventListener('click',spritName)
    document.getElementById("myName").addEventListener('mouseover',spritName3)

}
// if writen into text clicked
function writtenTextFunction(){
    document.getElementById("myName").addEventListener('input',spritName3)
}

function TheLittlebutton(){
    button.addEventListener('click',spritName);
    }
    
//writing spritName when button clicked
function spritName(){

    const name = document.getElementById("myName").value;

    if(name){
    counter++;
    document.getElementById("displaySprit").innerText = name+' - '+spritAnimal[Math.floor(Math.random() * 10)];
    button.removeEventListener('click',spritName);
    button2.addEventListener('click',spritName)
    if (counter===2){
        button2.removeEventListener('click',spritName);
    }}
    else{
        alert(`Please Enter you name`)
    }
}
  /// writing spritName for hover and writen text conditon
  function spritName3(){
    const name = document.getElementById("myName").value;
    document.getElementById("displaySprit").innerText = name+' - '+spritAnimal[Math.floor(Math.random() * 10)];
    document.getElementById("myName").removeEventListener('mouseover',spritName3)

  }
