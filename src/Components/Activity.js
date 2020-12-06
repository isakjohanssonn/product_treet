import React, { useState } from "react";
import "../Global.css";
import "./Measurements.css";
import "./Activity.css";
import { Card } from "react-bootstrap";
import Navigationbar from './Navigationbar';
import Footer from './Footer';
import GraphActivityExtended from './GraphActivityExt';
import { IoMdWalk, MdModeEdit, FaCalendarAlt, AiOutlineArrowRight, AiOutlineLine } from "react-icons/all";
import useMeasurementHistory, { MeasurementsTypes } from "./useMeasurementHistory";
import ListGroup from "react-bootstrap/ListGroup";
import { useHistory } from "react-router-dom";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const Activity = () => {

  var goal = 5000;
  var unit = "steps";
  var latestValue = 0;

  //these two variables decides the range

  //let tooDate = new Date();
  //tooDate.setDate(tooDate.getDate() - 5); //one more than the actual
  let today = new Date();
  let weekAgo = new Date();
  weekAgo.setDate(weekAgo.getDate() - 7);


  const [toDate, setToDate] = useState(weekAgo);
  const [fromDate, setFromDate] = useState(today);

  //import the hook that contains the real measurements. 
  const { measurements } = useMeasurementHistory();
  const history = useHistory();
  const dataReadyForGraph = [];
  const sortedData = [];

  const convertDate = d => [d.getDate(), d.getMonth() + 1, d.getFullYear()].join("/");

  //sorts out all activitymeasurements
  function sortActivity() {
    for (let i = 0; i < measurements.length; i++) {
      if (measurements[i].type === MeasurementsTypes.Activity) {
        sortedData.push(measurements[i]);
      }
    }
  }
  sortActivity();

  //This function collects all activities thats withing the specified range
  function betweenDates() {
    for (let i = 0; i < (sortedData.length); i++) {
      let tmpdate = new Date(toDate);
      tmpdate.setDate(tmpdate.getDate() - 1);
      if (sortedData[i].date >= tmpdate && sortedData[i].date <= fromDate) {
        dataReadyForGraph.push(sortedData[i]);
      }
    }
  }
  betweenDates();

  //Sorts the final list by date
  dataReadyForGraph.sort((a, b) => {
    if (a.date > b.date) return -1;
  });

  measurements.sort((a, b) => {
    if (a.date > b.date) return -1;
  });

  function getLatestValue() {
    latestValue = dataReadyForGraph[0].value;
  }
  getLatestValue();



  //This function prints out the time correctly
  function getTime(time) {
    let timeString = time + ":00 ";

    if (time < 10) {
      timeString = "0" + time + ":00 ";
      return timeString;
    }
    return timeString;
  }

  function getValuestring(value) {
    let valueString = value + " steps";
    return valueString;
  }


  return (
    <div>
      <Navigationbar title={'Activity'} />


      <Card className="infoCardsWrapper standardBorder" style={{ border: "none", marginTop: "74px" }}>
        <Card.Body className="infoCardsWrapperBody" style={{ border: "none", padding: "0px" }}>
          <Card className="latestValueCard standardBorder" style={{ width: "48%", height: 50, display: "inline-block" }}>
            <Card.Body className="latestValueCardBody" style={{ paddingTop: "0px", paddingLeft: "5px", paddingRight: "5px", paddingTop: "4%", height: "100%" }}>
              <h4 style={{ textAlign: "center" }}>
                {latestValue} {unit}
                <br />
                  Latest
                  </h4>
            </Card.Body>
          </Card>

          <Card className="goalValueCard standardBorder" style={{ float: "right", width: "48%", height: 50, display: "inline-block" }}>
            <Card.Body className="goalValueCardBody" style={{ paddingTop: "0px", paddingLeft: "5px", paddingRight: "5px", paddingTop: "4%", height: "100%" }}>
              <h4 style={{ textAlign: "center" }}>
                {goal} {unit}
                <br />
                    Daily goal
                  </h4>
            </Card.Body>
          </Card>
        </Card.Body>
      </Card>


      <div className="dates">
        <DatePicker
          className="datePicker standardBorder"
          dateFormat="dd/MM/yyyy"
          selected={toDate}
          onChange={date => setToDate(date)}
          placeholderText="To - date" />
        <AiOutlineLine />
        <DatePicker
          className="datePicker standardBorder"
          dateFormat="dd/MM/yyyy"
          selected={fromDate}
          onChange={date => setFromDate(date)}
          placeholderText="From - date"
          popperPlacement="bottom-end"
        />
      </div>


      <br />
      <div>

        {/* Card containing Activity Graph */}

        <Card className="standardBorder">
          <Card.Body style={{ paddingLeft: 10, paddingRight: 10, paddingBottom: 10 }}>
            <GraphActivityExtended fromDate={fromDate} toDate={toDate} />
          </Card.Body>
        </Card>


      </div>

      <ListGroup style={{ marginBottom: 40 }}>
        {measurements.map((measurement, index) => {
          const { id, time, type, value, date, printDate } = measurement;
          const goToAddMedData = () => history.push('/addmeddata', { type, id, from: 1 });
          const TimeString = getTime(time);
          const valueString = getValuestring(value); let
            tmpdate = new Date(toDate);
          tmpdate.setDate(tmpdate.getDate() - 1);

          if (measurement.date >= tmpdate && measurement.date <= fromDate && measurement.type === MeasurementsTypes.Activity) {
            return <ListGroup.Item
              className="listItem"
              key={'measurement' + index}
              onClick={goToAddMedData}
            >
              <div className="row">
                <div>
                  <FaCalendarAlt className="Icon2" />
                  {TimeString}
                  {convertDate(date)}
                </div>
                <MdModeEdit className="Icon" />
              </div>
              <div className="row">
                <div>
                  <IoMdWalk className="Icon2" />
                  {type}
                </div>

              </div>
              <div className="row">
                <div>
                  {valueString}
                </div>
                <AiOutlineArrowRight className="Icon" />
              </div>
            </ListGroup.Item>
          }
        })}
      </ListGroup>
      <Footer />
    </div>
  );
}

export default Activity;