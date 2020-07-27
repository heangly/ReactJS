import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Palette from './Palette';
import seedColors from './seedColors';
import {generatePalette} from './colorHelper';
import { render } from '@testing-library/react';


class App extends Component{
  findPalette(id){
    return seedColors.find(function(palette){
      return palette.id === id;
    });
  }

  render(){
    return(
      <Switch>
        <Route 
          exact path='/palette/:id' 
          render={routerProps => (
            <Palette
              palette={generatePalette(
                this.findPalette(routerProps.match.params.id)
              )}
            />
          )}
        />
      </Switch>
    )
  }
}



export default App;
