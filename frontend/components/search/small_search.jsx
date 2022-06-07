import React from 'react';
import { BsTree } from 'react-icons/bs';

class SmallSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search: '',
            filterBy: "all",
            hidden: this.props.hidden
        }

        this.handleChange = this.handleChange.bind(this);
        this.changeFilter = this.changeFilter.bind(this);
        this.toggleHidden = this.toggleHidden.bind(this);
        this.handleRedirect = this.handleRedirect.bind(this);
        this.redirect = this.redirect.bind(this);
    }

    componentDidMount() {
        document.addEventListener("keydown", (target) => {
            if (target.key === "Escape") {
                this.setState({ hidden: true })
            }
        })
    }

    handleRedirect(entity, e) {
        this.toggleHidden(e, entity);
    }

    redirect(entity) {
        (entity.parkName) ? this.props.history.push(`/trails/${entity.id}`) : this.props.history.push(`/parks/${entity.id}`) 
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({ search: e.target.value });
    }

    toggleHidden(e, entity) {
        // e.preventDefault() - was unable to use with Link because it would prevent redirect
        if (e.type === "click") {
            let clearSearch = '';
            this.setState({ search: clearSearch }, function() {
                this.redirect(entity);
            })
        }
        const dropdown = document.getElementsByClassName("small-dropdown-container");
        if (dropdown[0].classList.contains("hidden")) {
            dropdown[0].classList.remove("hidden");

        } 
    }

    changeFilter(e) {
        debugger
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
        const { entity } = this.props;
        const trails = Object.values(this.props.trails);
        const parks = Object.values(this.props.parks);
        const allResults = trails.concat(parks)
        const parkName = entity.parkName;
        const klass = typeof parkName === "undefined" ? "-park" : "-trail";

        const searchHash = {
            "all": allResults,
            "trails": trails,
            "parks": parks
        }

        return (
            <div>
                <form className={"show-search" + klass} id="parent-dropdown">
                    <div className="small-dropdown-container hidden">
                        <div className='small-search-tabs'>
                            <button onClick={this.changeFilter}>all</button>
                            <button onClick={this.changeFilter}>trails</button>
                            <button onClick={this.changeFilter}>parks</button>
                        </div>

                        <div className="small-search-content">
                            {this.sortObjects(Object.values(searchHash[this.state.filterBy])).map((entity, idx) => {
                                if (this.props.entity.id === entity.id) {
                                    return;
                                }
                                if (entity.name.toLowerCase().startsWith(this.state.search.toLowerCase())) {
                                    liveItemsList.push(entity.name);
                                    return (
                                        <button onClick={(e) => this.handleRedirect(entity, e)} className="small-search-item" key={idx}>
                                                <div className='circle'></div>
                                                <div className="loc-icon-small">
                                                    {(typeof entity.parkName === "undefined") ? <BsTree className="park-icon-small" height="40px" width="40px" /> : <img className="loc-icon-show" src={window.green_loc} width="16px" height="22px" />}
                                                </div>
                                            <div className='small-search-details'>
                                                <p>{(entity.name) ? entity.name : entity.name}</p>
                                                <span>{entity.state + ", " + entity.country}</span>
                                            </div>
                                        </button>
                                    )
                                }
                            })}

                            {(liveItemsList.length === 0) ?
                                <div className="small-no-results">
                                    <p>No Results</p>
                                </div>
                                :
                                <div></div>
                            }
                        </div>
                    </div>
                    <input
                        onChange={this.handleChange}
                        onFocus={this.toggleHidden}
                        type="text"
                        className={'show-input' + klass}
                        placeholder="Search by park or trail name"
                    />
                    <div className='green-search'>
                        <img src={window.search} width="16px" height="16px" />
                    </div>
                </form>
            </div>
        )
    }
}

export default SmallSearch;