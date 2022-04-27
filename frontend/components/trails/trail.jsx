import React from 'react';

class Trail extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        // const {trail} = this.props.trail;
        return (
            <div className='trail-pic'>
                <p>hello</p>
            </div>
        );
    };
};

export default Trail;