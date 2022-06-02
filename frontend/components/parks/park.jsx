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
                                <table>
                                    {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(day => {
                                        return <tr>
                                            <td>{day}</td>
                                            <td>All Day</td>
                                        </tr>
                                    })}
                                </table>
                            </div>

                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Park;
