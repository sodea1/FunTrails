import { connect } from "react-redux";
import { fetchTrailReviews } from "../../actions/review_actions";
import { fetchTrails, fetchTrail } from "../../actions/trail_actions";
import Trail from "./trail";

const mapStateToProps = (state, ownProps) => ({
    trails: Object.values(state.entities.trails),
    trail: state.entities.trails[ownProps.match.params.id],
    reviews: state.entities.reviews
});

const mapDispatchToProps = dispatch => ({
    fetchTrails: () => dispatch(fetchTrails()),
    fetchTrail: (trailId) => dispatch(fetchTrail(trailId)),
    fetchTrailReviews: (trailId) => dispatch(fetchTrailReviews(trailId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Trail);