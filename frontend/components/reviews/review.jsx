import React from 'react';

class Review extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchTrailReviews(this.props.trailId);
        debugger;
    }

    reviewContainer() {
        const { reviews } = this.props;
        debugger;
        return (
            <div className='review-container'>
                {reviews.map((rev) => {
                    return (
                        <div className='review-block'>
                            <section className='review-header'>
                                <div className='flex'>
                                    <span className='rev-name'>{rev.user.first_name} {rev.user.last_name}</span>
                                    <div>
                                        <span className='rev-stars'></span>
                                        <span className='rev-stars'>{rev.date_hiked}</span>
                                    </div>
                                </div>

                                <div className='flex'>
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
        debugger;
        return (
            this.props.reviews && this.reviewContainer()
        )
    }
}

export default Review;