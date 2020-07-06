import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Photos from '../Photos.jsx';

class DemoCarousel extends React.Component {
  constructor(props) {
    super(props)
  }

    render() {
        return (
          <div >
            <Carousel showArrows={true} showThumbs={false} showIndicators={false}>
              {
                this.props.photos.map((photo, index)=> {
                  return <img
                  className ="carousel-img"
                  src={photo}
                  alt=""
                  id={index}
                  style={{height: "auto", width: `auto\9`, maxWidth: "35%"}}
                  onClick={ () => this.props.toggleCarousel()}/>
                })
              }
            </Carousel>
          </div>
        );
      }
    }

    export default DemoCarousel;
