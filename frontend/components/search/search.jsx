import React from "react";
import { Link } from 'react-router-dom';
import { BsTree } from 'react-icons/bs'

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
        this.toggleHidden = this.toggleHidden.bind(this);
        this.changeFilter = this.changeFilter.bind(this);
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

    toggleHidden(e) {
        let newState;
        const parent = document.getElementById("parent-node");

        if (e.target !== parent && !parent.contains(e.target)) {
            newState = true;
        } else (
            newState = false
        )

        this.setState({hidden: newState})
    }

    changeFilter(e) {
        this.setState({ filterBy: e.target.innerText });
    }

    render() {
        let liveItemsList = [];
        const { trails, parks } = this.props;
        const allResults = trails.concat(parks)

        // allResults.sort((a, b) => {
        //     debugger
        //     const aName = (a.t_name) ? a.t_name : a.p_name;
        //     const bName = (b.p_name) ? b.p_name : b.t_name;

        //     a.aName.localeCompare(b.bName)
        // });

        // const sortedAll = allResults.map((allResults))

        const searchHash = {
            "All": allResults,
            "Trails": trails,
            "Parks": parks
        }

        return(
            // repeating images styling
            <div onClick={this.toggleHidden}>
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
                                    onClick={this.toggleHidden}
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
                                    <button onClick={this.changeFilter} aria-selected><span>All</span></button>
                                    <button onClick={this.changeFilter}><span>Trails</span></button>
                                    <button onClick={this.changeFilter}><span>Parks</span></button>
                                </div>

                                <div className="search-items-list">
                                    {Object.values(searchHash[this.state.filterBy]).map((entity, idx) => {
                                        if (entity.name.toLowerCase().startsWith(this.state.search.toLowerCase())) {
                                            liveItemsList.push(entity.name);
                                            return (
                                                <Link to={`/trails/${entity.id}`} className="search-item" key={idx}>
                                                    <div className="loc-icon-div">
                                                        {(typeof entity.parkName === "undefined") ? <BsTree className="park-icon" height="40px" width="40px" /> : <img className="loc-icon" src={window.green_loc} width="16px" height="22px" /> }
                                                    </div>
                                                    <div>
                                                        <h1>{(entity.name) ? entity.name : entity.name }</h1>
                                                        <span>{entity.state + ", " + entity.country}</span>
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
            </div>
        )
    }
}

export default Search;