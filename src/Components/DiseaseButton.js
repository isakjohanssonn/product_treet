import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import { Card } from "react-bootstrap";
import "./DiseaseButton.css";
import { ArrowRight, Box } from 'react-bootstrap-icons'; 
import GetDemographicsEHR from "../openEHR/GetDemographicsEHR.js";
import {Link} from 'react-router-dom';

// If the arrow is not displayed (The one from bootstrap icons)
// Try installing bootstrap icons in the terminal with the command "npm install react-bootstrap-icons --save"

const DiseaseButton = (props) => {
  const [person] = useState(GetDemographicsEHR)
  if (props.title == 'Diabetes') {
  return (
    <div>     
       <Link to='/Diabetes'>    
        <Card  className="diseaseButtonCard" id='firstButton'>
          <Card.Header className="diseaseButtonCardHeader">{props.title}</Card.Header>
          <Card.Body className="diseaseButtonCardBody card-columns">
          </Card.Body>
        </Card>
        </Link>
      </div>
      );
   } else {
      return (
      <div>
      {/* <Link to='/'>  */}
      <Card  className="diseaseButtonCard">
      <Card.Header className="diseaseButtonCardHeader">{props.title}</Card.Header>
      <Card.Body className="diseaseButtonCardBody card-columns">
      </Card.Body>
      </Card>
      {/* </Link>  */}
      </div>
      );
     }
}
export default DiseaseButton;