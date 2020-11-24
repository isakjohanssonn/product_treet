import React from "react";
import './CollectibleTrophy.css';
import { FaTrophy } from 'react-icons/fa';

const CollectibleTrophy = (props) => {

  const {number} = props;

  return (
    <div class = "trophy">
      <FaTrophy className="fa-trophy"/>
     <div className="number-trophy">
       {number}
     </div>
    </div>
  );
}

export default CollectibleTrophy;