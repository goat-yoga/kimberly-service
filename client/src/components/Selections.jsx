import React from "react";
import ColorButton from './ColorButton.jsx';
import Sizes from './Sizes.jsx';

class Selections extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }


  render() {
    return (
      <div className="variant-swatches variant-swatches-set variant-swatches-color Color-wrapper">
      <p style={{display: "flex", justifyContent: "space-between"}}>
        <span className="small-p small-p--black" style={{textTransform: "capitalize"}}>{this.props.colorNameCurrent}</span>
      </p>
      <div className="options-wrapper options-wrapper-color">
        {this.props.colors.map((color, index)=> {
          return <ColorButton
          color={color}
          key={index}
          i={index}
          handleChangePhotos={this.props.handleChangePhotos} />
        })}
      </div>
      </div>
    )
  }
}

export default Selections;