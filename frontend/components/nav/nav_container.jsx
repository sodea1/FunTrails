import { connect } from "react-redux";
import Nav from "./nav";

const mapStateToProps = state => {
    // CHANGE ID TO CURRUSERID
    return {
        currUser: state.session.currUserId
    }
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);