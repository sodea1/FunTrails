import { connect } from "react-redux";
import { createReview, clearReviews, fetchTrailReviews, fetchReviewConditions } from "../../actions/review_actions";
import Review from "./review";

const mapStateToProps = (state, ownProps) => ({
    trails: state.entities.trails,
    trailId: ownProps.trailId
    // reviews: state.entities.reviews
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    createReview: (review) => dispatch(createReview(review)),
    clearReviews: () => dispatch(clearReviews()),
    fetchReviewConditions: (reviewId) => dispatch(fetchReviewConditions(reviewId))
    // fetchTrailReviews: (trailId) => dispatch(fetchTrailReviews(trailId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Review);