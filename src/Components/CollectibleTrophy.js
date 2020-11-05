import React from "react";
import './CollectibleTrophy.css';
import { FaTrophy } from 'react-icons/fa';

const CollectibleTrophy = (props) => {

  const {number} = props;

  return (
    <div class = "trophy">
      <FaTrophy class="fa-trophy"/>
     <div class="number-trophy">
       {number}
     </div>
    </div>
  );
}

export default CollectibleTrophy;