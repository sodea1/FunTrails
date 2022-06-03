import React from 'react';
import { Link } from "react-router-dom";
import { allReviewsAvg } from '../stars/stars';

function LongTile(trail) {
    return (
        <Link to={`/trails/${trail.id}`} key={trail.id} className="long-tile-link">
            <div className='longtile-div'>
                <div>
                    <img src={trail.photoUrl} className="longtile-photo" />
                </div>
    
                <div className='park-tile-details'>
                    <span>{'#' + trail.id + ' - ' + trail.t_name}</span>
                    <span>{trail.parkName}</span>
                    <div className='longtile-reviews'>
                        <span className='descriptor-blue'>{trail.difficulty_level}</span>
                        <span>{allReviewsAvg(trail.rating)}</span>
                        <span>{`(${trail.reviews})`}</span>
                    </div>
                    <div className='longtile-length-time'>
                        <span>Length: {trail.length}</span>
                        <span>•</span>
                        <span>{trail.estimated_time}</span>
                    </div>
                    
                </div>
            </div>
        </Link>
    )
}

export default LongTile;