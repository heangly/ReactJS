import React, {Component} from 'react';
import RecipeBox from './RecipeBox';
import axios from 'axios';
import SearchForm from './SearchForm';
import {v4 as uuid} from 'uuid';
import '../styles/Recipes.css'

class Recipes extends Component{
  constructor(props){
    super(props);
    this.state = {recipes:[]};
    this.getRecipe = this.getRecipe.bind(this);
  }
  
  async getRecipe(foodName){
    let recipeData = [];
    const url = `/server/search?foodName=${foodName}`;
    const response = await axios.get(url);
  
    response.data.forEach(data => {
      const {label,ingredientLines,healthLabels, image} =  data.recipe;
        recipeData.push({label,ingredientLines,healthLabels, image});
    });

    this.setState({recipes: recipeData});
  }

  render(){
    const {recipes} = this.state;

    return(
      <div className='Recipes-container'>
        <h1 className='Recipes-heading'><i className="fas fa-utensils"></i> Recipe Finder</h1>
        <SearchForm getRecipe={this.getRecipe}/>
        <div className="Recipes-list">
          {recipes.map(recipe =>
            <RecipeBox 
              id = {uuid()}
              key = {uuid()}
              label={recipe.label}
              ingredientLines={recipe.ingredientLines}
              healthLabels={recipe.healthLabels}
              image={recipe.image}
            />
          )}
        </div>
      </div>
    )
  }
}

export default Recipes;