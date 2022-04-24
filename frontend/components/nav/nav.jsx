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
                <div className='mid-nav'>
                    <img src='../../../assets/images/mountain-64.jpg'/>
                    <h1>FunTrails</h1>
                </div>
                <div className='right-nav'>
                    {/* replace below with icon */}
                    {/* <button onClick={this.props.logout} className=''>Logout</button> */}
                    <Link to='/' className='logout-button'>Logout</Link>
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