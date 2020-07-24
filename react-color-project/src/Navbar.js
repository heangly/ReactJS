import React, {Component} from 'react';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import './Navbar.css'

class Navbar extends Component{
  render(){
    const {level, changeLevel} = this.props;
    return(
      <header className='Navbar'>
        <div className="logo">
          <a href="#">reactcolorpicker</a>
        </div>
        <div className="slider-container">
          <span>Level: {level}</span>
          <div className="slider">
            <Slider 
              defaultValue = {level} 
              min={100} 
              max={900} 
              step = {100}
              onAfterChange={changeLevel}
              trackStyle={{backgroundColor:'transparent'}}
              handleStyle={{
                backgroundColor:'orange', 
                outline:'none', 
                border:'2px solid orange', 
                boxShadow:'none', 
                width:'13px', 
                height:'13px', 
                marginLeft:'-7px', 
                marginTop:'-3px'}}
              railStyle={{height:8}}
            />
          </div>
        </div>
      </header>
    )
  }
}

export default Navbar;