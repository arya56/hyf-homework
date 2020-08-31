const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];
const danishString = 'Jeg har en blå bil';



const finalObj={};
function shortesWord(inputWords){
    let wordCheker= inputWords[0];
    //inputWords = danishWords;
    
    if ( inputWords instanceof Array){
    for( let i = 1; i < inputWords.length ; i++ ) {
        if (wordCheker.length > inputWords[i].length){
            wordCheker = inputWords[i];
        }
        }
  return wordCheker;
}  else if(typeof inputWords ===  "string" ){
// defining an array of objests as assistant to count the characters
let letterToPrint=[
        {letterName:'total',letterCounter:0 },
        {letterName:'æ',letterCounter:0 }, 
         {letterName:'ø',letterCounter:0 },
         {letterName:'å',letterCounter:0 }
        ];

let strInputWords = inputWords;
//  Counting the danish characters
    for(let j=0 ; j < strInputWords.length ; j++) {
        switch(strInputWords.charAt(j)){
            case 'æ' : letterToPrint[1].letterCounter++;
                     break;
            case 'ø' : letterToPrint[2].letterCounter++;
                     break;
            case 'å' : letterToPrint[3].letterCounter++;
                     break
        }
    }
// adding the counted characters to the total
    letterToPrint[0].letterCounter= letterToPrint[1].letterCounter+letterToPrint[2].letterCounter+letterToPrint[3].letterCounter;
    letterToPrint[0].letterName = 'total';
// looping to skip the null characters
    for (let remName in letterToPrint){
        if (letterToPrint[remName].letterCounter){

 
  //  key  =     letterToPrint[remName].letterName;
    // finalObj[key]=letterToPrint[remName].letterCounter;
    finalObj[letterToPrint[remName].letterName] = letterToPrint[remName].letterCounter;
        }
    }
   //console.log(  finalObj );
  // return stringify(finalObj)
   return console.log(JSON.stringify(finalObj));
            
}
}