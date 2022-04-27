import React from "react";

class TrailFavorites extends React.Component {
    render() {
        return (
            <div>
                {/* <h1>{this.props.trails['1'].length}</h1> */}
                <div className="tiles-title">
                    Local Favorites Near San Francisco
                </div>

                <div className="splash-tiles">
                    {this.props.trails.map((trail) => (
                        <a>
                            <div className="tile">
                                <span >{trail.t_name}</span>
                                <span className="detail">Park Name</span>
                                <div className="flex">
                                    <span className="descriptor">{trail.descriptor}</span>
                                    <img className="review-stars" src={window.star} />
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

            </div>
        );
    }
}

export default TrailFavorites;