import { RECEIVE_TRAIL } from "../actions/trail_actions";

const trailsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_TRAIL:
            return Object.assign({}, state, { [action.trail.id]: action.trail })
        default:
            return state;
    }
};

export default trailsReducer;