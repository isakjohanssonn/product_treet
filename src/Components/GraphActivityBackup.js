import React from "react";
import { LineChart, XAxis, ReferenceLine, Line, ResponsiveContainer, Tooltip } from 'recharts';
//import "./DateAndCalendar.css";
import { Card, CardColumns } from "react-bootstrap";
import "./GrowingTree.css"

export default function GraphActivity() {

  // Graph Data variables
  const minVal = 5;
  var minValPrecision = 2;
  
  const summedData = [];
  var precisionValue = 2;

  // Output in graphLatestCard variables:
  var latestValue = 0;
  var unit = "km";

  
  var timeFrameString = 'daily'; 
  const sortedData = [];
  
  const dataReadyForGraph = [];
  var seed = 7;
  var startseed = 0;

  const MeasurementsTypes = {
    BloodSugar: "Blood Sugar",
    Activity: "Activity",
};
    
const data2 = [
  { id: 0, time: '09:00', date: " 25/11/2020", type: MeasurementsTypes.Activity, value: 3.4 },
  { id: 1, time: '09:00', date: " 26/11/2020", type: MeasurementsTypes.Activity, value: 7.8 },
  { id: 3, time: '09:00', date: " 26/11/2020", type: MeasurementsTypes.BloodSugar, value: 10.0 },
  { id: 4, time: '09:00', date: " 26/11/2020", type: MeasurementsTypes.BloodSugar, value: 15.0 },
  { id: 5, time: '09:00', date: " 26/11/2020", type: MeasurementsTypes.BloodSugar, value: 15.0 },
  { id: 6, time: '09:00', date: " 27/11/2020", type: MeasurementsTypes.Activity, value: 12.0 },
  { id: 7, time: '09:00', date: " 27/11/2020", type: MeasurementsTypes.Activity, value: 20.0 },
  { id: 8, time: '09:00', date: " 27/11/2020", type: MeasurementsTypes.Activity, value: 10.8 },
  { id: 9, time: '09:00', date: " 28/11/2020", type: MeasurementsTypes.Activity, value: 1.2 },
  { id: 10, time: '09:00', date: " 29/11/2020", type: MeasurementsTypes.Activity, value: 13.8 },
];

  function sortActivity () {
    for (let i = 0; i < data2.length; i++) {
      if (data2[i].type === MeasurementsTypes.Activity) {
        sortedData.push(data2[i]);
      }
    }
  }
  sortActivity();

  function dateFormat () {
    for (let i = 0; i < sortedData.length; i++) {
      sortedData[i].date = sortedData[i].date.trim();
    }
    for (let i = 0; i < sortedData.length; i++) {
      sortedData[i].date = sortedData[i].date.substr(0, sortedData[i].date.length-5);
    }
  }

  dateFormat();

  function mergeDates () {

    sortedData.forEach(el => {
        if(summedData.length === 0){
            delete el.id;
            summedData.push(el);
        }    
        else
        {
            const get = () => {
                for(let i = 0; i < summedData.length; i++){
                    if(summedData[i].date === el.date ){
                        return { stat: true, id: i };
                    }
                }
            }

            let i = get();
            if(i){
                summedData[i.id].value += el.value;
            }
            else
            {
                delete el.id;
                summedData.push(el);
            }
        }
    });

    console.log(summedData);
    
  }

  mergeDates();
 
function getLatestValue () {
  for (let i = 0; i < summedData.length; i++) {
    latestValue = summedData[i].value;
  }
  if (latestValue < 10.0) {
    precisionValue = 2; 
  } else {
    precisionValue = 3;
  }

}
getLatestValue();

function sliceArrayForGraph () {
    if (summedData.length < 7) {
      for (let i = 0; i < (summedData.length); i++) {
        dataReadyForGraph.push(summedData[i]);
      }
    } else {
      if ((seed-startseed) <= summedData.length) {
        for (let x = startseed; x < seed; x++) {
          dataReadyForGraph.push(summedData[x]);
        } 
      } else {
          for (let y = startseed; y < (summedData.length); y++) {
            dataReadyForGraph.push(summedData[y]);
          }
        }
      }

    }
  
  sliceArrayForGraph(); 

    return (

        <div>

        <Card className="graphWrapperCard" style={{border: "none"}}>
          <Card.Body className="graphWrapperCardBody" style={{border: "none", padding: "0px"}}>

          <Card id="graphActivityCardMain">
          <Card.Body id="graphActivityCardBody" style={{padding: "0px"}}>
          <ResponsiveContainer width="100%" height={120}>

          <LineChart data={dataReadyForGraph} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
          <ReferenceLine y={minVal} stroke="#d1d1d1" strokeDasharray="5 5" />
            <XAxis tick={false} dataKey="date"/>
            <Line dot={false} dataKey="value" stroke="#898989" strokeWidth={2} color="black" />
            <Tooltip/>
          </LineChart>

        </ResponsiveContainer>

        </Card.Body>
        </Card>
        <Card className="graphWrapperCard2" style={{border: "none", marginTop: 10}}>
          <Card.Body className="graphWrapperCardBody2" style={{border: "none", padding: "0px"}}>
        <Card className="graphCard1" style={{width: "48%", height: 50, display: "inline-block"}}>
        <Card.Body style={{paddingTop: "0px", paddingLeft: "5px", paddingRight: "5px", paddingTop: "4%", height: "100%"}}>
          <h4 style={{textAlign: "center"}}>{latestValue.toPrecision(precisionValue)} {unit}<br/>
          Latest</h4>
          </Card.Body>
        </Card>
        <Card className="graphCard1" style={{float: "right", width: "48%", height: 50, display: "inline-block"}}>
          <Card.Body style={{paddingTop: "0px", paddingLeft: "5px", paddingRight: "5px", paddingTop: "4%", height: "100%"}}>
            <h4 style={{textAlign: "center"}}>{minVal.toPrecision(minValPrecision)} {unit}<br/>
            Goal</h4>
          </Card.Body>
        </Card>
        </Card.Body>
        </Card>


        

{/*
      <CardColumns>
        <Card style={{display: "inline-block", width: "50%", height: 80, margin: "0px"}}>
          <Card.Body id="graphLatestCardBody" style={{padding: "0px"}}>
          <p>{latestValue} km</p>
          <p>Latest</p>
          
          </Card.Body>
        </Card>

        <Card style={{display: "inline-block", width: "50%", height: 80, marginRight: "0px"}}>
          <Card.Body id="graphGoalCardBody" style={{padding: "0px"}}>
          <div style={{width: "200px"}}>
          <p>{minVal.toPrecision(2)} km</p>
          <p>Goal ({timeFrameString})</p>
          </div>
          </Card.Body>
        </Card>
        </CardColumns>
*/}
        </Card.Body>
        </Card>

       
        </div>
        
    )
}
