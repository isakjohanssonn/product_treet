import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Streak from "./Components/Streak";
import "./ProfilePage.css";


const ProfilePage = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div class="profileMain">
        <div class="profileCard">
          <div class="profileImageCard">
            <img src={user.picture} alt={user.name} class="avatar"/>
          </div>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <Streak/>
        </div>
    </div>
    )
  );
};

export default ProfilePage;