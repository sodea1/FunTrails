import { GET_TRAIL_REVIEWS, RECEIVE_REVIEW, CLEAR_REVIEWS, REMOVE_REVIEW } from "../actions/review_actions";


const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_REVIEW:
            return Object.assign({}, state, {[action.review.id]: action.review} );
        case GET_TRAIL_REVIEWS:
            return Object.assign({}, state, action.reviews);
        case CLEAR_REVIEWS:
            return {};
        case REMOVE_REVIEW:
            let newState = Object.assign({}, state);
            debugger
            delete newState[action.reviewId];
            return newState;
        default:
            return state;
    }
};

export default reviewsReducer;