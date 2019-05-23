import React, {Component} from 'react';




class Form extends Component {
    state = {
        recipe: '',
        searching: false,
        recipesArr: [],
    }
    from = 0;
    to = 12;
    
    fetchData = () => {
        //API Variables
        const appId = 'c56323fd';
        const appKey = 'f56e7cdcde1fcd0405f286b48b970a46';
        this.setState( {
            isLoading: true
        }, () => {
            fetch(`https://api.edamam.com/search?q=${this.state.recipe}&app_id=${appId}&app_key=${appKey}&from=${this.from}&to=${this.to}`)
        .then( data => {
            if (data.ok) {
                return data.json(); 
            }
            throw new Error('Data error');
        })
        .then(data => {
            
            if (data.hits.length === 0) {
                this.setState({
                    searching: false,
                    isLoading: false
                });
                throw new Error('Could not find any recipes :(');
            }
            console.log(data.hits);
            //const newRecipesArr = this.state.recipesArr.slice();
            //newRecipesArr.push(...data.hits);
            data.hits.forEach(dataItem => dataItem.fav = false);
            this.props.displayRecipes(data.hits);
            this.setState( {
              //  recipesArr: newRecipesArr,
                searching: false,
                isLoading: false
            })
        })
        .catch( data => {
            this.props.displayRecipes({error: data});

            this.setState( {
                searching: false
            })
        });
        });
        
    }

    handleRecipeSearch = (e) => {
        e.preventDefault();
        this.setState({
            searching: true,
            error: false,
            hasMore: true,
            isLoading: false
        });

        this.fetchData();
    }

    componentWillMount() {
        window.onscroll = () => {
            const {error, isLoading, hasMore} = this.state;

            if (error || isLoading || !hasMore) return;
            if (this.state.isLoading === false && 
                document.querySelector('#app').offsetHeight
                        === document.documentElement.scrollTop +
                        document.documentElement.offsetHeight) {
                            this.to += 12;
                            this.from += 12;
                            this.fetchData();
                        };
        }
    }



    
    handleCheckInput = (e) => {

        this.setState({
            recipe: e.target.value
        })
    }

    render() {
        const {recipe, searching} = this.state;
        return (
            <form className="recipe-search" onSubmit={this.handleRecipeSearch}>
                <h1>Find your recipe!</h1>
                <input type="search" value={recipe} name="search" placeholder="Enter ingredients or dish" onChange={this.handleCheckInput}/>
                {searching ? <span>Searching...</span>: <button type="submit">Search!</button>}
            </form>
        )
    }
}

export {Form};