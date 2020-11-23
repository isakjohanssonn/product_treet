import React from "react";
import { Card } from "react-bootstrap";
import { getTree, getTreeName, getTreeAge, getTreeDescription } from "./AllTrees";
import ProgressBar from 'react-bootstrap/ProgressBar';
import "./GrowingTree.css"

export const GrowingTree = (props) => {
  const printTree = props
  const age = 7;
  const current_tree = 3;
  const testTree = getTree(current_tree, age, false, false);
  const testTreeAge = getTreeAge(current_tree);

  return (
    <div>
      <Card className="GrowingTreeCardMain text-center" >
        <Card.Body className="GrowingTreeCardBody ">
          <div class="container" >
            <div>
              <object class="treeimage" type="image/svg+xml" data={testTree}></object>
            </div>
            <div>
              <ProgressBar class="progressbar" animated now={(age / testTreeAge) * 100} style={{ width: 100, margin: "auto" }} />
            </div>
            <p>{age}/{testTreeAge}</p>
          </div>
        </Card.Body>
      </Card>
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
