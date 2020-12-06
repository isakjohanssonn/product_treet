import React from "react";
import { Card } from "react-bootstrap";
import { getTree } from "./AllTrees";
import "./UpcomingTree.css"

export const UpcomingTree = (props) => {
  const current_tree = props.current_tree;
  const testTree = getTree(current_tree, 0, false, true, false);

  return (
    <div>
      <div>
        <Card className="UpcomingTreeCardMain text-center" >
          <Card.Body className="UpcomingTreeCardBody ">
              <div><img src={testTree} className="treeimage" alt = {"Tree"} /></div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}