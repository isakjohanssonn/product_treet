import React, { useState, useEffect } from 'react';
import { Nav, Navbar, Form } from 'react-bootstrap';
import { Link, withRouter } from "react-router-dom";
import "./Navigationbar.css";

const NavigationBar = (props) => {

  const {globalTitle, setGlobalTitle} = props;

  return (
    <div>
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Form className="form-center">
        </Form>
        <navbar-brand ID='NavbarID'> {globalTitle}</navbar-brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/" onClick={() => setGlobalTitle("Home")}><span><Nav.Item><div>Home</div></Nav.Item></span></Link>
            <Link to="/Login" onClick={() => setGlobalTitle("Login")}><span><Nav.Item><div>Log in</div></Nav.Item></span></Link>
            <Link to="/MedicalData" onClick={() => setGlobalTitle("Medical data")}><span><Nav.Item><div>History</div></Nav.Item></span></Link>
            <Link to="/profile" onClick={() => setGlobalTitle("Profile")}><span><Nav.Item><div>profile</div></Nav.Item></span></Link>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );

}

export default NavigationBar;