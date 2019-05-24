import React, {Component} from 'react';

class RecipeSearchHistory extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {searchHis, addToHis} = this.props;
        return <h1 onClick={addToHis}>Search History</h1>
    }
}

export {RecipeSearchHistory}