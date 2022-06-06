import React from 'react';

class SmallSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({ search: e.target.value });
    }

    render() {
        const { entity, parks, trails } = this.props;
        const parkName = entity.parkName;
        const klass = typeof parkName === "undefined" ? "-park" : "-trail";
        
        return (
            <div>
                <form className={"show-search" + klass}>
                    <div className='small-dropdown-container'>
                        <div className='small-search-tabs'>

                        </div>

                        <div className='small-search-content'>
                            
                        </div>
                    </div>
                    <input
                        onChange={this.handleChange}
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