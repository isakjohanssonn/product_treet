//import React, { useState, useEffect } from 'react';

const GetGameLevel = (setLevel) => {
    
    var user = 'lio.se1';
    var pw = 'lio.se123';
    var url = 'https://rest.ehrscape.com/rest/v1/view/PUM_COMP4_GameLevel';
    var headers = new Headers();
    headers.append('Authorization', 'Basic ' + btoa(user + ":" + pw));
    
    var level;
    
    if (!level) {
    fetch(url, {
      method: 'GET',
      headers: headers,
    }).then(res => res.json()).then(res => parseInt(res[res.length - 1]["#1"]["value"])).then(res => setLevel(1));

    }

} 

export default GetGameLevel;