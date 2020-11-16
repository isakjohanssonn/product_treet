import React, {useState} from "react";
//import AllTrees from "./AllTrees.js";//<---
import { Card } from "react-bootstrap";
import { ArrowRight, Box } from 'react-bootstrap-icons';
import { getTree } from "./AllTrees";

const GrowingTree = (props) => {
    
    //const currentAge = Get from and store in OpenEHR
    //const sickTree = get based on last data measurements from openEHR
    const printTree = props
    const age = 9;
    const currentTree = 0;

   // const [tree] = useState(AllTrees);
    const testTree = getTree(0, age, false); //bara för att testa om vi får ut rätt träd osv!
    console.log(testTree);
    // const AllTrees = [spruce, oak, pine]
    // currentTree: 0


    return (
      
        <div>
            
        <div>
       {/* */}

    
        <Card className="achievementBoxCardMain" >
          <Card.Header className="achievementBoxCardHeader"></Card.Header>
          <Card.Body className="achievementBoxCardBody card-columns">


            {/*This are the achievements displayed */}
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