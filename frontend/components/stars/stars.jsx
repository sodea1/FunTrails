import React from "react";

export const singleReview = (review, klass) => {
    const numYellow = review.rating;
    return (
        <div className='rev-stars'>
            {[1, 2, 3, 4, 5].map(num => <img className={klass} key={num} src={num <= numYellow ? window.star : window.grey_star} />)}
        </div>
    )
}

// intended for review stars & avg for a single trail using all reviews in state
export const allReviewsAvg =(avgRating) => {
    const rating = parseFloat(avgRating);
    return (
        <span className="rev-stars">
            {[1, 2, 3, 4, 5].map(num => {
                let klass = 'star';
                if (rating >= num) {
                    return (
                        <img src={window.star} className={klass} key={num} />
                    )
                } else if (num - rating < 1) {
                    return (
                        <img src={window.half_star} className={klass} key={num} />
                    )
                } else if (num - rating >= 1) {
                    return (
                        <img src={window.grey_star} className={klass} key={num} />
                    )
                }
            })}
        </span>
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

// export const stars = (color) => {
//     const source = color === 'grey' ? window.grey_star : window.star;
//     return (
//         [1, 2, 3, 4, 5].map((num) =>
//             <img src={source} key={num} />
//         )
//     )
// }



