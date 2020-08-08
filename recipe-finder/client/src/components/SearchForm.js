import React, {Component} from 'react';
import '../styles/SearchForm.css';

class SearchForm extends Component{
  constructor(props){
    super(props);
    this.state = {foodName: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(evt){
    evt.preventDefault();
    this.props.getRecipe(this.state.foodName);
    this.setState({foodName:''});
  }

  handleChange(evt){
    this.setState({'foodName': evt.target.value});

  }

  render(){
    return(
      <form className='SearchForm' onSubmit={this.handleSubmit}>
        <input 
          type="text"
          placeholder='Enter name of the food'
          required
          name='foodName'
          value={this.state.foodName}  
          onChange={this.handleChange}
        />
        <div className="SearchForm-btnContainer">
          <button>
            <i className="fas fa-search"></i> Search
          </button>
        </div>
      </form>
    )
  }
}

export default SearchForm;