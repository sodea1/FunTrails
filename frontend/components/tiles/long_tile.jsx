import React from 'react';
import { Link } from "react-router-dom";

function LongTile(trail) {
    return (
        <Link to={`/trails/${trail.id}`} key={trail.id} className="long-tile-link">
            <div className='longtile-div'>
                <div>
                    <img src={trail.photoUrl} className="longtile-photo" />
                </div>
    
                <div>
                    <span>{'#' + trail.id + ' - ' + trail.t_name}</span>
                    <span>{trail.parkName}</span>
                    <div>
                        <span>{trail.difficulty_level}</span>
                        <span>{trail.rating} stars</span>
                        <span>{`(${trail.reviews})`}</span>
                    </div>
                    <div>
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