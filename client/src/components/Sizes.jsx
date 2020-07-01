import React from 'react';
import Size from './Size.jsx';

const Sizes = (props) => {
  return (
    <div className="variant-swatches variant-swatches-set variant-swatches-color Size-wrapper">
      <div className="size-selector-wrapper">

          <select className="size-selector-button small-p small-p--black" onChange={(e)=>props.handleSelectSize(e)}>
              <option>Select Size</option>
              {props.currentSizes.map((size, index)=> {
                return <Size key={index}
                size={size}
                sizeSelected={props.sizeSelected}
                />
              })}
            </select>
      </div>
    </div>
  )
}

export default Sizes;