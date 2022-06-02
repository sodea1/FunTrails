import { connect } from "react-redux";
import { fetchTrails } from "../../actions/trail_actions";
import { fetchAllParks } from "../../actions/park_actions";
import Splash from './splash';

const mapStateToProps = state => {
    return {
        trails: Object.values(state.entities.trails)
    }
};

const mapDispatchToProps = dispatch => ({
    fetchTrails: () => dispatch(fetchTrails()),
    fetchAllParks: () => dispatch(fetchAllParks())
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);