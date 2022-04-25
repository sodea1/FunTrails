import LoginForm from "./login_form";
import { connect } from "react-redux";
import { login, receiveErrors, clearSessionErrors } from "../../actions/session_actions";

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'Log in'
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: user => dispatch(login(user)),
    receiveErrors: errors => dispatch(receiveErrors(errors)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);