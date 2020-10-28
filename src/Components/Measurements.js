import React from "react";
import "./Measurements.css";
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

export default function Measurements() {

  return (
    <div>
      <div className="header">
        <h3>Measurements</h3>
      </div>
        <div className="topButtons">
        <Dropdown>
            <Dropdown.Toggle className="topButton" id="dropdown-basic">
                Type
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        
        <Button className="topButton" id='allMeasurements'>All measurements</Button>
        </div>
    </div>
  );
}