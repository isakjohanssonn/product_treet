import React, { useState, useEffect } from "react";
import Streak from "./Components/Streak";
import { Card, Button } from "react-bootstrap";
import MeasurementList, { Types } from "./Components/MeasurementList";
import Navigationbar from './Components/Navigationbar';
import Footer from './Components/Footer';
import RemainingMeasurements from './Components/RemainingMeasurements'
import {FaCalendarAlt} from 'react-icons/fa'
import './Home.css'
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { GrowingTree } from "./Components/GrowingTree";

const Home = () => {

  const [remaining] = useState(RemainingMeasurements());
  const [time] = useState(new Date().toLocaleString());
  const [remainingAmount, setRemainingAmount] = useState();
  useEffect(() => {
    setRemainingAmount(remaining.remaining.length);
}, [remaining]);
  return (
    <div>
      <Navigationbar title={'Home'} />
      <div className="topDiv">
        <div className="textDiv" id="toptopdiv"><h4 className="left">{time.substring(0,10)}</h4></div>
        <div className="textDiv"><h4 className="right"><FaCalendarAlt></FaCalendarAlt></h4></div>
      </div>

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


     
      <div className="topDiv">
        <div className="textDiv" id="measureementsText"><h4 className="left">Todays' Measuremnts</h4></div>
        <div className="textDiv"><h4 className="right">{remainingAmount / 2 } remaining</h4></div>
      </div>
      <MeasurementList />
      <Footer />
    </div>
  );
}

export default Home;