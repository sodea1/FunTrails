import React from "react";
import * as Stars from '../stars/stars';

// post a ReviewCondition to rails each click of a 
// ReviewCondition api that posts an array of ReviewConditions collected from each click of a condition

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
        this.closeModal = this.closeModal.bind(this);
    }

    handleSubmit() {

    }

    closeModal() {
        this.props.closeModal()
    }

    toggleStep(e) {
        (e.target.value === "next") ? this.setState({step: 2}) : this.setState({step: 1});
    }

    handleChange(e) {
        this.setState({review: {description: e.target.value}})
    }

    // onChange

    render() {
        const activities = ['Backpacking', 'Bird watching', 'Bike touring', 'Camping', 'Cross-country skiing', 'Fishing', 'Hiking', 'Horseback riding', 'Mountain biking', 'OVH/Off-road driving', 'Paddle sports', 'Road biking', 'Rock climbing', 'Scenic driving', 'Snowshoeing', 'Skiing', 'Running', 'Via ferrata', 'Walking']  
        // consider adding conditions api?
        const conditions = ['Great!', 'Blowdown', 'Bridge out', 'Bugs', 'Closed', 'Fee', 'Flooded', 'Icy', 'Muddy',  'No shade', 'Off trail', 'Overgrown', 'Private property', 'Rocky', 'Scramble', 'Washed out', 'Snow']
        
        const reviewStep = (this.state.step === 1) ?
                <div className="step-container">
                    <div className="x-out">
                        <a onClick={this.closeModal}><img src={window.x} /></a>
                    </div>
                    <div className="step-body">
                        <h1 className="bold">{this.state.trail.t_name}</h1>
                        <span className="step">Step 1 of 2</span>
                        <div>
                            {Stars.stars('grey')}
                        </div>
                        <textarea onChange={this.handleChange} value={this.state.review.description} placeholder="Give back to the community. Share your thoughts about the trail so others know what to expect.">
                        </textarea>
                    </div>
                    <div className="review-button-container">
                        <button onClick={this.toggleStep} value="next" className="review-button">Next</button>
                    </div>
                </div>
            :
                <div className="step-container">
                    <div className="x-out">
                        <a onClick={this.closeModal}><img src={window.x} /></a>
                    </div>
                    <div className="step-body">
                        <h1 className="bold">{this.state.trail.t_name}</h1>
                        <span className="step">Step 2 of 2</span>
                        <div className="rev-date-act">
                            <label htmlFor="activity">
                                Activity Type
                                <select id="activity" >
                                    {activities.map((act, idx) => {
                                        const selected = (act === 'Hiking') ? selected : '';
                                        return (
                                            <option value={act} key={idx} selected={act === 'Hiking' ? true : false}>{act}</option>
                                        )
                                    }
                                        
                                    )}
                                </select>
                            </label>
                            <input type="date" id="date" value={this.state.review.date_hiked} />
                        </div>
                        <h2>Trail Conditions</h2>
                        <div className="rev-conditions-container">
                            {conditions.map((condition, idx) => <button key={idx} className="tag" value={condition}>{condition}</button>)}
                        </div>
                    </div>
                    <div className="review-buttons-container-2">
                        <button onClick={this.toggleStep} value="back" className="review-button-back">Back</button>
                        <button onClick={this.handleSubmit} className="review-button">Post</button>
                    </div>
                
                </div>

        return (
            <div className="modal-background">
                <div className="rev-form-container">
                    {reviewStep}
                </div>
            </div>
        )
        
    }
}

export default ReviewForm;