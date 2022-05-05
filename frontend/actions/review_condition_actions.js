import * as ReviewConditionApiUtil from "../util/review_condition_api_util";

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW_CONDITION = 'REMOVE_REVIEW_CONDITION';


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


