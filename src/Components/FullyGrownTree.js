import React from "react";
import { Card } from "react-bootstrap";
import { getTree, TreeName } from "./AllTrees";
import "./FullyGrownTree.css"

export const FullyGrownTree = (props) => {
  const current_tree = props.current_tree;
  const age = props.age;
  const isUpcoming = props.isUpcoming;
  const testTree = getTree(current_tree, age, false, isUpcoming);

  return (
    <div>
      <div>
        <Card className="FullyGrownTreeCardMain text-center" >
          <Card.Body className="FullyGrownTreeCardBody ">
            <div><img src={testTree} className="treeimage" /></div>
            <TreeName tree={current_tree} />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}