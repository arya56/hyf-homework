const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
  function notThisFunctionName(travelInformation){
      const hoursOf =Math.trunc(travelInformation.destinationDistance / travelInformation.speed);
     const minutesOf= Math.trunc((travelInformation.destinationDistance % travelInformation.speed) / 50 * 60);
     console.log(`${hoursOf} hours and ${minutesOf} minutes`);
  }
  
  const travelTime = notThisFunctionName(travelInformation);
  console.log(travelTime); // 4 hours and 42 minutes