import React from 'react';

const Sizes = (props) => {
  return (
    <div className="variant-swatches variant-swatches-set variant-swatches-color Size-wrapper">
      <div className="size-selector-wrapper">
          <select className="size-selector-button small-p small-p--black" onChange={(e)=>props.handleSelectSize(e)}>
              <option>Select Size</option>
              {props.currentSizes.map((size, index)=> {
                return <option className="size-selector-button small-p small-p--black" key={index} >{size} </option>
              })}
            </select>
      </div>
    </div>
  )
}

export default Sizes;