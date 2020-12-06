import React from "react";
import Navigationbar from './Components/Navigationbar'
import Footer from './Components/Footer'
import Streak from "./Components/Streak";
import './Global.css';
import { Card } from "react-bootstrap"
import "./Global.css"
import AchievementBox from "./Components/AchievementBox";
import "./ProfilePage.css"
import { ArrowRight } from 'react-bootstrap-icons';
import BronzeStar from "./img/achievementsimg/bronze_star.png";
import SilverStar from "./img/achievementsimg/silver_star.png";
import GoldStar from "./img/achievementsimg/golden_star.png";

export const GoalsBox = (props) => {
  const { icon, title, notReached } = props;
  let contentIfNotReached;
  if (notReached)
  {
    contentIfNotReached = (<div className="divCardArrow" >
    <ArrowRight viewBox="0 0 16 16" className="pull-right cardArrow" fill="currentColor" />
  </div>);
  }
  return (
    <div>
      <Card className="boxCardMain standardBorder" >
        <Card.Body className="cardBody card-columns">
          <div className="iconDiv">
          <img src={icon} className="profileBoxIcon" />
          </div>
          <Card.Header className="cardHeader">{title}</Card.Header>
          {contentIfNotReached}
        </Card.Body>
      </Card>

    </div>
  );
}

const DiabetesPage = (props) => {
  const {reachedAchievements, currentStreak} = props 
  return (
    <div>
      <Navigationbar title={'Diabetes'} />
      <div className="scrollable">
      <div className = "topBlock"></div>
      <Streak {...props} />
      <Card.Header className="centeredCardTitle">Goals</Card.Header>
      <GoalsBox title="Lose 5 kg" icon = {SilverStar} notReached = {1}/>
      <GoalsBox title="Lower avg blood pressure than previous week" icon = {BronzeStar} notReached = {1}/>
      <GoalsBox title="Consistent measurements 14 days in a row" icon = {GoldStar} notReached = {1}/>
      <Card.Header className="centeredCardTitle">Reached goals</Card.Header>
      <GoalsBox title="Lose 2 kg" icon = {BronzeStar} notReached = {0}/>
      <GoalsBox title="Consistent measurements 7 days in a row" icon = {SilverStar} notReached = {0}/>
      </div>
      {/* Todo: Import streak
                Create dud-buttons for goals
                */}
      <Footer />
    </div>
  );
}
//  check streaks boxen
export default DiabetesPage;