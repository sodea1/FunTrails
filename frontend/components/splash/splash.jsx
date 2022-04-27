import React from "react";
import { Link } from 'react-router-dom';
import SplashSearch from "./search";
import TrailFavorites from "./trail_favorites";
import Descriptors from "./descriptors";
import Confidence from "./confidence";
import MobileDemo from "./mobile";
import Stats from "./stats";

class Splash extends React.Component {
    componentDidMount() {
        this.props.fetchTrails();
        
    }

    render() {
        const { trails } = this.props;
        debugger;
        return ( 
            <div>
                <div>
                    <SplashSearch />
                </div>

                <div className="splash-trails">
                    {trails.length > 0 && <TrailFavorites trails={trails}/>}
                </div>

                <div>
                    <Descriptors />
                    <Confidence />
                    <MobileDemo />
                    <Stats />
                </div>
            </div>
        )
    }
}

export default Splash;