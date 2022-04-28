import React from "react";
import { Link } from "react-router-dom";

class TrailFavorites extends React.Component {
    render() {
        return (
            <div>
                {/* <h1>{this.props.trails['1'].length}</h1> */}
                <div className="splash-favorites bold">
                    Local Favorites Near San Francisco
                </div>

                <div className="tiles-container">
                    {this.props.trails.map((trail) => (

                        <Link to={`/trails/${trail.id}`} className="tile">
                            <img className="tile-image" src={window.hiking_card}></img>

                            <div className="tile-content">
                                <span className="tile-title bold overflow">{trail.t_name}</span>
                                <span className="detail">Park Name</span>
                                <div className="flex">
                                    <span className="descriptor">{trail.difficulty_level}</span>

                                    <div>
                                        <img className="review-stars" key='1' src={window.star} />
                                        <img className="review-stars" key='2' src={window.star} />
                                        <img className="review-stars" key='3' src={window.star} />
                                        <img className="review-stars" key='4' src={window.star} />
                                        <img className="review-stars" key='5' src={window.star} />
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


