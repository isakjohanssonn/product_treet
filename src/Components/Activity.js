import React from "react";
import "./Measurements.css";
import Streak from "./Streak";
import { Card } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { LineChart, XAxis, Line, ResponsiveContainer } from 'recharts';
import Navigationbar from './Navigationbar';
import Footer from './Footer';
import GraphActivity from './GraphActivity';
import GraphBloodSugar from './GraphBloodSugar';
import GraphActivityExtended from './GraphActivityExt';
import {BsGraphUp, IoMdWalk} from "react-icons/all";
import { ArrowRight } from 'react-bootstrap-icons'; 

const Measurements = () => {

  return (
    <div>
      <Navigationbar title={'Activity'} />
      
        <Link to="/allmeasurements">
        <Card style={{marginTop: 80, height: 50, paddingTop: 0}}>
          <Card.Body style={{paddingLeft: 10, paddingRight: 10}}>
          <div style={{width: "85%", display: "inline-block"}}>
          <h4 style={{marginTop: "2.5%", color: "black", verticalAlign: "middle", position: "relative", display: "inline-block"}}>All measurements</h4>
          </div>
          <div style={{display: "inline-block", width: "10%"}}>
          <ArrowRight style={{marginTop: 0}} viewBox="0 0 16 16" className="pull-right arrowAchivement" fill="black" />
          </div>
          </Card.Body>
        </Card>
        </Link>
    
<br />
      <div>

      {/* Card containing Activity Graph */}
      <Link to="/allmeasurements" style={{color: "black"}}>
      <Card>
          <Card.Body style={{paddingLeft: 10, paddingRight: 10, paddingBottom: 10}}>
          <div id="lineup-wrapper">
          <IoMdWalk style={{width: "8%", height: "8%", display: "inline-block"}}/>
          <h4 style={{display: "inline-block", marginTop: "2.5%", verticalAlign: "middle"}}>Activity</h4>
          <ArrowRight style={{float: "right", marginTop: 2, height: "10%", width: "10%"}} viewBox="0 0 16 16" className="pull-right arrowAchivement" fill="black" />
          </div>
          <GraphActivityExtended />
          </Card.Body>
        </Card>
        </Link>
      
      
      
      </div>
    
     
   
    
      <Footer />
    </div>
  );
}

export default Measurements;