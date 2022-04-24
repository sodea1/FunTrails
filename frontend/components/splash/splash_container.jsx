import React from "react";

class SplashContainer extends React.Component {
    render() {
        return (
            <div>
                <img src={window.splash_hiker} className='back-photo' />
            </div>
        )
    }
}

export default SplashContainer;