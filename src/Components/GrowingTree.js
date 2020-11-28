import React from "react";
import { Card } from "react-bootstrap";
import { getTree, getTreeName, getTreeAge, getTreeDescription } from "./AllTrees";
import ProgressBar from 'react-bootstrap/ProgressBar';
import "./GrowingTree.css"
import Tree from "../Tree"
import { Link } from "react-router-dom"

export const GrowingTree = (props) => {
  const age = props.age;
  const current_tree = props.current_tree;
  const testTree = getTree(current_tree, age, false, false, false);
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



export default GrowingTree;
