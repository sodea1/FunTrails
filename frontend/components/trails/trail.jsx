import React from 'react';

class Trail extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // 2. called after 1st render; fetchTrails populates the store with trails
        this.props.fetchTrails();
    }

    render() {
        // 1. trails null first render
        // 3. this.props now contains all trails which can be decomposed
        const { trails } = this.props;
        const { trail } = this.props;
        debugger;
        return (
            <div>
                <header className='trail-head'>
                    <div className='flex'>
                        {/* <span>{trail.country}</span>
                        <span>{trail.state}</span> */}
                        {/* <span>{(trail.park_id) ? trail.park_id : null}</span> */}
                        {/* <span>{trail.t_name}</span> */}
                    </div>

                    <form className="show-search">
                        <input
                            type="text"
                            className="search-bar"
                            placeholder="Search by park or trail name"
                        />
                        <div className='green-search'>
                            <img src={window.search} width="16px" height="16px" />
                        </div>
                    </form>

                </header>

                <div>

                </div>


            </div>
        );
    };
};

export default Trail;