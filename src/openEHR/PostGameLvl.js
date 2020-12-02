import { FaLevelUpAlt } from "react-icons/fa";

const PostGameLevel = (level) => {
    
    var user = 'cds@lio.se';
    var pw = 'cds4ehr';
    var url = 'https://rest.ehrscape.com/rest/v1/composition?ehrId=6a0ed4a1-ddd5-47ce-8ffa-ae4a93de5eae&templateId=PUM_COMP4_GameSettings&format=FLAT';
    var headers = new Headers();
    headers.append('Authorization', 'Basic ' + btoa(user + ":" + pw));
    headers.append('Content-Type', 'application/json');

    const data = {
      "ctx/language": "en",
      "ctx/territory": "US",
      "pum_comp4_gamesettings/gamesettings/gamelevel": JSON.stringify(level)
    };

    fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data)
    }).then(res => console.log(res.json()));

} 

export default PostGameLevel;