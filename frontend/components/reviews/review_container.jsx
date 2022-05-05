import { connect } from "react-redux";
import { createReview, clearReviews, deleteReview, fetchReviewConditions } from "../../actions/review_actions";
import Review from "./review";

const mapStateToProps = (state, ownProps) => ({
    trails: state.entities.trails,
    currUserId: state.session.currUserId
    // trailId: ownProps.trailId
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    createReview: (review) => dispatch(createReview(review)),
    clearReviews: () => dispatch(clearReviews()),
    deleteReview: (reviewId) => dispatch(deleteReview(reviewId))
    // fetchTrailReviews: (trailId) => dispatch(fetchTrailReviews(trailId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Review);