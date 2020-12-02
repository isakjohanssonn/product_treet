import React, { useState } from "react";
import GoogleLogin from 'react-google-login';
import {Button} from 'react-bootstrap'

const responseGoogle = (response) => {
  console.log(response);
}

//For testers: Install google fit app on mobile, add activity "prommenad" on current day, Use Login TDDC88company4@gmail.com, pwr: TreetCo4. 
//Now click import from google, same login. 
const GetGoogleFit = (props) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState();
  const [today, setDate] = React.useState(new Date());
  var timeMs = 0;
  var date = new Date();
  const {value, setValue} = props;


 /*Function that sets the current day in format required by Google URL's*/
  function getUrl() {
    var currentDate = new Date();
    date = currentDate.toLocaleDateString('zh-Hans-CN');
    var eDateTime = currentDate.toLocaleDateString('zh-Hans-CN').replaceAll('/','-')+'T23:59:59';
    var sDateTime = currentDate.toLocaleDateString('zh-Hans-CN').replaceAll('/','-')+'T00:00:00';
    var googleUrl = 'https://www.googleapis.com/fitness/v1/users/me/sessions?startTime=' +
                    sDateTime + '.000Z&endTime=' + eDateTime + '.999Z';
    return googleUrl;
  }

/*Function that GETs activity sessions recorded today*/
  function getGoogleData(response) {
    var url = getUrl();
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
                getSessionData(result, response);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
                console.log(error);
            }
        )
  }

/*Function that selects all walks (activityType=7) and selects the latest. Then the time for that activity is calculated
 and nr of steps for that activity (walk) is fetched from Google Fit API.*/
  function getSessionData(result, response) {
    var latestSession = null;
    for (var i in result.session) {
      if (result.session[i].activityType === 7) {
        if(!latestSession || result.session[i].endTimeMillis > latestSession.endTimeMillis) {
          latestSession = result.session[i];
        }
      }
    }

    if(latestSession) {
      timeMs = latestSession.endTimeMillis - latestSession.startTimeMillis;
      /*Fetches the steps for the latest session*/
      fetch('https://fitness.googleapis.com/fitness/v1/users/me/dataset:aggregate', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${response.accessToken}`,
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            "aggregateBy": [{
              "dataSourceId": "derived:com.google.step_count.delta:com.google.android.gms:estimated_steps"
            }],
            "startTimeMillis": `${latestSession.startTimeMillis}`,
            "endTimeMillis": `${latestSession.endTimeMillis}`
          })
      })
          .then(res => res.json())
          .then(
              (result) => {
                  setIsLoaded(true);
                  setValue(result.bucket[0].dataset[0].point[0].value[0].intVal);
                  /*SEND STEPS = "steps" (int), DATE = "date" (YYYY/MM/DD) AND TIME IN MS = "timeMs" HERE.*/
              },
              (error) => {
                  setIsLoaded(true);
                  setError(error);
                  console.log(error);
              }
          )
    } else {
      console.log("Error: There are no activities of type 7 (walk) recorded today");
    }
  }
  return (
    <div>
      <GoogleLogin
        clientId="654593297019-orbp64i7cajsh577k1lm6bnf5abo2roh.apps.googleusercontent.com"
        render={renderProps => (
          <Button onClick={renderProps.onClick} disabled={renderProps.disabled || value !== "..."}>Import Data From Google Fit</Button>
        )}
        onSuccess={getGoogleData}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        scope={[
            "https://www.googleapis.com/auth/fitness.activity.read",
            "https://www.googleapis.com/auth/fitness.blood_glucose.read",
          ].join(" ")}
      />
    </div>
  )
}

export default GetGoogleFit;
