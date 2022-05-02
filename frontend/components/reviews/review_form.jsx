import React from "react";
import * as Stars from '../stars/stars';

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            review: this.props.review,
            trail: this.props.trail,
            conditions: this.props.conditions,
            step: 1
        }

        this.toggleStep = this.toggleStep.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit() {

    }

    toggleStep(e) {
        (e.target.value === "next") ? this.setState({step: 2}) : this.setState({step: 1});
    }

    handleChange(e) {
        debugger;
        this.setState({review: {description: e.target.value}})
        debugger;
    }

    // onChange

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
        
        const reviewStep = (this.state.step === 1) ?
                <div className="step1-container">
                    <div className="x-out"></div>
                    <div className="step1-body">
                        <h1>{this.state.review.trail}</h1>
                        <span>Step 1 of 2</span>
                        {Stars.stars('grey')}
                        <textarea onChange={this.handleChange} value={this.state.review.description} placeholder="Give back to the community. Share your thoughts about the trail so others know what to expect.">
                        </textarea>
                    </div>
                    <button onClick={this.toggleStep} value="next" className="session-button">Next</button>
                </div>
            :
                <div className="step2-container">
                    <div className="top-div">
                        <h1>{this.state.review.trail}</h1>
                        <span>Step 2 of 2</span>
                        <label htmlFor="activity">
                            Activity Type
                            <select id="activity" >
                                {activities.map((act, idx) => 
                                    <option value={act} key={idx}>{act}</option>
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
                            <button onClick={this.toggleStep} value="back" className="session-button">Back</button>
                            <button onClick={this.handleSubmit} className="session-button">Post</button>
                        </div>
                    </div>
                </div>

        return (
            <div className="rev-form-container">
                {reviewStep}
            </div>
        )
        
    }
}

export default ReviewForm;