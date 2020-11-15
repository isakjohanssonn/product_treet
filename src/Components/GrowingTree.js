import React, {useState} from "react";
import AllTrees from "./AllTrees.js";
import { Card } from "react-bootstrap";
import { ArrowRight, Box } from 'react-bootstrap-icons';

const GrowingTree = (props) => {
    
    //const currentAge = Get from and store in OpenEHR
    //const sickTree = get based on last data measurements from openEHR
    const printTree = props;

    const [tree] = useState(AllTrees)
    return (
        <div>
            
        <div>

        <img src={tree.spruce.img} />

        <Card className="achievementBoxCardMain" >
          <Card.Header className="achievementBoxCardHeader">{tree.spruce.name}</Card.Header>
          <Card.Body className="achievementBoxCardBody card-columns">


            {/*This are the achievements displayed */}
         
            <img src={tree.spruce.img} />
           

            {/* The arrow */}
            <ArrowRight viewBox="0 0 16 16" className="pull-right arrowAchivement"  fill="currentColor"/>
          </Card.Body>
        </Card>
    
        </div>

    </div>
    );  
}
export default GrowingTree;