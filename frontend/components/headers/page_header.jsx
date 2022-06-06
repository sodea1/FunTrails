import React from 'react';
import { Link } from 'react-router-dom';

const PageHeader = (entity) => {
    const parkName = entity.parkName;
    const klass = entity.name ? "-trail" : "-park";
    const linkClass = (typeof parkName === "undefined") ? "header-link-trail" : "header-link";

    return (
         <header className='trail-head'>
            <div className='header-wrapper'>
                
                <ul className='head-loc'>
                    <span>{entity.country}</span>
                    <span>›</span>
                    <span>{entity.state}</span>
                    <span>›</span>
                    <Link className={linkClass} to={`/parks/${typeof parkName === "undefined" ? entity.id : entity.park_id}`}>{(parkName) ? parkName : entity.name}</Link> 
                    {typeof parkName === "undefined" ? <span></span> : <span>›</span>}
                    {typeof parkName === "undefined" ? <span></span> : <span className='overflow'>{entity.name}</span>}
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