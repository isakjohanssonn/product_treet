import React from "react";
import RecentAchievementBox from "./Components/RecentAchievementBox";
import CommingAchievementBox from "./Components/ComingAchievementBox";
import Navigationbar from './Components/Navigationbar'
import Footer from './Components/Footer'

const AchievementPage = () => {
  return (
    <div>
      <Navigationbar title={'Achievements'} />
      <RecentAchievementBox />
      <CommingAchievementBox />
      <Footer />
    </div>    
  );
}
 
export default AchievementPage;