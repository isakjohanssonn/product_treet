import React from "react";
import "./CollectibleDemo.css";
import CollectibleRibbon from "./CollectibleRibbon.js";
import CollectibleMedal from "./CollectibleMedal.js";

const CollectibleDemo = () => {

  return (
    <div class="collectible-demos">
      <CollectibleRibbon number={5}/>
      <CollectibleMedal number={10}/>

    </div>
  );
}

export default CollectibleDemo;