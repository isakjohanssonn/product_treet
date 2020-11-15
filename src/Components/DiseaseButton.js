import React, { useState } from "react";
import { Card } from "react-bootstrap";
import "./Disease.css";
import { ArrowRight, Box } from 'react-bootstrap-icons'; 
import GetDemographicsEHR from "../openEHR/GetDemographicsEHR.js";

// If the arrow is not displayed (The one from bootstrap icons)
// Try installing bootstrap icons in the terminal with the command "npm install react-bootstrap-icons --save"

const DiseaseButton = () => {
  const [person] = useState(GetDemographicsEHR)
  return (
    <div>


      <div>
        {/* Creating the card/box to contain the achievements */}
        <Card className="diseaseButtonCard" >
          <Card.Header className="diseaseButtonCardHeader">Your latest achievements</Card.Header>
          <Card.Body className="diseaseButtonCardBody card-columns">

          </Card.Body>
        </Card>
      </div>


      </div>
      );
}
export default DiseaseButton;