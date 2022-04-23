import { connect } from "react-redux";
import Header from "./header";

const mapStateToProps = state => ({
    currUser: state.entities.users[state.session.currUserId]
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);