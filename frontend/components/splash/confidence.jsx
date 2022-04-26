import React from "react";
import { Link } from "react-router-dom";

class Confidence extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="outer-confidence">
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
            </div>
        )
    }

}

export default Confidence;