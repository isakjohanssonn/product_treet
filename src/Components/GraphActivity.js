import React from "react";
import { LineChart, XAxis, ReferenceLine, Line, ResponsiveContainer, Tooltip } from 'recharts';
import { Card } from "react-bootstrap";
import useMeasurementHistory from "./useMeasurementHistory";
import '../Global.css';

export default function GraphActivity(props) {
  const {from} = props;
  // ::: Reference Line Variables :::
  const minGoal = 5000;     // The set goal and the reference line in the graph 
  var goalPrecision;  // The float precision of the set goal in the "Goal" card
  var latestValue = 0;  // The latest value shown in the "Latest" card
  var unit = "steps";      // Unit to be shown in the "Goal" and "Latest" cards

  // ::: Seed Variables :::
  var startseed = 0;    // Index to start displaying values from in the graph
  var seed = 7;         // Index to stop displaying values from in the graph

  // ::: Arrays :::
  const sortedData = [];
  const dataReadyForGraph = [];


  // ::: Input data from measurements - Mock version :::
  const MeasurementsTypes = {
    BloodSugar: "Blood Sugar",
    Activity: "Activity",
  };

  const {measurements} = useMeasurementHistory();
  const test = measurements.slice();
  
  

  // sortActivity takes the input data array and sorts out the MeasurementType to be displayed
  // in this case "activity"
  // output: new array sortedData[]

  function sortActivity() {
    for (let i = 0; i < test.length; i++) {
      if (test[i].type === MeasurementsTypes.Activity) {
        sortedData.push(test[i]);
      }
    }
  }
  sortActivity();

  sortedData.sort((a, b) => {
    if (a.date < b.date) return -1;
    return null;
  });


  // getLatestValue retrieves the latest measurement value
  

  // sliceArrayForGraph slices the summedData array and
  // pushes the values to display in the Graph to a new array 
  // output: dataReadyForGraph[]

  function sliceArrayForGraph() {
    if (sortedData.length < seed) {
      for (let i = 0; i < (sortedData.length); i++) {
        dataReadyForGraph.push(sortedData[i]);
      }
    } else {
      startseed = ((sortedData.length) - seed);
      for (let y = startseed; y < (sortedData.length); y++) {
        dataReadyForGraph.push(sortedData[y]);
      }
    }
  }
  sliceArrayForGraph();

  function getLatestValue() {
    latestValue = sortedData[sortedData.length - 1].value;
  }
  getLatestValue();
  

  if (from===0) {
  return (
    <div>

      {/* Start of wrapper card */}
      <Card className="graphWrapper standardBorder" style={{ border: "none" }}>
        <Card.Body className="graphWrapperBody" style={{ border: "none", padding: "0px", width: "100%" }}>

          <Card id="graphActivityCard" className = "standardBorder">
            <Card.Body id="graphActivityCardBody" style={{ padding: "0px" }}>

              {/*Start of recharts LineChart */}
              <ResponsiveContainer width="100%" height={120}>
                <LineChart data={dataReadyForGraph} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
                  <ReferenceLine y={minGoal} stroke="#d1d1d1" strokeDasharray="5 5" />
                  <XAxis tick={false} dataKey="printDate" />
                  <Line dot={false} dataKey="value" stroke="#898989" strokeWidth={2} color="black" />
                  <Tooltip/>
                </LineChart>
              </ResponsiveContainer>
              {/* End of recharts LineChart */}

            </Card.Body>
          </Card>

          {/* Start of box cards below graph, "Latest" and "Goal"*/}
          <Card className="infoCardsWrapper" style={{ border: "none", marginTop: 10 }}>
            <Card.Body className="infoCardsWrapperBody" style={{ border: "none", padding: "0px" }}>
              <Card className="latestValueCard standardBorder" style={{ width: "48%", height: 50, display: "inline-block" }}>
                <Card.Body className="latestValueCardBody" style={{  paddingLeft: "5px", paddingRight: "5px", paddingTop: "4%", height: "100%" }}>
                  <h4 style={{ textAlign: "center" }}>
                    {latestValue} {unit}
                    <br />
                  Latest
                  </h4>
                </Card.Body>
              </Card>

              <Card className="goalValueCard standardBorder" style={{ float: "right", width: "48%", height: 50, display: "inline-block" }}>
                <Card.Body className="goalValueCardBody" style={{ paddingLeft: "5px", paddingRight: "5px", paddingTop: "4%", height: "100%" }}>
                  <h4 style={{ textAlign: "center" }}>
                    {minGoal.toPrecision(goalPrecision)} {unit}
                    <br />
                    Daily Goal
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

else {
  return (
    <div>
     
          <Card id="graphActivityCard">
            <Card.Body id="graphActivityCardBody" style={{ padding: "0px" }}>
            <h4 style={{textAlign: "center", color: "#898989", marginTop: "8px"}}>Weekly graph</h4>
              {/*Start of recharts LineChart */}
              <ResponsiveContainer width="100%" height={120}>
                <LineChart data={dataReadyForGraph} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
                  <ReferenceLine y={minGoal} stroke="#d1d1d1" strokeDasharray="5 5" />
                  <XAxis tick={false} dataKey="printDate" />
                  <Line dot={false} dataKey="value" stroke="#898989" strokeWidth={2} color="black" />
                  <Tooltip/>
                </LineChart>
              </ResponsiveContainer>
              {/* End of recharts LineChart */}

            </Card.Body>
          </Card>
        </div>
  )
}
}
