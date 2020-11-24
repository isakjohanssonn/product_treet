import React from "react";
import  from "react-bootstrap";
import "./Login.css";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect({ returnTo: "https://localhost:3000/intro"})}>Log In</button>;
};

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout({ returnTo: 'http://localhost:3000/login' })}>
      Log Out
    </button>
  );
};

export default function Login() {

  return (
    <div className="Login">
      {LoginButton()}
      {LogoutButton()}
      <p>Här kan man logga in och logga ut mha auth0</p>
    </div>
  );
}