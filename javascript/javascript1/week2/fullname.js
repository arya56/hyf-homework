//    Formal fullname


function getFullname( firstname, surname, useFormalName) {
    if ( firstname === "" && surname ===""){
        return "Please fill the form fully";
    }
result = useFormalName ?  '"Lord '+firstname+" "+surname+'"' : '"'+firstname+" "+surname+'"' ;
return result;
}
const fullname1 = getFullname("Benjamin","Hughes",true);
const fullname2 = getFullname("Ali","Ehsan");
const fullname3 = getFullname("","");

console.log(fullname1);
console.log(fullname2); 
console.log(fullname3); 


//     Event application
 function getEventWeekday( eventDay ) {
    const today = new Date();
    const date = today.getDay();
    const weekday =["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"] ;
    let dayOfWeek  = weekday[date];
    let dayOfEvent;
    eventDay += date;

    if( eventDay >= 7  && eventDay%6 != 0){
            eventDay = Math.abs(( eventDay % 6 )- (~~(eventDay/6)));
        }

    else if ( eventDay%6 === 0  && eventDay >= 7 ){
        eventDay = eventDay/6 +1;
        }
dayOfEvent = weekday[eventDay];

result2 = "Today is " +'"'+dayOfWeek+'"' +" So event would be held on " + '"'+dayOfEvent+'"!' ;
return result2;
}

console.log(getEventWeekday(6)); 

 
//    Weather wear
     function whichTempWear( tempDegree ) {
        switch ( true ) {
            case tempDegree < -5:
                return "What ever you have in the closet wear them all!";
                break;
          case tempDegree < 5 :
                return "Some very warm cloths at least 3 layers";
                break;
            case tempDegree < 14 :
                return "Wear a warm jacket";
                break;
            case tempDegree < 20:
                return "Maybe a t-shirt";
                break;
            case tempDegree < 30 :
                return "Short & t-shirt";
                break;
            default: 
                return "No need to wear anything";
        }

    }
    const clothesToWear = whichTempWear(0);
    console.log(clothesToWear) ; 


//     addStudentToClass function    arr.includes(1) 
const class07Students = [];

function addStudentToClass( studentName ) {


    /// re arrange
    if ( studentName === "" && class07Students.length < 6 ) {
        return "Please insert a name!"
    }
    else if (class07Students.length < 6 && !class07Students.includes(studentName)){
        class07Students.push(studentName);
    }
    else if (class07Students.length === 6 && studentName ==="Queen" && !class07Students.includes('Queen')){
        class07Students.push(studentName);
        return;
    }
  else if (class07Students.length >= 6 ) {
   return "Cannot add more students to class 07.";
}
      else {
        return "Student "+studentName+" is already in the class" ;
    }
    

}    
//     addStudentToClass Previous Version 
/* const class07Students = [];
function addStudentToClass( studentName ) {
    if (class07Students.length < 6 && studentName !="" ){
        if (!class07Students.includes(studentName)){
            class07Students.push(studentName);
        }
        else {
            return "Student "+studentName+" is already in the class" ;
        }
    }
    else if (class07Students.length === 6 && studentName ==="Queen" ){
        class07Students.push(studentName);
    }else if ( studentName === "" ) {
          return "Please insert a name!"
    }
    else {
        return  "Cannot add more students to class 07.";
    }
}

//    getNumberOfStudents function
function getNumberOfStudents() {
    return class07Students.length;
    }
addStudentToClass("Ali");
getNumberOfStudents();
console.log(class07Students);  

*/