import React from "react";

class SplashContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        // const { currUserId } = this.props.session.currUserId;
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