import React, { Component } from 'react';
import { ListGroup, Button } from "react-bootstrap";
import { Link, Router } from "react-router-dom";
import "./Footer.css"
import "./Navigationbar"

const Footer = (props) => {

  const {globalTitle, setGlobalTitle} = props;

  return (
    <div>
      <div className="style">
        <ListGroup horizontal>
          <Link to="/" onClick={() => setGlobalTitle("Home")}><span><ListGroup.Item action >Home
          </ListGroup.Item></span></Link>

          <Link to="/" onClick={() => setGlobalTitle("Home")}><span><ListGroup.Item action >H
          </ListGroup.Item></span></Link>

          <Link to="/MedicalData" onClick={() => setGlobalTitle("Medical data")}><span><ListGroup.Item action >History
          </ListGroup.Item></span></Link>

          <Link to="/contact" onClick={() => setGlobalTitle("Contact")}><span><ListGroup.Item action >help
          </ListGroup.Item></span></Link>

          <Link to="/profile" onClick={() => setGlobalTitle("Profile")}><span><ListGroup.Item action >P
          </ListGroup.Item></span></Link>

        </ListGroup>,
        </div>

    </div>
  )
}

export default Footer