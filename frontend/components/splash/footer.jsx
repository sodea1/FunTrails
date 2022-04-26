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
                            <li>Parks</li>
                            <li>Trails</li>
                        </ul>
                    </div>
                    <div className='footer-maps'>
                        <ul>
                            <li>Maps</li>
                            <li>My Maps</li>
                            <li>Create Map</li>
                        </ul>
                    </div>
                    <div className='footer-company'>
                        <ul>
                            <li>Company</li>
                            <li>About</li>
                            <li>Jobs</li>
                            <li>Press</li>
                        </ul>
                    </div>
                    <div className='footer-community'>
                        <ul>
                            <li>Community</li>
                            <li>Support</li>
                            <li>Members</li>
                            <li>Give Pro</li>
                            <li>AllTrails Gear</li>
                        </ul>
                    </div>
                </div>

            </div>
        )
    }
}

export default Footer;