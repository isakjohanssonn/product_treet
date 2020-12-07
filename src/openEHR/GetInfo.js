const GetInfo = (setLevel, setCurrentStreak, setLongestStreak, setCurrentTree, setTreeAge, setIsSickTree, setReachedAchievement) => {

  var user = 'lio.se1';
  var pw = 'lio.se123';
  var url = 'https://rest.ehrscape.com/rest/v1/view/PUM_COMP4_GameSettings_v3';
  var headers = new Headers();
  headers.append('Authorization', 'Basic ' + btoa(user + ":" + pw));

  fetch(url, {
    method: 'GET',
    headers: headers,
  }).then(res => res.json()).then(res => {
    setLevel(parseInt(res[0]["gameLevel"]))
    setCurrentStreak(parseInt(res[0]["currentStreak"]))
    setLongestStreak(parseInt(res[0]["longestStreak"]))
    setCurrentTree(parseInt(res[0]["currentTree"]))
    setTreeAge(parseInt(res[0]["treeAge"]))
    setIsSickTree(res[0]["isSick"])
    setReachedAchievement(() => {
      let x = [];
      let val = "";
      for (let i = 1; i < (res[0]["achivements"]).length - 1; i++) {
        if (res[0]["achivements"][i] == ',') {
          x.push(parseInt(val));
          val = "";
        }
        else {
          val = val.concat(res[0]["achivements"][i]);
        }
      }
      x.push(parseInt(val));
      return x;
    })
  });
}

export default GetInfo;
