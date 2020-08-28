const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
  function travelDuration(travelInformation){
      const hoursOf =Math.floor(travelInformation.destinationDistance / travelInformation.speed);
     const minutesOf= Math.floor((travelInformation.destinationDistance % travelInformation.speed) / 50 * 60);
     console.log();
     return `${hoursOf} hours and ${minutesOf} minutes`;
  }
  
  const travelTime = travelDuration(travelInformation);
  console.log(travelTime); // 4 hours and 42 minutes
