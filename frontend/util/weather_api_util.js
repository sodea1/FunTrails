const axios = require("axios");

// coords = [lat, long]

export const fetchWeather = (coords) => axios.request({
    method: 'GET',
    url: 'https://dark-sky.p.rapidapi.com/37.8890,-122.6108',
    params: {
        latitude: coords[0],
        longitude: coords[1]
    },
    headers: {
        'X-RapidAPI-Key': '65ea497c18msh7fb47851fa239e9p1b9359jsna2d0f32ffc3f',
        'X-RapidAPI-Host': 'dark-sky.p.rapidapi.com'
    }
})