
export const fetchTrailReviews = trailId => {
    return (
        $.ajax({
            method: 'GET',
            url: `/api/trails/${trailId}/reviews/`
        })
    )
}

export const fetchReviewConditions = (reviewId) => {
    return (
        $.ajax({
            method: 'GET',
            url: `/api/trails/:trail_id/reviews/${reviewId}`
        })
    )
}

export const createReview = review => {
    return (
        $.ajax({
            method: 'POST',
            url: `/api/trails/${review.trail_id}/reviews`,
            data: { review }
        })
    )
}

export const updateReview = (review) => {
    return (
        $.ajax({
            method: 'PATCH',
            url: `/api/trails/${review.trail_id}/reviews/${review.review_id}`,
            data: { review }
        })
    )
}

export const deleteReview = (reviewId) => {
    debugger;
    return (
        $.ajax({
            method: 'DELETE',
            url: `/api/trails/:trailId/reviews/${reviewId}`
        })
    )
}

// {id: 300, user_id: 30, trail_id: 10, photo_id: nil, rating: 5, description: "Love this hike!!"}

// test
// $.ajax({ method: 'POST', url: '/api/reviews', data: {review: { id: 50, rating: 4, description: 'love it', date_hiked: '2022-11-11', user_id: 5, trail_id: 3, activity: 'hiking', conditions: ['sick'] }} }).then(review => console.log(review.description));