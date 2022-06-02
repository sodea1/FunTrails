import React from "react";
import PageHeader from "../headers/page_header";
import Map from "../map/map";

class Park extends React.Component {
    componentDidMount() {
        this.props.fetchAllParks();
    }

    render() {
        const { park } = this.props;
        if (typeof park === 'undefined') {
            return;
        };
        return (
            <div className="park-wrapper">
                <div className="park-inner-div">
                    {PageHeader(park)} 
                    <div>
                        <h1>Best Trails in {park.p_name}</h1>
                        <div>
                            <span>Stars</span>
                            <span>{park.totalReviews} Reviews</span>
                            <p>{park.description}</p>
                            <div>Show More</div>
                            <Map entity={[park]} match={this.props.match} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Park;
