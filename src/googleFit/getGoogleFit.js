import React, { useState, Component, useEffect } from "react";
import { Alert } from 'react-bootstrap';
import GoogleLogin from 'react-google-login';


/*const GetGoogleFit = (date, time, bloodGlucose, activity) => {
    alert(date, time, bloodGlucose, activity)
    return (true)
}*/

const responseGoogle = (response) => {
  console.log(response);

}

const GetGoogleFit = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState();
  const [today, setDate] = React.useState(new Date());

  function getUrl() { /*Function that sets the current day in format required by Google*/
    var currentDate = new Date();
    var eDateTime = currentDate.toLocaleDateString('zh-Hans-CN').replaceAll('/','-')+'T23:59:59';
    var sDateTime = currentDate.toLocaleDateString('zh-Hans-CN').replaceAll('/','-')+'T00:00:00';
    var googleUrl = 'https://www.googleapis.com/fitness/v1/users/me/sessions?startTime=' +
                    sDateTime + '.000Z&endTime=' + eDateTime + '.999Z';
    return googleUrl;
  }

  function getGoogleData(response) {
    var url = "https://www.googleapis.com/fitness/v1/users/me/sessions?startTime=2020-10-01T00:00:00.000Z&endTime=2020-11-20T23:59:59.999Z";
    /*Temp lösning ^^, jobbar på att lösa det faktiska var url = getUrl()*/
    console.log(url);
    fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${response.accessToken}`,
          'Accept': 'application/json'
        },
    })
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                console.log(result);
                extractSession(result);
              /*  setItems(obj);*/
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
                console.log(error);
            }
        )
  }

  function extractSession(result) {
    console.log(result);
    for (var i in result.session) {
      console.log(i);
      if (i.activityType == 7) {
        console.log(i);
      }

    }
    var listSessions = result.filter(session => session.activityType === '7');

  }

  return (
    <div>
      <GoogleLogin
        clientId="654593297019-orbp64i7cajsh577k1lm6bnf5abo2roh.apps.googleusercontent.com"
        buttonText="Add Measurement"
        onSuccess={getGoogleData}
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
