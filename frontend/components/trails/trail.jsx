import React from 'react';
import Map from '../map/map';
import Review from '../reviews/review';

class Trail extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // 2. called after 1st render; fetchTrails populates the store with trails
        this.props.fetchTrails();
        this.props.fetchTrailReviews(this.props.match.params.id);
    }

    header() {
        return (
                <ul className='head-loc'>
                    <span>{this.props.trail.country}</span>
                    <span>›</span>
                    <span>{this.props.trail.state}</span>
                    <span>›</span>
                    <span>{(this.props.trail.park_id) ? this.props.trail.park_id : null}</span>
                    <span>›</span>
                    <span className='overflow'>{this.props.trail.t_name}</span>
                </ul>
        )
    }

    trailHeadInfo() {
        // const { trail } = this.props.trail;
        const urlString = 'url(' + splash_hiker1 + ')';
        return (
            <div className='flex-center'>
                <div className='content-width trail-img' style={{ backgroundImage: urlString }} >
                    {/* <img src={window.splash_hiker1} className='content-width trail-img'/> */}
                    <ul className='trail-title'>
                        <li className='bold'>{this.props.trail.t_name}</li>
                        <li className='flex'>
                            <span className='descriptor-blue'>{this.props.trail.difficulty_level}</span>
                            <div className='flex trail-stars'>
                                <img className="review-stars" key='1' src={window.star} />
                                <img className="review-stars" key='2' src={window.star} />
                                <img className="review-stars" key='3' src={window.star} />
                                <img className="review-stars" key='4' src={window.star} />
                                <img className="review-stars" key='5' src={window.star} />
                            </div>
                            <span className='reviews-agg'>(# Reviews)</span>
                        </li>
                        <li>{this.props.trail.park_id} (Park Name)</li>
                    </ul>
                </div>
            </div>
        )
    }

    trailBody() {
        const { trail, reviews } = this.props;
        return (
            <div className='content-width flex border-outer'>
                <div className='trail-body'>
                    <span className='trail-description'>{this.props.trail.description}</span>

                    <section className='characteristics'>
                        <div>
                            <p>Length</p>
                            <span className='bold'>{trail.length}</span>
                        </div>
                        <div>
                            <p>Elevation gain</p>
                            <span className='bold'>{trail.elevation_gain}</span>
                        </div>
                        <div>
                            <p>Route Type</p>
                            <span className='bold'>{trail.route_type}</span>
                        </div>
                    </section>

                    <section className='tags-section'>
                        {trail.tags.map((tag, idx) => {
                            return (
                                <span className='tag' key={idx}>{tag.description}</span>
                            )
                        })}
                    </section>

                </div>

                <div className='side-panel border-left-inner'>

                    <Map trail={this.props.trail} trails={this.props.trails} />

                    <h3 className='nearby bold'>Nearby Trails</h3>

                </div>
            </div>
        )
    }

    // trailBodyInfo() {

    //     const { trail } = this.props;
    //     return (
    //         <div className='trail-body'>
    //             <span className='trail-description'>{this.props.trail && this.props.trail.description}</span>

    //             <section className='characteristics'>
    //                 <div>
    //                     <p>Length</p>
    //                     <span className='bold'>{trail.length}</span>
    //                 </div>
    //                 <div>
    //                     <p>Elevation gain</p>
    //                     <span className='bold'>{trail.elevation_gain}</span>
    //                 </div>
    //                 <div>
    //                     <p>Route Type</p>
    //                     <span className='bold'>{trail.route_type}</span>
    //                 </div>
    //             </section>

    //             <section className='tags-section'>
    //                 {trail.tags.map((tag, idx) => {
    //                     return(
    //                         <span className='tag' key={idx}>{tag.description}</span>
    //                     )
    //                 })}
    //             </section>

    //         </div>
    //     )
    // }

    // sidePanel() {
    //     return (
    //         <div className='side-panel border-left-inner'>

    //             <Map trail={this.props.trail} trails={this.props.trails} />

    //             <h3 className='nearby bold'>Nearby Trails</h3>

    //         </div>
            
    //     )
    // }

    reviews() {
        debugger
        return (
            <Review reviews={this.props.reviews} />
        )
    }
 
    render() {
        // 1. trails null first render
        // 3. this.props now contains all trails which can be decomposed
        return (
            <div className='grey'>

                <header className='trail-head'>
                    <div className='flex-between'>
                        {this.props.trail && this.header()}
                        <form className="show-search">
                            
                            <input
                                type="text"
                                className='show-input'
                                placeholder="Search by park or trail name"
                            />
                            <div className='green-search'>
                                <img src={window.search} width="16px" height="16px" />
                            </div>
                        </form>
                    </div>
                </header>

                {this.props.trail && this.trailHeadInfo()}
                <div className='green-bar content-width'></div>

                {this.props.trail && this.props.reviews && this.trailBody()}
             
            </div>
        );
    };
};

export default Trail;

{/* <div className='content-width flex border-outer'>
    {this.props.trail && this.trailBodyInfo()}
    {this.props.trail && this.sidePanel()}

</div> */}