import React, {Component} from 'react';
import Pokegame from './Pokegame';
import './App.css'

class App extends Component{
  render(){
    return (
      <div className="App">
        <h1 className="App-title">Pokegame</h1>
        <Pokegame />
      </div>
    );
  }
}

export default App;