
// Find and count the Danish letters
// Find the individual number and the total number of Danish letters in a string.

// const danishString = 'Jeg har en blå bil';
// notThisFunctionName(danishString); // returns {total: 1, å: 1}

// const danishString2 = 'Blå grød med røde bær';
// notThisFunctionName(danishString2); // returns {total: 4, æ: 1, ø: 2, å: 1}


const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];
const danishString = 'Jeg har en blå bil';



let letterToP=[{'total':0 },
{'æ':0 } ,{ 'ø':0 },{'å':0 }];

let letterT2={'total':0,'æ':0 ,'ø':0,'å':0}


letterT2.total++;
console.log(letterT2);
    console.log(JSON.stringify(letterT2));





 if(typeof inputWords ===  "string" ){
    let strInputWords = inputWords;
   for(let j=0 ; j < strInputWords.length ; j++) {
       console.log('Hello');
       switch(strInputWords.charAt(j)){
           case 'æ' : letterT2.æ++;
                    break;
           case 'ø' :letterT2.ø++;
                    break;
           case 'å' : letterT2.å++;
                    break
       }
   }
   letterT2.total = letterT2.æ + letterT2.ø + letterT2.å ;
//    letterToPrint[0].letterCounter= letterToPrint[1].letterCounter+letterToPrint[2].letterCounter+letterToPrint[3].letterCounter;
//    letterToPrint[0].letterName = 'total';
   for (let remName in letterT2){
       if (letterT2[remName].key != 0){
        
          allosh = ` ${letterToPrint[remName].letterName}: ${letterToPrint[remName].letterCounter},`

          googoosh +=allosh;
          
       }

   }
  return `{ ${googoosh} }`   ;