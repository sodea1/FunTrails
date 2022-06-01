import React from 'react';
import Map from '../map/map';
import ReviewContainer from '../reviews/review_container';
import { allReviewsAvg } from '../stars/stars';
import Tile from '../tiles/tile';

class Trail extends React.Component {
    constructor(props) {
        super(props);
        this.openModal = this.openModal.bind(this);
    }

    componentDidMount() {
        // 2. called after 1st render; fetchTrails populates the store with trails
        this.props.fetchTrails();
    }

    // componentDidUpdate(prevProps) {
        // debugger
        // if (this.props.trailId === prevProps.trailId) {
        //     this.props.fetchTrailReviews(this.props.trailId)
        // }
        // console.log(prevProps)
    // }

    openModal(formType) {
        if (this.props.currUserId) {
            this.props.openModal(formType)
        } else {
            this.props.history.push('/login')
        }
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

    trailTitle() {
        // const { trail } = this.props.trail;
        const urlString = 'url(' + this.props.trail.photoUrl + ')';
        return (
            <div className='flex-center'>
                <div className='content-width trail-img' style={{ backgroundImage: urlString }}>
                    <ul className='trail-title'>
                        <li className='bold'>{this.props.trail.t_name}</li>
                        <li className='trail-info'>
                            <span className='descriptor-blue'>{this.props.trail.difficulty_level}</span>
                            <div className='trail-stars'>
                                {allReviewsAvg(this.props.trail.rating)}
                            </div>
                            <span className='reviews-agg'>{`(${this.props.trail.reviews})`}</span>
                        </li>
                        <li className='trail-loc'>{this.props.trail.state + ", " + this.props.trail.country}</li>
                    </ul>
                </div>
            </div>
        )
    }

    trailBody() {
        const { trail, trails } = this.props;
        const trailId = parseInt(this.props.match.params.id);
        return (
            <div className='content-width flex border-outer'>
                <div className='trail-body'>
                    <span className='trail-description'>{trail.description}</span>

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

                    <ReviewContainer openModal={this.openModal} reviews={this.props.reviews} fetchTrailReviews={this.props.fetchTrailReviews} trailId={trailId}/>

                </div>

                <div className='side-panel border-left-inner'>
                    
                    <Map trail={[this.props.trail]} trails={this.props.trails} match={this.props.match}  />

                    <h3 className='nearby bold'>Nearby Trails</h3>
                    <div className='trail-tiles-wrapper'>
                        {trails.map((trail, i) => trail.id !== this.props.trail.id ? <Tile trail={trail} key={i} /> : '')}
                    </div>
                </div>  
            </div>
        )
    }
 
    render() {
        // 1. trails null first render
        // 3. this.props now contains all trails which can be decomposed
        return (
            <div className='grey'>

                <header className='trail-head'>
                    <div className='header-wrapper'>
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

                {this.props.trail && this.trailTitle()}
                <div className='green-bar'></div>

                {this.props.trail && this.trailBody()}
             
            </div>
        );
    };
};

export default Trail;
