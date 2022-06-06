import React from 'react';
import { Link } from 'react-router-dom';
import SmallSearch from '../search/small_search';

class PageHeader extends React.Component {
    componentDidMount() {
        debugger
        if (typeof this.props.parks === "undefined" || typeof this.props.trails === "undefined") {
            this.props.fetchParks();
            this.props.fetchTrails();
        }
    }

    render() {
        debugger
        const { entity, parks, trails } = this.props;
        const parkName = entity.parkName;
        const linkClass = (typeof parkName === "undefined") ? "header-link-trail" : "header-link";
        
        return (
            <header className='trail-head'>
                <div className='header-wrapper'>
                    
                    <ul className='head-loc'>
                        <span>{entity.country}</span>
                        <span>›</span>
                        <span>{entity.state}</span>
                        <span>›</span>
                        <Link className={linkClass} to={`/parks/${(typeof parkName === "undefined") ? entity.id : entity.park_id}`}>{(parkName) ? parkName : entity.name}</Link> 
                        {typeof parkName === "undefined" ? <span></span> : <span>›</span>}
                        {typeof parkName === "undefined" ? <span></span> : <span className='overflow'>{entity.name}</span>}
                    </ul>

                    <SmallSearch entity={entity} parks={parks} trails={trails} />
                </div>
            </header>
        )
    }
}

export default PageHeader;