import React from "react";
import { Link } from 'react-router-dom';
import { BsTree } from 'react-icons/bs';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search: '',
            currImg: 1,
            hidden: true,
            filterBy: "All"
        }

        this.changeImage = this.changeImage.bind(this);
        this.updateSearch = this.updateSearch.bind(this);
        this.routeTrail = this.routeTrail.bind(this);
        this.show = this.show.bind(this);
        this.changeFilter = this.changeFilter.bind(this);
        this.hide = this.hide.bind(this);
        this.handleRedirect = this.handleRedirect.bind(this);
    }

    // async
    componentDidMount() {
        // async function to fetch photo
        this.interval = setInterval(() => this.changeImage(), 5000);

        document.addEventListener("keydown", (target) => {
            if (target.key === "Escape") {
                this.setState({ hidden: true })
            }
        })
    }

    componentWillUnmount() {
        // clear the interval before component removed from DOM
        if (this.interval) {
            clearInterval(this.interval)
        }
    }

    changeImage() {
        let nextImg = this.state.currImg + 1;
        if (nextImg === 5) nextImg = 1;
        this.setState({currImg: nextImg});
    }

    updateSearch(e) {
        this.setState({search: e.target.value})
    }

    routeTrail(trailId) {
        this.props.history.push(`/trails/${trailId}`);
    }

    routePark(parkId) {
        this.props.history.push(`/parks/${parkId}`);
    }

    show(e) {
        e.preventDefault();
        let newState = false;
        this.setState({hidden: newState})
    }

    hide(e) {
        e.preventDefault();
        if (this.state.hidden === false) {
            let newState = true;
            this.setState({hidden: newState})
        }
    }

    handleRedirect(e, entity) {
        e.preventDefault();
        (entity.parkName) ? this.props.history.push(`/trails/${entity.id}`) : this.props.history.push(`/parks/${entity.id}`) 
    }

    changeFilter(e) {
        e.preventDefault();
        const prevTab = document.getElementsByClassName('tab-underline');
        prevTab ? prevTab[0].classList.remove('tab-underline') : "";
        e.target.classList.add('tab-underline');
        this.setState({ filterBy: e.target.innerText });
    }

    sortObjects(objs) {
        let sorted = objs.slice();
        return sorted.sort(function (a, b) {
            return a.name.localeCompare(b.name);
        })
    }

    render() {
        let liveItemsList = [];
        const { trails, parks } = this.props;
        const allResults = trails.concat(parks)
        const searchHash = {
            "All": allResults,
            "Trails": trails,
            "Parks": parks
        }

        return(
            // repeating images styling
            <div>
                <img className={this.state.currImg === 1 ? "background-image" : "background-image hidden"} src="https://funtrails-seeds.s3.amazonaws.com/splash_hiker2-min.jpg" />
                <img className={this.state.currImg === 2 ? "background-image" : "background-image hidden"} src="https://funtrails-seeds.s3.amazonaws.com/splash_hiker.jpg" />
                <img className={this.state.currImg === 3 ? "background-image" : "background-image hidden"} src="https://funtrails-seeds.s3.amazonaws.com/splash_hiker3-min.jpg" />
                <img className={this.state.currImg === 4 ? "background-image" : "background-image hidden"} src="https://funtrails-seeds.s3.amazonaws.com/splash_hiker4-min.jpg" />
                
                <div className="search-wrapper" >
                    <h1 className="welcome">Find your next trail</h1>
                    <div id="parent-node">
                        <div className="search-container">
                            <form className="splash-search">
                                <img src={window.search} width="16px" height="16px" className='search-icon' />
                                <input
                                    onChange={this.updateSearch}
                                    onFocus={this.show}
                                    onBlur={this.hide}
                                    type="text"
                                    className="search-bar"
                                    placeholder="Search by park or trail name"
                                />
                                <div className="green-arrow">
                                    {/* <img src={window.green_arrow} width="40px" height="40px" className="green-arrow" /> */}
                                </div>
                            </form>

                        </div>

                        <div className={this.state.hidden === true ? "hidden search-dropdown-container" : "search-dropdown-container"}>
                            <div className="spacer"></div>
                            <div className="inner-dropdown-container">
                                <div className="search-tabs">
                                    <button className="tab-underline" onMouseDown={this.changeFilter} aria-selected>All</button>
                                    <button onMouseDown={this.changeFilter}>Trails</button>
                                    <button onMouseDown={this.changeFilter}>Parks</button>
                                </div>

                                <div className="search-items-list">
                                    {this.sortObjects(Object.values(searchHash[this.state.filterBy])).map((entity, idx) => {
                                        if (entity.name.toLowerCase().startsWith(this.state.search.toLowerCase())) {
                                            liveItemsList.push(entity.name);
                                            
                                            return (
                                                <button onMouseDown={(e) => this.handleRedirect(e, entity)}  className="search-item" key={idx}>
                                                    <div className="loc-icon-div">
                                                        {(typeof entity.parkName === "undefined") ? <BsTree className="park-icon" height="40px" width="40px" /> : <img className="loc-icon" src={window.green_loc} width="16px" height="22px" /> }
                                                    </div>
                                                    <div className="search-details">
                                                        <h1>{(entity.name) ? entity.name : entity.name }</h1>
                                                        <span>{entity.state + ", " + entity.country}</span>
                                                    </div>
                                                </button>
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
            </div>
        )
    }
}

export default Search;