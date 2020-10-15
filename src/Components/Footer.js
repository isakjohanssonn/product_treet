import React, { Component } from 'react';
import { ListGroup, Button } from "react-bootstrap";
import { Link, Router } from "react-router-dom";
import "./Footer.css"
import "./Navigationbar"

export const Footer = () => {
  return (
    <div>
      <div className="style">
        <ListGroup horizontal>
          <Link to="/"><span><ListGroup.Item action >Home
          </ListGroup.Item></span></Link>

          <Link to="/"><span><ListGroup.Item action >H
          </ListGroup.Item></span></Link>

          <Link to="/MedicalData"><span><ListGroup.Item action >History
          </ListGroup.Item></span></Link>

          <Link to="/contact"><span><ListGroup.Item action >help
          </ListGroup.Item></span></Link>

          <Link to="/profile"><span><ListGroup.Item action >P
          </ListGroup.Item></span></Link>

        </ListGroup>,
        </div>

    </div>
  )
}

export default Footer