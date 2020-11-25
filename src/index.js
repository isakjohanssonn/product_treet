import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Auth0Provider } from "@auth0/auth0-react";

 
ReactDOM.render(
  <Main/>, 
  document.getElementById("root")
  
);

ReactDOM.render(
  <Auth0Provider
    domain="dev-i14utqqo.eu.auth0.com"
    clientId="FQno2WxbSJTD3A9JZUPsxvlz3T30JPHi"
    redirectUri={"http://localhost:3000/intro"}
    redirectUrl={"http://localhost:3000/intro"}
  >
    <Main />
  </Auth0Provider>,
  document.getElementById("root")
);