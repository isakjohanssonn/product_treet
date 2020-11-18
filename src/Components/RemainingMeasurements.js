import React, { useState, useEffect } from "react";



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
          remaining.push("BloodSugar");
          remaining.push(sugarTime[i]);

        }
      }
    }

    if (doneActivity == null) {
      remaining.push("Activity");
      remaining.push(activityTime)
    }
  }, []);
  return ({ remaining });

}

export default RemainingMeasurements;