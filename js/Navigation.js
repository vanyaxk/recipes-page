import React, {Component} from 'react';
//routing 
import {
    Link
  } from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to='/favourites'>Favourite Recipes</Link></li>
                    <li><Link to='/'>Search Recipes</Link></li>
                    <li><Link to='/searchhistory'>Search History</Link></li>
                </ul>
            </div>
        )
    }
}

export {Navigation}