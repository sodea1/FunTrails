import React from "react";

export const singleReview = (review) => {
    const numYellow = review.rating;
    return (
        <span className='rev-stars'>
            {[1, 2, 3, 4, 5].map(num => <img className="star" key={num} src={num <= numYellow ? window.star : window.grey_star} />)}
        </span>
    )
}

export const allReviewsAvg =(reviews, avgRating) => {
    let rounded = Math.round(avgRating);

    return (
        <div>
            <div className='avg'>{avgRating}</div>
            <span>
                {[1, 2, 3, 4, 5].map(num => {
                    let star = window.star;
                    let klass = 'star';

                    if (num > rounded && num < rounded + 1) {
                        star = window.half_star;
                    } else if (num >= rounded + 1) {
                        star = window.grey_star;
                    }
                    return (
                        <img src={star} className={klass} key={num} />
                    )
                })}
            </span>
            <div className='rev-total'>{reviews.length} Reviews</div>
        </div>
    )
};

export const yellowBars = (reviews) => {
    const total = reviews.length;
    let averages = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0
    }

    for (let i = 0; i < reviews.length; i++) {
        averages[reviews[i].rating] += 1;
    }

    for (let j = 1; j < 6; j++) {
        averages[j] = ((averages[j] / total) * 100).toFixed(1);
        if (averages[j] === '0.0') {
            averages[j] = 1;

        }

    }

    return (
        <table className='rev-table'>
            <tbody>
                {[5, 4, 3, 2, 1].map(num => {
                    const pct = averages[num];
                    const width = {
                        width: pct + '%'
                    };

                    return (
                        <tr key={num} className='table-row'>
                            <td><div>{num}</div></td>
                            <td><img src={window.grey_star} /></td>
                            <td className='rev-bar'>
                                <div className='yellow-bar' style={width}></div>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export const stars = (color) => {
    const source = color === 'grey' ? window.grey_star : window.star;
    return (
        [1, 2, 3, 4, 5].map((num) =>
            <img src={source} key={num} />
        )
    )
}



