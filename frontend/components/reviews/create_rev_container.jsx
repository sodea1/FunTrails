import { connect } from "react-redux";
import { fetchTrail } from "../../actions/trail_actions";
import { withRouter } from "react-router-dom";
import ReviewForm from "./review_form";

const mapStateToProps = (state, ownProps) => ({
    review: {
        user_id: null,
        trail_id: null,
        rating: 0,
        description: '',
        date_hiked: new Date,
        activity: 'Hiking'
    },
    trail: state.entities.trails[ownProps.match.params.id],
    conditions: [],
    formType: 'Create Review'
})

const mapDispatchToProps = dispatch => ({
    fetchTrail: (trailId) => dispatch(fetchTrail(trailId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewForm));