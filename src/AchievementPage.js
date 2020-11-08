import React, { Component } from "react";
import LatestAchievementBox from "./Components/AchievementBox";
import CommingAchievementBox from "./Components/ComingAchievementBox";

class AchievementPage extends Component {
  render() {
    return (
      <div>
        <LatestAchievementBox />


        <CommingAchievementBox />
      </div>

      
    );
  }
}
 
export default AchievementPage;