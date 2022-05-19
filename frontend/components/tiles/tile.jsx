import React from 'react';
import { allReviewsAvg } from '../stars/stars';
import { Link } from "react-router-dom";

class Tile extends React.Component {
    // componentDidMount
    render() {
        const { trail } = this.props;
        
        let sum = 0;
        for (let i = 0; i < trail.reviews.length; i++) {
            sum += trail.reviews[i].rating
        }
        let avgRating = (sum / trail.reviews.length).toFixed(1);

        debugger
        return (
            <Link to={`/trails/${trail.id}`} className="tile" key={trail.id}>
                <img className="tile-image" src={window.dipsea}></img>

                <div className="tile-content">
                    <span className="tile-title bold overflow">{trail.t_name}</span>
                    <span className="detail">Park Name</span>
                    <div className="flex">
                        <span className="descriptor">{trail.difficulty_level}</span>

                        {allReviewsAvg(trail.reviews, avgRating)}
                    </div>
                </div>
            </Link>
        )
    }
}

export default Tile;