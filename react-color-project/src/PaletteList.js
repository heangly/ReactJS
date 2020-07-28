import React, {Component} from 'react';
import MiniPalette from './MiniPalette';
import {Link} from 'react-router-dom';

class PalleteList extends Component{
  render(){
    const {palettes} = this.props;
    return(
      <div>
        <MiniPalette />
        <h1>React Color</h1>
        {palettes.map(palette => (
          <MiniPalette {...palette}/>
         ))
        }
      </div>
    )
  }
}

export default PalleteList;