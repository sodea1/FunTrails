import React from 'react';

class Footer extends React.Component {

    render() {
        return (
            <div className='footer'>
                <div className='footer-title'>
                    <img src={window.logo} width="82px" height="82px" className='logo' />
                    <p>Fun Trails</p>
                </div>

                <div className=''>
                    <div className='footer-explore'>
                        <ul>Explore
                            <li>Parks</li>
                            <li>Trails</li>
                        </ul>
                    </div>
                    <div className='footer-maps'>
                        <ul>Maps
                            <li></li>
                        </ul>
                    </div>
                    <div className='footer-company'>
                        <ul>Company
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div className='footer-community'>
                        <ul>Community
                            <li></li>
                        </ul>
                    </div>
                </div>

            </div>
        )
    }
}

export default Footer;