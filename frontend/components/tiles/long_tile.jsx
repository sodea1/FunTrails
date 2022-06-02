import React from 'react';
import { Link } from "react-router-dom";

const LongTile = (trails) => {

    // PICK UP HERE
    debugger
    return (
        <Link to={`/trails/${trail.id}`} key={trail.id}>
            <div>
                {'#' + trail.id + ' - ' + trail.t_name}
            </div>

            <div>

            </div>
        </Link>
    )
}

export default LongTile;