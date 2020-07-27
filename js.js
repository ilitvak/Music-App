const btn = document.querySelector('.submit-btn');
let userInputCity = '';
let userInputState = '';
const apiKey = '0e594c0ceb55881382f48cdbfdbafd1d';

let wind = 0;
let sunset = 0;
let sunrise = 0;
let currentMin = 0;
let currentMax = 0;
let currentTemp = 0;
let currentHumidity = 0;
const minTempDiv = document.querySelector('.min p');
const maxTempDiv = document.querySelector('.max p');
const temperatureBox = document.querySelector('.temperature-box');
const temperatureText = document.querySelector('.temperature p');
let currentWeatherConditionText = document.querySelector('.temperature h2');;

let count = 0;

let newWord = '';

btn.addEventListener('click', function(e){

    e.preventDefault();

    console.log(e);
    userInputCity = document.querySelector('.zipCode').value;

    axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${userInputCity},${userInputState}&APPID=${apiKey}`)
        .then(function(response){
            console.log(response.data);

            currentTemp = Math.floor((response.data.main.temp - 273.15) * 9/5 + 32);
            currentHumidity = response.data.main.humidity;
            currentWeatherCondition = response.data.weather[0].description;
            currentMin = Math.floor((response.data.main.temp_min - 273.15) * 9/5 + 32);
            currentMax = Math.floor((response.data.main.temp_max - 273.15) * 9/5 + 32);
            wind = response.data.wind.speed;

            if(currentTemp > 70){
                document.querySelector('.sun').classList.add('show');
            } 

            temperatureText.innerHTML = currentTemp + '°';
            currentWeatherConditionText.innerHTML = currentWeatherCondition;
            minTempDiv.innerHTML = ('Min Temp ' + currentMin + ' °');
            maxTempDiv.innerHTML = ('Max Temp ' + currentMax + ' °');

        })
        .catch(function(err){
            console.log(err);
        })   
    });




//const apiKEY = 'f12a1950f4679d31d6d5ff0f098477c4';

//API CALL
/*
https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&
exclude={part}&appid={f12a1950f4679d31d6d5ff0f098477c4}
*/

