import React from 'react';

const Photo = (props) => {
  return (
    <img
    className="featured-image"
    src={props.photo}
    alt=""
    id={`photo-${props.i}`}
    onClick={ (e) => props.selectPhoto(e, props.i)}/>
  )
}

export default Photo;