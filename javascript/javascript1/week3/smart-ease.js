const notes = [];
function saveNote(content, id) {
  //notes.push({ content: content, id: id });
  notes.push({ content, id });
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
saveNote("Wash the dishes", 3);
saveNote("Take a shower", 4);

function getNote(id) {
  for (let i = 0; i < notes.length; i++) {
    if (!id || isNaN(id)) {
      return "The id doesn't exist!";
    } else if (notes[i].id === id) {
      return notes[i].content;
    }
  }
}
const firstNote = getNote(1);
console.log(`Now ${firstNote} ` );


//      logOutNotesFormatted()

function logOutNotesFormatted() {
  for (let i = 0; i < notes.length; i++) {
    console.log(
      `The note with id: ${notes[i].id}, has the following note text: ${notes[i].content}`
    );
  }
}


//   addActivity
const activities = [];
function addActivity(date, activity, duration) {
  if (typeof date === "string" && typeof activity === "string" && !isNaN(duration)) {
    activities.push({ date : date ,
      activity : activity,
      duration : duration})
  } else {
    console.log('Please write the addActivity function with correct arguments');

  }

}
addActivity('23/7-18','Youtube', 30);
addActivity('23/7-18','Facebook', 20); 
addActivity('24/7-18',"Web surfing", 80);
addActivity('25/7-18','Twitter', 17);
addActivity('25/9-19', 'Twitter', 10);
addActivity('23/7-18', 'Youtube', 21);


//showStatus
// should be called when you have some activity added by addActivity()

const usageLimit = 50;
function showStatus() {
  let total = 0;
  if (activities.length === 0) {
    console.log("Add some activities before calling showStatus");
  } else {
    for (let i = 0; i < activities.length; i++) {
      total += activities[i].duration;
    }
    if (total > usageLimit) {
      console.log("You have reached your limit, no more smartphoning for you!");
    }
    console.log(
      `You have added ${activities.length} activities. They amount to ${total} min. of usage`
    );
  }
}

showStatus();

logOutNotesFormatted();

//Extra feature 
//            Optional  1
// Make addActivity more easy with today date generator 
function addActivity2(activity, duration) {
  if (typeof activity === "string" && !isNaN(duration)) {
    activities.push({ date : dateMaker() ,
      activity : activity,
      duration : duration})
  } else {
    console.log('Please write the addActivity function with correct arguments');
  }
}
//date
function dateMaker() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = mm + "/" + dd + "/" + yyyy;
  return today;
}


addActivity2('Youtube', 30);
addActivity2('Facebook', 20); 
addActivity2("test", 70);
addActivity2('Twitter', 60);



//Extra feature 
//            Optional  2
// use showStatus2 to show number of activities for that specific date

// use this format for date as function parameter : '23/7-18'
function showStatus2(theDate) {
  let total = 0;
  for ( let i=0 ; i < activities.length ; i++ ){
    if ( activities[i].date === theDate ){
      total++;
    }
  }
  console.log( `You have ${total} activity(ies) for date "${theDate}"`);
}
console.log(activities);
showStatus2('23/7-18');
showStatus2('08/14/2020');



//Extra feature 
//            Optional  3
// Which activity user works with the most
function theLongestActivity(){
  let longestAct = 0; 
  let longIndex
  for(let i=0 ; i< activities.length; i++){
     if (activities[i].duration > longestAct ) {
       longestAct = activities[i].duration ;
       longIndex = i;
     }
  }
  console.log( `You have spent most of your time on "${activities[longIndex].activity}" the total ${longestAct} minutes`);
}

theLongestActivity();
