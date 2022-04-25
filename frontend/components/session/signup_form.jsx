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
        return (
            <div className='background-image-session'>
                <div className='session-box-signup'>
                    <h2 className='session-title'>Create your free account</h2>
                    <form className='session-form'>
                        <input
                            type="text"
                            onChange={this.update('first_name')}
                            value={this.state.first_name}
                            placeholder="First name"
                        />
                        <input
                            type="text"
                            onChange={this.update('last_name')}
                            value={this.state.last_name}
                            placeholder="Last name"
                        />
                        <input
                            type="text"
                            onChange={this.update('email')}
                            value={this.state.email}
                            placeholder="Email address"
                        />
                        <input
                            type="password"
                            onChange={this.update('password')}
                            value={this.state.password}
                            placeholder="Password"
                        />

                        <button onClick={this.handleSubmit} className='session-button'>{this.props.formType}</button>
                        <p className='bottom-link'>Already have an account?
                            <Link to="/login" className='login-link'> Log in</Link>
                        </p>

                        {errors.map((error, i) => <p key={i}>{error}</p>)}
                    </form>
                </div>
            </div>
        )
    }
}

export default SignupForm;