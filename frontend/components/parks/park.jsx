import React from "react";
import PageHeader from "../headers/page_header";

class Park extends React.Component {
    componentDidMount() {
        this.props.fetchPark(this.props.match.params.id);
    }

    render() {
        // const { park } = this.props;
        return (
            
            <div>
                {this.props.park && <PageHeader entity={this.props.park} />}           
            </div>
        )
    }
}

export default Park;
