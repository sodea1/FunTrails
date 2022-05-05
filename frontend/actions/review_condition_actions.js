import * as ReviewConditionApiUtil from "../util/review_condition_api_util";

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

const updateConditions = review => {
    return ({
        type: RECEIVE_REVIEW,
        review
    })
}

export const postReviewCondition = (reviewConditions) => dispatch => {
    return (
        ReviewConditionApiUtil.postReviewCondition(reviewConditions)
            // update conditions PAUSE
            .then(review => dispatch(updateConditions(review)))
    )
}

