import React from 'react';
import * as Stars from '../stars/stars';

class Review extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: this.props.reviews,
            currUserId: this.props.currUserId
        }

        this.handleDelete = this.handleDelete.bind(this);
    }
    
    componentDidMount() {
        this.props.fetchTrailReviews(this.props.trailId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.props.fetchTrailReviews(this.props.trailId)
        }
    }

    componentWillUnmount() {
        this.props.clearReviews();
    }

    fetchConditions(reviewId) {
        this.props.fetchReviewConditions(reviewId);
    }

    handleDelete(e) {
        this.props.deleteReview(e.target.value);
    }

    displayConditions(review) {
        if (review.conditions.length === 0) return <div></div>;
        const count = review.conditions.length;
        return (
            <div className='rev-conditions'>
                {[...Array(count).keys()].map(num => {
                    return (
                        <span key={num} className='tag'>{review.conditions[num].name}</span>
                    )
                })}
            </div>
        )
    }

    numCompare(str1, str2) {
        // str1 = 2019-10-19
        // str2 = 2019-11-20
        const arr1 = str1.split('-');
        const arr2 = str2.split('-');

        let year1 = parseInt(arr1[0]);
        let month1 = parseInt(arr1[1]);
        let day1 = parseInt(arr1[2]);

        let year2 = parseInt(arr2[0]);
        let month2 = parseInt(arr2[1]);
        let day2 = parseInt(arr2[2]);

        if (year1 > year2) {
            return 1;
        } else if (year1 < year2) {
            return -1;
        }

        if (month1 > month2) {
                return 1;
        } else if (month1 === month2) {
            return day1 > day2 ? 1 : -1;
        } else {
            return -1;
        }
    }

    sortReviews(reviews) {
        if (reviews.length < 2) {
            return reviews;
        }
        
        const pivot = reviews[0];
        let left = [];
        let right = [];
        
        for (let i = 1; i < reviews.length; i++) {
            let nextReview = reviews[i];
            if (this.numCompare(nextReview.date_hiked, pivot.date_hiked) === -1) {
                right.push(nextReview);
            } else {
                left.push(nextReview);
            }
        }

        return this.sortReviews(left).concat([pivot]).concat(this.sortReviews(right));
    }

    formatDate(revDate) {
        let dateString = revDate.split("-");
        let month = dateString[1];
        let day = dateString[2];

        if (dateString[2][0] === '0') {
            day = dateString[2][1];
        }

        if (dateString[1][0] === '0') {
            month = dateString[1][1];
        }

        const monthNum = parseInt(dateString[1]);
        const date = new Date();
        date.setMonth(monthNum - 1);

        const formattedDate = date.toLocaleString('en-US', {
            month: 'long'
        });
        
        return formattedDate + " " + day + ", " + dateString[0];
    }

    reviewList() {
        const { reviews } = this.props;        
        let sum = 0;
        for (let i = 0; i < reviews.length; i++) {
            sum += reviews[i].rating
        }
        let avgRating = (sum / reviews.length).toFixed(1);
        
        const datesArr = reviews.slice().map(review => review.date_hiked);
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
                                <div className='avg'>{avgRating}</div>
                                <div className="stars-wrapper-reviews">
                                    {Stars.allReviewsAvg(avgRating)}
                                    <div className='rev-total'>{reviews.length} Reviews</div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/*  CREATE REVIEW HERE */}
                    <button onClick={() => this.props.openModal({formType: 'create'})} className='rev-button'>Write Review</button>
                </div>
                {/* sortReviews(reviews.slice()) */}
                {this.sortReviews(reviews.slice()).map((rev) => {
                    if (rev.trail_id === this.props.trailId) {
                        return (
                            <div key={rev.id} className='review-block'>
                                <section className='review-header'>
                                    <div>
                                        <div className='flex'>
                                            <img src={window.user_default}  className='default-image'/>
                                            <div className='rev-info'>
                                                <span className='rev-name bold'>{rev.user.first_name} {rev.user.last_name}</span>
                                                <div className='flex'>
                                                    {Stars.singleReview(rev, "star")}
                                                    <span className='date-hiked detail'>{this.formatDate(rev.date_hiked)}</span>
                                                </div>
                                            </div>
                                        </div>
                                       
                                    </div>
    
                                    <div className='rev-tags'>
                                        <span className='tag'>{rev.activity}</span>
                                        {/* REMEMBER TO REMOVE CONSTRAINT BELOW */}
                                        {rev.conditions.length > 0 && this.displayConditions(rev)}
                                        
                                    </div>
    
                                </section>
    
                                <section className='review-body'>
                                    <span className='rev-description'>{rev.description}</span>
                                </section>
                                <section>
                                    {this.props.currUserId === parseInt(rev.user_id) ? 
                                        <div>
                                            <button onClick={this.handleDelete} value={rev.id} data-value={rev.user_id} className='delete-rev-button'>Delete</button>
                                            <button onClick={() => this.props.openModal({ formType: 'edit', review: rev, trail_id: this.props.trailId })} className='edit-rev-button'>Edit</button>
                                        </div>
                                    :
                                        <div></div>
                                    }
                                </section>
                            </div>
                        )
                    }
                })}

            </div>
        )
    }

    render() {
        return (
            this.props.reviews.length > 0 && this.reviewList()
        )
    }
}

export default Review;