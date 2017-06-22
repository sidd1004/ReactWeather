var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=77e9092fc93b393a5a89b9e861ba3a47&units=metric';

module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function (res) {
            if (res.data.cod && res.data.message) {
                debugger;
                console.log(res.data.message);
                throw new Error(res.data.message);
            }
            else {
                debugger;
                return res.data.main.temp;
            }
        }, function (res) {
            debugger;
            throw new Error(res.response.data.message);
        });
    }
}