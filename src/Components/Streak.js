import React, { useState } from "react";
import { Card } from "react-bootstrap"
import "./Streak.css"
import GrowingTree from './GrowingTree'
import ComingAchievementBox from "./ComingAchievementBox";


// This function prints the streakdiv. Depending on the hook: gamelvl (soon to be imported from EHR, hard coded at the moment)
//the different views will show depending on hook:gamelvl integer.  (for testing: change integer in hook: gamelvl to 1-3, in order to test different settings.).
// Author: O. Olsson
export default function Streak(props) {

  const {level} = props;
  const [streak, setStreak] = useState(1);
  const [longest, setLongest] = useState(5);
  const achievements = [0, 1];


  const Game = () => {
    if (level === 1) {
      return (
        <Card border="secondary" className="streakCardWithin">
          <Card.Body className="body">
            <div className="verticalCenter" >
              <h3> Longest Streak</h3>
              <h4>{longest} days </h4>
            </div>
          </Card.Body>
        </Card>
      );
    } else if (level === 2) {
      return (
        <Card border="secondary" className="streakCardWithin">
          <Card.Body>
          <ComingAchievementBox lastAchievement={achievements[achievements.length - 1]} showOne = {1} />
          </Card.Body>
        </Card>
      );
    } else {
      return (
        <Card border="secondary" className="streakCardWithin">
          <Card.Body>
            <GrowingTree />
          </Card.Body>
        </Card >
      );
    }
  }
  return (
    <div>
      <Card border="secondary" className="mainCard" id="StreakCard">
        <Card.Body className="streakCardBody">
          {Game()}
          <Card border="secondary" className="streakCardWithin" id="middleLine">
            <Card.Body className="body">
              <div className="verticalCenter" >
                <h3>Current Streak</h3>
                <h4>{streak} days </h4>
              </div>
            </Card.Body>
          </Card>

        </Card.Body>
      </Card>
    </div>
  );
}