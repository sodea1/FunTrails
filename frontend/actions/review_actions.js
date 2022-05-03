import * as ReviewApiUtil from '../util/reviews_api_util';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const GET_TRAIL_REVIEWS = 'GET_TRAIL_REVIEWS';

const receiveReview = review => {
    return (
        {
            type: RECEIVE_REVIEW,
            review
        }
    )
}

const getTrailReviews = reviews => {
    return ({
        type: GET_TRAIL_REVIEWS,
        reviews
    })
}

export const fetchTrailReviews = (trailId) => dispatch => {
    return (
        ReviewApiUtil.fetchTrailReviews(trailId)
            .then((reviews) => dispatch(getTrailReviews(reviews)))
    )
}

export const createReview = (review) => dispatch => {
    debugger;
    return (
        ReviewApiUtil.createReview(review)
            .then(data => dispatch(receiveReview(data)))
    )
}

// test: { review: {id: 20, user_id: 2, trail_id: 4, rating: 1, description: 'TERRIBLE', date_hiked: '2022-11-20', activity: 'hiking', conditions: ['fresh']} }
// ({

//     type: RECEIVE_REVIEW,
//     review
// })

