import React from 'react';
import MarkerManager from '../../util/marker_manager';
const dipseaPath = require('../../../app/assets/pathJSON/dipsea-ele.json');
const stinsonPath = require('../../../app/assets/pathJSON/stinsonPath.json');
const muirWoodsPath = require('../../../app/assets/pathJSON/muirWoodsPath.json');
const tenValleyPath = require('../../../app/assets/pathJSON/tenValleyPath.json');
const rodeoPath = require('../../../app/assets/pathJSON/rodeoPath.json');
const mistPath = require('../../../app/assets/pathJSON/mistPath.json');
const halfDomePath = require('../../../app/assets/pathJSON/halfDomePath.json');
const panumPath = require('../../../app/assets/pathJSON/panumPath.json');
const angelsPath = require('../../../app/assets/pathJSON/angelsPath.json');
const watchmanPath = require('../../../app/assets/pathJSON/watchmanPath.json');

const geoData = [
    dipseaPath,
    stinsonPath,
    muirWoodsPath,
    tenValleyPath,
    rodeoPath,
    mistPath,
    halfDomePath,
    panumPath,
    angelsPath,
    watchmanPath
]

// need to accomodate parks

class Map extends React.Component {
    
    componentDidMount() {
        const { latitude, longitude } = this.props.entity[0];
        const mapOptions = {
            center: { lat: latitude, lng: longitude },
            zoom: 12,
            mapTypeId: 'terrain',
            disableDefaultUI: true,
            zoomControl: true
        };

        // create path referencing json coords
        const path = new google.maps.Polyline({
            path: geoData[this.props.entity[0].id - 1],
            geodesic: true,
            strokeColor: "#FF0000",
            strokeOpacity: 1.0,
            strokeWeight: 3
        });

        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.markerMgr = new MarkerManager(this.map);
        this.markerMgr.updateMarkers(this.props.entity);

        if (typeof this.props.entity[0].parkName !== "undefined") {
            path.setMap(this.map);
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            const { latitude, longitude } = this.props.entity[0];
            const mapOptions = {
                center: { lat: latitude, lng: longitude },
                zoom: 12,
                mapTypeId: 'terrain',
                disableDefaultUI: true,
                zoomControl: true,
            };

            // create path referencing json coords
            const path = new google.maps.Polyline({
                path: geoData[this.props.entity[0].id - 1],
                geodesic: true,
                strokeColor: "#FF0000",
                strokeOpacity: 1.0,
                strokeWeight: 3
            });

            this.map = new google.maps.Map(this.mapNode, mapOptions);
            this.markerMgr = new MarkerManager(this.map);
            this.markerMgr.updateMarkers(this.props.entity);

            // add entity to map
            if (typeof this.props.entity[0].parkName !== "undefined") {
                path.setMap(this.map);
            }
        }

        this.markerMgr.updateMarkers(this.props.entity);
    }

    render() {
        const iD = (typeof this.props.entity[0].parkName === "undefined") ? "map-container-park" : "map-container-trail";
        return(
            <div id={iD} ref={map => this.mapNode = map}>           
            </div>
       )
    }
}

export default Map;