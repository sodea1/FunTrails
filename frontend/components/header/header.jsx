import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const head = this.props.currUser ? (
            <div>
                <p>Welcome, {this.props.currUser.first_name}</p>
                <button onClick={this.props.logout}>Logout</button>
            </div> 
        )
        : (
            <div>
                <button><Link to='/signup'>Sign Up</Link></button>
                <Link to='/login'>Login</Link>
            </div>
        )

        return head;
    }
}

export default Header;