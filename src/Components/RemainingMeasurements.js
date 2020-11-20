import React, {useState, useEffect} from "react";
import {FaLessThanEqual} from "react-icons/fa";

//Added this to make things easier and to minimize the risk of typing-errors.
export const MeasurementsTypes = {
    BloodSugar: "Blood sugar",
    Activity: "Go for a walk",
};

const RemainingMeasurements = () => {
    const [remaining] = useState([]) //Made this into a array with objects with {activity, time & completed?} instead of keeping all info separate.
    const [sugarTime] = useState(["08:00", "12:00", "18:00", "21:00"]) //hardcoded, should come from doctor/med reccord
    const [activityTime] = useState("18:00") // same as above.
    const [doneSugar] = useState(["08:00", "13:00"]) //TODO: import actual data from EHR
    const [doneActivity] = useState() //TODO: import actual data from EHR
    const [time] = useState(new Date().toLocaleString());

    useEffect(() => {
        if (sugarTime.length > doneSugar.length) {
            for (var i = 0; i < sugarTime.length; i++) {
                if (sugarTime[i] > time.substring(11, 13)) {
                    remaining.push({activity: MeasurementsTypes.BloodSugar, time: sugarTime[i], completed: false});
                    //as said above, remaining is now a array with objects with {activity, time & completed?}
                }
            }
        }

        if (doneActivity == null) {
            remaining.push({activity: MeasurementsTypes.Activity, time: activityTime, completed: false});
        } else {
            for (var i = 0; doneActivity.length > i; i++) {
                remaining.push({activity: MeasurementsTypes.Activity, time: doneActivity[i], completed: true});
            }
        }


    }, []);

    for (var i = 0; doneSugar.length > i; i++) {
        remaining.push({activity: MeasurementsTypes.BloodSugar, time: sugarTime[i], completed: true});
    }

    return ({remaining});

}

export default RemainingMeasurements;