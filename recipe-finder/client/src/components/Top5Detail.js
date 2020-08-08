import React, {Component} from 'react';
import '../styles/Top5Detail.css'

class Top5Detail extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const {name, like, image} = this.props;
    return(
      <div className='Top5Detail'>
        <img src={image} alt={name}/>
        <div className='Top5Detail-right'>
          <h3>{name}</h3>
          <h3>{like} Votes</h3>
        </div>
      </div>
    )
  }
}


export default Top5Detail;