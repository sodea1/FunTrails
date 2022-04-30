import React from 'react';

class Review extends React.Component {

    render() {
        debugger
        const { reviews } = this.props;
        return (
            <div>
                {reviews.map((rev) => {
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
                                    {rev.conditions.map((conditon) => {
                                        <span className='tag'>{condition.name}</span>
                                    })}
                                </div>
                            </div>

                        </section>

                        <section className='review-body'>
                            <p>{rev.description}</p>
                        </section>
                    </div>
                })}
                
            </div>
           
        )
    }
}

export default Review;