import React from 'react';
import * as Stars from '../stars/stars';

class Review extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        this.props.fetchTrailReviews(this.props.trailId);
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
                                {Stars.yellowBars(reviews)}
                            </div>

                            <div>
                                {Stars.allReviewsAvg(reviews, avgRating)}
                            </div>

                        </div>
                    </div>

                    {/*  CREATE REVIEW HERE */}
                    <button onClick={() => this.props.openModal({formType: 'create'})} className='rev-button'>Write Review</button>
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
                                                {Stars.singleReview(rev)}
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