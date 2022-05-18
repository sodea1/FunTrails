import { connect } from "react-redux";
import { fetchTrail } from "../../actions/trail_actions";
import { withRouter } from "react-router-dom";
import ReviewForm from "./review_form";
import { closeModal } from '../../actions/modal_actions';
import { updateReview } from "../../actions/review_actions";
import { updateReviewCondition } from "../../actions/review_condition_actions";

const mapStateToProps = (state, ownProps) => {
    return (
        {
            review: ownProps.review,
            trail: state.entities.trails[ownProps.location.pathname.substring(8)],
            conditions: ownProps.review.conditions,
            formType: 'edit'
        }
    )
}

const mapDispatchToProps = dispatch => ({
    fetchTrail: (trailId) => dispatch(fetchTrail(trailId)),
    closeModal: () => dispatch(closeModal()),
    updateReview: (review) => dispatch(updateReview(review)),
    updateReviewCondition: (reviewConditions, reviewId) => dispatch(updateReviewCondition(reviewConditions, reviewId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewForm));