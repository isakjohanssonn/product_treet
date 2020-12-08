import React from "react";
import { Link } from 'react-router-dom'
import { Card, Form, Row, Button } from 'react-bootstrap'
import './Intro.css';
import NavigationBar from "./Components/Navigationbar";
import Footer from './Components/Footer'


const Intro = (props) => {

  const Gamelvl = (props) => {
    const { level, onClick } = props;
    return (
      <Card border="secondary" className="gamesettingsCard">
        <Card.Header>Gameification Level</Card.Header>
        <Card.Body id="body">

          <Form.Group className="gameLvlForm" as={Row}>
            <Form.Label as="legend">
            </Form.Label>

            <Form.Check
              type="radio"
              label="Level 1"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
              aria-describedby="lvl1"
              onClick={() => onClick(1)}
              checked={level === 1}
            />
            <Form.Text id="lvl1" muted>
              <h4>No Gameification</h4>
            </Form.Text>


            <Form.Check
              type="radio"
              label="Level 2"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
              aria-describedby="lvl2"
              onClick={() => onClick(2)}
              checked={level === 2}
            />
            <Form.Text id="lvl2" muted>
              <h4>Goal related badges and streak counter</h4>
            </Form.Text>
            <Form.Check
              type="radio"
              label="Level 3"
              name="formHorizontalRadios"
              id="formHorizontalRadios3"
              aria-describedby="lvl3"
              onClick={() => onClick(3)}
              checked={level === 3}
            />
            <Form.Text id="lvl3" muted>
              <h4>Goal related badges and streak counter connected to trees</h4>
            </Form.Text>

          </Form.Group>
        </Card.Body>
      </Card>
    );
  }

  return (
    <div>
      <NavigationBar title={"Welcome"} />
      <div className="introDiv">

        <h2>Welcome to treet!</h2>
        <h3>Before you get started choose your level of in-app game rewards.</h3>
        
        <Gamelvl {...props} />
        <Link to='/'><Button className="saveButton">Save and continue</Button></Link>
      </div>
      <Footer />
    </div>
  );
}
export default Intro;