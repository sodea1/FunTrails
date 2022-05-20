import { connect } from "react-redux";
import { fetchTrailReviews } from "../../actions/review_actions";
import { fetchTrails } from "../../actions/trail_actions";
import Trail from "./trail";
import { openModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => ({
    trails: Object.values(state.entities.trails),
    trail: state.entities.trails[ownProps.match.params.id],
    reviews: Object.values(state.entities.reviews),
    currUserId: state.session.currUserId,
    trailId: ownProps.match.params.id
});

const mapDispatchToProps = dispatch => ({
    fetchTrails: () => dispatch(fetchTrails()),
    // fetchTrail: (trailId) => dispatch(fetchTrail(trailId)),
    fetchTrailReviews: (trailId) => dispatch(fetchTrailReviews(trailId)),
    openModal: formType => dispatch(openModal(formType))
});

export default connect(mapStateToProps, mapDispatchToProps)(Trail);