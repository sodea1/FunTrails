import { connect } from "react-redux";
import { fetchTrail } from "../../actions/trail_actions";
import { withRouter } from "react-router-dom";
import ReviewForm from "./review_form";

const mapStateToProps = (state, ownProps) => ({
    review: {
        user_id: state.session.currUserId,
        trail_id: parseInt(ownProps.location.pathname.substring(8)),
        rating: 0,
        description: '',
        date_hiked: new Date,
        activity: 'Hiking'
    },
    trail: state.entities.trails[ownProps.location.pathname.substring(8)],
    conditions: [],
    formType: 'create',
    user: state.session.currUserId
})

const mapDispatchToProps = dispatch => ({
    fetchTrail: (trailId) => dispatch(fetchTrail(trailId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewForm));