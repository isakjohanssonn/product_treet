import React from "react";
import './CollectibleMedal.css';
import { FiAward } from 'react-icons/fi';

const CollectibleMedal = (props) => {

  //const {number} = props;

  return (
    <div class = "medal">
      <FiAward class="fi-award"/>
     <div class="number-medal">
       {props.number}
     </div>
    </div>
  );
}

export default CollectibleMedal;