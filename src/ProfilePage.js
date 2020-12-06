import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Streak from "./Components/Streak";
import "./ProfilePage.css";
import "./Global.css";
import GameSettings from "./Components/GameSettings";
import { Button, Card } from "react-bootstrap";
import { ArrowRight, PeopleFill, LockFill, Grid3x3GapFill, QuestionCircleFill } from 'react-bootstrap-icons';
import { FaUserAlt } from 'react-icons/fa'
import {IoLogoGameControllerA} from 'react-icons/io';
import { useHistory } from "react-router-dom";
import Navigationbar from './Components/Navigationbar'
import Footer from './Components/Footer'

export const ProfileBox = (props) => {

  const { icon, title } = props;
  return (
    <div>

      <Card className="boxCardMain standardBorder" >
        <Card.Body className="cardBody card-columns">
          <div className="iconDiv">
            {icon}
          </div>
          <Card.Header className="cardHeader ">{title}</Card.Header>
          <div className="divCardArrow" >
            <ArrowRight viewBox="0 0 16 16" className="pull-right cardArrow" fill="currentColor" />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
export const SendTo = (history) => {
  history.push('/gamesettings');
}
const ProfilePage = (props) => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const history = useHistory();


  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
     isAuthenticated && (
    <div className="profileMain">
      <div className = "topBlock"></div>

      <Navigationbar title={'Settings'} />
        <div className="profileCard">
          <div className="profileImageCard">
            <img src={user.picture} alt={user.name} className="avatar"/>
          </div>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>

        <ProfileBox title={"Personal information"}
          icon={<FaUserAlt className="profileBoxIcon" />} />
        <ProfileBox title={"Authorized relatives"}
          icon={<PeopleFill className="profileBoxIcon" />} />
        <button className="button" onClick={() => { SendTo(history) }}>
          <ProfileBox title={"Gamification level"}
            icon={<IoLogoGameControllerA className="profileBoxIcon" />} />
        </button>
        <ProfileBox title={"Change password"}
          icon={<LockFill className="profileBoxIcon" />} />
        <ProfileBox title={"Third party applications"}
          icon={<Grid3x3GapFill className="profileBoxIcon" />} />
        <ProfileBox title={"Help"}
          icon={<QuestionCircleFill className="profileBoxIcon" />} />
          <Footer/>
    </div>
    
     )


  );
};

export default ProfilePage;