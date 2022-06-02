import React from "react";
import PageHeader from "../headers/page_header";

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
                    </div>
                </div>
            </div>
        )
    }
}

export default Park;
