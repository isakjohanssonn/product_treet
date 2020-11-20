import React, { useState, Component, useEffect } from "react";
import { Alert } from 'react-bootstrap';
import GoogleLogin from 'react-google-login';


/*const GetGoogleFit = (date, time, bloodGlucose, activity) => {
    alert(date, time, bloodGlucose, activity)
    return (true)
}*/

const responseGoogle = (response) => {
  console.log(response.accessToken);
  console.log(response);
  GetGoogleData(response.accessToken);
}

const GetGoogleFit = () => {
  return (
    <div>
      <GoogleLogin
        clientId="654593297019-orbp64i7cajsh577k1lm6bnf5abo2roh.apps.googleusercontent.com"
        buttonText="Add Measurement"
        onSuccess={GetGoogleData}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        scope={[
            "https://www.googleapis.com/auth/fitness.activity.read",
            "https://www.googleapis.com/auth/fitness.blood_glucose.read",
          ].join(" ")}
      />
      <p>Här kan man hämta data från Google Fit</p>
    </div>
  )
}

const GetGoogleData = (accToken) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState();

  var url = 'https://www.googleapis.com/fitness/v1/users/me/dataSources';
  console.log(accToken);
  useEffect(() => {
      fetch(url, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${accToken}`,
            'Accept': 'application/json'
          },
      })
          .then(res => res.json())
          .then(
              (result) => {
                  setIsLoaded(true);
                  console.log(result);
                /*  setItems(obj);*/
              },
              (error) => {
                  setIsLoaded(true);
                  setError(error);
                  console.log(error);
              }
          )
  }, [])

  return (
      <div>
        <p>API req</p>
      </div>
  )
}

/*Gets activity data for the last week*/
export const getAggregatedDataBody = (dataType, endTime) => {
  const requestBody = {
    "aggregateBy": [{
      "dataTypeName": dataType
    }],
    "bucketByTime": {
      "durationMillis": 86400000
    },
    "endTimeMillis": endTime,
    "startTimeMillis": endTime - (7*86400000)
  }
  return requestBody;
}

export default GetGoogleFit;
