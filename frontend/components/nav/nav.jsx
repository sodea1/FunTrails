import React from 'react';
import { Link } from 'react-router-dom';
import ProfDropdown from './prof_dropdown';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
        this.createObserver = this.createObserver.bind(this);
        this.scrollEvent = this.scrollEvent.bind(this)
        this.myRef = React.createRef(0);
    }

    componentDidMount() {
        this.scrollEvent();
    }

    scrollEvent(adding = false) {
        let self = this;
        document.addEventListener("scroll", function setTransparency() {
            let nav = document.getElementsByClassName("navbar")[0];
            let height = nav.offsetHeight;
            if (window.pageYOffset <= height) {
                // adjust transparency
                console.log("adding on load")
                let transparency = (50 - window.pageYOffset) / 50;
                nav.style.backgroundColor = `rgba(255, 0, 0, ${transparency})`;
            } else {
                console.log("firing");
                if (!adding) {
                    console.log("removing")
                    nav.style.backroundColor = "transparent";
                    document.removeEventListener("scroll", setTransparency);

                    // if 
                    self.createObserver(self);
                }
            }
        });
    }

    createObserver(self) {
        let options = {
            threshold: ((540 - 56) / 560)
        }

        let nav;
        function callback(adding = true) {
            // nav = document.getElementsByClassName("navbar")[0];
            // nav.style.backgroundColor = "blue";
            self.scrollEvent(adding)
        }

        let observer = new IntersectionObserver(callback, options);
        let searchWrapper = document.getElementsByClassName("search-wrapper")[0];
        observer.observe(searchWrapper);
    };

    handleLogout(e) {
        e.preventDefault();
        this.props.logout();
    }

    render() {
        console.log('HELLO')
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