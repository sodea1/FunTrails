import React from "react";

// post a ReviewCondition to rails each click of a 
// ReviewCondition api that posts an array of ReviewConditions collected from each click of a condition

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            review: this.props.review,
            trail: this.props.trail,
            conditions: this.props.conditions, // [{condition_id: 25, review_id: 23}, {condition_id: 21, review_id: 29}]
            step: 1
        }

        this.toggleStep = this.toggleStep.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.clickStar = this.clickStar.bind(this);
        this.handleEsc = this.handleEsc.bind(this);
        this.changeDate = this.changeDate.bind(this);
        this.updateActivity = this.updateActivity.bind(this);
        this.toggleCondition = this.toggleCondition.bind(this);
        this.todaysDate = this.todaysDate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleEsc, false)
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleEsc, false)
    }

    handleEsc(e) {
        if (e.key === "Escape") {
            this.props.closeModal();
        }
    }

    updateActivity(e) {
        let newState = this.state;
        newState.review.activity = e.target.value;
        this.setState(newState);
    }

    toggleCondition(e) {
        const prevClass = e.target.className; // "unselected"
        e.target.className = (e.target.className === "condition-unselected") ? "condition-selected" : "condition-unselected";
        let copiedState = this.state;
        if (prevClass === "condition-unselected") {
            copiedState.conditions.push({ condition: e.target.textContent })
            this.setState(copiedState);
        } else {
            let reducedState = copiedState.conditions.filter(object => object.condition !== e.target.textContent);
            this.setState(reducedState);
        }
    }

    changeDate(e) {
        let newState = this.state;
        newState.review.date_hiked = e.target.value;
        this.setState(newState);
    }

    toggleStar(e) {
        const numStars = e.target.id;
        for (let j = parseInt(numStars) + 1; j < 6; j++) {
            
            let star = document.getElementById(j);
            star.src = window.grey_star;
        }
        for (let i = numStars; i > 0; i--) {
            let currStar = document.getElementById(i);
            currStar.src = window.star;
        }
    }

    clickStar(e) {
        let newState = Object.assign({}, this.state);
        newState.review.rating = e.target.id;
        this.setState(newState);
        document.getElementById("next-button").className = "review-button";
    }

    closeModal() {
        this.props.closeModal()
    }

    toggleStep(e) {
        (e.target.value === "next") ? this.setState({step: 2}) : this.setState({step: 1});
    }

    handleChange(e) {
        let newState = this.state;
        newState.review.description = e.target.value;
        this.setState(newState);
    }

    todaysDate() {
        const today = new Date;
        let dd = today.getDate();
        let mm = today.getMonth() + 1;
        let yyyy = today.getFullYear();
        return dd + '-' + mm + '-' + yyyy;
    }

    handleSubmit() {
        // must wait for review to be created so review_id is accessible in ReviewConditionsController
        this.props.createReview(this.state.review)
            .then(() => this.props.postReviewCondition(this.state.conditions));
        
        this.props.closeModal();
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
                        <h1 className="bold overflow">{this.state.trail.t_name}</h1>
                        <span className="step">Step 1 of 2</span>
                        <div>
                            {[1, 2, 3, 4, 5].map((num) =>
                                <img className="review-star" src={window.grey_star} key={num} id={num} onClick={this.clickStar} onMouseOver={this.toggleStar} onMouseOut={this.toggleStar} />
                            )}
                        </div>
                        <textarea onChange={this.handleChange} value={this.state.review.description} placeholder="Give back to the community. Share your thoughts about the trail so others know what to expect.">
                        </textarea>
                    </div>
                    <div className="review-button-container">
                    <button onClick={this.toggleStep} value="next" id="next-button" className={"review-button" + (this.state.review.rating === 0) ? 'disabled-button' : ''} disabled={this.state.review.rating === 0 ? true : false}>Next</button>
                    </div>
                </div>
            :
                <div className="step-container">
                    <div className="x-out">
                        <a onClick={this.closeModal}><img src={window.x} /></a>
                    </div>
                    <div className="step-body">
                        <h1 className="bold overflow">{this.state.trail.t_name}</h1>
                        <span className="step">Step 2 of 2</span>
                        <div className="rev-date-act">
                            <label htmlFor="activity">
                                Activity Type
                                <select id="activity" defaultValue="Hiking" onChange={this.updateActivity}>
                                    {activities.map((act, idx) => {
                                        return (
                                            <option value={act} key={idx}>{act}</option>
                                        )
                                    }
                                        
                                    )}
                                </select>
                            </label>
                        {/* <Calendar onChange={this.changeDate} value={this.state.review.date_hiked} className=/> */}
                        
                        <input type="date" onChange={this.changeDate} />
                        </div>
                        <h2>Trail Conditions</h2>
                        <div className="rev-conditions-container">
                        {conditions.map((condition, idx) => <button onClick={this.toggleCondition} key={idx} className="condition-unselected" value={condition.name}>{condition}</button>)}
                        </div>
                    </div>
                    <div className="review-buttons-container-2">
                        <button onClick={this.toggleStep} value="back" className="review-button-back">Back</button>
                        <button onClick={this.handleSubmit} className="review-button">Post</button>
                    </div>
            
                </div>

        return (
            <div className="modal-background" onKeyDown={this.handleKeyDown}>
                <div className="rev-form-container">
                    {reviewStep}
                </div>
            </div>
        )
        
    }
}

export default ReviewForm;