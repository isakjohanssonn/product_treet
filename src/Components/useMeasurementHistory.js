import {useState} from "react";

//this hook contains all old registered measurements.
// How to use:
// const {measurements, setCompleted, addMeasurement} = useMeasurementHistory();


export const MeasurementsTypes = {
  BloodSugar: "Blood sugar",
  Activity: "Activity",
};

const data = [
  {id: 0,  time: 12, date: new Date(2020,10,22), printDate: "22/11", type: MeasurementsTypes.Activity, value: 3344},
  {id: 1,  time: 12, date: new Date(2020,10,23), printDate: "23/11", type: MeasurementsTypes.Activity, value: 23},
  {id: 2,  time: 12, date: new Date(2020,10,24), printDate: "24/11", type: MeasurementsTypes.Activity, value: 988},
  {id: 3,  time: 12, date: new Date(2020,10,25), printDate: "25/11", type: MeasurementsTypes.Activity, value: 5655},
  {id: 4,  time: 12, date: new Date(2020,10,26), printDate: "26/11", type: MeasurementsTypes.Activity, value: 434},
  {id: 5,  time: 12, date: new Date(2020,10,27), printDate: "27/11", type: MeasurementsTypes.Activity, value: 633},
  {id: 6,  time: 12, date: new Date(2020,10,28), printDate: "28/11", type: MeasurementsTypes.Activity, value: 2245},
  {id: 7,  time: 9,  date: new Date(2020,10,29), printDate: "29/11", type: MeasurementsTypes.BloodSugar, value: 7.8},
  {id: 8,  time: 12, date: new Date(2020,10,29), printDate: "29/11", type: MeasurementsTypes.Activity, value: 7877},
  {id: 9,  time: 15, date: new Date(2020,10,29), printDate: "29/11", type: MeasurementsTypes.BloodSugar, value: 8.2},
  {id: 10, time: 18, date: new Date(2020,10,29), printDate: "29/11", type: MeasurementsTypes.BloodSugar, value: 4.7},
  {id: 11, time: 8,  date: new Date(2020,10,30), printDate: "30/11", type: MeasurementsTypes.BloodSugar, value: 4.9},
  {id: 12, time: 12, date: new Date(2020,10,30), printDate: "30/11", type: MeasurementsTypes.Activity, value: 5555},
  {id: 13, time: 15, date: new Date(2020,10,30), printDate: "30/11", type: MeasurementsTypes.BloodSugar, value: 5.3},
  {id: 14, time: 18, date: new Date(2020,10,30), printDate: "30/11", type: MeasurementsTypes.BloodSugar, value: 5.9},
  {id: 15, time: 8,  date: new Date(2020,11,1),  printDate: "1/12",  type: MeasurementsTypes.BloodSugar, value: 5.9},
  {id: 16, time: 12, date: new Date(2020,11,2),  printDate: "1/12", type: MeasurementsTypes.Activity, value: 6888},
  {id: 18, time: 12, date: new Date(2020,11,2),  printDate: "2/12", type: MeasurementsTypes.Activity, value: 1254},
  {id: 19, time: 12, date: new Date(2020,11,3),  printDate: "3/12", type: MeasurementsTypes.Activity, value: 200},
  {id: 20, time: 8,  date: new Date(2020,11,3),  printDate: "3/12", type: MeasurementsTypes.BloodSugar, value: 5.5},
  {id: 21, time: 12, date: new Date(2020,11,4),  printDate: "4/12", type: MeasurementsTypes.BloodSugar, value: 5.5},
  {id: 22, time: 12, date: new Date(2020,11,4),  printDate: "4/12", type: MeasurementsTypes.Activity, value: 5374},
  {id: 23, time: 8,  date: new Date(2020,11,5),  printDate: "5/12", type: MeasurementsTypes.BloodSugar, value: 5.7},
  {id: 24, time: 12, date: new Date(2020,11,5),  printDate: "5/12", type: MeasurementsTypes.Activity, value: 7800},
  {id: 25, time: 8,  date: new Date(2020,11,6),  printDate: "6/12", type: MeasurementsTypes.BloodSugar, value: 7.8},
  {id: 26, time: 12, date: new Date(2020,11,6),  printDate: "6/12", type: MeasurementsTypes.Activity, value: 223},
  {id: 27, time: 8,  date: new Date(2020,11,7),  printDate: "7/12", type: MeasurementsTypes.BloodSugar, value: 4.5},
  {id: 28, time: 12, date: new Date(2020,11,7),  printDate: "7/12", type: MeasurementsTypes.Activity, value: 544},
  {id: 29, time: 8,  date: new Date(2020,11,8),  printDate: "8/12", type: MeasurementsTypes.BloodSugar, value: 5.8},
  {id: 30, time: 12, date: new Date(2020,11,8),  printDate: "8/12", type: MeasurementsTypes.Activity, value: 1375},
  {id: 31, time: 8,  date: new Date(2020,11,9),  printDate: "9/12", type: MeasurementsTypes.BloodSugar, value: 6.8},
  {id: 32, time: 12, date: new Date(2020,11,9),  printDate: "9/12", type: MeasurementsTypes.Activity, value: 4455}
]

const useMeasurementHistory = () => {
  const [realMeasurements, setMeasurements] = useState(data);
  const measurements = [...realMeasurements];

  const setValue = (id, value) => {
    const newList = [...realMeasurements];

    // loopa igenom measurments och hitta det objekt som har rätt id.
    function isCorrectId(measurement) {
      return measurement.id === id;
    }
    const found = newList.find(isCorrectId);
    if (found) {
      found.value = value;
      setMeasurements(newList);
    }
  }

  const addMeasurement = (time, date, printDate, type, value) => {
    let id = realMeasurements.length
    setMeasurements(realMeasurements.push({id, time, date, printDate, type, value}));
    console.log("inne i addern", id, value);
  };

  
  return ({measurements:realMeasurements.slice(), setValue, addMeasurement});

}

export default useMeasurementHistory;