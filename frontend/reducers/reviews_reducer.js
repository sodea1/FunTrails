import { RECEIVE_REVIEW } from "../actions/review_actions";


const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_REVIEW:
            return Object.assign({}, { currUserId: action.review });
        default:
            return state;
    }
};

export default reviewsReducer;