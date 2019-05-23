import React, {Component} from 'react';

class FavouriteRecipes extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {favouriteRecipes} = this.props;
        console.log(favouriteRecipes);
        console.log(this.props, 'fav-arr');
        return (
            <ul className='favourite-recipes'>
                {favouriteRecipes.map(recipe => <li><a href={recipe.recipe.url}>{recipe.recipe.label}</a></li>)}
            </ul>
        );
    }
}

export {FavouriteRecipes}