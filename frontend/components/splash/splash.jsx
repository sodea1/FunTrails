import React from "react";
import TrailFavorites from "./trail_favorites";
import Descriptors from "./descriptors";
import Confidence from "./confidence";
import MobileDemo from "./mobile";
import Stats from "./stats";
import Search from "../search/search";
import { useEffect } from "react";
import { fetchTrails } from '../../actions/trail_actions';
import { fetchParks } from '../../actions/park_actions';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Splash = () => {
    const trails = useSelector((state) => Object.values(state.entities.trails));
    const parks = useSelector((state) => Object.values(state.entities.parks));
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("fetching trails and parks")
        dispatch(fetchTrails());
        dispatch(fetchParks());
    }, [])

    return (
        <div>
            <div>
                <Search trails={trails} parks={parks} history={history} />
            </div>
            {trails.length > 0 && <TrailFavorites trails={trails} />}
            <div>
                <Descriptors />
                <Confidence />
                <MobileDemo />
                <Stats />
            </div>
        </div>
    )
};

export default Splash;