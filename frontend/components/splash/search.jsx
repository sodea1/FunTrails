import React from "react";
import { Link } from 'react-router-dom';

class SplashSearch extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
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
                        <img src={window.green_arrow} width="40px" height="40px" className="green-arrow" />
                    </div>
                </form>
                <div className="splash-explore">
                    <Link to='/' className="splash-explore-link">Explore nearby trails</Link>
                </div>
            </div>
        )
    }
}

export default SplashSearch;