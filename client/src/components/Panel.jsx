import React from 'react';
import Shipping from './Shipping.jsx';
import Selections from './Selections.jsx'
import Sizes from './Sizes.jsx';

const Panel = (props) => {

  return (
    <div>
      <div className="title-wrapper w-100">
        <h1 className="h3 h3--uppercase">{props.name}</h1>
      <div className="price-wrapper">
        <div className="Price">
        <span className="product-price h6 h6--uppercase d-none d-md-inline-block">${props.price}</span>
      </div>
        <span className="product-price h6 h6--uppercase" style={{margin: "0px 0.5rem"}}> |</span>
        <a href="#Reviews" aria-label="Go to reviews" className="ReviewsBottomLine">
          <div className="StarsUI">
            <span className="fill" style={{width: "91.579%"}}></span>
          </div>
          <div>(19)</div>
        </a>
      </div>
      <div className="afterpay-wrapper">
        <p className="afterpay-p small-p">of 4 installments of ${(props.price)/4} by &nbsp;</p>
        <a className="afterpay__modal-toggle" data-toggle="modal" data-target="#AfterPay" role="button">
          <img className="img-fluid" src="https://cdn.shopify.com/s/files/1/2185/2813/files/after-pay-logo.svg?v=1585339086" alt="Afterpay logo"/>
          <img className="afterpay__question-mark" src="https://cdn.shopify.com/s/files/1/2185/2813/files/question-mark.svg?v=1585339694" alt="More Info"/></a>
      </div>
      </div>
      <div className="variant-sections">
        <div>
          <div className="child-product-wrapper">
            <div className="overlay show"></div>
            <div className="child-product-right-part">
              <Selections colors={props.colors}
              currentColor={props.currentColor}
              handleChangePhotos={props.handleChangePhotos}
              colorNameCurrent={props.colorNameCurrent}/>
              <Sizes
              currentSizes={props.currentSizes}
              sizeSelected={props.sizeSelected}
              handleSelectSize={props.handleSelectSize}/>
            </div>
          </div>
        </div>
      </div>
      <div>
        {props.sizeSelected ?
        <button className="product-buy-button" type="button" style={{backgroundColor: "#000"}}>Add to Bag</button>
        : <button className="product-buy-button" type="button">Select Size</button>}
      </div>
      <Shipping/>
    </div>
  )
}

export default Panel;