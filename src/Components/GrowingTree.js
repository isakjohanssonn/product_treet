import React, { useState } from "react";
//import AllTrees from "./AllTrees.js";//<---
import { Card } from "react-bootstrap";
import { ArrowRight, Box } from 'react-bootstrap-icons';
import { getTree, getTreeName, getTreeAge, getTreeDescription } from "./AllTrees";
import ProgressBar from 'react-bootstrap/ProgressBar';

import "./GrowingTree.css"



export const GrowingTree = (props) => {

  //const currentAge = Get from and store in OpenEHR
  //const sickTree = get based on last data measurements from openEHR
  const printTree = props
  const age = 1;
  const currentTree = 0;

  // const [tree] = useState(AllTrees);
  const testTree = getTree(1, age, false); //bara för att testa om vi får ut rätt träd osv!
  const testTreeName = getTreeName(0);
  const testTreeAge = getTreeAge(0);
  console.log(testTree);
  // const AllTrees = [spruce, oak, pine]
  // currentTree: 0

  // Vi vill göra ett kort som innehåller all info och göra så att korten ser olika ut genom "hide" 
  // i css-filerna på de element som ainte ska vara med på vissa ställen.
  return (

    <div>

      <div>
        {/* */}

        <Card className="GrowingTreeCardMain text-center" >
          {/* <Card.Body className="GrowingTreeCardHeader">{testTreeName}</Card.Body> */}
          <h5 class="card-title text-center">{testTreeName}</h5>
          <Card.Body className="GrowingTreeCardBody ">

            <div class="container" style={{ height: "100%" }}>
              <div><img src={testTree} className="treeimage" /></div>
              {/* The arrow */}

              {/*This are the achievements displayed */}
          <br/>
              <div className="container" style={{ width: 250 }}>
                <div class="col-*-*" ><ProgressBar animated now={(age / testTreeAge) * 100} />
                </div>

                <p>{age}/{testTreeAge}</p>
              </div>
            </div>

            {/* <ArrowRight viewBox="0 0 16 16" className="pull-right arrowAchivement"  fill="currentColor"/> */}
          </Card.Body>
        </Card>

      </div>

    </div>
  );
}

export const GetDescription = (props) => {
  const testTreeDescription = getTreeDescription(0);

  return (
    <div>

      <div>
        {/* */}

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


//export default GrowingTree;