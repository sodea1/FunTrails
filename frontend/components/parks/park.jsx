import React from "react";
import PageHeader from "../headers/page_header";
import Map from "../map/map";
import { allReviewsAvg } from "../stars/stars";
import LongTile from "../tiles/long_tile";

class Park extends React.Component {
    constructor(props) {
        super(props)
        this.displayPage = this.displayPage.bind(this);
    }

    componentDidMount() {
        this.props.fetchPark(this.props.match.params.id).then(this.props.fetchTrails());
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id)
        this.props.fetchPark(this.props.match.params.id).then(this.props.fetchTrails());
    }

    displayPage(park, trails, match) {
        const trailsArr = Object.values(trails);
        const parkTrails = trailsArr.filter(trail => trail.park_id === park.id)
        const trailRatings = parkTrails.map(trail => trail.rating);
        const parkRating = (trailRatings.reduce((initial, currVal) => initial + currVal, 0) / trailRatings.length).toFixed(1);
        return (
            <div className="park-wrapper">
                <div className="park-width">
                    <div className="park-header-div">
                        {PageHeader(park)}
                        <div>
                            <h1 className="park-title">Best Trails in {park.p_name}</h1>
                            <div>
                                {allReviewsAvg(parkRating)}
                                <span className="park-reviews">{park.totalReviews} Reviews</span>
                                <p>{park.description}</p>
                                <div>Show More</div>
                                <Map entity={[park]} match={match} />
                            </div>
                        </div>
                    </div>

                    <div className="park-information">
                        <div>
                            <h2>Park Information</h2>
                        </div>
                        <div>
                            <div>
                                <div>
                                    <h3>Acreage:</h3>
                                    <span>{park.acreage}</span>
                                </div>
                                <div>
                                    <h3>Park Hours</h3>
                                    <div>
                                        {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day, idx) => {
                                            return <div key={idx}>
                                                <span>{day}</span>
                                                <span>All Day</span>
                                            </div>
                                        })}
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div>Contact</div>
                                <span>{park.contact}</span>
                            </div>
                        </div>
                    </div>

                    <div className="park-trails">
                        <h2>Top Trails</h2>
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
