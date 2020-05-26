let userCity = "";
const cityToStore = userCity;
//localStorage.removeItem("history")
function weatherForecast() {

    function getUserCity() {
        const searchButtonEl = document.getElementById('citySearch');
        console.log(searchButtonEl);
         //const cityInputEl = document.getElementById('search');
        searchButtonEl.addEventListener('click', function () {
            event.preventDefault();
            userCity = document.getElementById('city').value;
        if(!userCity)return;
            console.log('You searched for this city: ', userCity);
            storeInLocalStorage(userCity);
            searchForCityWeather(userCity);
            searchForForecast(userCity);
            displayLocalStorage(userCity);
        });
    }
    getUserCity();

    function storeInLocalStorage(userCity) {
        const cityToStore = userCity;
        let strCities = window.localStorage.getItem("history");
        console.log(strCities);
        var cities = JSON.parse(strCities);
        if(cities==null)cities=[];
        cities.unshift(cityToStore);
        if(cities.length>8)cities.splice(8,(cities.length-8));
        strCities = JSON.stringify(cities);
        localStorage.setItem('history', strCities);
        console.log("Local Storage: ", strCities)
    }

    //storeInLocalStorage();

    function displayLocalStorage() {

        var history = localStorage.getItem("history");
        if (!history) {
            return
        }
    history=JSON.parse(history) 
        console.log(history)
        for (var i = 0; i < history.length; i++) {
            $("#city" + (i+1)).html(
                history[i] 
            );
        }
    };
    displayLocalStorage()

    function searchForCityWeather(userCity) {

        const apiKey = "e3f2fa3a336dfd7d3e653d613da5e010";
        const cityName = userCity;
        const units = "imperial";
        const oneDayWeatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=" + units + "&appid=" + apiKey;
        axios.get(oneDayWeatherURL)
            .then(function (response) {
                console.log(response.data.name)
                document.getElementById("name").innerHTML = response.data.name;
                document.getElementById("temp").innerHTML = "Temperature: " + response.data.main.temp + " °F";
                document.getElementById("humidity").innerHTML = "Humidity: " + response.data.main.humidity + "%";
                document.getElementById("wind").innerHTML = "Wind Speed: " + response.data.wind.speed + " mph";
                document.getElementById("iconCurrent").src = "http://openweathermap.org/img/w/" + response.data.weather[0].icon + ".png";

            })
    };

    function searchForCityCoord(userCity) {

        const apiKey = "e3f2fa3a336dfd7d3e653d613da5e010";
        const cityName = userCity;
        const units = "imperial";
        const oneDayWeatherURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=" + units + "&APPID=" + apiKey;
        axios.get(oneDayWeatherURL)
            .then(function (response) {
                console.log(response)

                document.getElementById("lat").innerHTML = "Latitude: " + response.data.city.coord.lat;
                document.getElementById("lon").innerHTML = "Longitude: " + response.data.city.coord.lon;

            })

    };

    function searchForForecast(userCity) {
        const apiKey = "e3f2fa3a336dfd7d3e653d613da5e010";
        const cityName = userCity;
        const units = "imperial";
        const oneDayWeatherURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=" + units + "&APPID=" + apiKey;
        axios.get(oneDayWeatherURL)
            .then(function (response) {
                console.log(response.data.list[0])
                document.getElementById("date0").innerHTML = "Date: " + response.data.list[0].dt_txt;
                document.getElementById("temp0").innerHTML = "Temperature: " + response.data.list[0].main.temp + " °F";
                document.getElementById("humidity0").innerHTML = "Humidity: " + response.data.list[0].main.humidity + "%";
                document.getElementById("icon0").src = "http://openweathermap.org/img/w/" + response.data.list[0].weather[0].icon + ".png";

            })
        axios.get(oneDayWeatherURL)
            .then(function (response) {
                document.getElementById("date1").innerHTML = "Date: " + response.data.list[10].dt_txt;
                document.getElementById("temp1").innerHTML = "Temperature: " + response.data.list[10].main.temp + " °F";
                document.getElementById("humidity1").innerHTML = "Humidity: " + response.data.list[10].main.humidity + "%";
                document.getElementById("icon1").src = "http://openweathermap.org/img/w/" + response.data.list[10].weather[0].icon + ".png";

            })
            axios.get(oneDayWeatherURL)
                .then(function (response) {
                    document.getElementById("temp2").innerHTML = "Temperature: " + response.data.list[18].main.temp + " °F";
                    document.getElementById("date2").innerHTML = "Date: " + response.data.list[18].dt_txt;
                    document.getElementById("humidity2").innerHTML = "Humidity: " + response.data.list[18].main.humidity + "%";
                    document.getElementById("icon2").src = "http://openweathermap.org/img/w/" + response.data.list[18].weather[0].icon + ".png";
    
    
    
    
                })
            axios.get(oneDayWeatherURL)
                .then(function (response) {
                    document.getElementById("date3").innerHTML = "Date: " + response.data.list[26].dt_txt;
                    document.getElementById("temp3").innerHTML = "Temperature: " + response.data.list[26].main.temp + " °F";
                    document.getElementById("humidity3").innerHTML = "Humidity: " + response.data.list[26].main.humidity + "%";
                    document.getElementById("icon3").src = "http://openweathermap.org/img/w/" + response.data.list[26].weather[0].icon + ".png";
    
    
    
    
                })
            axios.get(oneDayWeatherURL)
                .then(function (response) {
                    document.getElementById("temp4").innerHTML = "Temperature: " + response.data.list[34].main.temp + " °F";
                    document.getElementById("date4").innerHTML = "Date: " + response.data.list[34].dt_txt;
                    document.getElementById("humidity4").innerHTML = "Humidity: " + response.data.list[34].main.humidity + "%";
                    document.getElementById("icon4").src = "http://openweathermap.org/img/w/" + response.data.list[34].weather[0].icon + ".png";
    
    
    
                })
    
    
        };
    
    
    
    
    };
    weatherForecast()                

