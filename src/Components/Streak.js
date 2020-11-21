import React, { useState } from "react";
import { Card } from "react-bootstrap"
import "./Streak.css"
// import Achievement from './Achievement'
//import current_tree from './current_tree'

export default function Streak() {

  const [gamelvl, setGamelvl] = useState(1);
  const [streak, setStreak] = useState(1);
  const [longest, setLongest] = useState(5);


  const Game = () => {
    if (gamelvl == 1) {
      return (
        <Card border="secondary" className="streakCardWithin">
          <Card.Body>
            <h3> Longest Streak</h3>
            <h4>{longest} days </h4>
          </Card.Body>
        </Card>
      );
    } else if (gamelvl == 2) {
      // return (
      //   <Achievemnts />
      // );
      return null; //remove when code is in
    } else {
      // return (
      //   <current_tree />
      // );
      return null; //remove when code is in
    }


  }


  return (
    <div>
      <Card border="secondary" className="mainCard" id="StreakCard">
        <Card.Body className="streakCardBody">
          {Game()}
          <Card border="secondary" className="streakCardWithin" id="middleLine">
            <Card.Body>
              <h3>Current Streak</h3>
              <h4>{streak} days </h4>
            </Card.Body>
          </Card>

        </Card.Body>
      </Card>


    </div>
  );
}