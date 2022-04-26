import React from "react";
import { Link } from "react-router-dom";

class Stats extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
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

export default Stats;


