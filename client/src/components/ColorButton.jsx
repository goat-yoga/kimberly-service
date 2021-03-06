import React from "react";

const ColorButton = (props) => {
  return (
    <div className="UserSelection option-Color" onClick={(e) => props.handleChangeColor(e, props.i, props.color.colorName)}>
      <label role="button">
        <input className="Color" type="radio" name={`${props.i}-Color`} id={`Swatch-Color-${props.color.colorName}`}></input>
        <span className="swatch-wrapper" style={{border: `${props.style}`}}>
          <span className="swatch" style={{backgroundColor: `${props.color.swatch}`, display: "flex", justifyContent: "space-between"}}>{props.color.colorName}</span>
        </span>
      </label>
    </div>
  )
}

export default ColorButton;
