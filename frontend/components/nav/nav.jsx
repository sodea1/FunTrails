import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const navBar = this.props.currUser ? (
            <div className='navbar'>
                <div className='left-nav'></div>
                <h1 className='mid-nav'>FunTrails</h1>
                <div className='right-nav'>
                    <button onClick={this.props.logout}>Logout</button>
                </div>
            </div> 
        )
        : (
            <div className='navbar'>
                <div className='left-nav'></div>
                <h1 className='mid-nav'>FunTrails</h1>
                <div className='right-nav'>
                    <button><Link to='/signup'>Sign Up</Link></button>
                    <button><Link to='/login'>Login</Link></button>
                </div>
            </div>
        )

        return navBar;
    }
}

export default Nav;