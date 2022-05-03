
export const fetchTrailReviews = trailId => {
    return (
        $.ajax({
            method: 'GET',
            url: `/api/trails/${trailId}/reviews/`
        })
    )
}

export const createReview = data => {
    debugger;
    return (
        $.ajax({
            method: 'POST',
            url: '/api/trails/:trail_id/reviews',
            data: {data }
        })
    )
}

// test
// $.ajax({ method: 'POST', url: '/api/reviews', data: {review: { id: 50, rating: 4, description: 'love it', date_hiked: '2022-11-11', user_id: 5, trail_id: 3, activity: 'hiking', conditions: ['sick'] }} }).then(review => console.log(review.description));