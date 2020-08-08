import React, {Component} from 'react';
import RecipeDetail from './RecipeDetail';
import axios from 'axios';
import '../styles/RecipeBox.css'

class RecipeBox extends Component{

  constructor(props){
    super(props);
    this.state = {showDetail: false, like:0, foodName:''};
    this.handleShowIngredient = this.handleShowIngredient.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.postLike = this.postLike.bind(this);
  }

  handleShowIngredient(){
    if (this.state.showDetail){
      this.setState({showDetail: false});
    }else{
      this.setState({showDetail: true});
    }
  }

  async postLike(dataToSend){
    const settings = {
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify(dataToSend)
    };

    const url = `/server/top5`;
    const response = await fetch(url, settings);
    return response.status;
  }

  handleLike(){
    this.setState(st => {
      return {like: st.like+1}
    });
    // if there is no name for the recipe yet, add name to name
    !this.state.foodName && this.setState({foodName:this.props.label})
    
    // trigger posting to database
    const name = this.props.label
    const numlike = this.state.like + 1;
    const image = this.props.image
    
    // add ui experience after user clicking like and save to db
    this.postLike({name, numlike, image});
  }

  componentDidUpdate(prevProps){
    // you can compare with id
    if (this.props.id !== prevProps.id) {
      this.setState({showDetail: false, like:0, foodName:''});
    }
  }
  
  async componentDidMount(){
    const url = `/server/getnumlikes?foodName=${this.props.label}`;
    const response = await axios.get(url);
    const data = response.data.rows[0];

    if (data){
      this.setState({like: data.numlike});
    }
  }

  render(){
    const {label, image, ingredientLines, healthLabels} = this.props
    return(
    <div className='RecipeBox'>
        <img src={image} alt={label}/>
        <h4>{label}</h4>
        {/* if the showDetail state is true, we show detail; otherwise no show */}
        <div className="RecipeBox-btn">
          <button className='RecipeBox-btn-ingredient' onClick={this.handleShowIngredient}> 
            <i className="far fa-question-circle"></i> Info
          </button>

          <button className='RecipeBox-btn-like' onClick={this.handleLike}>
              <i className="far fa-heart"> {} </i> {this.state.like} Vote(s)
          </button>
        </div> 

        <div className={this.state.showDetail ? 'RecipeInfo show' : 'RecipeInfo hide'}>
            <RecipeDetail
              ingredientLines={ingredientLines} 
              healthLabels={healthLabels}
            />
        </div>
        {/* {
          this.state.showDetail && <RecipeDetail ingredientLines={ingredientLines} healthLabels={healthLabels}/>
        } */}
    </div>
    )
  }
}

export default RecipeBox;
