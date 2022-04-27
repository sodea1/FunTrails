import { connect } from "react-redux";
import { fetchTrails, fetchTrail } from "../../actions/trail_actions";
import Trail from "./trail";

const mapStateToProps = (state, ownProps) => ({
    trail: state.entities.trails[ownProps.match.params.id]
});

const mapDispatchToProps = dispatch => ({
    fetchTrails: () => dispatch(fetchTrails()),
    fetchTrail: (trailId) => dispatch(fetchTrail(trailId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Trail);