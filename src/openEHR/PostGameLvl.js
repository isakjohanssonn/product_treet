const PostGameLevel = (level) => {
    
    var user = 'lio.se1';
    var pw = 'lio.se123';
    var url = 'https://rest.ehrscape.com/rest/v1/view/PUM_COMP4_GameLevel';
    var headers = new Headers();
    headers.append('Authorization', 'Basic ' + btoa(user + ":" + pw));

    const data = {"level" : level};

    fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data)
    }).then(res => console.log(res.json()));

} 

export default PostGameLevel;