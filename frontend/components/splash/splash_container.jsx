import { connect } from "react-redux";
import { fetchTrails } from "../../actions/trail_actions";
import Splash from './splash';

const mapStateToProps = state => {
    return {
        trails: Object.values(state.entities.trails)
    }
};

const mapDispatchToProps = dispatch => ({
    fetchTrails: () => dispatch(fetchTrails())
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);