import { GET_FORECAST } from "../actions/weather_actions";

const weatherReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case GET_FORECAST:
            let newState = { "forecast": action.weather.data.daily.data.slice(0, 5) };
            return Object.assign({}, state, newState);
        default:
            return state;
    }
}

export default weatherReducer;