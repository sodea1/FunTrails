import { RECEIVE_ALL_PARKS, RECEIVE_PARK } from "../actions/park_actions";

const parksReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_ALL_PARKS:
            return Object.assign(newState, action.parks);
        case RECEIVE_PARK:
            return Object.assign(newState, {[action.park.id]: action.park});
        default:
            return state;
    }
}

export default parksReducer;