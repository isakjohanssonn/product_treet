import React, {useState} from "react";
//import AllTrees from "./AllTrees.js";//<---
import { Card } from "react-bootstrap";
import { ArrowRight, Box } from 'react-bootstrap-icons';
import { getTree, getTreeName, getTreeAge } from "./AllTrees";
import ProgressBar from 'react-bootstrap/ProgressBar';



const GrowingTree = (props) => {
    
    //const currentAge = Get from and store in OpenEHR
    //const sickTree = get based on last data measurements from openEHR
    const printTree = props
    const age = 9;
    const currentTree = 0;

   // const [tree] = useState(AllTrees);
    const testTree = getTree(0, age, false); //bara för att testa om vi får ut rätt träd osv!
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
    
        <Card className="achievementBoxCardMain" >
          <Card.Header className="achievementBoxCardHeader">{testTreeName}</Card.Header>
          <Card.Body className="achievementBoxCardBody card-columns">

            {/*This are the achievements displayed */}
            
           <div style={{ width: 400 }}>
				    <ProgressBar animated now={(age/testTreeAge)*100} />
            <p>{age}/{testTreeAge}</p>

			    </div>
              
            <img src={testTree} />
            {/* The arrow */}
            <ArrowRight viewBox="0 0 16 16" className="pull-right arrowAchivement"  fill="currentColor"/>
          </Card.Body>
        </Card>
    
        </div>

    </div>
    );  
}
export default GrowingTree;