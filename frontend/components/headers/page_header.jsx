import React from 'react';

const PageHeader = (entity) => {
    const name = entity.t_name ? entity.t_name : entity.p_name;
    const klass = entity.t_name ? "-trail" : "-park";
    
    return (
         <header className='trail-head'>
            <div className='header-wrapper'>
                
                <ul className='head-loc'>
                    <span>{entity.country}</span>
                    <span>›</span>
                    <span>{entity.state}</span>
                    {entity.t_name && <span>›</span>}
                    {entity.t_name && <span>{(entity.parkName) ? entity.parkName : null}</span>}
                    <span>›</span>
                    <span className='overflow'>{name}</span>
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