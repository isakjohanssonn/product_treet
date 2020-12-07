import AllAchievements from "./AllAchievements";
const CalcAchievements = (currentStreak, reachedAchievement, setReachedAchievement) => {
    var nextAchievementID;
    if (reachedAchievement.length != 0) {
        nextAchievementID = reachedAchievement[reachedAchievement.length - 1] + 1;
    }
    else {
        nextAchievementID = 0;
    }
    const nextAchievement = AllAchievements(nextAchievementID).achievement;
    if (currentStreak == nextAchievement.Requirement) {
        const newAchievementArray = reachedAchievement;
        newAchievementArray.push(nextAchievementID);
        setReachedAchievement(newAchievementArray);
    }
}
export default CalcAchievements;