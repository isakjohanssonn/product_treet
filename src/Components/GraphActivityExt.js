import React from "react";
import { LineChart, XAxis, ReferenceLine, Line, ResponsiveContainer, Tooltip } from 'recharts';
import { Card } from "react-bootstrap";
import useMeasurementHistory from "./useMeasurementHistory";
import CustomTooltipContent from "./CustomTooltipContent"

export default function GraphActivityExtended(props) {
  const {toDate, fromDate} = props;
 

  // ::: Reference Line Variables :::
  const minGoal = 5000;     // The set goal and the reference line in the graph 
  var goalPrecision;  // The float precision of the set goal in the "Goal" card
  var latestValue = 0;  // The latest value shown in the "Latest" card
  var latestPrecision;   // The float precision of the latest value in the "Latest" card
  var unit = "steps";      // Unit to be shown in the "Goal" and "Latest" cards

  // ::: Seed Variables :::
  var startseed = 0;    // Index to start displaying values from in the graph
  var seed = 7;         // Index to stop displaying values from in the graph

  // ::: Arrays :::
  const sortedData = [];
  const summedData = [];
  const dataReadyForGraph = [];



  // ::: Input data from measurements - Mock version :::
  const MeasurementsTypes = {
    BloodSugar: "Blood Sugar",
    Activity: "Activity",
  };

  const {measurements} = useMeasurementHistory();
  

  // sortActivity takes the input data array and sorts out the MeasurementType to be displayed
  // in this case "activity"
  // output: new array sortedData[]
  function sortActivity() {
    for (let i = 0; i < measurements.length; i++) {
      if (measurements[i].type === MeasurementsTypes.Activity) {
        sortedData.push(measurements[i]);
      }
    }
  }
  sortActivity();


  function betweenDates(){
    for (let i = 0; i < (sortedData.length); i++) {
      let tmpdate = new Date(toDate);
      tmpdate.setDate(tmpdate.getDate() - 1); 
      if (sortedData[i].date >= tmpdate-1 && sortedData[i].date <= fromDate){
        summedData.push(sortedData[i]);
      }
    }
  }
  betweenDates();

  // mergeDates looks for data measured in the same day and adds these together
  // to be able to display the total measurements for each day in the graph
  // output: summedData[]
  function mergeDates() {
    summedData.forEach(el => {
      
      if (dataReadyForGraph.length === 0) {
        delete el.id;
        dataReadyForGraph.push(el);
      }
      else {
        const get = () => {
          for (let i = 0; i < dataReadyForGraph.length; i++) {
            if (dataReadyForGraph[i].printDate === el.printDate) {
              return { stat: true, id: i };
            }
          }
        }
        let i = get();
        if (i) { 
          dataReadyForGraph[i.id].value += parseInt(el.value);
        }
        else {
          delete el.id;
          dataReadyForGraph.push(el);
        }
      }
    });
  }
  //mergeDates();


  summedData.sort((a, b) => {
    if (a.date < b.date) return -1;
  });

  function getLatestValue() {
    latestValue = summedData[summedData.length - 1].value;
  }
  getLatestValue();

  return (
    <div>
              {/*Start of recharts LineChart */}
              <ResponsiveContainer width="100%" height={120}>
                <LineChart data={summedData} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
                  <ReferenceLine y={minGoal} stroke="#d1d1d1" strokeDasharray="5 5" />
                  <XAxis tick={false} dataKey="printDate" />
                  <Line dot={false} dataKey="value" stroke="#898989" strokeWidth={2} color="black" />
                  <Tooltip/>
                </LineChart>
              </ResponsiveContainer>
              {/* End of recharts LineChart */}
    </div>
  )
}
