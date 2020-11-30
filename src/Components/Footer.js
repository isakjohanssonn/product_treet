import React from 'react';
import { ListGroup  } from "react-bootstrap";
import { Link } from "react-router-dom";
import {FaUserAlt, FaStar, FaClock, FaHome} from 'react-icons/fa'

import "./Footer.css"
import "./Navigationbar"
import "../Global.css"
const Footer = () => {


  return (
      <div className="footerDiv footerMainDiv">
        <ListGroup horizontal>
          <Link className="footerLink" to="/" ><span className="footerItem"><ListGroup.Item action ><FaHome className="footerIcons"></FaHome>
          </ListGroup.Item></span></Link>

          <Link className="footerLink" to="/measurements" ><span><ListGroup.Item action ><FaClock className="footerIcons"></FaClock>
          </ListGroup.Item></span></Link>

          <Link className="footerLink" to="/goals" ><span><ListGroup.Item action  ><FaStar className="footerIcons"></FaStar>
          </ListGroup.Item></span></Link>

          <Link className="footerLink" to="/profile" ><span><ListGroup.Item action ><FaUserAlt className="footerIcons"></FaUserAlt>
          </ListGroup.Item></span></Link>

        </ListGroup>
    </div>
  )
}


export default Footer