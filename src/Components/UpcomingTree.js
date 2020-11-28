import React from "react";
import { Card } from "react-bootstrap";
import { getTree } from "./AllTrees";
import "./UpcomingTree.css"

export const UpcomingTree = (props) => {
  const current_tree = props.current_tree;
  const testTree = getTree(current_tree, 0, false, true, false);
 /*gör om dessa kort så att de länkar till trädvyn*/
  return (
    <div>
      <div>
        <Card className="UpcomingTreeCardMain text-center" >
          <Card.Body className="UpcomingTreeCardBody ">
              <div><img src={testTree} className="treeimage" /></div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}