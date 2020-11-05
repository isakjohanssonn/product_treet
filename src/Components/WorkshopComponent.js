import React, { useState, useEffect } from 'react';
import { Button, InputGroup } from "react-bootstrap";
import "./WorkshopComponent.css";

//Startup guide finns i allmänt/education/startup ish...
//Installera node.js på datorn, google/guide
//clona repot
// cd:a in i repot, kör "npm install" i terminal
// kör "npm start", du kan nu se appen i localhost:3000.


//this component is imported in home 12.
// importera det som behövs (alltid React!)(Felmeddelanden som 'Button' is not defined, beror ofta på import)
//importera andra komponenter som du vill använda.
// Skriv en Const YourComponent, lägg till en return samt export default YourComponent
//skriv kod, lägg till de hooks(States) du vill ha med. 
//klart!
//Leta i andra .js-filer för insperation eller google, jag är nästan alltid tillgäglig ananrs.


const WorkshopComponent = () => {

  const [someState, setSomeState] = useState(true)
  const [hello, setHello] = useState("Hello")
  const [answer, setAnswer] = useState("")

  const helloFunc = () => {
    if (hello == "Hello") {
      setHello("Hi! How are you?")
    } else {
      setHello("Hello")
    }
  }
  const answerHello = (props) => {
      setAnswer(props)
  }

  return (
    <div> {/*allways return in one div*/}
      <h1>{hello}</h1>
      <Button onClick={() => helloFunc()}> swap greeting</Button> {/*This button calls a function*/}
      <Button onClick={() => setHello("Hi! How are you?")}> change greeting</Button>
      <input onChange={(event) => answerHello(event.target.value)} placeholder="answer"></input>
      <h2>{answer}</h2>



      <Button onClick={() => setSomeState(false)}> This is a button</Button>
      {someState == true &&  /**this in an if statement WITHIN the return statement, conditional rendering is weird... */
        <h1>someState is true</h1>
      }

    </div>

  );

}

export default WorkshopComponent;