import React from 'react';
import MarkerManager from '../../util/marker_manager';
const dipseaPath = require('./dipsea-ele.json');

class Map extends React.Component {
    componentDidMount() {
        const { latitude, longitude } = this.props.trail;
        const mapOptions = {
            center: { lat: latitude, lng: longitude }, 
            zoom: 13,
            mapTypeId: 'terrain'
        };

        // create path referencing json coords
        const path = new google.maps.Polyline({
            path: dipseaPath,
            geodesic: true,
            strokeColor: "#FF0000",
            strokeOpacity: 1.0,
            strokeWeight: 3
        })

        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.markerMgr = new MarkerManager(this.map);
        this.markerMgr.updateMarkers(this.props.trails);

        // add trail to map
        path.setMap(this.map);        


        // elevation
        const elevation = new google.maps.ElevationService();

        elevation.getElevationAlongPath({
            path: path,
            samples: 200
        })



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