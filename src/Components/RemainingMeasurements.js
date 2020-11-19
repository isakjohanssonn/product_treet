import React, { useState, useEffect } from "react";
import { FaLessThanEqual } from "react-icons/fa";



const RemainingMeasurements = () => {
  const [remaining] = useState([])
  const [sugarTime] = useState([8, 12, 18, 21]) //hardcoded, should come from doctor/med reccord
  const [activityTime] = useState(18) // same as above.
  const [doneSugar] = useState([8, 13]) //TODO: import actual data from EHR
  const [doneActivity] = useState() //TODO: import actual data from EHR
  const [time] = useState(new Date().toLocaleString());

  useEffect(() => {
    if (sugarTime.length > doneSugar.length) {
      for (var i = 0; i < sugarTime.length; i++) {
        if (sugarTime[i] > time.substring(11, 13)) {
          remaining.push("Blood Sugar");
          remaining.push(sugarTime[i]);
          remaining.push(false);
        }
      }
    }

    if (doneActivity == null) {
      remaining.push("Activity");
      remaining.push(activityTime);
      remaining.push(false);
    } else {
      for  ( var i = 0; doneActivity.length > i ; i++) {
        remaining.push("Activity");
        remaining.push(doneActivity[i]);
        remaining.push(true);
      }
    }

    
  }, []);

  for  ( var i = 0; doneSugar.length > i ; i++) {
    remaining.push("BloodSugar");
    remaining.push(doneSugar[i]);
    remaining.push(true);
  }

  return ({ remaining });

}

export default RemainingMeasurements;