import React from 'react';
import MarkerManager from '../../util/marker_manager';

class Map extends React.Component {
    componentDidMount() {
        const { latitude, longitude } = this.props.trail;
        const mapOptions = {
            center: { lat: latitude, lng: longitude }, 
            zoom: 13
        };
        
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.markerMgr = new MarkerManager(this.map);
        this.markerMgr.updateMarkers(this.props.trails);
    }

    componentDidUpdate() {
        this.markerMgr.updateMarkers(this.props.trails);
    }

    render() {
       return(
            <div id='map-container' ref={map => this.mapNode = map}> 
                
            </div>
       )
    }
}

export default Map;