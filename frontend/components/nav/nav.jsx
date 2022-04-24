import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        // this.state = this.props.currUser;
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(e) {
        e.preventDefault();
        this.props.logout();
    }

    render() {
        const navBar = this.props.currUser ? (
            <div className='navbar'>
                <div className='left-nav'></div>
                <div className='mid-nav'>
                    <img src='../../../assets/images/mountain-64.jpg'/>
                    <Link to='/' className="nav-title">FunTrails</Link>
                </div>
                <div className='right-nav'>
                    {/* replace below with icon */}
                    <Link to='/' className='logout-button' onClick={this.handleLogout}>Logout</Link>
                </div>
            </div>
        )
        : (
            <div className='navbar'>
                <div className='left-nav'></div>
                <div className='mid-nav'>
                    <img src="../../../assets/images/logo.png" /> 
                    <Link to='/' className="nav-title">FunTrails</Link>
                </div>
                <div className='right-nav'>
                    <Link to='/signup' className='signup-button'>Sign Up</Link>
                    <Link to='/login' className='login-button'>Login</Link>
                </div>
            </div>
        )

        return navBar;
    }
}

export default Nav;