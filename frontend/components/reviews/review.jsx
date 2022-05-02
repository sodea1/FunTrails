import React from 'react';

class Review extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        this.props.fetchTrailReviews(this.props.trailId);
    }

    displayStars(review) {
        const numYellow = review.rating;
        return (
            <span className='rev-stars'>
                {[1, 2, 3, 4, 5].map(num => <img className="star" key={num} src={num <= numYellow ? window.star : window.grey_star} />)}
            </span>
        )
    }

    displayConditions(review) {
        const count = review.conditions.length;
        if (!count) return <div></div>;
        return (
            <div className='rev-conditions'>
                {[...Array(count - 1).keys()].map(num => {
                    return (
                        <span key={num} className='tag'>{review.conditions[num + 1].name}</span>
                    )
                })}
            </div>
        )
    }

    avgPerStar(reviews) {
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

    avgRating(reviews, avgRating) {
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
                            <img src={star} className={klass} key={num}/>
                        )
                    })}
                </span>
                <div className='rev-total'>{reviews.length} Reviews</div>
            </div>
        )
    }

    reviewContainer() {
        const { reviews } = this.props;

        let sum = 0;
        for (let i = 0; i < reviews.length; i++) {
            sum += reviews[i].rating
        }
        let avgRating = (sum / reviews.length).toFixed(1);

        return (
            <div className='review-container'>
                <div className='rev-banner bold'>
                    <div className='tab-container'>
                        <span className='rev-count'>Reviews ({reviews.length})</span>
                    </div>
                </div>

                <div className='rev-summary'>
                    <div className='rev-stats'>
                        <div className='avg-rating'>
                            <div className='bars-container'>
                                {this.avgPerStar(reviews)}
                            </div>

                            <div>
                                {this.avgRating(reviews, avgRating)}
                            </div>

                        </div>
                    </div>

                    {/*  CREATE REVIEW HERE */}
                    <button className='rev-button'>Write Review</button>
                </div>
                {reviews.map((rev) => {
                    return (
                        <div key={rev.id} className='review-block'>
                            <section className='review-header'>
                                <div>
                                    <div className='flex'>
                                        <img src={window.user_default}  className='default-image'/>
                                        <div className='rev-info'>
                                            <span className='rev-name bold'>{rev.user.first_name} {rev.user.last_name}</span>
                                            <div>
                                                {this.displayStars(rev)}
                                                <span className='date-hiked'>{rev.date_hiked}</span>
                                            </div>
                                        </div>
                                    </div>
                                   
                                </div>

                                <div className='rev-tags'>
                                    <span className='tag'>{rev.activity}</span>
                                    {this.displayConditions(rev)}
                                    
                                </div>

                            </section>

                            <section className='review-body'>
                                <span className='rev-description'>{rev.description}</span>
                            </section>
                        </div>
                    )
                })}

            </div>
        )
    }

    render() {
        return (
            this.props.reviews.length > 0 && this.reviewContainer()
        )
    }
}

export default Review;