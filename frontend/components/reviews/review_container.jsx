import { connect } from "react-redux";
import { createReview, clearReviews } from "../../actions/review_actions";
import Review from "./review";

const mapStateToProps = (state, ownProps) => ({
    trails: state.entities.trails,
    trailId: ownProps.trailId
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    createReview: (review) => dispatch(createReview(review)),
    clearReviews: () => dispatch(clearReviews())
});

export default connect(mapStateToProps, mapDispatchToProps)(Review);