const btn = document.querySelector('.submit-btn');
let userInputCity = '';
let userInputCountry = '';
const apiKey = '0e594c0ceb55881382f48cdbfdbafd1d';

let wind = 0;
let sunset = 0;
let sunrise = 0;
let currentMin = 0;
let currentMax = 0;
let currentTemp = 0;
let currentHumidity = 0;
let area = '';

const minTempDiv = document.querySelector('.min p');
const maxTempDiv = document.querySelector('.max p');
const temperatureText = document.querySelector('.temperature p');
const currentWeatherConditionText = document.querySelector('.temperature h2');
const windContainer = document.querySelector('.icons-container .wind-text');
const bottomIcons = document.querySelector('.bottom-icons');
const sunriseText = document.querySelector('.sunrise-text');
const sunsetText = document.querySelector('.sunset-text');
const humidityText = document.querySelector('.humidity-text');
const areaLookUp = document.querySelector('.area h2');

btn.addEventListener('click', function(e){

    e.preventDefault();
    userInputCity = document.querySelector('.zipCode').value;
    // userInputCountry = document.querySelector('.country').value;

    axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${userInputCity},${userInputCountry}&APPID=${apiKey}`)
        .then(function(response){
            console.log(response.data);

            bottomIcons.classList.add('show');

            currentTemp = Math.floor((response.data.main.temp - 273.15) * 9/5 + 32);
            currentWeatherCondition = response.data.weather[0].description;
            currentMin = Math.floor((response.data.main.temp_min - 273.15) * 9/5 + 32);
            currentMax = Math.floor((response.data.main.temp_max - 273.15) * 9/5 + 32);

            wind = response.data.wind.speed;
            currentHumidity = response.data.main.humidity;
            sunrise = new Date(response.data.sys.sunrise).toLocaleTimeString("en-GB").slice(1,5);
            sunset = new Date(response.data.sys.sunset).toLocaleTimeString("en-GB").slice(1,5);

            area = response.data.name;

            if(currentTemp > 70){
                console.log(currentTemp);
                document.querySelector('.sun').classList.add('show');
                document.querySelector('.sun').classList.remove('hide');
            } else {
                document.querySelector('.sun').classList.remove('show');
                document.querySelector('.sun').classList.add('hide');
            } 

            temperatureText.innerHTML = currentTemp + '°';
            currentWeatherConditionText.innerHTML = currentWeatherCondition;
            minTempDiv.innerHTML = ('Min Temp ' + currentMin + ' °');
            maxTempDiv.innerHTML = ('Max Temp ' + currentMax + ' °');
            windContainer.innerHTML = wind + ' m/s';
            sunriseText.innerHTML = sunrise + ' AM';
            sunsetText.innerHTML = sunset + ' PM';
            humidityText.innerHTML = currentHumidity + '%';
            areaLookUp.innerHTML = area;

        })
        .catch(function(err){
            console.log(err);
        })   
    });
