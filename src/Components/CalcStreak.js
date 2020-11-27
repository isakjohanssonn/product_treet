const CalcStreak = (currentStreak, longestStreak, setLongestStreak) =>
{
    if (currentStreak > longestStreak)
    {
        setLongestStreak(currentStreak);
    }
}
export default CalcStreak;