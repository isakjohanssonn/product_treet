import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import "./Navigationbar.css";
import { useAuth0 } from "@auth0/auth0-react";
import { FiLogOut } from 'react-icons/fi';
import { HiArrowLeft } from 'react-icons/hi';
import { useHistory } from 'react-router-dom';

const NavigationBar = (props) => {
  const [history] = useState(useHistory());
  const [gtitle] = useState(props.title);
  const { logout } = useAuth0();

  console.log(gtitle)
  console.log("hej" + gtitle)


  const BackButton = () => {
    if (gtitle == 'Home' ){ 
      return null  
    } else if (gtitle == 'Goals'){
      return null
    } else if (gtitle == 'History'){
      return null
    } else if (gtitle == 'Profile'){
      return null
    } else {
      return (
      console.log(gtitle),
      <button className="navbutton" id="back" onClick={() => history.goBack()} ><HiArrowLeft></HiArrowLeft></button>
      );
    }
  }

  return (
    <ListGroup horizontal className="mainDiv">
      <div className="backbutton">
      {BackButton()}
      </div>
      <div className="title">
        <h1> {gtitle} </h1>
      </div>
      <div id="logout">
        <button className="navbutton" id="logout" onClick={() => logout({ returnTo: window.location.origin })}><FiLogOut></FiLogOut></button>
      </div>
    </ListGroup >
  );

}

export default NavigationBar;