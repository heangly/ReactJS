import React from 'react';
import Chips from './Chips';
import Sardines from './Sardines';
import Soda from './Soda';
import VendingMachine from './VendingMachine';
import Navbar from "./Navbar";
import {Route, Switch, NavLink} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={VendingMachine}/>
        <Route exact path="/soda" component={Soda}/>
        <Route exact path="/sardines" component={Sardines}/>
        <Route exact path="/chips" component={Chips}/>
      </Switch>
    
    </div>
  );
}

export default App;
