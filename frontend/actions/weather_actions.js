import * as WeatherApiUtil from '../util/weather_api_util';

export const GET_FORECAST = "GET_FORECAST";

const getWeather = (weather) => ({
    type: GET_FORECAST,
    weather
});

export const fetchWeather = (coords) => (dispatch) => {
    console.log("fetching weather");
    return (
        WeatherApiUtil.fetchWeather(coords)
            .then(res => dispatch(getWeather(res)))
    );
};
