import React from "react";
import { Link } from "react-router-dom";

class TrailFavorites extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            swipe: false
        }

        this.handleSlide = this.handleSlide.bind(this);
    }

    handleSlide() {
        let newState = (this.state.swipe === false) ? true : false;
        this.setState({swipe: newState})
    }

    render() {
        const pane_1 = this.props.trails.slice(0, 4)
        const pane_2 = this.props.trails.slice(4, 8)
        const paneShown = (this.state.swipe === false) ? pane_1 : pane_2;
        return (
            <div className="splash-trails">
                
                <div className="tiles-outer-container">
                    <div className="splash-favorites bold">
                        Local Favorites Near San Francisco
                    </div>
                    <div className="tiles-container">

                       {/* GIVE TILE COMPONENT AN ARRAY */}
                        {paneShown.map((trail) => {
                            return (
                                <Link to={`/trails/${trail.id}`} className="tile" key={trail.id}>
                                    <img className="tile-image" src={window.dipsea}></img>

                                    <div className="tile-content">
                                        <span className="tile-title bold overflow">{trail.t_name}</span>
                                        <span className="detail">Park Name</span>
                                        <div className="flex">
                                            <span className="descriptor">{trail.difficulty_level}</span>

                                            <div>
                                                <img className="star" key='1' src={window.star} />
                                                <img className="star" key='2' src={window.star} />
                                                <img className="star" key='3' src={window.star} />
                                                <img className="star" key='4' src={window.star} />
                                                <img className="star" key='5' src={window.star} />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                        <button onClick={this.handleSlide} className="arrow-button-right"><img src={window.right_arrow} className="arrow" width="22px" height="22px" /></button>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default TrailFavorites;



