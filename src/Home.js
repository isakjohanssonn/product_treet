import React, { Component } from "react";
import Streak from "./Components/Streak";
import { Button, ListGroup } from "react-bootstrap";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";


class Home extends Component {
  render() {
    return (
      <div>
        <Streak />
        {/* <ListGroup> */}
        <Link to="/addmeddata">
          <span className="card" >
            <Button>New Measurment</Button>
          </span>
        </Link>
        <Link to="/history">
          <span className="card" >
            <Button>Measurements/History</Button>
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
        {/* </ListGroup> */}
      </div>
    );
  }
}

export default Home;