const axios = require("axios");
// coords = [lat, long]

export const fetchWeather = (coords) => axios.request({
    method: 'GET',
    url: `https://dark-sky.p.rapidapi.com/${coords[0]},${coords[1]}`,
    headers: {
        'X-RapidAPI-Key': window.weatherAPIKey,
        'X-RapidAPI-Host': 'dark-sky.p.rapidapi.com'
    }
})