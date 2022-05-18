import * as ReviewConditionApiUtil from "../util/review_condition_api_util";

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW_CONDITION = 'REMOVE_REVIEW_CONDITION';


const receiveReview = review => {
    return ({
        type: RECEIVE_REVIEW,
        review
    })
}

export const postReviewCondition = (reviewConditions) => dispatch => {
    return (
        ReviewConditionApiUtil.postReviewCondition(reviewConditions)
            // update conditions PAUSE
            .then(review => dispatch(receiveReview(review)))
    )
}

export const updateReviewCondition = (reviewConditions, reviewId) => dispatch => {
    return (
        ReviewConditionApiUtil.updateReviewCondition(reviewConditions, reviewId)
            .then(res => dispatch(receiveReview(res)))
    )
}


