import React from 'react';

class Trail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trails: {}
        }
    }

    componentDidMount() {
        this.setState(this.props.fetchTrails());
    }

    render() {
        return (
            <div className='trail-pic'>
                {/* <span>{this.state}</span> */}
            </div>
        )
    }
}

export default Trail;