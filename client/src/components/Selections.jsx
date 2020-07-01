import React from "react";
import ColorButton from './ColorButton.jsx';
import Sizes from './Sizes.jsx';

const Selections = (props) => {
  return (
    <div className="variant-swatches variant-swatches-set variant-swatches-color Color-wrapper">
      <p style={{display: "flex", justifyContent: "space-between"}}>
      <span className="small-p small-p--black" style={{textTransform: "capitalize"}}>{props.colorNameCurrent}</span>
      </p>
      <div className="options-wrapper options-wrapper-color">
        {
          props.colors.map((color, index)=> {
            return (
              color.colorName === props.colorNameCurrent ?
                <ColorButton
                  color={color}
                  key={index}
                  i={index}
                  handleChangeColor={props.handleChangeColor}
                  style={"1px solid #979797"}/>
              : <ColorButton
                  color={color}
                  key={index}
                  i={index}
                  handleChangeColor={props.handleChangeColor}
                  style={"0px solid #979797"} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Selections;