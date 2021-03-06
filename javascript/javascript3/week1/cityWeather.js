// Display the data
// This data should be showed in your app:

// The chosen city
// Temperature
// Icon for the weather type
// Wind speed
// How clowdy it is
// When sunrise and sunset is
// Optional a map showing where the city is located

function getWeather() {
  const button = document.getElementById('weatherButton');
  button.addEventListener('click', inputChange);

  const WeatherLocationButton = document.getElementById('locationButton');
  WeatherLocationButton.addEventListener('click', weatherLocationCapture);

  const saveLocation = document.getElementById('saveLocation');
  saveLocation.addEventListener('click', saveToLocalhost);

  const body = document.querySelector('body');
  const div = document.createElement('div');
  body.appendChild(div);

  let newCity = document.getElementById('cityname');
  newCity.addEventListener('change', inputChange);
  retrieveFromLocalhost(fetchTheWeather);

  //    input textbox changed && weather button callback
  function inputChange() {
    if (newCity.value) {
      fetchTheWeather(newCity.value);
    } else {
      newCity.value = 'insert valid city name';
    }
  }

  //  fetch weather by city name

  function fetchTheWeather(city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1fa178d7ac2b383598fae81ce7953bc7&units=metric`
    )
      .then(response => response.json())

      .then(weather => {
        renderOutput(weather);
      })
      .catch(error => {
        console.error('This is not a city!!! ', error);
      });
  }
  //  fetch weathe by location
  function fetchFromLocation(Latitude, longitude) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${Latitude}&lon=${longitude}&appid=1fa178d7ac2b383598fae81ce7953bc7&units=metric`
    )
      .then(response => response.json())

      .then(weather => {
        renderOutput(weather);
      });
  }

  function renderOutput(weather) {
    newCity.value = weather.name;
    div.innerHTML = `City : ${weather.name}` + '<br>';
    div.innerHTML += `Temperature :  ${weather.main.temp}&#176c` + '<br>';
    const weatherDesc = weather.weather[0].description;
    const iconCode = weather.weather[0].icon;
    div.innerHTML +=
      weatherDesc.charAt(0).toUpperCase() +
      weatherDesc.slice(1) +
      '<br>'+
      `<img src=http://openweathermap.org/img/w/${iconCode}.png >` +
      '<br>';
    div.innerHTML += `Wind speed : ${weather.wind.speed}m/s` + '<br>';
    div.innerHTML += `It is ${weather.clouds.all}% Coudy` + '<br>';
    div.innerHTML +=
      `Sunrise at : ${convertToTime(weather.sys.sunrise)}` + '<br>';
    div.innerHTML +=
      `Sunset at : ${convertToTime(weather.sys.sunset)}` + '<br>';
  }

  //  retrieve user loction

  function weatherLocationCapture() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showThePosition);
    } else {
      console.log("Geolocation doesn't support by this browser");
    }
  }

  //    callup fetch with positions
  function showThePosition(position) {
    fetchFromLocation(position.coords.latitude, position.coords.longitude);
  }

  function saveToLocalhost() {
    // save to local host   newCity.value
    localStorage.setItem('mySavedCity', newCity.value);
    console.log(newCity.value, ' Has been saved');
  }
  
  //      Return time of the day from milisec
  function convertToTime(value) {
    const d = new Date(value * 1000);
    const h = addZero(d.getHours(), 2);
    const m = addZero(d.getMinutes(), 2);
    const s = addZero(d.getSeconds(), 2);
    const ms = addZero(d.getMilliseconds(), 0);
    return h + ':' + m + ':' + s + ':' + ms;
  }

  function addZero(x, n) {
    while (x.toString().length < n) {
      x = '0' + x;
    }
    return x;
  }
}
//     the retrieve function

function retrieveFromLocalhost(callback) {
  //    read from localhost

  const myCity = localStorage.getItem('mySavedCity');
  if (myCity) {
    console.log(myCity);
    callback(myCity);
  } else {
    console.log('please save a city first');
  }
}
getWeather();
