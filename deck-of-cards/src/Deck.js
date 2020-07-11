import React, {Component} from 'react';
import Card from './Card';
import './Deck.css';

const API_BASE = ' https://deckofcardsapi.com/api/deck';

class Deck extends Component{
  constructor(props){
    super(props);
    this.state = {
      deck : null,
      drawn: []
    }
    this.getCard = this.getCard.bind(this);
  }

  async componentDidMount(){
    try{
      const res = await fetch(`${API_BASE}/new/shuffle/`);
      const data = await res.json();
      this.setState({deck: data});
    }catch(err){
      throw err;
    }
  }

  async getCard(){
    let id = this.state.deck.deck_id;
    try{
      const cardUrl = `${API_BASE}/${id}/draw`;
      const res = await fetch(cardUrl);
      const data = await res.json();
      const card = data.cards[0];
     
      if(!data.success){
        throw new Error('No card remaining!');
      } 
      this.setState(st => ({
        drawn : [
          ...st.drawn,
          { id: card.code, 
            image:card.image, 
            name: `${card.suit} of ${card.value}`
          }
        ]
      }));
    }catch(err){
      alert(err);
    }

  }

  render(){
    const cards = this.state.drawn.map(c=>(
      <Card key={c.id} name={c.name} image={c.image}/>
    ));

    return(
      <div className='Deck'>
        <h1 className='Deck-title'> Card Dealer</h1>
        <h2 className='Deck-title subtitle'>little demo with ReactJs</h2>
        <button className='Deck-btn' onClick={this.getCard}>Get Card!</button>
        <div className='Deck-cardarea'>
          {cards}
        </div>
      </div>
    );
  }
}

export default Deck;