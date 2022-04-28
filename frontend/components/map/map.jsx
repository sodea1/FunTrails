import React from 'react';

class Map extends React.Component {
    componentDidMount() {
        const { latitude, longitude } = this.props.trail;
        debugger;
        const mapOptions = {
            center: { lat: latitude, lng: longitude }, 
            zoom: 13
        };

        this.map = new google.maps.Map(this.mapNode, mapOptions);
    }

    render() {
       return(
           <div id='map-container' ref={map => this.mapNode = map}> 
                    
            </div>
       )
    }
}

export default Map;