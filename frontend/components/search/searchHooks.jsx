import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { BsTree } from 'react-icons/bs';

const Search = ({ trails, parks, history }) => {
    const [search, setSearch] = useState("");
    const [currImg, setImg] = useState(0);
    const [hidden, setHidden] = useState(true);
    const [filterBy, setFilter] = useState("All");
    const liveItemsList = [];
    const allResults = trails.concat(parks);
    const searchHash = {
        "All": allResults,
        "Trails": trails,
        "Parks": parks
    }

    useEffect(() => {
        document.addEventListener("keydown", handleEscape);
        return function cleanup() {
            window.removeEventListener("keydown", handleEscape);
        }
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setImg(newImg => (newImg + 1) % 4);
        }, 5000);

        return function cleanup() {
            console.log("clearing interval")
            clearInterval(intervalId);
        }
    }, []);

    const handleEscape = (target) => {
        if (target.key === "Escape") {
            setHidden(true);
            setSearch("");
            const searchBar = document.getElementsByClassName("search-bar")[0];
            searchBar.blur();
            searchBar.value = '';
        }
    }

    const changeFilter = (e) => {
        e.preventDefault();
        const prevTab = document.getElementsByClassName('tab-underline');
        prevTab ? prevTab[0].classList.remove('tab-underline') : "";
        e.target.classList.add('tab-underline');
        setFilter(e.target.innerText);
    };

    const sortObjects = (objs) => {
        let sorted = objs.slice();
        return sorted.sort(function (a, b) {
            return a.name.localeCompare(b.name);
        })
    }

    const handleRedirect = (e, entity) => {
        e.preventDefault();
        (entity.parkName) ? history.push(`/trails/${entity.id}`) : history.push(`/parks/${entity.id}`) 
    }

    return (
        <div>
            <img className={currImg === 0 ? "background-image" : "background-image hidden"} src="https://funtrails-seeds.s3.amazonaws.com/splash_hiker2-min.jpg" />
            <img className={currImg === 1 ? "background-image" : "background-image hidden"} src="https://funtrails-seeds.s3.amazonaws.com/splash_hiker.jpg" />
            <img className={currImg === 2 ? "background-image" : "background-image hidden"} src="https://funtrails-seeds.s3.amazonaws.com/splash_hiker3-min.jpg" />
            <img className={currImg === 3 ? "background-image" : "background-image hidden"} src="https://funtrails-seeds.s3.amazonaws.com/splash_hiker4-min.jpg" />

            <div className="search-wrapper" >
                <h1 className="welcome">Find your next trail</h1>
                <div id="parent-node">
                    <div className="search-container">
                        <form className="splash-search">
                            <img src={window.search} width="16px" height="16px" className='search-icon' />
                            <input
                                onChange={(e) => setSearch(e.target.value)}
                                onFocus={(e) => {
                                    e.preventDefault();
                                    setHidden(false)}
                                }
                                onBlur={(e) => {
                                    e.preventDefault();
                                    if (!hidden) setHidden(true);
                                }}
                                type="text"
                                className="search-bar"
                                placeholder="Search by park or trail name"
                            />
                            <div className="green-arrow">
                                {/* <img src={window.green_arrow} width="40px" height="40px" className="green-arrow" /> */}
                            </div>
                        </form>

                    </div>

                    <div className={hidden ? "hidden search-dropdown-container" : "search-dropdown-container"}>
                        <div className="spacer"></div>
                        <div className="inner-dropdown-container">
                            <div className="search-tabs">
                                <button className="tab-underline" onMouseDown={(e) => changeFilter(e)} aria-selected>All</button>
                                <button onMouseDown={(e) => changeFilter(e)}>Trails</button>
                                <button onMouseDown={(e) => changeFilter(e)}>Parks</button>
                            </div>

                            <div className="search-items-list">
                                {sortObjects(Object.values(searchHash[filterBy])).map((entity, idx) => {
                                    if (entity.name.toLowerCase().startsWith(search.toLowerCase())) {
                                        liveItemsList.push(entity.name);

                                        return (
                                            <button onMouseDown={(e) => handleRedirect(e, entity)} className="search-item" key={idx}>
                                                <div className="loc-icon-div">
                                                    {(typeof entity.parkName === "undefined") ?
                                                        <BsTree className="park-icon" height="40px" width="40px" /> :
                                                        <img className="loc-icon" src={window.green_loc} width="16px" height="22px" />};
                                                </div>
                                                <div className="search-details">
                                                    <h1>{(entity.name) ? entity.name : entity.name}</h1>
                                                    <span>{entity.state + ", " + entity.country}</span>
                                                </div>
                                            </button>
                                        )
                                    }
                                })}

                                {(liveItemsList.length === 0) ?
                                    <div className="no-results">
                                        <p>No Results</p>
                                        <p>We couldn't find anything matching "{search}"</p>
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

export default Search;