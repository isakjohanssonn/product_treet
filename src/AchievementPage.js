import React from "react";
import AchievementBox from "./Components/AchievementBox";
import ComingAchievementBox from "./Components/ComingAchievementBox";
import AllAchievementsBox from "./Components/AllAchievementsBox";
import Navigationbar from './Components/Navigationbar'
import Footer from './Components/Footer'


const AchievementPage = (props) => {
   // Important notice: the props received here is the gameification-level.
   // To use this in this component type: const {level} = props;
   // if you only wish to pass it to a child component, add {...props} when calling the component.
   // For an example, look on the ProfilePage.js


  //Hard coded achievements that have been reached
  const achievements = [0, 1];
  return (
    <div>
      <Navigationbar title={'Achievement'} />
      <br /><br />
      <AchievementBox reachedAchievements={achievements} />
      <ComingAchievementBox lastAchievement={achievements[achievements.length - 1]} />
      <AllAchievementsBox />
      <Footer />
    </div>



  );

}

export default AchievementPage;