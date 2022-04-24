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
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        // processForm = dispatch(login(user)) => returns {currUserId: action.currUser.id}
        debugger
        this.props.processForm(user).then(() =>
            // redirect to '/' or dispatch for errors
            this.props.history.push("/"),
            (errors) => this.props.receiveErrors(errors.responseJSON));
    }

    update(field) {
        return (e) => this.setState({ [field]: e.target.value });
    }   

    render() {
        const {errors} = this.props;
        return (
            <div className='session-box'>
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
                    <p className='bottom-link'>Don't have an account?<Link to="/signup" className='signup-link'> Sign up for free</Link></p>
                </form>
            </div>
        )
    }
}

export default LoginForm;