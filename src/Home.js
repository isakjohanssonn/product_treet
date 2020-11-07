import React, { Component } from "react";
import Streak from "./Components/Streak";
import { Button, ListGroup } from "react-bootstrap";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MeasurementList from "./Components/MeasurementList";
import {BsGraphUp, IoMdWalk} from "react-icons/all";

const Home = () =>  {
      const data = [
          {header: 'Upcoming Measurement', time: '09:00', activity: 'Blood sugar', icon: BsGraphUp, completed: false, target:'70-99mg/dl'},
          {header: 'Upcoming Activity', time: '15:00', activity: 'Go for a walk', icon: IoMdWalk, completed: false, target:'30 min'},
          {header: 'Upcoming Measurement', time: '12:00', activity: 'Blood sugar', icon: BsGraphUp, completed: false, target:'70-99mg/dl'},
          {header: 'Upcoming Measurement', time: '18:00', activity: 'Blood sugar', icon: BsGraphUp, completed: false, target:'70-99mg/dl'}
          ];

    return (
      <div>
        <Streak />
        <MeasurementList data={data}/>


        {/* <ListGroup> */}
          {/*<Link to="/addmeddata">
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
        </Link>*/}
        {/* </ListGroup> */}
      </div>
    );
}

export default Home;