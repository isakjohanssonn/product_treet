import React, { useState } from "react";
import Streak from "./Components/Streak";
import { Button, ListGroup } from "react-bootstrap";
import MeasurementList, { Types } from "./Components/MeasurementList";
import Navigationbar from './Components/Navigationbar'
import Footer from './Components/Footer'

const Home = () => {
  return (
    <div>
      <Navigationbar title={'Home'} />
      <Streak />
      <MeasurementList />
      <Footer />
    </div>
  );
}

export default Home;