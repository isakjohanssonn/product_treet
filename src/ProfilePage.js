import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Streak from "./Components/Streak";
import "./ProfilePage.css";
import GameSettings from "./Components/GameSettings";


const ProfilePage = (props) => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="profileMain">
        <div className="profileCard">
          <div className="profileImageCard">
            <img src={user.picture} alt={user.name} className="avatar"/>
          </div>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <Streak {...props} />
          <GameSettings {...props}/>
        </div>
    </div>
    )
  );
};

export default ProfilePage;