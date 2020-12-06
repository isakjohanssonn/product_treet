//The box that renders all existing achievements.
import React from "react";
import { Card } from "react-bootstrap";
import '../Global.css';
import "./AchievementBox.css";
import { ArrowRight } from 'react-bootstrap-icons';
import AllAchievements from "./AllAchievements";
import Achievement from "./Achievement";
import 'bootstrap/dist/css/bootstrap.min.css';

// If the arrow is not displayed (The one from bootstrap icons)
// Try installing bootstrap icons in the terminal with the command "npm install react-bootstrap-icons --save"

const AllAchievementBox = () => {
  //Gets data about the three last achievements from allachievements
  const achievement1 = AllAchievements(0);
  var i;
  var result = [];
  result[0] = <Achievement achievement = {achievement1.achievement} showName = {1} />
  var temp;
  for (i = 0; i < (achievement1.totalNumberOfAchievements - 1); i++) {

    temp = AllAchievements(i + 1);
    result[i + 1] = <Achievement achievement = {temp.achievement} showName = {1} />
  }


  return (
    <div>
      <Card.Header className="achievementBoxCardHeader">All achievements</Card.Header>
      {/* Creating the card/box to contain the achievements */}
      <Card className="achievementBoxCardMain standardBorder" >
        <Card.Body className="achievementBoxCardBody card-columns">
          <div className="row row-cols-md-3">
            {result}
          </div>
        </Card.Body>
      </Card>
    </div>

  );
}
export default AllAchievementBox;