import * as ReviewApiUtil from '../util/reviews_api_util';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

export const receiveReview = review => {
    debugger;
    return (
        {
            type: RECEIVE_REVIEW,
            review
        }
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

