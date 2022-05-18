import { connect } from "react-redux";
import { fetchTrail } from "../../actions/trail_actions";
import { withRouter } from "react-router-dom";
import ReviewForm from "./review_form";
import { closeModal } from '../../actions/modal_actions';
import { createReview } from '../../actions/review_actions';
import { postReviewCondition } from "../../actions/review_condition_actions";

const mapStateToProps = (state, ownProps) => ({
    review: {
        user_id: state.session.currUserId,
        trail_id: parseInt(ownProps.location.pathname.substring(8)),
        rating: 0,
        description: '',
        date_hiked: '',
        activity: 'Hiking'
    },
    trail: state.entities.trails[ownProps.location.pathname.substring(8)],
    trailId: parseInt(ownProps.location.pathname.substring(8)),
    formType: state.ui.modal.formType,
    user: state.session.currUserId,
    conditions: [] // going to have to fetch conditions by review_id for EDIT
})

const mapDispatchToProps = dispatch => ({
    fetchTrail: (trailId) => dispatch(fetchTrail(trailId)),
    closeModal: () => dispatch(closeModal()),
    createReview: (review) => dispatch(createReview(review)),
    postReviewCondition: (reviewConditions) => dispatch(postReviewCondition(reviewConditions))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewForm));