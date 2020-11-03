import React, { useState, useEffect } from 'react';
import { Nav, Navbar, Form } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./Navigationbar.css";
import Notifications from "./Notifications";


const NavigationBar = (props) => {
  const { globalTitle, setGlobalTitle } = props;
  const [expanded, setExpanded] = useState(false);
  const [activeHome, setActiveHome] = useState("active");
  const [activeLogin, setActiveLogin] = useState("");
  const [activeMedData, setActiveMedData] = useState("");
  const [activeProfile, setActiveProfile] = useState("");
  const [activeMeasurements, setActiveMeasurements] = useState("");

  useEffect(() => {
    if (globalTitle == "Home") {
      setActiveHome("active");
    } else { setActiveHome(""); }
    
    if (globalTitle == "Login") {
      setActiveLogin("active");
    } else { setActiveLogin(""); }

    if (globalTitle == "Medical data") {
      setActiveMedData("active");
    } else { setActiveMedData(""); }


    if (globalTitle == "Profile") {
      setActiveProfile("active");
    } else { setActiveProfile(""); }
    
    if (globalTitle == "Measurements") {
      setActiveMeasurements("active");
    } else { setActiveMeasurements(""); }
    


  }, [globalTitle])

  return (
    <div>
      <Navbar expanded={expanded} expand="lg">
        <Navbar.Toggle onClick={() => setExpanded(expanded ? false : true)} />
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Form className="form-center"> {globalTitle} </Form>
        <navbar-brand ID='NavbarID'>  </navbar-brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav data-toggle="collapse" className="ml-auto">
            <Link id={activeHome} className="navLink" to="/" onClick={() => { setExpanded(false); setGlobalTitle("Home") }} ><span ><Nav.Item >Home</Nav.Item></span></Link>
            <Link id={activeLogin} className="navLink" to="/Login" onClick={() => { setExpanded(false); setGlobalTitle("Login") }}><span><Nav.Item ><div>Log in</div></Nav.Item></span></Link>
            <Link id={activeMedData} className="navLink" to="/MedicalData" onClick={() => { setExpanded(false); setGlobalTitle("Medical data") }}><span><Nav.Item><div>History</div></Nav.Item></span></Link>
            <Link id={activeProfile} className="navLink" to="/profile" onClick={() => { setExpanded(false); setGlobalTitle("Profile") }}><span><Nav.Item><div>profile</div></Nav.Item></span></Link>
            <Link id={activeMeasurements} className="navLink" to="/measurements" onClick={() => { setExpanded(false); setGlobalTitle("Measurements") }}><span><Nav.Item><div>Measurements</div></Nav.Item></span></Link>

          </Nav>
        </Navbar.Collapse>
        {(!expanded &&
        <Notifications />)}
      </Navbar>
    </div >
  );

}

export default NavigationBar;