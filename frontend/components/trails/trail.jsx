import React from 'react';
import PageHeader from '../headers/page_header';
import Map from '../map/map';
import ReviewContainer from '../reviews/review_container';
import { allReviewsAvg } from '../stars/stars';
import Tile from '../tiles/tile';
import { Link } from 'react-router-dom';


class Trail extends React.Component {
    constructor(props) {
        super(props);
        this.openModal = this.openModal.bind(this);
    }

    componentDidMount() {
        // 2. called after 1st render; fetchTrails populates the store with trails
        this.props.fetchParks();
        this.props.fetchTrails()
            .then(this.props.fetchWeather([this.props.lat, this.props.long]));
    }

    openModal(formType) {
        if (this.props.currUserId) {
            this.props.openModal(formType)
        } else {
            this.props.history.push('/login')
        }
    }

    convertToCelsius(degrees) {
        let celsius = (degrees - 32) / (9/5);
        return Math.floor(celsius);
    }

    trailTitle() {
        const urlString = 'url(' + this.props.trail.photoUrl + ')';

        let tagKlass;
        if (this.props.trail.difficulty_level === "easy") {
            tagKlass = "descriptor";
        } else if (this.props.trail.difficulty_level === "moderate") {
            tagKlass = "descriptor-mod";
        } else {
            tagKlass = "descriptor-hard";
        }

        return (
            <div className='flex-center' onClick={this.hideDropdown}>
                <div className='content-width trail-img' style={{ backgroundImage: urlString }}>
                    <ul className='trail-title'>
                        <li className='bold'>{this.props.trail.name}</li>
                        <li className='trail-info'>
                            <span className={tagKlass}>{this.props.trail.difficulty_level}</span>
                            <div className='trail-stars'>
                                {allReviewsAvg(this.props.trail.rating)}
                            </div>
                            <span className='reviews-agg'>{`(${this.props.trail.reviews})`}</span>
                        </li>
                        <Link to={`/parks/${this.props.trail.park_id}`}>{this.props.trail.parkName}</Link>
                    </ul>
                </div>
            </div>
        )
    }

    trailBody() {
        const { trail, trails, forecast } = this.props;
        const trailId = parseInt(this.props.match.params.id);
        const weatherImgs = {
            "partly": window.partly,
            "clear": window.clear,
            "thunder": window.thunder,
            "rain": window.rain
        }
        const days = {
            0: "Sunday",
            1: "Monday",
            2: "Tuesday",
            3: "Wednesday",
            4: "Thursday",
            5: "Friday",
            6: "Saturday"
        }

        let currDayI = new Date().getDay();

        return (
            <div className='content-width flex border-outer' >
                <div className='trail-body'>
                    <span className='trail-description'>{trail.description}</span>

                    <section className='characteristics'>
                        <div>
                            <p>Length</p>
                            <span className='bold'>{trail.length}</span>
                        </div>
                        <div>
                            <p>Elevation gain</p>
                            <span className='bold'>{trail.elevation_gain}</span>
                        </div>
                        <div>
                            <p>Route Type</p>
                            <span className='bold'>{trail.route_type}</span>
                        </div>
                    </section>

                    <section className='tags-section'>
                        {trail.tags.map((tag, idx) => {
                            return (
                                <span className='tag' key={idx}>{tag.description}</span>
                            )
                        })}
                    </section>
            
                    <section className='weather-section'>
                        {this.props.forecast.map((day, i) => {
                            let trueI = (currDayI + i) % 7;
                            let img = ["partly", "clear", "rain", "thunder"].forEach((cond) => {
                                if (day.icon.includes(cond)) {
                                    return cond;
                                }
                            })
                            console.log(weatherImgs[img]);
                            return (
                                <div className='day-container'>
                                    <span className='day'>{days[trueI]}</span>
                                    <img className='weather-icon' src={weatherImgs[img]} />
                                    <div className='hi-lo-weather'>{this.convertToCelsius(day.apparentTemperatureHigh) + "º" + " / " + this.convertToCelsius(day.apparentTemperatureLow) + "º C"}</div>
                                </div>
                            )
                        })}
                    </section>

                    <ReviewContainer openModal={this.openModal} reviews={this.props.reviews} fetchTrailReviews={this.props.fetchTrailReviews} trailId={trailId}/>

                </div>

                <div className='side-panel border-left-inner'>
                    
                    <Map entity={[this.props.trail]} trails={this.props.trails} match={this.props.match}  />

                    <h3 className='nearby bold'>Nearby Trails</h3>
                    <div className='trail-tiles-wrapper'>
                        {trails.map((trail, i) => trail.id !== this.props.trail.id ? <Tile trail={trail} key={i} /> : '')}
                    </div>
                </div>  
            </div>
        )
    }
 
    render() {
        const { parks, trails, entity } = this.props;
        return (
            <div className='grey'>
                {this.props.trails.length > 1 && <PageHeader history={this.props.history} entity={entity} trails={trails} parks={parks} />}

                {this.props.trail && this.trailTitle()}
                <div className='green-bar' ></div> 

                {this.props.trail && this.props.forecast && this.trailBody()}
             
            </div>
        );
    };
};

export default Trail;
