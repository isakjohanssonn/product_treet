


//Use like this: const [achievement] = useState(AllAchievements(0))
//Where 0 is the id, choose whichever you want but it will crash if the id does not exist
//Then you can print one of the values by {achievement.Name} for example

const AllAchievements = (ID) => {

     var a0 = {
       ID: 0,
        'Name': "Five day streak",
        'Icon': "",
        'Info' : "Report measurments five days in a row",
        'Requirement' : 5,
      }
    

      var a1 = {
        ID: 1,
        'Name': "Ten day streak",
        'Icon': "",
        'Info' : "Report measurments ten days in a row",
        'Requirement' : 10,
      }

      var a2 = {
        ID: 2,
        'Name': "Ten day streak",
        'Icon': "",
        'Info' : "Report measurments 15 days in a row",
        'Requirement' : 15,
      }
      var a3 = {
        ID: 3,
        'Name': "Ten day streak",
        'Icon': "",
        'Info' : "Report measurments 20 days in a row",
        'Requirement' : 20,
      }
      var a4 = {
        ID: 4,
        'Name': "Ten day streak",
        'Icon': "",
        'Info' : "Report measurments 30 days in a row",
        'Requirement' : 30,
      }
      var a5 = {
        ID: 5,
        'Name': "Ten day streak",
        'Icon': "",
        'Info' : "Report measurments 40 days in a row",
        'Requirement' : 40,
      }
    
    const achievements = [a0, a1, a2, a3, a4, a5];


  
    return ({achievement: achievements[ID], totalNumberOfAchievements: achievements.length});
  
  }
  
  export default AllAchievements;