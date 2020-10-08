import React, { Component } from 'react';
import { Button,Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import { useHistory, Link} from "react-router-dom";
import { createBrowserHistory } from "history";

import "./Navigationbar.css";

function componentWillReceiveProps(nextProps) {
  if (nextProps.location !== this.props.location) {
    // navigated!
  }
}
 

  export const NavigationBar = () => (
    <div>
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Form className="form-center">
        </Form>

        <navbar-brand ID='NavbarID'>Home</navbar-brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
          <Link to="/"><span><Nav.Item><div>Home</div></Nav.Item></span></Link>
           
            <Nav.Item><Nav.Link to="/MedicalData">MedicalData</Nav.Link></Nav.Item>
            <Nav.Item><Link to="/Profile">Profile</Link></Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )


  export default NavigationBar;