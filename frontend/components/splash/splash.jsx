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
                            <img src={window.green_arrow} width="40px" height="40px"/>
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

                <div>
                    <div className="photo-cards">
                        {/*  two photospositoin relative */}
                        <div className="container">
                            {/* position aboslution */}
                            <div>photo</div>
                            <div>Descipriotn</div> 
                        </div>
                    
                        <div className="container">
                            {/* position aboslution */}
                            <div>photo</div>
                            <div>Descipriotn</div>
                        </div>

                        <div className="container">
                            {/* position aboslution */}
                            <div>photo</div>
                            <div>Descipriotn</div>
                        </div>
                    </div>

                    <div>
                        {/* flex-column */}
                        <div>Built to go wild</div>
                        <span>Descipriotn</span>
                        <button>Signup</button>
                    </div>                    
                </div>
            </div>
        )
    }
}

export default SplashContainer;