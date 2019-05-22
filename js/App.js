import './../scss/main.scss';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Recipes} from './Recipes.js';
// import {RecipeItem} from './RecipeItem.js';
import {Form} from './Form.js';
import {Navigation} from './Navigation.js';
import {RecipeSearchHistory} from './RecipeSearchHistory.js';
import {FavouriteRecipes} from './FavouriteRecipes.js';

//routing 
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
  } from 'react-router-dom';
/* begin form */


class App extends Component {
    state = {
        recipes: []
    }

    displayRecipes = (recipes) => {
        const newRecipesArr = this.state.recipes.slice();
        newRecipesArr.push(...recipes);
        this.setState( {
            recipes: newRecipesArr
        });
    }

    

    
    render() {
        const {recipes} = this.state;
        return (
            <>
            <Navigation />
            <HashRouter>
                <Switch>
                    <Route path='/searchhistory' component={RecipeSearchHistory}/>
                    <Route path='favourites' component={FavouriteRecipes} />
                </Switch>
            </HashRouter>
                <Form displayRecipes={this.displayRecipes}/>
                
                {recipes === [] ? null: <Recipes recipesArr={recipes}/>}
            </>
        )

        
    }
}
ReactDOM.render(
    <App />,
    document.querySelector('#app')
);