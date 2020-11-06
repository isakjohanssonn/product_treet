import React, { Component } from 'react';
import { ListGroup, Button } from "react-bootstrap";
import { Link, Router } from "react-router-dom";
import {FaUserAlt, FaStar, FaClock, FaHome} from 'react-icons/fa'

import "./Footer.css"
import "./Navigationbar"

const Footer = (props) => {

  const {globalTitle, setGlobalTitle} = props;

  return (
    <div>
      <div className="footerDiv">
        <ListGroup horizontal>
          <Link className="footerLink" to="/" onClick={() => setGlobalTitle("Home")}><span><ListGroup.Item action ><FaHome></FaHome>
          </ListGroup.Item></span></Link>

          <Link className="footerLink" to="/measurements" onClick={() => setGlobalTitle("Measurements")}><span><ListGroup.Item action ><FaClock></FaClock>
          </ListGroup.Item></span></Link>

          <Link className="footerLink" to="/collectibledemo" onClick={() => setGlobalTitle("Collectible")}><span><ListGroup.Item action className="FooterListItem" ><FaStar></FaStar>
          </ListGroup.Item></span></Link>

          <Link className="footerLink" to="/profile" onClick={() => setGlobalTitle("Profile")}><span><ListGroup.Item action ><FaUserAlt></FaUserAlt>
          </ListGroup.Item></span></Link>

        </ListGroup>
        </div>

    </div>
  )
}

export default Footer