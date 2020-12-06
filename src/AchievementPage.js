import React from "react";
import AchievementBox from "./Components/AchievementBox";
import ComingAchievementBox from "./Components/ComingAchievementBox";
import AllAchievementsBox from "./Components/AllAchievementsBox";
import './Global.css';
import Navigationbar from './Components/Navigationbar'
import Footer from './Components/Footer'


const AchievementPage = (props) => {
   // Important notice: the props received here is the gameification-level.
   // To use this in this component type: const {level} = props;
   // if you only wish to pass it to a child component, add {...props} when calling the component.
   // For an example, look on the ProfilePage.js

  const {reachedAchievements, currentStreak} = props;
  return (
    <div className = "scrollable">
      <Navigationbar title={'Achievement'} />
      <br /><br />
      <AchievementBox reachedAchievements={reachedAchievements} />
      <ComingAchievementBox lastAchievement=
      {reachedAchievements[reachedAchievements.length - 1]}
      currentStreak = {currentStreak} />
      <AllAchievementsBox />
      <Footer />
    </div>



  );

}

export default AchievementPage;