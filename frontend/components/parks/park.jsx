import React from "react";
import PageHeader from "../headers/page_header";
import Map from "../map/map";
import LongTile from "../tiles/long_tile";

class Park extends React.Component {
    constructor(props) {
        super(props)
        this.displayPage = this.displayPage.bind(this);
    }

    componentDidMount() {
        this.props.fetchPark(this.props.match.params.id).then(this.props.fetchTrails());
    }

    displayPage(park, trails, match) {
        const trailsArr = Object.values(trails);
        const parkTrails = trailsArr.filter(trail => trail.park_id === park.id)
        return (
            <div className="park-wrapper">
                <div className="park-inner-div">
                    <PageHeader park={park} />
                    <div>
                        <h1>Best Trails in {park.p_name}</h1>
                        <div>
                            <span>Stars</span>
                            <span>{park.totalReviews} Reviews</span>
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

                <div>
                    <h2>Top Trails</h2>
                    {parkTrails.map((trail) => LongTile(trail))}
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
