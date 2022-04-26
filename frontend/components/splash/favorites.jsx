import React from "react";

class Favorites extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
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
        )
    }
}

export default Favorites;