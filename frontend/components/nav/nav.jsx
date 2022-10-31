import React from 'react';
import { Link } from 'react-router-dom';
import ProfDropdown from './prof_dropdown';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        // this.state = this.props.currUser;
        this.handleLogout = this.handleLogout.bind(this);
    }

    componentDidMount() {
        document.addEventListener("scroll", (e) => {
            let nav = document.getElementsByClassName("navbar")[0];
            if (window.pageYOffset < 50) {
                let transparency = (50 - window.pageYOffset) / 50;
                console.log(transparency)
                nav.style.backgroundColor = `rgba(255, 0, 0, ${transparency})`;
            } else {
                // nav.style.backroundColor = "transparent";
            }
        })
    }

    handleLogout(e) {
        e.preventDefault();
        this.props.logout();
    }

    render() {
        const leftNavBar = 
            <div className='left-nav bold'>
                <Link to='/' className='explore-link'>Explore</Link>
                <div>
                    <span className='nav-dropdown'></span>
                    {/* <img src={window.dropdown} width="12px" height="12px" className='nav-dropdown' /> */}
                </div>
                <div>
                    <span className='nav-dropdown'></span>
                    {/* <img src={window.dropdown} width="12px" height="12px" className='nav-dropdown' /> */}
                </div>
            </div>

        const navBar = this.props.currUser ? (
            <div className='fixed'>
                <div className='navbar'>
                    {leftNavBar}
                    <div className='mid-nav'>
                        <Link to="/" className='nav-center-links'>
                            <img src={window.logo} width="82px" height="82px" className='logo'/>
                            <span className="nav-title">FunTrails</span>
                        </Link>
                    </div>
                    <div className='right-nav'>
                        {/* ADD LOGOUT ICON */}
                        <ProfDropdown handleLogout={this.handleLogout} />                    
                    </div>
                </div>
            </div>
        )
        : (
            <div className='fixed'>
                <div className='navbar'>
                    {leftNavBar}
                    <div className='mid-nav'>
                            <Link to="/" className='nav-center-links'>
                                <img src={window.logo} width="82px" height="82px" className='logo' />
                                <span className="nav-title">FunTrails</span>
                            </Link>
                    </div>
                    <div className='right-nav'>
                        <Link to='/signup' className='signup-button' onClick={this.props.clearSessionErrors}>Sign Up</Link>
                        <Link to='/login' className='login-button' onClick={this.props.clearSessionErrors}>Login</Link>
                    </div>
                </div>
            </div>
        )

        return navBar;
    }
}

export default Nav;