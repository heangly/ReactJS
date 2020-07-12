import React, {Component} from 'react';
import axios from 'axios';
import Joke from './Joke';
import {v4 as uuidv4} from 'uuid';
import './JokeList.css';

class JokeList extends Component{
  static defaultProps = {
    numJokesToGet: 10
  };

  constructor(props){
    super(props);
    this.state = {joke: []};
    this.handleVote = this.handleVote.bind(this);
  }

  async componentDidMount(){
    const jokes = [];
    while (jokes.length < this.props.numJokesToGet){
      const res = await axios.get('https://icanhazdadjoke.com/', {headers: {Accept: 'application/json'}});
      jokes.push({id: uuidv4(), text: res.data.joke, votes: 0});
    }
    this.setState({joke: jokes});
  }

  handleVote(id, delta){
    this.setState(
      st => ({
        joke: st.joke.map(j => j.id === id ? {...j, votes: j.votes + delta} : j)
      })
    );
  }

  render(){
    return(
      <div className='JokeList'>
        <div className='JokeList-sidebar'>
          <h1 className='JokeList-title'> <span>Dad</span> Jokes</h1>
          <img src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg' />
          <button 
            className='JokeList-getmore'
            onClick={this.handleVote}
          >
              New Jokes
          </button>
        </div>
        <div className='JokeList-jokes'>
          {this.state.joke.map(j => 
            <Joke 
              key={j.id}
              votes={j.votes} 
              text={j.text}
              upvote={()=>this.handleVote(j.id, 1)}
              downvote={()=>this.handleVote(j.id, -1)}
            />
          )}
        </div>
      </div>
    )
  }
}

export default JokeList;