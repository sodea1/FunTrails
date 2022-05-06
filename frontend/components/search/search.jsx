import React from "react";
import { Link } from 'react-router-dom';

class Search extends React.Component {
    constructor(props) {
        super(props);

        const images = [
            '/splash_hiker.jpg',
            '/splash_hiker2-min.jpg',
            '/splash_hiker3-min.jpg',
            '/splash_hiker4-min.jpg'
        ];

        this.state = {
            search: '',
            images,
            currImg: 0,
            hidden: true
        }

        this.changeImage = this.changeImage.bind(this);
        this.updateSearch = this.updateSearch.bind(this);
        this.routeTrail = this.routeTrail.bind(this);
        this.toggleHidden = this.toggleHidden.bind(this);
    }

    // async
    componentDidMount() {
        // async function to fetch photo
        this.interval = setInterval(() => this.changeImage(), 5000);
    }

    componentWillUnmount() {
        // clear the interval before component removed from DOM
        if (this.interval) {
            clearInterval(this.interval)
        }
    }

    changeImage() {
        const { images, currImg } = this.state;
        let nextImg = currImg + 1;
        if (nextImg === images.length) nextImg = 0;
        this.setState({currImg: nextImg});
    }

    updateSearch(e) {
        debugger
        this.setState({search: e.target.value})
    }

    routeTrail(trailId) {
        debugger
        this.props.history.push(`/trails/${trailId}`);
    }

    toggleHidden(e) {
        let newState = (e.target.localName === 'input') ? false : true;
        this.setState({hidden: newState})
    }

    render() {
        // debugger;
        const { images, currImg } = this.state;
        const urlString = `url('${images[currImg]}')`;
        let liveItemsList = [];

        return(
            // repeating images styling
            <div onClick={this.toggleHidden}>
                <div className="background-image" style={{ backgroundImage: urlString }}>
                    <h1 className="welcome">Find your next trail</h1>

                    <div className="search-container">
                        <form className="splash-search">
                            <img src={window.search} width="16px" height="16px" className='search-icon' />
                            <input
                                onChange={this.updateSearch}
                                onClick={this.toggleHidden}
                                type="text"
                                className="search-bar"
                                placeholder="Search by park or trail name"
                            />
                            <div className="green-arrow">
                                <img src={window.green_arrow} width="40px" height="40px" className="green-arrow" />
                            </div>
                        </form>

                    </div>

                    <div className={this.state.hidden === true ? "hidden search-dropdown-container" : "search-dropdown-container"}>
                        <div className="spacer"></div>
                        <div className="inner-dropdown-container">
                            <div className="search-tabs">
                                <button><span>All</span></button>
                                <button><span>Trails</span></button>
                                <button><span></span></button>
                                <button><span></span></button>
                                <button><span></span></button>
                            </div>

                            <div className="search-items-list">
                                {Object.values(this.props.trails).map((trail, idx) => {
                                    // debugger;
                                    if (trail.t_name.toLowerCase().startsWith(this.state.search.toLowerCase())) {
                                        liveItemsList.push(trail.t_name)
                                        return (
                                            <Link to={`/trails/${trail.id}`} className="search-item" key={idx}>
                                                <div className="loc-icon-div">
                                                    <img className="loc-icon" src={window.green_loc} width="16px" height="22px"/>
                                                </div>
                                                <div>
                                                    <h1>{trail.t_name}</h1>
                                                    <span>{trail.state + ", " + trail.country}</span>
                                                </div>
                                            </Link>
                                        )
                                    } 
                                })}

                                {(liveItemsList.length === 0) ? 
                                    <div className="no-results">
                                        <p>No Results</p>
                                        <p>We couldn't find anything matching "{this.state.search}"</p>
                                    </div>
                                    :
                                    <div></div>
                                }
                            </div>
                        </div>
                    </div>
                
                                
                </div>
            </div>
        )
    }
}

export default Search;

// onClick = {() => this.routeTrail(trail.id)

// belongs under Search bar
{/* <Link to='/' className="splash-explore-link bold">Explore nearby trails</Link> */ }
{/* <div className="splash-explore">
                    
                </div> */}