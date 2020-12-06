import React from "react";
import '../Global.css';
import { LineChart, XAxis, YAxis, ReferenceLine, Line, ResponsiveContainer, Tooltip } from 'recharts';
import { Card } from "react-bootstrap";
import useMeasurementHistory, {MeasurementsTypes} from "./useMeasurementHistory";


export default function GraphBloodSugar(props) {

  // ::: Reference Line Variables :::
  const {from} = props;
  const minGoal = 6.0;     // The set min. goal and the bottom reference line in the graph 
  const maxGoal = 8.0;    // The set max. goal and the top reference line in the graph
  var goalPrecision;  // The float precision of the set goal in the "Goal" card
  var latestValue = 0;  // The latest value shown in the "Latest" card
  var unit = "mmol/L";      // Unit to be shown in the "Goal" and "Latest" cards

  // ::: Seed Variables :::
  var startseed = 0;    // Index to start displaying values from in the graph
  var seed = 7;         // Index to stop displaying values from in the graph

  // ::: Arrays :::
  const sortedData = [];
  const sortedByTime = [];
  const dataReadyForGraph = [];

  // ::: Input data from measurements - Mock version :::
  

  const {measurements} = useMeasurementHistory();


  // sortMeasurementType takes the input data array and sorts out the MeasurementType to be displayed
  // in this case "blood sugar"
  // output: new array sortedData[]

  function sortMeasurementType() {
    for (let i = 0; i < measurements.length; i++) {
      if (measurements[i].type === MeasurementsTypes.BloodSugar) {
        sortedData.push(measurements[i]);
      }
    }
  }
  sortMeasurementType();

  // Since blood sugar levels have different reference levels in different times of the day
  // there can't be a function summing up the measurements for a day. 
  // sortByTime sorts the measurements taken before lunch to be displayed in the graph
  // output: sortedByTime[]
  function sortByTime() {
    for (let i = 0; i < sortedData.length; i++) {
        var x = sortedData[i].time;
      
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

  if(from===0) {
  return (
    <div className = "scrollable">

      {/* Start of wrapper card */}
      <Card className="graphWrapper standardBorder" style={{ border: "none" }}>
        <Card.Body className="graphWrapperBody" style={{ border: "none", padding: "0px" }}>

          <Card id="graphBloodSugarCard" className= "standardBorder">
            <Card.Body id="graphBloodSugarCardBody" style={{ padding: "0px" }}>

              {/*Start of recharts LineChart */}
              <ResponsiveContainer width="100%" height={120}>
                <LineChart data={dataReadyForGraph} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
                <ReferenceLine y={maxGoal} stroke="#d1d1d1" strokeDasharray="5 5" />
                  <ReferenceLine y={minGoal} stroke="#d1d1d1" strokeDasharray="5 5" />
                  <XAxis tick={false} dataKey="printDate" />
                  <YAxis hide={true} type="number" domain={[3.0, 10.0]}/>
                  <Line dot={false} dataKey="value" stroke="#898989" strokeWidth={2} color="black" />
                <Tooltip/>
                </LineChart>
              </ResponsiveContainer>
              {/* End of recharts LineChart */}

            </Card.Body>
          </Card>

          {/* Start of box cards below graph, "Latest" and "Goal"*/}
          <Card className="infoCardsWrapper standardBorder" style={{ border: "none", marginTop: 10 }}>
            <Card.Body className="infoCardsWrapperBody" style={{ border: "none", padding: "0px" }}>

              <Card className="latestValueCard standardBorder" style={{ width: "48%", height: 50, display: "inline-block" }}>
                <Card.Body className="latestValueCardBody" style={{ paddingLeft: "5px", paddingRight: "5px", paddingTop: "4%", height: "100%" }}>
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
else {
  return (
    <div className = "scrollable">
          <Card id="graphBloodSugarCard" className= "standardBorder">
            <Card.Body id="graphBloodSugarCardBody" style={{ padding: "0px" }}>
            <h4 style={{textAlign: "center", marginTop: "8px"}}>Weekly graph</h4>
              {/*Start of recharts LineChart */}
              <ResponsiveContainer width="100%" height={120}>
                <LineChart data={dataReadyForGraph} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
                <ReferenceLine y={maxGoal} stroke="#d1d1d1" strokeDasharray="5 5" />
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
