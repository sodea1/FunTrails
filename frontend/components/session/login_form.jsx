import React from "react";
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        // processForm = dispatch(login(user)) => returns {currUserId: action.currUser.id}
        this.props.processForm(user).then(() =>
            // redirect to '/' or dispatch for errors

            this.props.history.push("/"),
            (errors) => this.props.receiveErrors(errors.responseJSON));
    }

    handleDemo() {
        this.props.processForm({
            email: 'jay@wright.com',
            password: 'gotcats'
        });
     }

    update(field) {
        return (e) => this.setState({ [field]: e.target.value });
    }   

    render() {
        const {errors} = this.props;
        return (
            <div className='background-image-session'>
                <div className='session-box-login'>
                    <h2 className='session-title'>Log in and let's get going</h2>
                    <form className='session-form'>
                        <input
                            type="text"
                            onChange={this.update('email')}
                            value={this.state.email}
                            placeholder='Email address'
                        />
                        {errors.map((err) => <p>{err}</p>)}
                        <input
                            type="password"
                            onChange={this.update('password')}
                            value={this.state.password}
                            placeholder='Password'
                        />
                        <button onClick={this.handleSubmit} className='session-button'>{this.props.formType}</button>
                        <div className='bottom-link'>
                            <p>
                                Don't have an account?
                                <Link to="/signup" className='signup-link'> Sign up for free</Link>
                            </p>

                            <p>or</p>

                            <p>
                                Log in with
                                <Link to="/login" className="login-link" onClick={this.handleDemo}> Demo User</Link>
                            </p>
                        </div>

                    </form>
                </div>
            </div>
        )
    }
}

export default LoginForm;