const firstWords = [ "Easy" , "Awesome" , "Corporate" , "Highly" , "Brownish", "Underneath" , "Wonderful" , "Fabulous" , "Highlighted", "Commited"];
const secondWords = [ "Golden" , "Silver" , "Ultimate" , "Absolute" , "Sky" , "Earth" , "Planet", "Panda", "Bear" , "Wolves"];
let startupName= "";
startupName = firstWords[Math.floor(Math.random() * 10) + 0] +" "+secondWords[Math.floor(Math.random() * 10) + 0];
console.log("The startup: "+`"${startupName}"`+" contains " +startupName.length+" characters");
