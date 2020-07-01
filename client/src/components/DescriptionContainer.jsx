import React from 'react';
import Description from './Description.jsx';
import Attributes from './Attributes.jsx';

const DescriptionContainer = (props) => {
  return (
   <div className="description row description-row">
    <div className="description-line"></div>
    <Description desc={props.desc}/>
    <Attributes/>
    <div className="description-line"></div>
   </div>
  )
}

export default DescriptionContainer;