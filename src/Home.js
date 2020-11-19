import React, { Component } from "react";
import Streak from "./Components/Streak";
import { Button, ListGroup } from "react-bootstrap";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MeasurementList, {Types} from "./Components/MeasurementList";
import { GrowingTree } from "./Components/GrowingTree";

const Home = () =>  {
    return (
      <div>
        <Streak />

        <Link to="/Tree">
          <span className="card" >
            <Button linkto={GrowingTree} type={GrowingTree} class={GrowingTree} >Tree</Button>
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