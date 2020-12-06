import { JournalArrowDown } from "react-bootstrap-icons";

const PostInfo = (level, currentstreak, longeststreak, currenttree, treeage, issick, achievment) => {
    
    var user = 'cds@lio.se';
    var pw = 'cds4ehr';
    var url = 'https://rest.ehrscape.com/rest/v1/composition?ehrId=6a0ed4a1-ddd5-47ce-8ffa-ae4a93de5eae&templateId=PUM_COMP4_gameSettings_v1&format=FLAT';
    var headers = new Headers();
    headers.append('Authorization', 'Basic ' + btoa(user + ":" + pw));
    headers.append('Content-Type', 'application/json');
    console.log("beginning of postinfo")
    console.log("achievment", achievment);


    const data = {
      "ctx/language": "en",
      "ctx/territory": "US",
      "pum_comp4_gamesettings_v1/gamification/gameificationlevel": JSON.stringify(level),
      "pum_comp4_gamesettings_v1/gamification/currentstreak": JSON.stringify(currentstreak),
      "pum_comp4_gamesettings_v1/gamification/longeststreak": JSON.stringify(longeststreak),
      "pum_comp4_gamesettings_v1/gamification/currenttree": JSON.stringify(currenttree),
      "pum_comp4_gamesettings_v1/gamification/treeage": JSON.stringify(treeage),
      "pum_comp4_gamesettings_v1/gamification/issick": issick,
      "pum_comp4_gamesettings_v1/gamification/achivement:0": JSON.stringify(achievment)//[1, 2, 3, 4]  //Achievment, en lista av integers JSON.stringify(achievment)
    };

    

    fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data)
    });// }).then(res => console.log(res.json()));
    console.log("end of postinfo")
} 

export default PostInfo;