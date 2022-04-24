import React from "react";

class SplashContainer extends React.Component {
    render() {
        return (
            <div className="background-image">
                <h1 className="welcome">Find your next trail</h1>
                <input 
                    type="text" 
                    className="search-bar" 
                    placeholder="Search by park or trail name"
                />
            </div>
        )
    }
}

export default SplashContainer;