import React from 'react';
import MarkerManager from '../../util/marker_manager';
const dipseaPath = require('../../../app/assets/geojson/dipsea-ele.json');
const stinsonPath = require('../../../app/assets/geojson/stinsonPath.json');

const geoData = [
    dipseaPath,
    stinsonPath
    // 3: muirWoodsPath,
    // 4: tenValleyPath,
    // 5: rodeoPath,
    // 6: mistPath,
    // 7: halfDomePath,
    // 8: panumPath,
    // 9: angelsPath,
    // 10: watchmanPath
]

class Map extends React.Component {
    
    componentDidMount() {
        const { latitude, longitude } = this.props.trail[0];
        const mapOptions = {
            center: { lat: latitude, lng: longitude },
            zoom: 12,
            mapTypeId: 'terrain',
            disableDefaultUI: true,
            zoomControl: true
        };

        // create path referencing json coords
        const path = new google.maps.Polyline({
            path: geoData[this.props.trail[0].id - 1],
            geodesic: true,
            strokeColor: "#FF0000",
            strokeOpacity: 1.0,
            strokeWeight: 3
        });

        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.markerMgr = new MarkerManager(this.map);
        this.markerMgr.updateMarkers(this.props.trail);

        // add trail to map
        path.setMap(this.map);        

    }

    componentDidUpdate(prevProps) {
        console.log(prevProps)
        if (prevProps.match.params.id !== this.props.match.params.id) {
            const { latitude, longitude } = this.props.trail[0];
            const mapOptions = {
                center: { lat: latitude, lng: longitude },
                zoom: 12,
                mapTypeId: 'terrain',
                disableDefaultUI: true,
                zoomControl: true
            };

            // create path referencing json coords
            debugger
            const path = new google.maps.Polyline({
                path: geoData[this.props.trail[0].id - 1],
                geodesic: true,
                strokeColor: "#FF0000",
                strokeOpacity: 1.0,
                strokeWeight: 3
            });

            this.map = new google.maps.Map(this.mapNode, mapOptions);
            this.markerMgr = new MarkerManager(this.map);
            this.markerMgr.updateMarkers(this.props.trail);

            // add trail to map
            path.setMap(this.map);  
        }


        this.markerMgr.updateMarkers(this.props.trail);
    }

    render() {
        
        return(
            <div id='map-container' ref={map => this.mapNode = map}> 
                
            </div>
       )
    }
}

export default Map;