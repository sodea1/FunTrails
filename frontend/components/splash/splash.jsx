import React from "react";
import TrailFavorites from "./trail_favorites";
import Descriptors from "./descriptors";
import Confidence from "./confidence";
import MobileDemo from "./mobile";
import Stats from "./stats";
import Search from "../search/search";

class Splash extends React.Component {
    componentDidMount() {
        this.props.fetchTrails();
        this.props.fetchParks();
    }

    render() {
        const { trails, parks, history } = this.props;
        return ( 
            <div>
                <div>
                    <Search trails={trails} parks={parks} history={history} /> 
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