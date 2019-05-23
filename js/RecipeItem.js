import React, {Component} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as fasFaHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farFaHeart } from '@fortawesome/free-regular-svg-icons';

library.add(fasFaHeart, farFaHeart)

class RecipeItem extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        favourite: false
    }

    handleClickFavourite = () => {
        console.log(this.props.recipe.recipe.label);
        this.props.toggleFavourite(this.props.recipe.recipe.label);
    }

    // passInfo = () => {
    //     let info = this.state.favourite;

    //     this.props.favourites(info);
    // }

    render() {
        const {recipe, toggleFavourite} = this.props;
        console.log(toggleFavourite);
        const item = recipe.recipe;
        return (
        <div className='recipe-item'>

            <div className='favourite-recipe'><FontAwesomeIcon 
                                                onClick={this.handleClickFavourite}
                                                size='2x'
                                                icon={recipe.fav ? fasFaHeart: farFaHeart}/>
            </div>

            <figure>
                <img src={item.image}/>
                <figcaption>{item.label}</figcaption> 
            </figure>

            <div className='healt-labels'>{item.healthLabels.map((healthLabel, index) => <span key={index}>{healthLabel}</span>)}</div>
            <div className='cautions'>{item.cautions.map((caution, index) => <span key={index}>{caution}</span>)}</div>
            
            <ul>
                {item.ingredientLines.map((ingredient, index) => <li key={index}>{ingredient}</li>)}
            </ul>
            
            <a href={item.url} target='_blank'>Check it out on {item.source}</a>
        </div>
        );
    }
}

export {RecipeItem};