import React from "react";
import NewMeasurement from "./Components/NewMeasurement";
import DateAndCalendar from "./Components/DateAndCalendar";
import Navigationbar from "./Components/Navigationbar";
import useRemainingMeasurements from "./Components/useRemainingMeasurements";
import useMeasurementHistory from "./Components/useMeasurementHistory";
import Footer from './Components/Footer';


export default function AddMedDataNew(props) {
  const { state } = props.location;
  let type, id, completed, from, onClick, time;
  const { setCompleted } = useRemainingMeasurements();
  const { setValue } = useMeasurementHistory();
  const { currentStreak, setCurrentStreak } = props;
  const { treeAge, setTreeAge } = props;



  onClick = setCompleted;

  if (state) {
    // State will determine how we got here. If state is undefined show error page
    // State is a measurement type, see Types in components/MeasurementList
    id = state.id;
    type = state.type;
    completed = state.completed;
    from = state.from; //0
    time = state.time;

    if (from === 1) {
      onClick = setValue;
    }

  } else {
    // om state inte finns så har vi kommit till denna komponent på fel sätt.
    window.location = '/home'
  }

  let title = completed ? "Edit Measurement" : 'New Measurement';

  if ((!completed) && from === 1) {
    title = "Edit Measurement";
  }

  return (

    <div className="addMedDataNew">

      <Navigationbar title={title} />
      <DateAndCalendar />
      <NewMeasurement
        id={id}
        time={time}
        setCompleted={onClick}
        type={type}
        from={from}
        completed={completed}
        currentStreak={currentStreak}
        setCurrentStreak={setCurrentStreak}
        treeAge={treeAge}
        setTreeAge={setTreeAge}
/>
      <Footer />
    </div>
  )
}