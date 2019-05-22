import React, {Component} from 'react';
import {RecipeItem} from './RecipeItem';

class Recipes extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {recipesArr} = this.props;
        return (
        <div className='recipes'>
            {recipesArr === false ? null: recipesArr.map((recipe, index) => <RecipeItem key={index} recipe={recipe} />)}
        </div>
        )
    }
}

export {Recipes};