import React from 'react';

const Photo = (props) => {
    return (
      <img className="featured-image" src={props.photo} alt=""/>
    )
}

export default Photo;