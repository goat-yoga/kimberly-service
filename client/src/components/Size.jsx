import React from 'react';

const Size = (props) => {
  return (
     <option onChange={(e)=>props.handleSelectSize(e)} className="size-selector-button small-p small-p--black">{props.size}</option>
  )
}

export default Size;