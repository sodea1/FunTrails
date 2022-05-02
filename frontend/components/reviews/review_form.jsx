import React from "react";

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            review: this.props.review,
            trail: this.props.trail,
            conditions: this.props.conditions
        }
    }

    render() {
        const activities = ['Backpacking',
            'Bird watching',
            'Bike touring',
            'Camping',
            'Cross-country skiing',
            'Fishing',
            'Hiking',
            'Horseback riding',
            'Mountain biking',
            'OVH/Off-road driving',
            'Paddle sports',
            'Road biking',
            'Rock climbing',
            'Scenic driving',
            'Snowshoeing',
            'Skiing',
            'Running',
            'Via ferrata',
            'Walking']

        return (
            <div className="rev-form-container">
                <div className="step1-container">
                    <div className="x-out"></div>
                    <div className="step1-body">
                        <h1>{this.state.review.trail}</h1>
                        <span>Step 1 of 2</span>
                        {[1, 2, 3, 4, 5].map((num) => 
                            <img src={window.grey_star} key={num}/>
                        )}
                        <textarea placeholder="Give back to the community. Share your thoughts about the trail so others know what to expect.">
                            
                        </textarea>
                    </div>
                    
                </div>

                <div className="step2-container">
                    <div className="top-div">
                        <h1>{this.state.review.trail}</h1>
                        <span>Step 2 of 2</span>
                        <label htmlFor="activity">
                            Activity Type
                            <select id="activity" >
                                {activities.map(act => 
                                    <option value={act}>{act}</option>
                                )}
                            </select>
                        </label>
                        <input type="date" id="date" value={this.state.review.date_hiked} />
                    </div>
                    <div className="middle-div">
                        <h2>Trail Conditions</h2>
                        {this.state.conditions.map(condition => <span className="tag">{condition}</span>)}
                    </div>
                    <div className="bottom-div">
                        <div>
                            <button className="session-button">Back</button>
                            <button className="session-button">Post</button>
                        </div>
                    </div>

                </div>
            </div>

        )
    }
}

export default ReviewForm;