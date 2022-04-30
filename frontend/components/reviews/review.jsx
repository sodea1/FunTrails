import React from 'react';

class Review extends React.Component {
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
        debugger
        // if (count === 0) return <div></div>;
        return (
                <div className='rev-conditions'>
                    {[...Array(count - 1).keys()].map(num => {
                        debugger;
                        return (
                            <span key={num} className='tag'>{review.conditions[num + 1].name}</span>
                        )
                    })}
                </div>
                
        )
    }

    reviewContainer() {
        const { reviews } = this.props;

        return (
            <div className='review-container'>
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
            this.props.reviews && this.reviewContainer()
        )
    }
}

export default Review;