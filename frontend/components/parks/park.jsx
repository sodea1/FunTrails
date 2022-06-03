import React from "react";
import PageHeader from "../headers/page_header";
import Map from "../map/map";
import { allReviewsAvg } from "../stars/stars";
import LongTile from "../tiles/long_tile";

class Park extends React.Component {
    constructor(props) {
        super(props)
        this.displayPage = this.displayPage.bind(this);
        this.showToggle = this.showToggle.bind(this);
    }

    componentDidMount() {
        this.props.fetchParks().then(this.props.fetchTrails());
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id)
        this.props.fetchPark(this.props.match.params.id).then(this.props.fetchTrails());
    }

    showToggle(e) {
        const action = e.target.innerText;
        const ele = document.getElementsByClassName(action === "Show More" ? "park-description" : "show-overflow")[0]
        ele.className = (action === "Show More") ? "show-overflow" : "park-description";
        e.target.innerText = (action === "Show More") ? "Show Less" : "Show More";
    }

    displayPage(park, trails, match) {
        const trailsArr = Object.values(trails);
        const parkTrails = trailsArr.filter(trail => trail.park_id === park.id)
        const trailRatings = parkTrails.map(trail => trail.rating);
        const parkRating = (trailRatings.reduce((initial, currVal) => initial + currVal, 0) / trailRatings.length).toFixed(1);
        return (
            <div className="park-wrapper">
                <div className="park-width">
                    {PageHeader(park)}
                    <div className="park-photos-div">
                        {parkTrails.map((trail) => {
                            return (
                                <div>
                                    <img src={trail.photoUrl} />
                                </div>
                            )
                            
                        })}
                    </div>
                    <div className="park-name-div">
                        <h1 className="park-title">Best Trails in {park.p_name}</h1>
                        <div>
                            <div className="park-rating-div">
                                {allReviewsAvg(parkRating)}
                                <span className="park-reviews">{park.totalReviews} Reviews</span>
                            </div>
                            <div className="park-description">{park.description}</div>
                            <span className="show-more" onClick={this.showToggle}>Show More</span>
                        </div>
                    </div>

                    <Map entity={[park]} match={match} />

                    <div className="park-information">
                        <div>
                            <h2>Park Information</h2>
                        </div>
                        <div className="park-details-div">
                            <div>
                                <div className="acreage">
                                    <h3>Acreage:</h3>
                                    <span>{park.acreage && park.acreage.toLocaleString()}</span>
                                </div>
                                <div className="park-hours-div">
                                    <h3>Park Hours</h3>
                                    <div>
                                        {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day, idx) => {
                                            return <div key={idx} className="park-hours">
                                                <span>{day}</span>
                                                <span>7:00 am - Dusk</span>
                                            </div>
                                        })}
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3>Contact</h3>
                                <span>{park.contact && park.contact}</span>
                            </div>
                        </div>
                    </div>

                    <h2 className="top-trails">{`Top Trails ${'(' + parkTrails.length + ')'}`}</h2>
                    <div className="park-trails">
                        {parkTrails.map((trail) => LongTile(trail))}
                    </div>
                </div>
            </div>
        )
    }

    render() {
        const { trails, park, match } = this.props;
        return (
            <div>
                {Object.keys(this.props.trails).length > 1 && this.displayPage(park, trails, match)}
            </div>
        )
    }
}

export default Park;
