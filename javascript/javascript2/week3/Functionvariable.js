// // //  1   Run any array of functions


const firstFunc= ()=>{console.log('This is the first function array Item')}
const secondFunc= ()=>{console.log('This is the second function array Item')}
const thirdFunc= ()=>{console.log('This is the third function array Item')}

const arrayOfTheFunction = [firstFunc,secondFunc,thirdFunc];

arrayOfTheFunction.forEach( item => item());


//  2   


const Hello = function() {
    console.log('An instance of variable function!');
}


function normallDeclaration (){
    console.log('delaration of this function is old fasion!');
}


Hello();
normallDeclaration();


//  3   Create an object that has a key whose value is a function. Try calling this function.

theObjectOfFunction = {
    x: 50,
    name: function(){
        console.log('Hello Object');
    }
}

theObjectOfFunction.name();
