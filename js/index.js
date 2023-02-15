const APP_ID = 'cf26e7b2c25b5acd18ed5c3e836fb235';
const DEFAULT_VALUE = '--';
const searchInput = document.querySelector('#search-input');
const cityName = document.querySelector('.city-name');
const weatherState = document.querySelector('.weather-state');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');

const sunrise = document.querySelector('.sunrise');
const sunset = document.querySelector('.sunset');
const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.wind-speed');


searchInput.addEventListener('change', (e) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${APP_ID}&units=metric&lang=vi`)
        .then(async response => {    
            const data = await response.json();
            console.log('[Search Input]', data);
            // thành phố
            cityName.innerHTML = data.name || DEFAULT_VALUE;
            // thời tiết hiện tại
            weatherState.innerHTML = data.weather[0].description || DEFAULT_VALUE;
            // icon thời tiết
            weatherIcon.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
            // nhiệt độ
            temperature.innerHTML = Math.round(data.main.temp) || DEFAULT_VALUE;
            // các thông tin dưới.
            sunrise.innerHTML = data.sys.sunrise || DEFAULT_VALUE;
            sunset.innerHTML = data.sys.sunset || DEFAULT_VALUE; 
            humidity.innerHTML = data.main.humidity || DEFAULT_VALUE;
            // windSpeed.innerHTML = (data.wind.speed * 3.6).toFixed(2) || DEFAULT_VALUE;
            windSpeed.innerHTML = data.wind.speed || DEFAULT_VALUE;
        })
          .catch(error => {    
            alert("không có thành phố này");
          });
  });
