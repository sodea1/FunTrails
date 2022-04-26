import React from "react";
import { Link } from 'react-router-dom';

class SplashContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        // const { currUserId } = this.props.session.currUserId;
        return (
            <div>
                <div className="background-image">
                    <h1 className="welcome">Find your next trail</h1>
                    <form className="splash-search">
                        <img src={window.search} width="16px" height="16px" className='search-icon' />
                        <input 
                            type="text" 
                            className="search-bar" 
                            placeholder="Search by park or trail name"
                        />
                        <div className="green-arrow">
                            <img src={window.green_arrow} width="40px" height="40px" className="green-arrow"/>
                        </div>
                    </form>
                    <div className="splash-explore">
                        <Link className="splash-explore-link">Explore nearby trails</Link>
                    </div>
                </div>

                <div className="splash-trails">
                    <div className="tiles-title">
                        Local Favorites Near San Francisco
                    </div>

                    <div className="splash-tiles">
                        <div className="tile"></div>
                        <div className="tile"></div>
                        <div className="tile"></div>
                        <div className="tile"></div>
                    </div>
                </div>

                <div className="third-container">
                    <div className="photo-cards">
                        {/*  two photospositoin relative */}
                        <div className="photo-container">
                            {/* position aboslution */}
                            <div className="photo-card">
                                <span>Hiking</span>
                            </div>
                            <div className="photo-card">
                                <span>Mountain Biking</span>
                            </div>
                        </div>
                    
                        <div className="photo-container">
                            {/* position aboslution */}
                            <div className="photo-card">
                                <span>Trail Running</span>
                            </div>
                            <div className="photo-card">
                                <span>Dogs</span>
                            </div>
                        </div>

                        <div className="photo-container">
                            {/* position aboslution */}
                            <div className="photo-card">
                                <span>Wheelchair friendly</span>
                            </div>
                            <div className="photo-card">
                                <span>Road Biking</span>
                            </div>
                        </div>
                    </div>

                    <div className="go-wild">
                        {/* flex-column */}
                        <div>Built (for everyone)</div>
                        <div>to go wild</div>
                        <span>Whether you want a casual stroll or a trek to the summit, we've got you covered.</span>
                        <Link to='/signup'>Sign up</Link>
                    </div>                    
                </div>
            </div>
        )
    }
}

export default SplashContainer;