import React from "react";
import { Link } from "react-router-dom";

class Confidence extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="confidence">
                    <div className="inner-confidence">
                        <h1>Explore with</h1>
                        <h1>confidence</h1>
                        <span>Inspiration and guidance for wherever your trail may lead.</span>
                        <div className="confidence-icons">
                            <img src={window.app_store} height="52px" width="130px" />
                            <span className="rating">4.9</span>
                            <img src={window.stars} height="20px" width="124px"/>
                        </div>
                    </div>
                </div>

                <div className="mobile-preview">
                    
                </div>

                <div className="stats">
                    <div className="stat-list">
                        <span>300k+</span>
                        <span>curated trails</span>
                        <span>Discover unexpected gems, even in your own backyard.</span> 
                    </div>
                    <div className="stat-list">
                        <span>35 mil</span>
                        <span>fellow explorers</span>
                        <span>Share your adventures and learn from our global community.</span> 
                    </div>
                    <div className="stat-list">
                        <span>500+</span>
                        <span>logged miles</span>
                        <span>Navigate your way and keep a record of all your travels.</span> 
                    </div>
                </div>
            </div>
        )
    }

}

export default Confidence;