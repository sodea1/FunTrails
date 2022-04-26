import React from "react";
import { Link } from 'react-router-dom';
import SplashSearch from "./search";
import Favorites from "./favorites";
import Descriptors from "./descriptors";

class Splash extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // const welcomeMessage = this.props.session.currUserId;
        // const { currUserId } = this.props.session.currUserId;
        return (
            <div>
                <div>
                    <SplashSearch />
                </div>

                <div className="splash-trails">
                    <Favorites /> 
                </div>

                <div>
                    <Descriptors />        
                </div>

                <div>
                    
                </div>
            </div>
        )
    }
}

export default Splash;