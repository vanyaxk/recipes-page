import React, {Component} from 'react';

class FavouriteRecipes extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {favouriteRecipes, deleteItems} = this.props;
        console.log(this.props, 'fav-arr');
        return (
            <>
                <ul className='favourite-recipes'>
                    {favouriteRecipes.map((recipe, index) => <li key={index}>
                                                            <a href={recipe.recipe.url} target="_blank">{recipe.recipe.label}</a>
                                                            
                                                            </li>)}
                </ul>
                <button className="delete-all" onClick={deleteItems}>Delete All</button>
            </>
        );
    }
}

export {FavouriteRecipes}