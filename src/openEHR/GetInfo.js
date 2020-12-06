const GetInfo = (setLevel, setCurrentStreak, setLongestStreak, setCurrentTree, setTreeAge, setIsSickTree, setReachedAchievement) => {
    
    var user = 'lio.se1';
    var pw = 'lio.se123';
    var url = 'https://rest.ehrscape.com/rest/v1/view/PUM_COMP4_GameSettings_v3';
    var headers = new Headers();
    headers.append('Authorization', 'Basic ' + btoa(user + ":" + pw));
    
    console.log("beginning of getinfo")
    
    fetch(url, {
      method: 'GET',
      headers: headers,
    }).then(res => res.json()).then(res => {
      console.log("all info är nu : ", res[0])
      console.log("achievments är ", [parseInt(res[0]["achivements"][1]), parseInt(res[0]["achivements"][3])])//[parseInt(res[0]["achivements"][1]), parseInt(res[0]["achivements"][3])])
      //var test = res[0]["achivements"];
      //console.log(parseInt(res[0]["currentTree"]))

      setLevel(parseInt(res[0]["gameLevel"]))
      setCurrentStreak(parseInt(res[0]["currentStreak"]))
      setLongestStreak(parseInt(res[0]["longestStreak"]))
      setCurrentTree(parseInt(res[0]["currentTree"]))
      setTreeAge(parseInt(res[0]["treeAge"]))
      setIsSickTree(res[0]["isSick"])
      setReachedAchievement([parseInt(res[0]["achivements"][1]), parseInt(res[0]["achivements"][3])])

    });
    //console.log("end of getinfo")
} 

export default GetInfo;
