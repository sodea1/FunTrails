import SessionForm from "./session_form";
import { connect } from "react-redux";
import { signup, receiveErrors } from "../../actions/session_actions";

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'Sign up'
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: user => dispatch(signup(user)),
    receiveErrors: errors => dispatch(receiveErrors(errors))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);