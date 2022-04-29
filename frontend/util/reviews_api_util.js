
export const fetchReview = reviewId => (
    $.ajax({
        method: 'GET',
        url: `/api/reviews/${reviewId}`
    })
);

export const createReview = review => {
    return (
        $.ajax({
            method: 'POST',
            url: '/api/reviews/',
            data: { review }
        })
    )
}

// test
// $.ajax({ method: 'POST', url: '/api/reviews', data: { id: 50, rating: 4, description: 'love it', date_hiked: '2022-11-11', user_id: 5, trail_id: 3, activity_id: 4 } }).then(review => console.log(review.description));