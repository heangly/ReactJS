import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class PalleteList extends Component{
  render(){
    const {palettes} = this.props;
    return(
      <div>
        <h1>React Color</h1>
        {palettes.map(palette => (
          <p>
            <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
          </p>
         ))
        }
      </div>
    )
  }
}

export default PalleteList;