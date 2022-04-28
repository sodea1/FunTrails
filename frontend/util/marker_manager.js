
export default class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
    }

    updateMarkers(trails) {
        trails.forEach((trail) => {
            if (this.markers[trail.id] === undefined) {
                this.markers[trail.id] = this.createMarker(trail);
            }
        });
    };

    createMarker(trail) {
        const map = this.map;
        return new google.maps.Marker({
            position: { lat: trail.latitude, lng: trail.longitude }, 
            map
        })
    }
}