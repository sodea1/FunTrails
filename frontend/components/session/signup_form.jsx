import { Link } from 'react-router-dom';
import React from 'react';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            password: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(() =>
            // redirect to '/' or dispatch for errors
            this.props.history.push("/"),
            (errors) => this.props.receiveErrors(errors.responseJSON));
    }

    update(field) {
        return (e) => this.setState({ [field]: e.target.value });
    }

    render() {
        const { errors } = this.props;
        const errorsPresent = (errors.length > 0) ? true: false;
        const fNameErr = (this.state.first_name === '') ? <span className='err'>{'Enter your first name'}</span> : '';
        const lNameErr = (this.state.last_name === '') ? <span className='err'>{'Enter your last name'}</span> : '';
        const emailErr = (this.state.email === '') ? <span className='err'>{'Email is not valid'}</span> : '';
        const passwordErr = (this.state.password.length < 6) ? <span className='err'>{'Password must be 6 characters long'}</span> : '';

        return (
            <div className='background-image-session'>
                <div className='session-box-signup'>
                    <h2 className='session-title'>Create your free account</h2>
                    <form className='session-form'>
                        <input
                            className={errorsPresent && fNameErr ? 'err-input' : ''}
                            type="text"
                            onChange={this.update('first_name')}
                            value={this.state.first_name}
                            placeholder="First name"
                        />
                        {errorsPresent ? fNameErr : ''}
                        <input
                            className={errorsPresent && lNameErr ? 'err-input' : ''}
                            type="text"
                            onChange={this.update('last_name')}
                            value={this.state.last_name}
                            placeholder="Last name"
                        />
                        {errorsPresent ? lNameErr : ''}
                        <input
                            className={errorsPresent && emailErr ? 'err-input' : ''}
                            type="text"
                            onChange={this.update('email')}
                            value={this.state.email}
                            placeholder="Email address"
                        />
                        {errorsPresent ? emailErr : ''}
                        <input
                            className={errorsPresent && passwordErr ? 'err-input' : ''}
                            type="password"
                            onChange={this.update('password')}
                            value={this.state.password}
                            placeholder="Password"
                        />
                        {errorsPresent ? passwordErr : ''}

                        <button onClick={this.handleSubmit} className='session-button'>{this.props.formType}</button>
                        <p className='bottom-link'>Already have an account?
                            <Link to="/login" className='login-link'> Log in</Link>
                        </p>

                        {/* {errors.map((error, i) => <p key={i}>{error}</p>)} */}
                    </form>
                </div>
            </div>
        )
    }
}

export default SignupForm;