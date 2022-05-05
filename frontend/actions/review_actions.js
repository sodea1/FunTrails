import * as ReviewApiUtil from '../util/reviews_api_util';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const GET_TRAIL_REVIEWS = 'GET_TRAIL_REVIEWS';
export const CLEAR_REVIEWS = 'CLEAR_REVIEWS';
export const UPDATE_CONDITIONS = 'UPDATE_CONDITIONS';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

const receiveReview = review => {
    return ({
        type: RECEIVE_REVIEW,
        review
    })
}

export const clearReviews = () => {
    return ({
        type: CLEAR_REVIEWS
    })
}

const getTrailReviews = reviews => {
    return ({
        type: GET_TRAIL_REVIEWS,
        reviews
    })
}

const removeReview = (reviewId) => {
    return ({
        type: REMOVE_REVIEW,
        reviewId
    })
}

export const deleteReview = reviewId => dispatch => {
    return (
        ReviewApiUtil.deleteReview(reviewId)
            .then(() => dispatch(removeReview(reviewId)))
    )
}

export const fetchReviewConditions = (reviewId) => dispatch => {
    return (
        ReviewApiUtil.fetchReviewConditions(reviewId)
            .then((review) => dispatch(updateConditions(review)))
    )
}

export const fetchTrailReviews = (trailId) => dispatch => {
    return (
        ReviewApiUtil.fetchTrailReviews(trailId)
            .then((reviews) => dispatch(getTrailReviews(reviews)))
    )
}

export const createReview = (review) => dispatch => {
    return (
        ReviewApiUtil.createReview(review)
            // update conditions PAUSE
            .then(data => dispatch(receiveReview(data)))
    )
}



// test: { review: {id: 20, user_id: 2, trail_id: 4, rating: 1, description: 'TERRIBLE', date_hiked: '2022-11-20', activity: 'hiking', conditions: ['fresh']} }


