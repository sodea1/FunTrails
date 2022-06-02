import React from 'react';

const PageHeader = (trail) => {

    // will need conditional (if trail or park return this or that)
    return (
        <ul className='head-loc'>
            <span>{trail.country}</span>
            <span>›</span>
            <span>{trail.state}</span>
            <span>›</span>
            <span>{(trail.park_id) ? trail.park_id : null}</span>
            <span>›</span>
            <span className='overflow'>{trail.t_name}</span>
        </ul>
    )
}

export default PageHeader;