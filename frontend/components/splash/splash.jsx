import React from "react";
import SearchContainer from "../search/search";
import TrailFavorites from "./trail_favorites";
import Descriptors from "./descriptors";
import Confidence from "./confidence";
import MobileDemo from "./mobile";
import Stats from "./stats";

class Splash extends React.Component {
    componentDidMount() {
        this.props.fetchTrails();
        this.props.fetchParks();
    }

    render() {
        const { trails, parks } = this.props;
        return ( 
            <div>
                <div>
                    <SearchContainer trails={trails} parks={parks}/> 
                </div>
                {trails.length > 0 && <TrailFavorites trails={trails}/>}
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