import React from "react";
import "./Login.css";
import "./Global.css"
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from 'react-bootstrap'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  document.title = "Welcome";
  return (
    <div className="buttonDiv">
      <Button className="LoginButton" onClick={() => loginWithRedirect({ returnTo: "https://localhost:3000/intro" })}>Login</Button>
    </div>
  );
};

export default function Login() {

  return (
    <div className="Login">
      <div className="topNavMainDiv">
        <h3>TREET </h3>
      </div>
      <div className="topMargin">
        <img src="/static/media/hangingtree-anim.3dd4666e.svg" className="treeimage" alt = {"tree"}></img>
        {LoginButton()}
      </div >
    </div >

  );
}