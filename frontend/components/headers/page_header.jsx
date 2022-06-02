import React from 'react';

const PageHeader = (entity) => {
    const parkName = entity.park_id;
    const name = entity.t_name ? entity.t_name : entity.p_name;
    debugger
    // will need conditional (if trail or park return this or that)
    return (
        <ul className='head-loc'>
            <span>{entity.country}</span>
            <span>›</span>
            <span>{entity.state}</span>
            <span>›</span>
            {entity.t_name && <span>{(entity.park_id) ? entity.park_id : null}</span>}
            <span>›</span>
            <span className='overflow'>{name}</span>
        </ul>
    )
}

export default PageHeader;