import React, {Component} from 'react';
import axios from 'axios'
import Top5Detail from './Top5Detail';
import '../styles/Top5.css'

class Top5 extends Component{
  constructor(props){
    super(props);
    this.state = {recipes:[]}
  }

  async componentDidMount(){
    const url = `/server/gettop5`;
    const response = await axios.get(url);
    const {top5}= response.data;
    this.setState({recipes: top5});
  }

  render(){
    return(
      <div>
        <h1> <i className="fas fa-crown"></i> Top 5 Recipes </h1>
        <div className="Top5">
          <div className="Top5-candidates">
            {this.state.recipes.map(recipe => 
              <Top5Detail
                key={recipe.id}
                name={recipe.name}
                like={recipe.numlike}
                image={recipe.image}
              />
            )}  
          </div>
        </div>
      </div>
    )
  }
}

export default Top5;