import React, { Component } from 'react';
import { ListGroup, Button } from "react-bootstrap";
import { Link, Router } from "react-router-dom";
import "./Footer.css"


export const Footer = () => {
  return (
    <div>

      <div className="style">
        <ListGroup horizontal>
          <ListGroup.Item action tolink={"/"} ><Link to="/">H</Link>

          </ListGroup.Item>
          <ListGroup.Item action ><Link to="/">A</Link>
{/* This one below is the one that works */}
          </ListGroup.Item>
          <Link to="/MedicalData"><span><ListGroup.Item action >H

          </ListGroup.Item></span></Link>
          <ListGroup.Item action ><Link to="/contact">M</Link>

          </ListGroup.Item>
          <ListGroup.Item action ><Link to="/Profile">P</Link>

          </ListGroup.Item>
          
        </ListGroup>,
        </div>

    </div>
  )
}

export default Footer