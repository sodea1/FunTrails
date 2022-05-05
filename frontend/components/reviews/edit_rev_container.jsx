import { connect } from "react-redux";
import { fetchTrail } from "../../actions/trail_actions";
import { withRouter } from "react-router-dom";
import ReviewForm from "./review_form";

const mapStateToProps = (state, ownProps) => ({
    review: ownProps.review,
    trail: state.entities.trails[ownProps.trail_id],
    conditions: ownProps.review.conditions,
    formType: 'edit'
})

const mapDispatchToProps = dispatch => ({
    fetchTrail: (trailId) => dispatch(fetchTrail(trailId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewForm));