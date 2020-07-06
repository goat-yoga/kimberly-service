import React from 'react';
import Photo from './Photo.jsx';

const Photos = (props) => {
  return (
    <div className="main-images-wrapper" >
      {
        props.photos.map((photo, index)=> {
          return <Photo
          photo={photo}
          key={index}
          i={index}
          selectPhoto={props.selectPhoto}
          toggleCarousel={props.toggleCarousel}/>
        })
      }
    </div>
  )
}

export default Photos;