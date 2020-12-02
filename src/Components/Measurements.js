import React from "react";
import "./Measurements.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navigationbar from './Navigationbar';
import Footer from './Footer';
import GraphActivity from './GraphActivity';
import GraphBloodSugar from './GraphBloodSugar';
import { BsGraphUp, IoMdWalk } from "react-icons/all";
import { ArrowRight } from 'react-bootstrap-icons';
import GraphActivityExtended from './GraphActivityExt';

const Measurements = () => {

  return (
    <div>
      <Navigationbar title={'History'} />

      <Link to="/allmeasurements">
        <Card style={{ marginTop: 80, height: 50, paddingTop: 0 }}>
          <Card.Body style={{ paddingLeft: 10, paddingRight: 10 }}>
            <div style={{ width: "85%", display: "inline-block" }}>
              <h4 style={{ marginTop: "2.5%", color: "black", verticalAlign: "middle", position: "relative", display: "inline-block" }}>All measurements</h4>
            </div>
            <div style={{ display: "inline-block", width: "10%" }}>
              <ArrowRight style={{ marginTop: 0, width: 50, height: "width"}} viewBox="0 0 16 16" className="pull-right arrowAchivement" fill="black" />
            </div>
          </Card.Body>
        </Card>
      </Link>

      <br />
      
      {/* Card containing Activity Graph */}
      <div>
       {/* <Link to="/allmeasurements" style={{ color: "black" }}> */}
          <Card>
            <Card.Body style={{ paddingLeft: 10, paddingRight: 10, paddingBottom: 10 }}>
              <div id="lineup-wrapper">
                <IoMdWalk style={{ width: "8%", height: "8%", display: "inline-block" }} />
                <h4 style={{ display: "inline-block", marginTop: "2.5%", verticalAlign: "middle" }}>Activity</h4>
                <ArrowRight style={{ float: "right", marginTop: 2, width: "10%", height: "10%" }} viewBox="0 0 16 16" className="pull-right arrowAchivement" fill="black" />
              </div>
              <GraphActivity />
            </Card.Body>
          </Card>
       {/* </Link> */}

        <br />

        {/* Card containing Blood Sugar Graph */}
        <Card>
          <Card.Body style={{ paddingLeft: 10, paddingRight: 10, paddingBottom: 10 }}>
            <div id="lineup-wrapper">
              <BsGraphUp style={{ marginLeft: 4, width: "6%", height: "6%", fontWeight: "bold", display: "inline-block" }} />
              <h4 style={{ display: "inline-block", marginLeft: 4, marginTop: "2.5%", verticalAlign: "middle" }}>Blood Sugar</h4>
              <ArrowRight style={{ float: "right", marginTop: 2, height: "9%", width: "10%" }} viewBox="0 0 16 16" className="pull-right arrowAchivement" fill="black" />
            </div>
            <GraphBloodSugar />
          </Card.Body>
        </Card>

        <GraphActivityExtended />
      </div>



      <Footer />
    </div>
  );
}

export default Measurements;