import React from 'react';

const Shipping = () => {
  return (
    <div>
      <div className="icons-box" style={{marginTop: "20px"}}>
        <div className="icons-box-item">
          <div className="icons-box-icon">
            <img src="https://cdn.shopify.com/s/files/1/2185/2813/files/icon-truck-large.svg?v=1588201365" alt="" className="shipping-icon" style={{verticalAlign: "unset"}}/>
          </div>
          <div>
            <span className="small-p small-p--mobile-center small-p--semibold small-p--black d-block" style={{margin: "0 0 0 37px"}}>Fast &amp; Free Shipping</span>
            <p className="shipping__api__text small-p small-p--mobile-center small-p--black">
              <span className="AloShippingEstimate_message_wrapper">Free 1-2 Day Shipping to California</span>
            </p>
          </div>
        </div>
        <div className="icons-box-item">
          <div className="icons-box-icon">
            <img src="https://cdn.shopify.com/s/files/1/2185/2813/files/icon-box-large.svg?v=1588201365" alt="" className="return-icon" style={{verticalAlign: "unset"}}/>
          </div>
          <p className="shipping__api__text small-p small-p--mobile-center small-p--black">
            <span className="small-p small-p--mobile-center small-p--semibold small-p--black">Easy Returns</span>
            <br/>Unsure on color or size? Get both! Easy returns with a prepaid return label.
          </p>
        </div>
        <div className="icons-box-item">
          <div className="icons-box-icon">
            <img src="https://cdn.shopify.com/s/files/1/2185/2813/files/icon-alo-moves.svg?v=1588201370" alt="Alo Moves" className="alo-moves-icon" style={{verticalAlign: "unset"}}/>
          </div>
          <p className="shipping__api__text small-p small-p--mobile-center small-p--black">
            <span className="small-p small-p--mobile-center small-p--semibold small-p--black">30 Days Free!</span>
            <br/>1 Month of free yoga with any purchase. Try Alo Moves and let’s om together.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Shipping;