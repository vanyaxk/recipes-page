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
        recipes: [],
        favRecipes: []
    }

    displayRecipes = (recipes) => {
        const newRecipesArr = this.state.recipes.slice();
        newRecipesArr.push(...recipes);
        this.setState( {
            recipes: newRecipesArr
        });
    }

    // addFavourite = (favouriteName) => {
    //     const newFavRecipes = this.state.favRecipes.slice();
    //     newFavRecipes.push(favouriteName);

    //     this.setState( {
    //         favRecipes: newFavRecipes
    //     });
    // }

    toggleFavourite = (favouriteName) => {
        const newRecipes = this.state.recipes.slice();
        newRecipes.forEach(recipe => {
           if (recipe.recipe.label === favouriteName) {
               recipe.fav = !recipe.fav;
           }
       });

       this.setState( {
           recipes: newRecipes
       })
    }

    

    
    render() {
        const {recipes} = this.state;
        return (
            <>
                <HashRouter>
                    <>
                    <Navigation />
                    <Switch>
                        <Route exact path='/' render = {() => { return <><Form displayRecipes={this.displayRecipes}/>{recipes === [] ? null: <Recipes recipesArr={recipes} toggleFavourite={this.toggleFavourite}/>}</>}}/>
                        <Route path='/searchhistory' render={() => <RecipeSearchHistory/>} />
                        <Route path='/favourites' render={() => <FavouriteRecipes test={'ok'} favouriteRecipes={this.state.recipes.filter(recipe => recipe.fav)}/>} />
                    </Switch>
                    </>
                </HashRouter>
                
                
            </>
        )

        
    }
}
ReactDOM.render(
    <App />,
    document.querySelector('#app')
);