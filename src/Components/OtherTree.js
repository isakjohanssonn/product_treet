import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { getTree } from "./AllTrees";
import "./OtherTree.css"

export const OtherTree = (props) => {
  const current_tree = props.current_tree;
  const age = props.age;
  const isUpcoming = props.isUpcoming;
  const testTree = getTree(current_tree, age, false, isUpcoming);
  return (
    <div>
      <div>
        <Card className="OtherTreeCardMain text-center" >
          <Card.Body className="OtherTreeCardBody ">
              <div><img src={testTree} className="treeimage" /></div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}