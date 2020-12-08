import {useState} from "react";

//Added this to make things easier and to minimize the risk of typing-errors.
//this hook contains all measurements to take today:
// How to use:
// const {measurements, setCompleted} = useRemainingMeasurements();

export const MeasurementsTypes = {
    BloodSugar: "Blood sugar",
    Activity: "Activity",
};

const data = [
    {id: 0, type: MeasurementsTypes.Activity, time: 18, completed: false, value: null},
    {id: 1, type: MeasurementsTypes.BloodSugar, time: 8, completed: true, value: null},
    {id: 2, type: MeasurementsTypes.BloodSugar, time: 18, completed: true, value: null},
    {id: 3, type: MeasurementsTypes.BloodSugar, time: 21, completed: true, value: null},
    {id: 4, type: MeasurementsTypes.BloodSugar, time: 12, completed: false, value: null},
]

const useRemainingMeasurements = () => {
    const [measurements, setMeasurements] = useState(data);

    const setCompleted = (id, value) => {
        const newList = [...measurements];

        // loopa igenom measurments och hitta det objekt som har rätt id.
        function isCorrectId(measurement) {
            return measurement.id === id;
        }
        const found = newList.find(isCorrectId);

        if (found) {
            found.completed = true;
            found.value = value;
            setMeasurements(newList);
        }
    }

    let remainingAmount = 0;
    measurements.forEach(measurement => {
        if (!measurement.completed) {
            remainingAmount++;
        }
    });

    return ({measurements, remainingAmount, setCompleted});

}

export default useRemainingMeasurements;