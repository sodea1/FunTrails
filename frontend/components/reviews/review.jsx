import React from 'react';

class Review extends React.Component {
    componentDidMount() {
        this.props.fetchTrailReviews(this.props.trailId);
    }

    displayStars(review) {
        const numYellow = review.rating;
        return (
            <div className='rev-stars'>
                {[1, 2, 3, 4, 5].map(num => <img className="star" key={num} src={num <= numYellow ? window.star : window.grey_star} />)}
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
                                    <span className='rev-name bold'>{rev.user.first_name} {rev.user.last_name}</span>
                                    <div>
                                        {this.displayStars(rev)}
                                        <span>{rev.date_hiked}</span>
                                    </div>
                                </div>

                                <div>
                                    <span className='rev-activity'></span>
                                    <div>
                                        {rev.conditions.map((condition) => {
                                            <span className='tag'>{condition.name}</span>
                                        })}
                                    </div>
                                </div>

                            </section>

                            <section className='review-body'>
                                <p>{rev.description}</p>
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