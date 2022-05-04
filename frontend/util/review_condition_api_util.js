

export const postReviewCondition = reviewConditions => {
    return (
        $.ajax({
            method: 'POST',
            url: '/api/review_conditions',
            data: {reviewConditions}
        })
    )
}