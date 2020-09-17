import React from 'react';

class SearchBar extends React.Component{
  state = {"term":""};

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
    this.setState({term: ''});
  }

  render(){
    return(
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="field">
            <label htmlFor="search">Video Search</label>
            <input 
              type="text" 
              id="search"
              name="term"
              value={this.state.term}
              onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;