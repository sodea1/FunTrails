import { connect } from "react-redux";
import Nav from "./nav";
import { fetchTrails } from "../../actions/trail_actions";
import { clearSessionErrors } from "../../actions/session_actions";

const mapStateToProps = state => {
    // CHANGE ID TO CURRUSERID
    return {
        currUser: state.session.currUserId
    }
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),

    // MUST FIGURE OUT HOW TO POPULATE STATE SO I HAVE ACCESS
    fetchTrails: () => dispatch(fetchTrails()),
    clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);