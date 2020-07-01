import React from 'react';

const Attributes = (props) => {
  return (
    <div className="col-6 attributes-row">
      <div className="fit">
        <h4 className="h4 h4-uppercase h4-black">fit</h4>
        <ul>
          {
            props.fit.map( sentence => {
              return <li className="small-p">{sentence}</li>
            })
          }
        </ul>
      </div>
      <div className="fabrication">
        <h4 className="h4 h4-uppercase h4-black">fabrication</h4>
        <ul>
          {
            props.fabrication.map( sentence => {
              return <li className="small-p">{sentence}</li>
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Attributes;