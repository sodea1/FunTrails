import React from 'react';
import { allReviewsAvg } from '../stars/stars';
import { Link } from "react-router-dom";

class Tile extends React.Component {
    // componentDidMount
    render() {
        const { trail } = this.props;

        return (
            <Link to={`/trails/${trail.id}`} className="tile" key={trail.id}>
                <img className="tile-image" src={trail.photoUrl}></img>

                <div className="tile-content">
                    <span className="tile-title bold overflow">{trail.t_name}</span>
                    <span className="detail">Park Name</span>
                    <div className="tile-mid-detail">
                        <span className="descriptor">{trail.difficulty_level}</span>
                        <div className="stars-wrapper">
                            {allReviewsAvg(trail.rating)}
                            <div className='rev-total detail'>{`(${trail.reviews})`}</div>
                        </div>
                    </div>
                    <div className='detail'>
                        <span className='tile-length'>Length: {trail.length}</span>
                        <span>{trail.estimated_time}</span>
                    </div>
                </div>
            </Link>
        )
    }
}

export default Tile;