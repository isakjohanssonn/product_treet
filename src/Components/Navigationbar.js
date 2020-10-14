import React, { useState, useEffect } from 'react';
import { Nav, Navbar, Form } from 'react-bootstrap';
import { Link, withRouter } from "react-router-dom";
import "./Navigationbar.css";


var globaltitle = "";


const NavigationBar = () => {
  const [title, setTitle] = useState();
  globaltitle = title;
  useEffect(() => {
    document.title = globaltitle;
  });
  return (
    <div>
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Form className="form-center">
        </Form>
        <navbar-brand ID='NavbarID'> {title}</navbar-brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/" onClick={() => setTitle("Home")}><span><Nav.Item><div>Home</div></Nav.Item></span></Link>
            <Link to="/Login" onClick={() => setTitle("Login")}><span><Nav.Item><div>Log in</div></Nav.Item></span></Link>
            <Link to="/MedicalData" onClick={() => setTitle("MedicalData")}><span><Nav.Item><div>History</div></Nav.Item></span></Link>
            <Link to="/profile" onClick={() => setTitle("Profile")}><span><Nav.Item><div>profile</div></Nav.Item></span></Link>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );

}

export default NavigationBar;