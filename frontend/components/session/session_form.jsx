import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
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
        this.props.processForm(user);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }    

    render() {
        const submissionForm = (this.props.formType === 'Sign up') ? (
            <div>
                <h3>Create your free account</h3>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        onChange={this.update('first_name')}
                        value={this.state.email}
                        placeholder="First name"
                    />
                    <input
                        type="text"
                        onChange={this.update('last_name')}
                        value={this.state.email}
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
                    <button type="submit">{this.props.formType}</button>
                    <p>Already have an account?<Link to="/login">Log In</Link></p>
                </form>
            </div>
        ) : (
            <div>
                <h3>Weeeee your free account</h3>
                <form onSubmit={this.handleSubmit}>

                    <input
                        type="text"
                        onChange={this.update('email')}
                        value={this.state.email}
                    />
                    <input
                        type="text"
                        onChange={this.update('email')}
                        value={this.state.email}
                    />
                    <input
                        type="password"
                        onChange={this.update('password')}
                        value={this.state.password}
                    />
                    <button type="submit">{this.props.formType}</button>
                    <p>Already have an account?<Link to="/login">Log In</Link></p>
                </form>
            </div>
        )
        return submissionForm;
    }
}


export default SessionForm;