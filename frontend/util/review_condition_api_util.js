export const postReviewCondition = reviewConditions => {
    return (
        $.ajax({
            method: 'POST',
            url: '/api/review_conditions',
            data: { reviewConditions }
        })
    )
}

export const updateReviewCondition = (reviewConditions, reviewId) => {
    return (
        $.ajax({
            method: 'PATCH',
            url: `/api/review_conditions/${reviewId}`,
            data: { reviewConditions, reviewId }
        })
    )
}