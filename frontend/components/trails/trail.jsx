import React from 'react';
import Map from '../map/map';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

class Trail extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // 2. called after 1st render; fetchTrails populates the store with trails
        this.props.fetchTrails();
    }

    header() {
        return (
            this.props.trail ?
                <ul className='head-loc'>
                    <span>{this.props.trail.country}</span>
                    <span>›</span>
                    <span>{this.props.trail.state}</span>
                    <span>›</span>
                    <span>{(this.props.trail.park_id) ? this.props.trail.park_id : null}</span>
                    <span>›</span>
                    <span className='overflow'>{this.props.trail.t_name}</span>
                </ul>
            : <div></div>
        )
    }

    trailHeadInfo() {
        // const { trail } = this.props.trail;
        const urlString = 'url(' + splash_hiker1 + ')';
        return (
            this.props.trail ?
                <div className='flex-center'>
                    <div className='content-width trail-img' style={{ backgroundImage: urlString }} >
                        {/* <img src={window.splash_hiker1} className='content-width trail-img'/> */}
                        <ul className='trail-title'>
                            <li className='bold'>{this.props.trail.t_name}</li>
                            <li className='flex'>
                                <span className='descriptor-blue'>{this.props.trail.difficulty_level}</span>
                                <div className='flex trail-stars'>
                                    <img className="review-stars" key='1' src={window.star} />
                                    <img className="review-stars" key='2' src={window.star} />
                                    <img className="review-stars" key='3' src={window.star} />
                                    <img className="review-stars" key='4' src={window.star} />
                                    <img className="review-stars" key='5' src={window.star} />
                                </div>
                                <span className='reviews-agg'>(# Reviews)</span>
                            </li>
                            <li>{this.props.trail.park_id} (Park Name)</li>
                        </ul>
                    </div>
                </div>            
            :
            <div></div>
        )
    }
 
    render() {
        // 1. trails null first render
        // 3. this.props now contains all trails which can be decomposed
        return (
            <div className='grey'>
                <header className='trail-head'>
                    <div className='flex-between'>
                        {this.header()}
                        <form className="show-search">
                            
                            <input
                                type="text"
                                className='show-input'
                                placeholder="Search by park or trail name"
                            />
                            <div className='green-search'>
                                <img src={window.search} width="16px" height="16px" />
                            </div>
                        </form>
                    </div>
                </header>

                {this.trailHeadInfo()}
                <div className='green-bar content-width'>
                </div>

                <div className='content-width flex border-outer'>
                    <div className='trail-body'>
                        
                    </div>

                    <div className='side-panel border-left-inner'>
                        {this.props.trail && <Map trail={this.props.trail}/>}
                        
                    </div>
                </div>
            </div>
        );
    };
};

export default Trail;







    // map() {
    //     return (
    //         this.props.trail ?
    //             <MapContainer center={[this.props.trail.latitude, this.props.trail.longitude]} zoom={13} scrollWheelZoom={false} >

    //                 <TileLayer
    //                     attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    //                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //                 />

    //                 <Marker position={[this.props.trail.latitude, this.props.trail.longitude]}>
    //                     <Popup>
    //                         I am a pop-up!
    //                     </Popup>
    //                 </Marker>

    //             </MapContainer>
    //             :
    //             <div></div>
    //     )
    // }