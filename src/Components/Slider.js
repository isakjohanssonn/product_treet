import React, { useState } from "react";
import "./Slider.css";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const Slider = () => {

  return (
    <div className="slider">
        <Link to="/forest" className="slider-link">
            <Button className="slider-button">Forest</Button>
        </Link>
        <Link to="/achievement" className="slider-link">
            <Button className="slider-button">Achievements</Button>
        </Link>
    </div>
  );
}

export default Slider;