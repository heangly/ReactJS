import React, {Component} from 'react';
import {choice} from './Helper';
import Coin from './Coin';

class CoinContainer extends Component{
  static defaultProps = {
    coins: [
      {side: 'head', imgSrc:'https://tinyurl.com/react-coin-heads-jpg'},
      {side: 'tail', imgSrc:'https://random-ize.com/coin-flip/us-half-dollar/us-half-dollar-back.jpg'}
    ]
  };

  constructor(props){
    super(props);
    this.state = {
      currCoin : null,
      nFlips : 0,
      nHead : 0,
      nTail : 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  flipCoin(){
    const newCoin = choice(this.props.coins);
    this.setState(st => {
      return{
        currCoin : newCoin,
        nFlips : st.nFlips + 1,
        nHead : st.nHead + (newCoin.side === 'head' ? 1 : 0),
        nTail : st.nTail + (newCoin.side === 'tail' ? 1 : 0)
      }
    });
  }

  handleClick(){
    this.flipCoin();
  }

  render(){
    return(
      <div className = 'CoinContainer'>
        <h2>Let's Flip a Coin</h2>
        {this.state.currCoin && <Coin info ={this.state.currCoin} />}
        <p> Out of {this.state.nFlips} flips, there are have been {this.state.nHead} heads and {this.state.nTail} tails.</p>
        <button onClick={this.handleClick}> Flip Me!</button>
      </div>
    )
  }
}

export default CoinContainer;