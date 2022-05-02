import { connect } from "react-redux";
import { createReview } from "../../actions/review_actions";
import Review from "./review";

const mapStateToProps = state => ({
    trails: state.entities.trails
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    createReview: (review) => dispatch(createReview(review))
});

export default connect(mapStateToProps, mapDispatchToProps)(Review);