let cityInput = document.getElementById('city-input');
let cityName = document.getElementById('name');
let temp = document.getElementById('temp');
let desc = document.getElementById('desc');
let humidity = document.getElementById('humidity');
let windSpeed = document.getElementById('windSpeed');
let tempMaxMin = document.getElementById('tempMaxMin');
let form = document.getElementById('form');

async function fetchWeather(url) {
    console.log(url);
    const response = await fetch(url);

    return response.json();
}

async function printWeather(weather) {
    let celcius = Math.round(parseFloat(weather.main.temp)-273.15);
    let max = Math.round(parseFloat(weather.main.temp_max)-273.15);
    let min = Math.round(parseFloat(weather.main.temp_min)-273.15);
    let description = weather.weather[0].description;

    cityName.innerHTML = weather.name + ', ' + weather.sys.country;
    temp.innerHTML = celcius + '°C';
    desc.innerHTML = description;
    tempMaxMin.innerHTML = 'max: ' + max + ' | Min: ' + min; 
    humidity.innerHTML = 'Humidity: ' + weather.main.humidity + '%';
    windSpeed.innerHTML = 'Wind speed: ' + weather.wind.speed + ' Km/hr';
}   

async function fetchAndPrintWeather(url) {
    try {
        const weather = await fetchWeather(url, {
            method: 'GET',
            headers: {
              "Content-Type": "application/json"
            }
          });

        printWeather(weather);
    } catch (err) {
        console.log(err);
    }
}

form.addEventListener('submit', (event => {
    event.preventDefault();
    
    const url = 'https://api.openweathermap.org/data/2.5/weather?q='+ cityInput.value +'&appid=39eb1a863845c72aba3af4aeab1e35c5';
    console.log(url);

    fetchAndPrintWeather(url);

    cityInput.value = '';
}))