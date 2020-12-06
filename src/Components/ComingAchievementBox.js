//The box that renders the achievements that are upcoming. As props it takes a number which represents the last
//reached achievement
import React from "react";
import { Card } from "react-bootstrap";
import "./AchievementBox.css";
import { ArrowRight } from 'react-bootstrap-icons';
import AllAchievements from "./AllAchievements";
import UpcomingAchievement from "./Achievement";
import '../Global.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// If the arrow is not displayed (The one from bootstrap icons)
// Try installing bootstrap icons in the terminal with the command "npm install react-bootstrap-icons --save"

const ComingAchievementBox = (props) => {
  const { lastAchievement, showOne, currentStreak } = props;
  const achievement1 = AllAchievements(lastAchievement + 1);
  //If only one should show, send in showOne as true
  if (showOne) {
    return (
      <UpcomingAchievement achievement={achievement1.achievement}
       upcoming={1} showScore={1} currentStreak = {currentStreak}/>
    )
  }
  const achievement2 = AllAchievements(lastAchievement + 2);
  const achievement3 = AllAchievements(lastAchievement + 3);
  return (
    <div>
      <Card.Header className="achievementBoxCardHeader">Upcoming achievements</Card.Header>
      {/* Creating the card/box to contain the achievements */}
      <Card className="achievementBoxCardMain standardBorder" >
        <Card.Body className="achievementBoxCardBody card-columns">

          {/*This are the achievements displayed */}
          <UpcomingAchievement achievement={achievement1.achievement} 
          upcoming={1} showName={1} currentStreak = {currentStreak}/>
          <UpcomingAchievement achievement={achievement2.achievement} 
          upcoming={1} showName={1} currentStreak = {currentStreak}/>
          <UpcomingAchievement achievement={achievement3.achievement} 
          upcoming={1} showName={1} currentStreak = {currentStreak}/>

          {/* The arrow */}
          <ArrowRight viewBox="0 0 16 16" className="pull-right arrowAchivement" fill="currentColor" />
        </Card.Body>
      </Card>
    </div>

  );
}
export default ComingAchievementBox;