import React, { Component } from 'react';
import { Nav, Navbar, Form } from 'react-bootstrap';
import { Link, withRouter } from "react-router-dom";
import "./Navigationbar.css";





class NavigationBar extends Component {
  state = {
    title: "Home"
  }


  render() {
    return (
      <div>
        <Navbar expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Form className="form-center">
          </Form>
          <navbar-brand ID='NavbarID'> {this.state.title}</navbar-brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link to="/"><span><Nav.Item><div>Home</div></Nav.Item></span></Link>
              <Link to="/Login"><span><Nav.Item><div>Log in</div></Nav.Item></span></Link>
              <Link to="/MedicalData"><span><Nav.Item><div>History</div></Nav.Item></span></Link>
              <Link to="/profile"><span><Nav.Item><div>profile</div></Nav.Item></span></Link>

            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}


export default NavigationBar;