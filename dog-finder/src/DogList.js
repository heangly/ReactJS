import React, {Component} from 'react';
import { isEmptyObject } from 'jquery';
import './DogList.css';

class DogList extends Component{
  render(){
    return(
      <div className='DogList'>
        <h1 className='display-1 text-center'>Dog List!</h1>

        <div className='container'>
          <div className='row'>
            {this.props.dogs.map(d => (
              <div className='Dog col-md-6 col-lg-4 text-center' key={d.name}>
                <img src={d.src} alt={d.name}/>
                <h3>{d.name}</h3>
              </div>
            ))}
          </div> {/* End of Row1*/}
        </div>  {/* End of Container*/}

      </div>
    )
  }
}

export default DogList;