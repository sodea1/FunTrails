import React from "react";
import { Link } from 'react-router-dom';

class SplashSearch extends React.Component {
    constructor(props) {
        super(props);

        const images = [
            '/splash_hiker.jpg',
            '/splash_hiker2-min.jpg',
            '/splash_hiker3-min.jpg',
            '/splash_hiker4-min.jpg'
        ];

        this.state = {
            images,
            currImg: 0
        }

        this.changeImage = this.changeImage.bind(this);
    }

    componentDidMount() {
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

    render() {
        const { images, currImg } = this.state;
        const urlString = `url('${images[currImg]}')`;
        return(
            // repeating images styling
            <div className="background-image" style={{ backgroundImage: urlString }}>
                <h1 className="welcome">Find your next trail</h1>
                <form className="splash-search">
                    <img src={window.search} width="16px" height="16px" className='search-icon' />
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Search by park or trail name"
                    />
                    <div className="green-arrow">
                        <img src={window.green_arrow} width="40px" height="40px" className="green-arrow" />
                    </div>
                </form>
                <div className="splash-explore">
                    <Link to='/' className="splash-explore-link bold">Explore nearby trails</Link>
                </div>
            </div>
        )
    }
}

export default SplashSearch;