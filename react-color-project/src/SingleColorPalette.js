import React, {Component} from 'react';
import ColorBox from './ColorBox';
import PaletteFooter from './PaletteFooter';
import Navbar from './Navbar';
import {withStyles} from '@material-ui/styles';
import styles from './styles/PaletteStyles'
import {Link} from 'react-router-dom';



class SingleColorPalette extends Component{
  constructor(props){
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.state = {format: "hex"};
    this.changeFormat = this.changeFormat.bind(this);
  }

  gatherShades(palette, colorToFilterBy){
    let shades = [];
    let allColors = palette.colors;
    for (let key in allColors){
      shades = shades.concat(
        allColors[key].filter(color => color.id === colorToFilterBy)
      )
    }

    return shades.slice(1);
  }

  changeFormat(val){
    this.setState({format:val});
  }

  render(){
    const {format} = this.state;
    const {paletteName, emoji, id} = this.props.palette; 
    const {classes} = this.props;
    const ColorBoxes = this._shades.map(color => (
      <ColorBox 
        key={color.name} 
        name={color.name} 
        background={color[format]} 
        showingFullPalette={false} 
      />
    ));
    return(
      <div className={classes.Palette}>
        <Navbar handleChange={this.changeFormat} showingAllColors={false}/>
        <div className={classes.colors}>
          {ColorBoxes}
          <div className={classes.goBack}>
            <Link to ={`/palette/${id}`}>Go Back</Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji}/>
      </div>
    )
  }
}

export default withStyles(styles)(SingleColorPalette);