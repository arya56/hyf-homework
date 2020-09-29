
const redBox = document.querySelector('ul.marks li:nth-child(1)');
const blueBox = document.querySelector('ul.marks li:nth-child(2)');
const greenBox = document.querySelector('ul.marks li:nth-child(3)');

//  Translate all in .then way
function translateAllAtOnce(){

moveElement(redBox, {x: 20, y: 300})
.then(() => {
    console.log('Red Element has been moved');
}); 
moveElement(blueBox, {x: 400, y: 300})
    .then(() => {
        console.log('Blue Element has been moved');
    }); 
moveElement(greenBox, {x: 400, y: 20})
.then(() => {
    console.log('Green Element has been moved');
}); 
}

// Translate all back to original location
function translateAllBack() {
    Promise.all([
        moveElement(redBox, { x: 0, y: 0 }),
        moveElement(blueBox, { x: 0, y: 0 }, 
        moveElement(greenBox, { x: 0, y: 0 })),
    ]).then(() => {
        translateAllAtOnce();
        console.log('All circles moved back to origin!')
        console.log('Now Call all at once!');

    });
}

//     Promise creation for Translate one by one

function translateOneByOne(whichBox,resolveAfter,xPos,yPos){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(moveElement(whichBox, {x: xPos, y: yPos})
            )
        }, resolveAfter*1000);
    })
}


//  Translate one by one async await version
async function boxMover(){
    console.log('Now Call them One BY One');
    try{
        await translateOneByOne(greenBox,2,400,20)
        console.log('green Element has been moved');
        await translateOneByOne(redBox,2.5,20,300)
        console.log('Red Element has been moved');
        await  translateOneByOne(blueBox,3,400,300)
        console.log('Blue Element has been moved');
    }catch(error){
        console.log(error);
    }
}

boxMover();

setTimeout(()=>{
    translateAllBack()
},15000)