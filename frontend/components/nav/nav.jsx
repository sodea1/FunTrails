import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ProfDropdown from './prof_dropdown';
import { clearSessionErrors } from '../../actions/session_actions';
import { logout } from '../../actions/session_actions';

const Nav = () => {
    const currUser = useSelector((state) => state.session.currUserId)
    const dispatch = useDispatch();

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
    }

    const leftNavBar =
            <div className='left-nav bold'>
                <Link to='/' className='explore-link'>Explore</Link>
                <div>
                    <span className='nav-dropdown'></span>
                </div>
                <div>
                    <span className='nav-dropdown'></span>
                </div>
            </div>

    const midNav = <div className='mid-nav'>
                        <Link to="/" className='nav-center-links'>
                            <img src={window.logo} width="82px" height="82px" className='logo' />
                            <span className="nav-title">FunTrails</span>
                        </Link>
                    </div>

    const navBar = currUser ? (
        <div className='fixed'>
            <div className='navbar'>
                {leftNavBar}
                {midNav}
                <div className='right-nav'>
                    <ProfDropdown handleLogout={handleLogout} />
                </div>
            </div>
        </div>
    )
        : (
            <div className='fixed'>
                <div className='navbar'>
                    {leftNavBar}
                    {midNav}
                    <div className='right-nav'>
                        <Link to='/signup' className='signup-button' onClick={() => dispatch(clearSessionErrors())}>Sign Up</Link>
                        <Link to='/login' className='login-button' onClick={() => dispatch(clearSessionErrors())}>Login</Link>
                    </div>
                </div>
            </div>
        )

    return (
        navBar
    );
};

export default Nav;