import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Recipes from './components/Recipes';
import Navbar from './components/Navbar';
import Top5 from './components/Top5';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Recipes}/>
        <Route exact path='/recipes' component={Recipes}/>
        <Route exact path='/recipes/top5' component={Top5}/>
      </Switch>
    </div>
  );
}

export default App;
