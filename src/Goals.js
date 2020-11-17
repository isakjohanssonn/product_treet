import React from "react";
import "./Goals.css";
import DiseaseButton from './Components/DiseaseButton';
import Navigationbar from './Components/Navigationbar';
import Footer from './Components/Footer';
import Slider from './Components/Slider';

const GoalsPage = () => {
  return (

    <div>
      <Navigationbar title={'Goals'} />
      <div>
      <Slider/>
      <DiseaseButton title={'Diabetes'} link={'/Diabetes'} />
      <DiseaseButton title={'Heartfailure'}/>
      <DiseaseButton title={'COPD (KOL)'}/>
      <DiseaseButton title={'Hypertoni'}/>
      </div>
      <Footer />
 
   </div>
  );
}
 
export default GoalsPage;