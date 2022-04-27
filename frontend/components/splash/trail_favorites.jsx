import React from "react";
import { Link } from "react-router-dom";

class TrailFavorites extends React.Component {
    render() {
        return (
            <div>
                {/* <h1>{this.props.trails['1'].length}</h1> */}
                <div className="tiles-title bold">
                    Local Favorites Near San Francisco
                </div>

                <div className="splash-tiles">
                    {this.props.trails.map((trail) => (

                        <Link to={`/trails/${trail.id}`} className="tile">
                            <div className="tile-image">Image</div>

                            <div className="tile-content">
                                <span className="overflow">{trail.t_name}</span>
                                <span className="detail">Park Name</span>
                                <div className="flex">
                                    <span className="descriptor">{trail.difficulty_level}</span>

                                    <div>
                                        <img className="review-stars" src={window.star} />
                                        <img className="review-stars" src={window.star} />
                                        <img className="review-stars" src={window.star} />
                                        <img className="review-stars" src={window.star} />
                                        <img className="review-stars" src={window.star} />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        );
    }
}

export default TrailFavorites;


