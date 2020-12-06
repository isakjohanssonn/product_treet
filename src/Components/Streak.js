import React from "react";
import { Card } from "react-bootstrap"
import "../Global.css";
import "./Streak.css"
import GrowingTree from './GrowingTree'
import ComingAchievementBox from "./ComingAchievementBox";
import { forestParameters } from "../Forest";


// This function prints the streakdiv. Depending on the hook: gamelvl (soon to be imported from EHR, hard coded at the moment)
//the different views will show depending on hook:gamelvl integer.  (for testing: change integer in hook: gamelvl to 1-3, in order to test different settings.).
// Author: O. Olsson & A. Cederblad
export default function Streak(props) {

  const {level} = props;
  const {reachedAchievements} = props;
  const {currentStreak, longestStreak} = props;
  const {is_sick, tree, treeAge} = props;
 

  const Game = () => {
    if (level === 1) {
      return (
        <Card border="secondary" className="streakCardWithin standardBorder">
          <Card.Body className="body level1">
            <div className="verticalCenter" >
              <h3>{longestStreak} days </h3>
              <h4> Longest Streak</h4>
            </div>
          </Card.Body>
        </Card>
      );
    } else if (level === 2) {
      return (
        <Card border="secondary" className="streakCardWithin standardBorder">
          <Card.Body>
            <ComingAchievementBox lastAchievement=
              {reachedAchievements[reachedAchievements.length - 1]}
              showOne={1} currentStreak={currentStreak} />
          </Card.Body>
        </Card>
      );
    } else {
      // var parameters = [];
      // parameters = forestParameters();
      // const tree = parameters[0];
      // const current_age = parameters[1];
      // const is_sick = parameters[2]
      return (
        <Card className="streakCardWithin standardBorder">
          <Card.Body>
            <GrowingTree age={treeAge} current_tree={tree} is_sick={is_sick} is_animated={false}/>
          </Card.Body>
        </Card>
      );
    }
  }
  return (
    <div>
      <Card className="mainCard standardBorder" id="StreakCard">
        <Card.Body className="streakCardBody">
          {Game()}
          <Card border="secondary" className="streakCardWithin" id="middleLine">
            <Card.Body className="body">
              <div className="verticalCenter" >
                <h3>{currentStreak} days </h3>
                <h4>Current Streak</h4>
              </div>
            </Card.Body>
          </Card>
        </Card.Body>
      </Card>
    </div>
  );
}