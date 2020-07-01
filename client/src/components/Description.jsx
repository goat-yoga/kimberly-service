import React from 'react';

const Description = (props) => {
  return (
    <div className="col-6">
      <h4 className="h4 h4-uppercase h4-black">description</h4>
      <div className="small-p">
        <p>{props.desc[0].paragraph[0]}</p>
        <ul>
          <li>{props.desc[0].bullets[0]}</li>
          <li>{props.desc[0].bullets[1]}</li>
          <li>{props.desc[0].bullets[2]}</li>
        </ul>
      </div>
    </div>
  )
}

export default Description;