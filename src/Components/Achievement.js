//Renders an achievement. As props it takes a achievement that it displays, and a boolean upcoming that says if the achievement
//should be shown with a progressbar or not, boolean showScore that if true shows like 7/10, showName that shows the name if true
// If the achievement is null it doesnt render anything.
import React from 'react';
import "./Achievement.css";
import ProgressBar from 'react-bootstrap/ProgressBar'

const Achievement = (props) => {

    const { achievement, upcoming, showScore, showName, currentStreak } = props;

    if (achievement) {
        if (showName) {
            var name = achievement.Name;
        }
        if (upcoming) {
            if (showScore) {
                var score = String(currentStreak) + "/" + String(achievement.Requirement);
            }
            return (
                <div className="upcoming-achievement-card">
                    <img src={achievement.Icon} className="placeholder" alt = {"achievement"}/>
                    <ProgressBar now={(currentStreak / achievement.Requirement) * 100} className="progressbar" />
                    <div className="achievement-label">{name}</div>
                    {score}
                </div>
            );
        }
        else {
            return (
                <div className="upcoming-achievement-card">
                    <img src={achievement.Icon} className="placeholder" alt = {"achievement"}/>
                    <div className="achievement-label">{name}</div>
                </div>);
        }
    }
    else {
        return (<div></div>);
    }

}

export default Achievement;