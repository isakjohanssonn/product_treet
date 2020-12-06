import React, {useState} from "react";
import "./MeasurementData.css";
import "./Activity.css"
import {BsGraphUp, IoMdWalk, MdModeEdit, FaCalendarAlt, AiOutlineArrowRight, AiOutlineLine} from "react-icons/all";
import {useHistory} from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import useMeasurementHistory, {MeasurementsTypes} from "./useMeasurementHistory";
import Navigationbar from "./Navigationbar";
import Footer from "./Footer";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


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

const convertDate = d => [d.getDate(), d.getMonth()+1, d.getFullYear()].join("/");

function MeasurementData() {
  
  let today = new Date();
  let weekAgo = new Date();
  weekAgo.setDate(weekAgo.getDate() - 7); 

  const [toDate, setToDate] = useState(weekAgo);
  const [fromDate, setFromDate] = useState(today);

  const history = useHistory();
  const {measurements} = useMeasurementHistory();


  
  // below are two sorting-functions. The first one sorts by date, the second one by time.
  measurements.sort((a, b) => {
    if (a.date > b.date) return -1;
  });

  measurements.sort((a, b) => {
    if (a.date >= b.date && a.time <= b.time)
      return -1;
  });

  return <div>
    <Navigationbar title={'All measurements'}/>
    <div className="dates" style={{
      marginTop: "80px",
      marginBottom: "8px"
    }}>
      <DatePicker
          className="datePicker"
          dateFormat="dd/MM/yyyy"
          selected={toDate}
          onChange={date => setToDate(date)}
          placeholderText="To - date" />
          <AiOutlineLine/>
        <DatePicker
          className="datePicker"
          dateFormat="dd/MM/yyyy"
          selected={fromDate}
          onChange={date => setFromDate(date)}
          placeholderText="From - date" 
          popperPlacement="bottom-end"
          />
      </div>
   
    <ListGroup style={{marginBottom: 20}}>
      {measurements.map((measurement, index) => {
        const {id, time, type, value, date, printDate} = measurement;
        const ActualIcon = IconTypes[type];
        const ActualValue = getValue(type, value);
        const goToAddMedData = () => history.push('/addmeddata', {type, id, from: 1});
        const TimeString = getTime(time);
        let tmpdate = new Date(toDate);
        tmpdate.setDate(tmpdate.getDate() - 1); 

        if (measurement.date >= tmpdate && measurement.date <= fromDate){
        
        return <ListGroup.Item
          className="listItem"
          key={'measurement' + index}
          onClick={goToAddMedData}
        >
          <div className="row">
            <div>
              <FaCalendarAlt className="Icon2"/>
              {TimeString}
              {convertDate(date)}
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
      }})}
    </ListGroup>
    <Footer/>
  </div>
}

export default MeasurementData;
