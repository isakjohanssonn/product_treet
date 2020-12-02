import React from "react";
import { LineChart, XAxis, ReferenceLine, Line, ResponsiveContainer, Tooltip } from 'recharts';
import { Card } from "react-bootstrap";

export default function GraphBloodSugar() {

  // ::: Reference Line Variables :::
  const minGoal = 5;     // The set min. goal and the bottom reference line in the graph 
  const maxGoal = 10;    // The set max. goal and the top reference line in the graph
  var goalPrecision;  // The float precision of the set goal in the "Goal" card
  var latestValue = 0;  // The latest value shown in the "Latest" card
  var latestPrecision;   // The float precision of the latest value in the "Latest" card
  var unit = "mg/dL";      // Unit to be shown in the "Goal" and "Latest" cards

  // ::: Seed Variables :::
  var startseed = 0;    // Index to start displaying values from in the graph
  var seed = 7;         // Index to stop displaying values from in the graph

  // ::: Arrays :::
  const sortedData = [];
  const sortedByTime = [];
  const dataReadyForGraph = [];

  // ::: Input data from measurements - Mock version :::
  const MeasurementsTypes = {
    BloodSugar: "BloodSugar",
    Activity: "Activity",
  };

  const data = [
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
    { id: 11, time: '09:00', date: " 29/11/2020", type: MeasurementsTypes.Activity, value: 20.8 },
    { id: 12, time: '09:00', date: " 30/11/2020", type: MeasurementsTypes.Activity, value: 55.8 },
    { id: 13, time: '09:00', date: " 31/11/2020", type: MeasurementsTypes.Activity, value: 1.8 },
    { id: 14, time: '09:00', date: " 1/12/2020", type: MeasurementsTypes.Activity, value: 50.8 },
    { id: 15, time: '09:00', date: " 2/12/2020", type: MeasurementsTypes.BloodSugar, value: 3.1 },
    { id: 16, time: '13:00', date: " 5/12/2020", type: MeasurementsTypes.BloodSugar, value: 10.8 },
  ];

  // sortMeasurementType takes the input data array and sorts out the MeasurementType to be displayed
  // in this case "blood sugar"
  // output: new array sortedData[]

  function sortMeasurementType() {
    for (let i = 0; i < data.length; i++) {
      if (data[i].type === MeasurementsTypes.BloodSugar) {
        sortedData.push(data[i]);
      }
    }
  }
  sortMeasurementType();

  // dateFormat formats the date string value of each measurement
  // from " 26/11/2020" to "26/11"
  // output: sortedData[]

  function dateFormat() {
    for (let i = 0; i < sortedData.length; i++) {
      sortedData[i].date = sortedData[i].date.trim();
    }
    for (let i = 0; i < sortedData.length; i++) {
      sortedData[i].date = sortedData[i].date.substr(0, sortedData[i].date.length - 5);
    }
  }
  dateFormat();

  // Since blood sugar levels have different reference levels in different times of the day
  // there can't be a function summing up the measurements for a day. 
  // sortByTime sorts the measurements taken before lunch to be displayed in the graph
  // output: sortedByTime[]
  function sortByTime() {
    for (let i = 0; i < sortedData.length; i++) {
        var x = parseInt(sortedData[i].time.substr(0, sortedData[i].time.length - 3));

        if (x < 12) {
            sortedByTime.push(sortedData[i]);
        } 
    }
  }
  sortByTime();

  // getLatestValue retrieves the latest measurement value
  // and sets the float precision for output in "Latest" card

  function getLatestValue() {

    latestValue = sortedByTime[sortedByTime.length - 1].value;
    if (latestValue < 10.0) {
      latestPrecision = 2;
    } else {
      latestPrecision = 3;
    }
  }
  getLatestValue();

  // sliceArrayForGraph slices the sortedData array and
  // pushes the values to display in the Graph to a new array 
  // output: dataReadyForGraph[]

  function sliceArrayForGraph() {
    if (sortedByTime.length < seed) {
      for (let i = 0; i < (sortedByTime.length); i++) {
        dataReadyForGraph.push(sortedByTime[i]);
      }
    } else {
      startseed = ((sortedByTime.length) - seed);
      for (let y = startseed; y < (sortedByTime.length); y++) {
        dataReadyForGraph.push(sortedByTime[y]);
      }
    }
  }
  sliceArrayForGraph();

  return (

    <div>

      {/* Start of wrapper card */}
      <Card className="graphWrapper" style={{ border: "none" }}>
        <Card.Body className="graphWrapperBody" style={{ border: "none", padding: "0px" }}>

          <Card id="graphBloodSugarCard">
            <Card.Body id="graphBloodSugarCardBody" style={{ padding: "0px" }}>

              {/*Start of recharts LineChart */}
              <ResponsiveContainer width="100%" height={120}>
                <LineChart data={dataReadyForGraph} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
                <ReferenceLine y={maxGoal} stroke="#d1d1d1" strokeDasharray="5 5" />
                  <ReferenceLine y={minGoal} stroke="#d1d1d1" strokeDasharray="5 5" />
                  <XAxis tick={false} dataKey="date" />
                  <Line dot={false} dataKey="value" stroke="#898989" strokeWidth={2} color="black" />
                </LineChart>
              </ResponsiveContainer>
              {/* End of recharts LineChart */}

            </Card.Body>
          </Card>

          {/* Start of box cards below graph, "Latest" and "Goal"*/}
          <Card className="infoCardsWrapper" style={{ border: "none", marginTop: 10 }}>
            <Card.Body className="infoCardsWrapperBody" style={{ border: "none", padding: "0px" }}>

              <Card className="latestValueCard" style={{ width: "48%", height: 50, display: "inline-block" }}>
                <Card.Body className="latestValueCardBody" style={{ paddingTop: "0px", paddingLeft: "5px", paddingRight: "5px", paddingTop: "4%", height: "100%" }}>
                  <h4 style={{ textAlign: "center" }}>
                    {latestValue.toPrecision(latestPrecision)} {unit}
                    <br />
                  Latest
                  </h4>
                </Card.Body>
              </Card>

              <Card className="goalValueCard" style={{ float: "right", width: "48%", height: 50, display: "inline-block" }}>
                <Card.Body className="goalValueCardBody" style={{ paddingTop: "0px", paddingLeft: "5px", paddingRight: "5px", paddingTop: "4%", height: "100%" }}>
                  <h4 style={{ textAlign: "center" }}>
                    {minGoal.toPrecision(goalPrecision)} to {maxGoal.toPrecision(goalPrecision)} {unit}
                    <br />
                    Goal
                  </h4>
                </Card.Body>
              </Card>

            </Card.Body>
          </Card>
          {/* End of box cards below graph */}

        </Card.Body>
      </Card>
      {/* End of wrapper card */}

    </div>
  )
}
