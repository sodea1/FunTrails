import React from "react";
import { Link } from "react-router-dom";

class Descriptors extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="third-container">
                <div className="photo-cards">
                    {/*  two photospositoin relative */}
                    <div className="photo-container">
                        {/* position aboslution */}
                        <div className="photo-card" id="hiking">
                            <span>Hiking</span>
                        </div>
                        <div className="photo-card" id="mtn-biking">
                            <span>Mountain Biking</span>
                        </div>
                    </div>

                    <div className="photo-container">
                        {/* position aboslution */}
                        <div className="photo-card" id="trail-running">
                            <span>Trail Running</span>
                        </div>
                        <div className="photo-card" id="dogs">
                            <span>Dogs</span>
                        </div>
                    </div>

                    <div className="photo-container">
                        {/* position aboslution */}
                        <div className="photo-card" id="wheelchair">
                            <span>Wheelchair friendly</span>
                        </div>
                        <div className="photo-card" id="road-biking">
                            <span>Road Biking</span>
                        </div>
                    </div>
                </div>

                <div className="go-wild">
                    {/* flex-column */}
                    <div>Built (for everyone)</div>
                    <div>to go wild</div>
                    <span>Whether you want a casual stroll or a trek to the summit, we've got you covered.</span>
                    <Link to='/signup'>Sign up</Link>
                </div> 
            </div>
        )
    }
}

export default Descriptors;