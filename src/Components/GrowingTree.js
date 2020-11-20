import React, {useState} from "react";
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
    const age = 9;
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
    
        <Card className="GrowingTreeCardMain" >
          <Card.Header className="GrowingTreeCardHeader">{testTreeName}</Card.Header>
          <Card.Body className="GrowingTreeCardBody card-columns">
            <div class="col-*-*"><img src={testTree} className="treeimg" /></div>
            {/* The arrow */}

            {/*This are the achievements displayed */}
            <p>hej</p>
            <div style={{ width: 400 }}>
            <div class="col-*-*"><ProgressBar animated now={(age/testTreeAge)*100} /></div>
				    
            <p>{age}/{testTreeAge}</p>

			    </div>

            {/*<ArrowRight viewBox="0 0 16 16" className="pull-right arrowAchivement"  fill="currentColor"/>*/}
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