import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup"
import "./Streak.css"

export default function Streak() {

  return (
    <div className="mainStreakDiv">
      <div className="header">
        <h3>Streaks</h3>
      </div>
      <ListGroup horizontal>
        <ListGroup.Item>4 days
          <h5>Streak</h5>
        </ListGroup.Item>
        <ListGroup.Item>18 days 
          <h5>Longest streak</h5>
        </ListGroup.Item>

      </ListGroup>

    </div>
  );
}