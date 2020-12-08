import React from "react";
import "./Global.css";
import "./Goals.css";
import DiseaseButton from './Components/DiseaseButton';
import Navigationbar from './Components/Navigationbar';
import Footer from './Components/Footer';
import Slider from './Components/Slider';

const GoalsPage = (props) => {
  const {level} = props;
  return (

    <div>
      <div className="goals-page">
      <Navigationbar title={'Goals'} />
      <Slider level = {level}/>
        <div className="goals-page-content">
        <DiseaseButton title={'Diabetes'} link={'/Diabetes'} level = {level}/>
        <DiseaseButton title={'Heartfailure'}/>
        <DiseaseButton title={'COPD (KOL)'}/>
        <DiseaseButton title={'Hypertoni'}/>
        </div>
      </div>
      <Footer />
 
   </div>
  );
}
 
export default GoalsPage;