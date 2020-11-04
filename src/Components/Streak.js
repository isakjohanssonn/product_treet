import React, { useState } from "react";
import {Card} from "react-bootstrap"
import "./Streak.css"

export default function Streak() {

  return (
    <div>
    <Card border="secondary" className="streakCardMain">
    <Card.Header className="streakCardHeader">Streaks</Card.Header>
    <Card.Body className="streakCardBody">

      <Card border="secondary" className="streakCardWithin">
        <Card.Body>
          <Card.Text>
            X dagar
          </Card.Text>
          <Card.Text>
            Current streak
          </Card.Text>
        </Card.Body>
      </Card>
      <Card border="secondary" className="streakCardWithin">
        <Card.Body>
          <Card.Text>
            X dagar
          </Card.Text>
          <Card.Text>
            Longest streak
          </Card.Text>
        </Card.Body>
      </Card>

    </Card.Body>
  </Card>

    </div>
  );
}