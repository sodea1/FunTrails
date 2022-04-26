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
                        <div className="tile">Tile 1</div>
                        <div className="tile">Tile 2</div>
                        <div className="tile">Tile 3</div>
                        <div className="tile">Tile 4</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SplashContainer;