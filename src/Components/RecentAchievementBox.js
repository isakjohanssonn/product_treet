import React, { useState } from "react";
import { Card } from "react-bootstrap";
import "./AchievementBox.css";
import { ArrowRight, Box } from 'react-bootstrap-icons'; 
import CollectibleRibbon from "./CollectibleRibbon.js";
import CollectibleMedal from "./CollectibleMedal.js";
import CollectibleTrophy from "./CollectibleTrophy.js";
import GetDemographicsEHR from "../openEHR/GetDemographicsEHR.js";

// If the arrow is not displayed (The one from bootstrap icons)
// Try installing bootstrap icons in the terminal with the command "npm install react-bootstrap-icons --save"

const RecentAchievementBox = () => {
  const [person] = useState(GetDemographicsEHR)
  return (
    <div>


      <div>
        {/* Creating the card/box to contain the achievements */}
        <Card className="achievementBoxCardMain" >
          <Card.Header className="achievementBoxCardHeader">Your latest achievements</Card.Header>
          <Card.Body className="achievementBoxCardBody card-columns">


            {/*This are the achievements displayed */}
            <CollectibleRibbon number={person.Achievments.ribbon} />
            <CollectibleMedal number={person.Achievments.medal} />
            <CollectibleTrophy number={person.Achievments.trophy} />

            {/* The arrow */}
            <ArrowRight viewBox="0 0 16 16" className="pull-right arrowAchivement"  fill="currentColor"/>
          </Card.Body>
        </Card>
      </div>


      </div>
      );
}
export default RecentAchievementBox;
