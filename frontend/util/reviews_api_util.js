
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
// $.ajax({ method: 'POST', url: '/api/reviews', data: {review: { id: 50, rating: 4, description: 'love it', date_hiked: '2022-11-11', user_id: 5, trail_id: 3, activity: 'hiking', conditions: ['sick'] }} }).then(review => console.log(review.description));