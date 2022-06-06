import { connect } from "react-redux";
import { fetchParks } from "../../actions/park_actions";
import { fetchTrails } from "../../actions/trail_actions";
import Park from "./park";

const mapStateToProps = (state, ownProps) => ({
    parks: state.entities.parks,
    trails: state.entities.trails
});

const mapDispatchToProps = dispatch => ({
    fetchParks: () => dispatch(fetchParks()),
    fetchTrails: () => dispatch(fetchTrails())
});

export default connect(mapStateToProps, mapDispatchToProps)(Park);

