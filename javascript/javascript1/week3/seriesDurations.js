const seriesDurations = [
    {
      title: 'Game of thrones',
      days: 3,
      hours: 1,
      minutes: 0,  
    },
    {
      title: 'Sopranos',
      days: 3,
      hours: 14,
      minutes: 0,
    },
    {
      title: 'The Wire',
      days: 2,
      hours: 12,
      minutes: 0,
    },
    
    {
        title: 'Gray\'s Anatomy',
        days: 10,
        hours: 19,
        minutes: 26,
      },
    {
    title: 'Breaking Bad',
    days: 1,
      hours: 22,
      minutes: 30
    }
  ]
  console.log(seriesDurations[0].days*24+seriesDurations.hours)
const myLifeMinutes = 4.205e+7;  //80*365*24*60


function logOutSeriesText() {
    // write code here
    let total = 0
    for (let i = 0 ; i < seriesDurations.length ; i++){
       const result = ((seriesDurations[i].days*24+seriesDurations[i].hours)*60+seriesDurations[i].minutes)*100/myLifeMinutes;
       console.log(`${seriesDurations[i].title} took ${result.toFixed(3)} of my life`);
       total += result;
    }
    console.log(`In total that is ${total.toFixed(2)} of my life`);
  }
  
  logOutSeriesText(); // logs out the text found above