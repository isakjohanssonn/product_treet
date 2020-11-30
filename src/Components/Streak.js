import React, { useState } from "react";
import { Card } from "react-bootstrap"
import "./Streak.css"
import GrowingTree from './GrowingTree'
import ComingAchievementBox from "./ComingAchievementBox";


// This function prints the streakdiv. Depending on the hook: gamelvl (soon to be imported from EHR, hard coded at the moment)
//the different views will show depending on hook:gamelvl integer.  (for testing: change integer in hook: gamelvl to 1-3, in order to test different settings.).
// Author: O. Olsson & A. Cederblad
export default function Streak(props) {

  const {level} = props;
  const {reachedAchievements} = props;
  const {currentStreak, longestStreak} = props;
  
  


  const Game = () => {
    if (level === 1) {
      return (
        <Card border="secondary" className="streakCardWithin">
          <Card.Body className="body">
            <div className="verticalCenter" >
              <h3> Longest Streak</h3>
              <h4>{longestStreak} days </h4>
            </div>
          </Card.Body>
        </Card>
      );
    } else if (level === 2) {
      return (
        <Card border="secondary" className="streakCardWithin">
          <Card.Body>
          <ComingAchievementBox lastAchievement=
          {reachedAchievements[reachedAchievements.length - 1]}
           showOne = {1} currentStreak = {currentStreak}/>
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
                <h4>{currentStreak} days </h4>
              </div>
            </Card.Body>
          </Card>

        </Card.Body>
      </Card>
    </div>
  );
}