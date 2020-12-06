import React, { useState } from "react";
import "./Slider.css";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { getTree } from "./AllTrees";
import GoldenStar from "../img/achievementsimg/golden_star.png";

const Slider = (props) => {
  const {level} = props;
  let firstItem;
  let secondItem;
  if (level > 1)
  {
    secondItem = (<Link to="/achievement" className="slider-link">
    <Button className="slider-button">
      <div className="image-holder">
        <object className="tree-image-slider" type="image/png" data={GoldenStar}/>
      </div>
      Achievements
    </Button>
</Link>);
  }
  if( level === 3)
  {
    firstItem = (<Link to="/forest" className="slider-link">
    <Button className="slider-button">
      <div className="image-holder">
        <object className="tree-image-slider" type="image/svg+xml" data={getTree(3, 7, false, false)}/>
      </div>
      Forest
    </Button>
</Link>);
  }
  return (
    <div className="slider">
        {firstItem}
        {secondItem}
    </div>
  );
}

export default Slider;