import React, { useState } from "react";
//import AllTrees from "./AllTrees.js";//<---
import { Card } from "react-bootstrap";
import { ArrowRight, Box } from 'react-bootstrap-icons';
import { getTree, getTreeName, getTreeAge, getTreeDescription } from "./AllTrees";
import ProgressBar from 'react-bootstrap/ProgressBar';

import "./GrowingTree.css"



export const GrowingTree = (props) => {
  const printTree = props
  const age = 7;
  const current_tree = 3;

  const testTree = getTree(3, age, false, false); //bara för att testa om vi får ut rätt träd osv!
  const testTreeName = getTreeName(2);
  const testTreeAge = getTreeAge(2);
  console.log(testTree);


  // Vi vill göra ett kort som innehåller all info och göra så att korten ser olika ut genom "hide" 
  // i css-filerna på de element som ainte ska vara med på vissa ställen.
  return (

    <div>

      
        {/* */}

        <Card className="GrowingTreeCardMain text-center" >
          {/* <Card.Body className="GrowingTreeCardHeader">{testTreeName}</Card.Body> */}
          {/* <h5 class="card-title text-center">{testTreeName}</h5> */}
          <Card.Body className="GrowingTreeCardBody ">

            <div class="container" >
              
              {/*<img src={testTree} class="treeimage" />*/}
              <div>
                <object class="treeimage" type="image/svg+xml" data={testTree}></object>
              </div>
              {/* The arrow */}

              {/*This are the achievements displayed */}
              
              
                <div><ProgressBar class="progressbar" animated now={(age / testTreeAge) * 100} style={{ width: 100, margin: "auto"}} />
                </div>
                

                
                
                <p>{age}/{testTreeAge}</p>
            </div>

            {/* <ArrowRight viewBox="0 0 16 16" className="pull-right arrowAchivement"  fill="currentColor"/> */}
          </Card.Body>
          </Card>

      

    </div>
  );
}

export const GetDescription = (props) => {
  const testTreeDescription = getTreeDescription(0);

  return (
    <div>
      <div>
        <Card className="achievementBoxCardMain" >
          <Card.Header className="achievementBoxCardHeader">Tree Info</Card.Header>
          <Card.Body className="achievementBoxCardBody card-columns">
            {testTreeDescription}
          </Card.Body>
        </Card>

      </div>

    </div>
  );
}