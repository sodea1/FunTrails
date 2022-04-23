import { connect } from "react-redux";
import Nav from "./nav";

const mapStateToProps = state => ({
    currUser: state.entities.users[state.session.currUserId]
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);