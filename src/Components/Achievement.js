//Renders an achievement. As props it takes a achievement that it displays, and a boolean upcoming that says if the achievement
//should be shown with a progressbar or not. If the achievement is null it doesnt render anything.
import placeholder from "../images/placeholderHexagon.png";
import React from 'react';
import "./Achievement.css";
import ProgressBar from 'react-bootstrap/ProgressBar'

const Achievement = (props) => {

    const {achievement, upcoming} = props;
    if(achievement && upcoming) {
    return(
        <div className = "upcoming-achievement-card">
        <img src = {placeholder} className = "placeholder"/>
        <ProgressBar now = {(10/achievement.Requirement)*100} className = "progressbar" />
        <div className = "achievement-label">{achievement.Name}</div>
        </div>
    );}
    else if (achievement){
        return(
        <div className = "upcoming-achievement-card">
        <img src = {placeholder} className = "placeholder"/>
        <div className = "achievement-label">{achievement.Name}</div>
        </div>);
    }
    else {
        return(<div></div>);
    }
}
 
export default Achievement;