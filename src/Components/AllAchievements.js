//Use like this: const [achievement] = useState(AllAchievements(0))
//Where 0 is the id, choose whichever you want but it will crash if the id does not exist
//Then you can print one of the values by {achievement.Name} for example

const AllAchievements = (props) => {
     var a0 = {
        'Name': "Five day streak",
        'Icon': "",
        'Info' : "Report measurments five days in a row",
        'Requirement' : 5,
      }
    

      var a1 = {
        'Name': "Ten day streak",
        'Icon': "",
        'Info' : "Report measurments ten days in a row",
        'Requirement' : 10,
      }

      var a2 = {
        'Name': "Ten day streak",
        'Icon': "",
        'Info' : "Report measurments ten days in a row",
        'Requirement' : 10,
      }
      var a3 = {
        'Name': "Ten day streak",
        'Icon': "",
        'Info' : "Report measurments ten days in a row",
        'Requirement' : 10,
      }
      var a4 = {
        'Name': "Ten day streak",
        'Icon': "",
        'Info' : "Report measurments ten days in a row",
        'Requirement' : 10,
      }
      var a5 = {
        'Name': "Ten day streak",
        'Icon': "",
        'Info' : "Report measurments ten days in a row",
        'Requirement' : 10,
      }
    
    const achievements = [a0, a1, a2, a3, a4, a5];
    
  
    return (achievements[props]);
  
  }
  
  export default AllAchievements;