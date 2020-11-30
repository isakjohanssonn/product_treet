import {useState} from "react";

//this hook contains all old registered measurements.
// How to use:
// const {measurements, setCompleted, addMeasurement} = useMeasurementHistory();


export const MeasurementsTypes = {
  BloodSugar: "Blood sugar",
  Activity: "Activity",
};

const data = [
  {id: 0, time: 9, date: "29/11/2020", type: MeasurementsTypes.BloodSugar, value: 7.8},
  {id: 1, time: 12, date: "29/11/2020", type: MeasurementsTypes.Activity, value: 7877},
  {id: 2, time: 15, date: "29/11/2020", type: MeasurementsTypes.BloodSugar, value: 8.2},
  {id: 3, time: 18, date: "29/11/2020", type: MeasurementsTypes.BloodSugar, value: 4.7},
  {id: 4, time: 8, date: "30/11/2020", type: MeasurementsTypes.BloodSugar, value: 4.9},
  {id: 5, time: 12, date: "30/11/2020", type: MeasurementsTypes.Activity, value: 5555},
  {id: 6, time: 15, date: "30/11/2020", type: MeasurementsTypes.BloodSugar, value: 5.3},
  {id: 7, time: 18, date: "30/11/2020", type: MeasurementsTypes.BloodSugar, value: 5.9},
  {id: 8, time: 8, date: "01/12/2020", type: MeasurementsTypes.BloodSugar, value: 5.9},
  {id: 9, time: 12, date: "01/12/2020", type: MeasurementsTypes.BloodSugar, value: 6.8}

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


  const addMeasurement = (time, date, type, value) => {
    let id = measurements.length
    setMeasurements(measurements.push({id, time, date, type, value}));

  };

  return ({measurements, setValue, addMeasurement});

}

export default useMeasurementHistory;