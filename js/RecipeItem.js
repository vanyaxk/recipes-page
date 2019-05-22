import React, {Component} from 'react'

class RecipeItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {recipe} = this.props;
        const item = recipe.recipe;
        return (
        <div className='recipe-item'>
            <figure>
                <img src={item.image}/>
                <figcaption>{item.label}</figcaption> 
            </figure>

            <div className='healthLabels'>{item.healthLabels.map((healthLabel, index) => <span key={index}>{healthLabel}</span>)}</div>
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