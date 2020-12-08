import React, { useEffect, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import "../ProfilePage.css";
import NavigationBar from "./Navigationbar";
import Footer from './Footer'
import { Card, Form, Row, Button } from 'react-bootstrap'
import './GameSettings.css'
import { useHistory } from 'react-router-dom';
import GetGameLvl from'../openEHR/GetGameLvl';
import '../Intro.css';



//NOT WORKING.....
//if props = false return HTML, if true return value. 
//TODO: Make state in Streak update when updating gamelevel or make state level in this 
//component not update... No idea how.... row 24-25 is to prevent state from resetting... 
// Found no solution to rerender Streak in correct way either :/


const GameSettings = (props) => {
  const {level, onClick} = props;
  const history = useHistory();
  const { user } = useAuth0();
  const [templvl, setTemplvl] = useState(level);

  useEffect(() => {
    onClick(templvl);
}, [templvl]);


  return (
    <div>
      <div className = "topBlock"/>
      <NavigationBar title={"Gamification Level"}/>
      <div className="profileMain">
        <div className="profileCard">
          <div className="profileImageCard">
            <img src={user.picture} alt={user.name} className="avatar" />
          </div>
        </div>

        <Card border="secondary" className="gamesettingsCard">
          <Card.Header>Gameification Level</Card.Header>
          <Card.Body id = "body">
            <Form.Group className="gameLvlForm" as={Row}>
              <Form.Label as="legend">
              </Form.Label>

              <Form.Check
                type="radio"
                label="Level 1"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
                aria-describedby="lvl1"
                onClick={() => setTemplvl(1)}
                checked={templvl === 1}
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
                onClick={() => setTemplvl(2)}
                checked={templvl === 2}
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
                onClick={() => setTemplvl(3)}
                checked={templvl === 3}
              />
              <Form.Text id="lvl3" muted>
                <h4>Goal related badges and streak counter connected to trees</h4>
              </Form.Text>

            </Form.Group>
          </Card.Body>
        </Card>
        <div className = "introDiv">
        <Button className="saveButton" onClick={() =>  history.goBack()}>Save</Button>
        </div>
      </div>
      <Footer/>
    </div>
  );
};


export default GameSettings;