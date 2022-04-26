import React from "react";
import { Link } from "react-router-dom";

class MobileDemo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="mobile-preview">
                <div className="mobile-left">
                    <span>Search {'&'} discover</span>
                    <span>Navigate {'&'} track</span>
                    <span>Remember {'&'} inspire</span>
                </div>

                <div className="mobile-center">
                    <div>
                        <img src={window.app_preview_1} />
                    </div>
                </div>
                
                <div className="mobile-right">
                    <span className="mobile-title">Pick the right trail for your day</span>
                    <span>All our trails are verified by experts and reviewed by our global community of adventurers like you.</span>
                    <Link to="/signup">Sign up</Link>
                </div>
            </div>
        )
    }

}

export default MobileDemo;