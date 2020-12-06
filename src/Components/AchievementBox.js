import React from "react";
import { Card } from "react-bootstrap";
import "./AchievementBox.css";
import "../Global.css";
import { ArrowRight } from 'react-bootstrap-icons';
import AllAchievements from "./AllAchievements";
import Achievement from "./Achievement";
import 'bootstrap/dist/css/bootstrap.min.css';

// If the arrow is not displayed (The one from bootstrap icons)
// Try installing bootstrap icons in the terminal with the command "npm install react-bootstrap-icons --save"

const AchievementBox = (props) => {
  const { reachedAchievements } = props;
  //Gets data about the three last achievements from allachievements
  const achievement1 = AllAchievements(reachedAchievements[reachedAchievements.length - 1]);
  const achievement2 = AllAchievements(reachedAchievements[reachedAchievements.length - 2]);
  const achievement3 = AllAchievements(reachedAchievements[reachedAchievements.length - 3]);
  return (
    <div>
      <Card.Header className="achievementBoxCardHeader ">Your latest achievements</Card.Header>
      {/* Creating the card/box to contain the achievements */}
      <Card className="achievementBoxCardMain standardBorder" >
        <Card.Body className="achievementBoxCardBody card-columns">

          {/*This are the achievements displayed */}
          <Achievement achievement={achievement3.achievement} showName={1} />
          <Achievement achievement={achievement2.achievement} showName={1} />
          <Achievement achievement={achievement1.achievement} showName={1} />

          {/* The arrow */}
          <ArrowRight viewBox="0 0 16 16" className="pull-right arrowAchivement" fill="currentColor" />
        </Card.Body>
      </Card>
    </div>

  );
}
export default AchievementBox;
