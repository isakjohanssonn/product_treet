import React from 'react';
import { ListGroup  } from "react-bootstrap";
import { Link } from "react-router-dom";
import {FaUserAlt, FaStar, FaClock, FaHome} from 'react-icons/fa'

import "./Footer.css"
import "./Navigationbar"

const Footer = () => {


  return (
      <div className="footerDiv">
        <ListGroup horizontal>
          <Link className="footerLink" to="/" ><span><ListGroup.Item action ><FaHome></FaHome>
          </ListGroup.Item></span></Link>

          <Link className="footerLink" to="/measurements" ><span><ListGroup.Item action ><FaClock></FaClock>
          </ListGroup.Item></span></Link>

          <Link className="footerLink" to="/collectibledemo" ><span><ListGroup.Item action  ><FaStar></FaStar>
          </ListGroup.Item></span></Link>

          <Link className="footerLink" to="/profile" ><span><ListGroup.Item action ><FaUserAlt></FaUserAlt>
          </ListGroup.Item></span></Link>

        </ListGroup>
    </div>
  )
}


export default Footer