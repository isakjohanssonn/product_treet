import React, { useState } from "react";
import "./Slider.css";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { getTree } from "./AllTrees";

const Slider = () => {

  return (
    <div className="slider">
        <Link to="/forest" className="slider-link">
            <Button className="slider-button">
              <object className="tree-image-slider" type="image/svg+xml" data={getTree(3, 7, false, false)}/>
              Forest
            </Button>
        </Link>
        <Link to="/achievement" className="slider-link">
            <Button className="slider-button">Achievements</Button>
        </Link>
    </div>
  );
}

export default Slider;