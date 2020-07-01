import React from 'react';

const Attributes = (props) => {
  return (
    <div className="col-6 attributes-row">
      <div className="fit">
        <h4 className="h4 h4-uppercase h4-black">fit</h4>
        <ul>
          <li className="small-p">High rise &amp; hits just above ankle</li>
        </ul>
      </div>
      <div className="fabrication">
        <h4 className="h4 h4-uppercase h4-black">fabrication</h4>
        <ul>
        <li className="small-p">Signature, micro-performance, double-knit Airlift fabric</li>
        </ul>
      </div>
    </div>
  )
}

export default Attributes;