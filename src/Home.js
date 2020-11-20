import React, { Component } from "react";
import Streak from "./Components/Streak";
import { Button, ListGroup } from "react-bootstrap";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MeasurementList, { Types } from "./Components/MeasurementList";
import { GrowingTree } from "./Components/GrowingTree";
import { Card } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      Todays Data

      <Card className="HomeScreenCard">
        <div class="card-group center">

          <Card className="HomeScreenGrowingCard">
            <Link to="/Tree">
              <span className="card" >
                <GrowingTree />

              </span>
            </Link>

          </Card>


          <Card className="HomeScreenGrowingCard">
            <Streak />
          </Card>
        </div>
      </Card>

      <Link to="/Forest">
        <span className="card"  >
          <Button linkto='/Forest'>Forest</Button>

        </span>
      </Link>



      <MeasurementList />
      <ListGroup>
        <Link to="/addmeddata">
          <span className="card" >
            <Button>New Measurment</Button>
          </span>
        </Link>
        <Link to="/measurements">
          <span className="card" >
            <Button>Measurements</Button>
          </span>
        </Link>
        <Link to="/profile">
          <span className="card" >
            <Button linkto='/profile'>Profile</Button>
          </span>
        </Link>
        <Link to="/goals">
          <span className="card" >
            <Button>Goals</Button>
          </span>
        </Link>
        <Link to="/contact">
          <span className="card" >
            <Button>Messages</Button>
          </span>
        </Link>
      </ListGroup>
    </div>
  );
}

export default Home;