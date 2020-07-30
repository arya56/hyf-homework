let dogYearOfBirth = 2017;
let dogYearFuture = 2027;
let dogYear ;
let shouldShowResultInDogYears = true ;
dogYear = (dogYearFuture-dogYearOfBirth) * 7 ;
 !shouldShowResultInDogYears ? console.log("Your dog will be " +(dogYear/7) +"human years old in 2027") 
   : console.log(`Your dog will be ${dogYear} dog years old in 2027`);
