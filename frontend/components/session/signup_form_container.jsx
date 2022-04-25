import SignupForm from "./signup_form";
import { connect } from "react-redux";
import { signup, receiveErrors, clearSessionErrors } from "../../actions/session_actions";

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'Sign up'
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: user => dispatch(signup(user)),
    // returns errors
    receiveErrors: errors => dispatch(receiveErrors(errors)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);