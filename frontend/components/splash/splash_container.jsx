import { connect } from "react-redux";
import { fetchTrails } from "../../actions/trail_actions";
import { fetchParks } from "../../actions/park_actions";
import Splash from './splash';

const mapStateToProps = (state, ownProps) => {
    return {
        trails: Object.values(state.entities.trails),
        parks: Object.values(state.entities.parks),
        history: ownProps.history
    }
};

const mapDispatchToProps = dispatch => ({
    fetchTrails: () => dispatch(fetchTrails()),
    fetchParks: () => dispatch(fetchParks())
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);