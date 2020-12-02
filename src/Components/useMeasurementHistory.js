import {useState} from "react";

//this hook contains all old registered measurements.
// How to use:
// const {measurements, setCompleted, addMeasurement} = useMeasurementHistory();


export const MeasurementsTypes = {
  BloodSugar: "Blood sugar",
  Activity: "Activity",
};

const data = [
  {id: 0, time: 9, date: new Date(2020,10,29), printDate: "29/11", type: MeasurementsTypes.BloodSugar, value: 7.8},
  {id: 1, time: 12, date:  new Date(2020,10,29), printDate: "29/11", type: MeasurementsTypes.Activity, value: 7877},
  {id: 2, time: 15, date:  new Date(2020,10,29), printDate: "29/11",  type: MeasurementsTypes.BloodSugar, value: 8.2},
  {id: 3, time: 18, date:  new Date(2020,10,29), printDate: "29/11",  type: MeasurementsTypes.BloodSugar, value: 4.7},
  {id: 4, time: 8, date:  new Date(2020,10,30), printDate: "30/11",  type: MeasurementsTypes.BloodSugar, value: 4.9},
  {id: 5, time: 12, date: new Date(2020,10,30), printDate: "30/11",  type: MeasurementsTypes.Activity, value: 5555},
  {id: 6, time: 15, date: new Date(2020,10,30), printDate: "30/11",  type: MeasurementsTypes.BloodSugar, value: 5.3},
  {id: 7, time: 18, date: new Date(2020,10,30), printDate: "30/11",  type: MeasurementsTypes.BloodSugar, value: 5.9},
  {id: 8, time: 8, date: new Date(2020,11,1), printDate: "1/12",  type: MeasurementsTypes.BloodSugar, value: 5.9},
  {id: 9, time: 12, date: new Date(2020,11,1),  printDate: "1/12", type: MeasurementsTypes.BloodSugar, value: 6.8},
  {id: 10, time: 12, date: new Date(2020,10,22),  printDate: "22/11", type: MeasurementsTypes.Activity, value: 3344},
  {id: 11, time: 12, date: new Date(2020,10,23),  printDate: "23/11", type: MeasurementsTypes.Activity, value: 23},
  {id: 12, time: 12, date: new Date(2020,10,24),  printDate: "24/11", type: MeasurementsTypes.Activity, value: 988},
  {id: 13, time: 12, date: new Date(2020,10,25),  printDate: "25/11", type: MeasurementsTypes.Activity, value: 5555},
  {id: 14, time: 12, date: new Date(2020,10,26),  printDate: "26/11", type: MeasurementsTypes.Activity, value: 444},
  {id: 15, time: 12, date: new Date(2020,10,27),  printDate: "27/11", type: MeasurementsTypes.Activity, value: 333},
  {id: 16, time: 12, date: new Date(2020,10,28),  printDate: "28/11", type: MeasurementsTypes.Activity, value: 22},


]

const useMeasurementHistory = () => {
  const [measurements, setMeasurements] = useState(data);

  const setValue = (id, value) => {
    console.log(id, value);
    const newList = [...measurements];

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
    let id = measurements.length
    setMeasurements(measurements.push({id, time, date, printDate, type, value}));
    console.log(measurements);

  };

  return ({measurements, setValue, addMeasurement});

}

export default useMeasurementHistory;