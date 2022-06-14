import { connect } from "react-redux";
import { fetchTrailReviews } from "../../actions/review_actions";
import { fetchTrails } from "../../actions/trail_actions";
import { fetchParks } from "../../actions/park_actions";
import Trail from "./trail";
import { openModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => ({
    trails: Object.values(state.entities.trails),
    trail: state.entities.trails[ownProps.match.params.id],
    entity: state.entities.trails[ownProps.match.params.id],
    reviews: Object.values(state.entities.reviews),
    currUserId: state.session.currUserId,
    trailId: ownProps.match.params.id,
    parks: state.entities.parks,
    history: ownProps.history
});

const mapDispatchToProps = dispatch => ({
    fetchTrails: () => dispatch(fetchTrails()),
    fetchParks: () => dispatch(fetchParks()),
    fetchTrailReviews: (trailId) => dispatch(fetchTrailReviews(trailId)),
    openModal: formType => dispatch(openModal(formType))
});

export default connect(mapStateToProps, mapDispatchToProps)(Trail);