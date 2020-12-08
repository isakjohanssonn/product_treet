import React, { useState } from "react";
import { Card } from "react-bootstrap";
import "../Global.css";
import "./DiseaseButton.css";
import { ArrowRight } from 'react-bootstrap-icons';
import GetDemographicsEHR from "../openEHR/GetDemographicsEHR.js";
import { Link } from 'react-router-dom';
import GoldenStar from "../img/achievementsimg/golden_star.png";
import SilverStar from "../img/achievementsimg/silver_star.png";
import BronzeStar from "../img/achievementsimg/bronze_star.png";
// If the arrow is not displayed (The one from bootstrap icons)
// Try installing bootstrap icons in the terminal with the command "npm install react-bootstrap-icons --save"

const DiseaseButton = (props) => {
  const {level} = props;
  const [person] = useState(GetDemographicsEHR)
  if (props.title === 'Diabetes') {
    let contentIfAchievements;
    if (level > 1) 
    {
      contentIfAchievements = (<div className="starDiv"><img src={SilverStar} className="star" alt = {"badge"}/>
      <img src={BronzeStar} className="star" alt = {"badge"}/>
      <img src={GoldenStar} className="star" alt = {"badge"}/> </div>)
    }
    else {
      contentIfAchievements = (<div className="starDiv"> </div>)
    };
    return (
      <div>
        <Link to='/Diabetes' className="link">
          <Card className="diseaseButtonCard standardBorder" id='firstButton'>
            <Card.Header className="diseaseButtonCardHeader">{props.title}</Card.Header>
            <Card.Body className="diseaseButtonCardBody card-columns">
              <div className="arrowDiv firstArrowDiv" />
                {contentIfAchievements}
              <div className="arrowDiv">
                <ArrowRight viewBox="0 0 16 16" className="pull-right arrowAchivement" fill="currentColor" />
              </div>
            </Card.Body>
          </Card>
        </Link>
      </div>
    );
  } else {
    return (
      <div>
        {/* <Link to='/'>  */}
        <Card className="diseaseButtonCard standardBorder">
          <Card.Header className="diseaseButtonCardHeader">{props.title}</Card.Header>
          <Card.Body className="diseaseButtonCardBody card-columns">
            <div className="arrowDiv noStarsArrow">
              <ArrowRight viewBox="0 0 16 16" className="pull-right arrowAchivement" fill="currentColor" />
            </div>
          </Card.Body>
        </Card>
        {/* </Link>  */}
      </div>
    );
  }
}
export default DiseaseButton;