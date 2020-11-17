import React from "react";
import AchievementBox from "./Components/AchievementBox";
import ComingAchievementBox from "./Components/ComingAchievementBox";
import AllAchievementsBox from "./Components/AllAchievementsBox";

const AchievementPage = () => {

  //Hard coded achievements that have been reached
  const achievements = [0, 1 , 2];
  return (
    <div>
      <AchievementBox reachedAchievements = {achievements}/>
      <ComingAchievementBox lastAchievement = {achievements[achievements.length-1]} />
      <AllAchievementsBox />
    </div>

    
  );
}
 
export default AchievementPage;