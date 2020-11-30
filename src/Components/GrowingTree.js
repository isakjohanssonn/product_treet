import React from "react";
import { Card } from "react-bootstrap";
import { getTree, getTreeName, getTreeAge, getTreeDescription } from "./AllTrees";
import ProgressBar from 'react-bootstrap/ProgressBar';
import "./GrowingTree.css"
import Tree from "../Tree"
import { Link } from "react-router-dom"

const GrowingTree = (props) => {
  const age = props.age;
  const current_tree = props.current_tree;
  const is_animated = props.is_animated;
  const is_sick = props.is_sick;
  const testTree = getTree(current_tree, age, is_sick, false, false);
  const testTreeAge = getTreeAge(current_tree);

  if (is_animated)
  {
    return (
      <div>
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
      </div>
    );
  }
  else
  {
    return (
      <div>
      <Link to={{pathname: '/tree', state: {tree: current_tree, age: age}}}>
        <Card className="GrowingTreeCardMain text-center" >
          <Card.Body className="GrowingTreeCardBody">
            <div className="container" >
              <div>
                <img src={testTree} className="treeimage"/>
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
}

export default GrowingTree;
