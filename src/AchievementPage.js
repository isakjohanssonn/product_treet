import React from "react";
import AchievementBox from "./Components/AchievementBox";
import ComingAchievementBox from "./Components/ComingAchievementBox";
import AllAchievementsBox from "./Components/AllAchievementsBox";
import Navigationbar from './Components/Navigationbar'
import Footer from './Components/Footer'

const AchievementPage = () => {

  //Hard coded achievements that have been reached
  const achievements = [0, 1];
  return (
    <div>
      <Navigationbar title={'Achievement'} />
      <br /><br />
      <AchievementBox reachedAchievements={achievements} />
      <ComingAchievementBox lastAchievement={achievements[achievements.length - 1]} showOne = {1} />
      <AllAchievementsBox />
      <Footer />
    </div>
    


  );
}

export default AchievementPage;