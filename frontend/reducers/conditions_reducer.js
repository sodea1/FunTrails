import { RECEIVE_CONDITIONS } from "../actions/condition_actions";


export const conditionsReducer = (state = [], action) => {
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_CONDITIONS:
            let newState = Object.assign({}, state, action.conditions)
            return newState;
        default:
            return [];
    }
}