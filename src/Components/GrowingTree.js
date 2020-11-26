import React from "react";
import { Card } from "react-bootstrap";
import { getTree, getTreeName, getTreeAge, getTreeDescription } from "./AllTrees";
import ProgressBar from 'react-bootstrap/ProgressBar';
import "./GrowingTree.css"
import Tree from "../Tree"
import { Link } from "react-router-dom"

export const GrowingTree = (props) => {
  const printTree = props
  const age = 7;
  const current_tree = 3;
  const testTree = getTree(current_tree, age, false, false);
  const testTreeAge = getTreeAge(current_tree);

  return (
    <div>
    <Link to={Tree}>
      <Card className="GrowingTreeCardMain text-center" >
        <Card.Body className="GrowingTreeCardBody ">
          <div className="container" >
            <div>
              <object className="treeimage" type="image/svg+xml" data={testTree}></object>
            </div>
            <div>
              <ProgressBar className="progressbar" animated now={(age / testTreeAge) * 100} style={{ width: 100, margin: "auto" }} />
            </div>
            <p>{age}/{testTreeAge}</p>
          </div>
        </Card.Body>
      </Card>
    </Link>
    </div>
  );
}

export const GetDescription = (props) => {
  const testTreeDescription = getTreeDescription(3);
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


export default GrowingTree;
