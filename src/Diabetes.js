import React from "react";
import Navigationbar from './Components/Navigationbar'
import Footer from './Components/Footer'
import Streak from "./Components/Streak";
import Achievement from "./Components/Achievement";
import ComingAchievementBox from "./Components/ComingAchievementBox";
import { Card } from "react-bootstrap"

const achievementLoop = (props) => {
  const {level, reachedAchievements, currentStreak, longestStreak} = props 
  if (level > 1) {
    alert(reachedAchievements.lenght - 1)
    return (
      <Card>
        <Card.Body>
        <p>"WALLA"</p>
        <ComingAchievementBox lastAchievement = {reachedAchievements[reachedAchievements.lenght - 1]} showOne = {true} currentStreak = {props.currentStreak} />
        </Card.Body>
      </Card>
    );
  } 
  

}

const DiabetesPage = (props) => {
  return (
    <div>
      <Navigationbar title={'Diabetes'} />
      <Streak {...props} />
      {achievementLoop(props)}
      
      {/* Todo: Import streak
                Create dud-buttons for goals
                */}
      <Footer />
    </div>
  );
}
//  check streaks boxen
export default DiabetesPage;