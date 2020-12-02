import React, {useState} from "react";
import "./MeasurementData.css";
import {BsGraphUp, IoMdWalk, MdModeEdit, FaCalendarAlt, AiOutlineArrowRight, AiOutlineLine} from "react-icons/all";
import {useHistory} from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import useMeasurementHistory, {MeasurementsTypes} from "./useMeasurementHistory";
import Navigationbar from "./Navigationbar";
import Footer from "./Footer";


//This component contains the history-view of all old measurements registered.

const IconTypes = {
  [MeasurementsTypes.BloodSugar]: BsGraphUp,
  [MeasurementsTypes.Activity]: IoMdWalk,
};

function getValue(type, value) {
  let actualValue = value;
  if (type === "Activity") {
    actualValue = value + " Steps";
  } else if (type === "Blood sugar") {
    actualValue = value + " mmol/L";
  }
  return actualValue;
}

function getTime(time) {
  let timeString = time + ":00 ";

  if (time < 10) {
    timeString = "0" + time + ":00 ";
    return timeString;
  }
  return timeString;
}

let today = new Date();
today.setDate(today.getDate() - 7);

const toDate = d => [d.getDate(), d.getMonth()+1, d.getFullYear()].join("/");

function MeasurementData() {
  const history = useHistory();
  const {measurements, setCompleted} = useMeasurementHistory();


  // below are two sorting-functions. The first one sorts by date, the second one by time.
  measurements.sort((a, b) => {
    if (a.date > b.date) return -1;
  });

  measurements.sort((a, b) => {
    if (a.date >= b.date && a.time <= b.time)
      return -1;
  });

  console.log(measurements);

  return <div>
    <Navigationbar title={'History'}/>
    <div>
      <div className="toptop">
        <div>From</div>
        <div>To</div>
      </div>

      <div>
        <div className="topDate">
          <div>{toDate(new Date())}</div>
          <AiOutlineLine/>
          <div>{toDate(today)}</div>
        </div>
      </div>
    </div>

    <ListGroup style={{marginBottom: 20}}>
      {measurements.map((measurement, index) => {
        const {id, time, type, value, date, printDate} = measurement;
        const ActualIcon = IconTypes[type];
        const ActualValue = getValue(type, value);
        const goToAddMedData = () => history.push('/addmeddata', {type, id, from: 1});
        const TimeString = getTime(time);

        return <ListGroup.Item
          className="listItem"
          key={'measurement' + index}
          onClick={goToAddMedData}
        >
          <div className="row">
            <div>
              <FaCalendarAlt className="Icon2"/>
              {TimeString}
              {toDate(date)}
            </div>
            <MdModeEdit className="Icon"/>
          </div>
          <div className="row">
            <div>
              <ActualIcon className="Icon2"/>
              {type}
            </div>

          </div>
          <div className="row">
            <div>
              {ActualValue}
            </div>
            <AiOutlineArrowRight className="Icon"/>
          </div>
        </ListGroup.Item>
      })}
    </ListGroup>
    <Footer/>
  </div>
}

export default MeasurementData;
