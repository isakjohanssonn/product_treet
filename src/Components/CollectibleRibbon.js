import React from "react";
import './CollectibleRibbon.css';
import { GiRibbonMedal } from 'react-icons/gi';

const CollectibleRibbon = (props) => {

  const {number} = props;

  return (
    <div class = "ribbon">
      <GiRibbonMedal className="gi-ribbon"/>
     <div className="number-ribbon">
       {number}
     </div>
    </div>
  );
}

export default CollectibleRibbon;