import React from 'react';
import { Link } from 'react-router-dom';

const PageHeader = (entity) => {
    const parkName = entity.parkName;
    const name = entity.t_name ? entity.t_name : null;
    const klass = entity.t_name ? "-trail" : "-park";
    const linkClass = (entity.t_name) ? "header-link" : "header-link-trail";

    return (
         <header className='trail-head'>
            <div className='header-wrapper'>
                
                <ul className='head-loc'>
                    <span>{entity.country}</span>
                    <span>›</span>
                    <span>{entity.state}</span>
                    <span>›</span>
                    <Link className={linkClass} to={`/parks/${(entity.t_name) ? entity.park_id : entity.id}`}>{(parkName) ? parkName : entity.p_name}</Link> 
                    {name && <span>›</span>}
                    {name && <span className='overflow'>{name}</span>}
                </ul>

                <form className={"show-search" + klass}>
                    
                    <input
                        type="text"
                        className={'show-input' + klass}
                        placeholder="Search by park or trail name"
                    />
                    <div className='green-search'>  
                        <img src={window.search} width="16px" height="16px" />
                    </div>
                </form>
            </div>
        </header>
    )
}

export default PageHeader;