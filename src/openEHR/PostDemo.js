import React from "react";
import Button from 'react-bootstrap/Button';

const PostDemo = (props) => {
  return (
    <div>
        <Button onClick={() => props.setLevel(20)}>Klicka</Button>
    </div>
  );
}
 
export default PostDemo;


