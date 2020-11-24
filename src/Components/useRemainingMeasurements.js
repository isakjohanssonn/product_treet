import {useState} from "react";

//Added this to make things easier and to minimize the risk of typing-errors.
export const MeasurementsTypes = {
    BloodSugar: "Blood sugar",
    Activity: "Go for a walk",
};

function getBloodSugarTime(sugarTime, i) {
    return parseInt(sugarTime[i].split(":")[0], 10);
}

const data = [
    {id: 0, activity: MeasurementsTypes.BloodSugar, time: "08:00", completed: true, value: "3 mmol/L"},
    {id: 1, activity: MeasurementsTypes.BloodSugar, time: "18:00", completed: false, value: null},
    {id: 2, activity: MeasurementsTypes.BloodSugar, time: "21:00", completed: false, value: null},
    {id: 3, activity: MeasurementsTypes.BloodSugar, time: "12:00", completed: true, value: "6 mmol/L"},
    {id: 4, activity: MeasurementsTypes.Activity, time: "18:00", completed: false, value: null},
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