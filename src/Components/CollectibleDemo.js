import React from "react";
import "./CollectibleDemo.css";
import CollectibleRibbon from "./CollectibleRibbon.js";
import CollectibleMedal from "./CollectibleMedal.js";
import CollectibleTrophy from "./CollectibleTrophy.js";

const CollectibleDemo = () => {

  return (
    <div class="collectible-demos">
      <CollectibleRibbon number={5}/>
      <CollectibleMedal number={10}/>
      <CollectibleTrophy number={24}/>

    </div>
  );
}

export default CollectibleDemo;