import React from 'react';

class Footer extends React.Component {

    render() {
        return (
            <div className='footer'>
                <div className='footer-title'>
                    <img src={window.logo} width="82px" height="82px" className='logo' />
                    <p>Fun Trails</p>
                </div>

                <div className='footer-sections'>
                    <div className='footer-explore'>
                        <ul>
                            <li>Explore</li>
                            <li></li>
                            <li>Trails</li>
                        </ul>
                    </div>
                    <div className='footer-maps'>
                        <ul>
                            {/* <li>Maps</li>
                            <li>My Maps</li>
                            <li>Create Map</li> */}
                        </ul>
                    </div>
                    <div className='footer-company'>
                        <ul>
                            {/* <li>Company</li>
                            <li>About</li>
                            <li>Jobs</li>
                            <li>Press</li> */}
                        </ul>
                    </div>
                    <div className='footer-community'>
                        <ul className='flex-center'>
                            <li>I hope you enjoyed checking out some fun trails</li>
                            <img className='prof-pic' src={window.git_profile_photo} height="140px" width="140px"/>
                            {/* <li>Community</li>
                            <li>Support</li>
                            <li>Members</li>
                            <li>Give Pro</li>
                            <li>AllTrails Gear</li> */}
                        </ul>
                    </div>
                </div>

                <div className='footer-icons'>
                    <div>
                        <div className='foot-left'>
                            <p>An app for the outdoors</p>
                            <img src={window.app_foot} width="105px" height="35px" />
                            <img src={window.google_play} width="118px" height="34px" />
                        </div>
                    </div>

                    <div>
                        {/* <p>Members for the planet</p> */}
                        <div className='foot-mid'>
                            {/* <img src={window.planet} width="86px" height="36px" />
                            <img src={window.leave_no_trace} width="76px" height="36px" />
                            <img src={window.one_tree} width="155px" height="36px" /> */}
                        </div>
                    </div>
                    <div>
                        <p>Connect with Sean O'Dea</p>
                        <div className='foot-right'>
                            <a href='https://www.linkedin.com/in/seanodea1/'><img src={window.linkedin} width="42px" height="38px" /></a>
                            <a href='https://github.com/sodea1'><img src={window.github} width="42px" height="42px" /></a>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Footer;