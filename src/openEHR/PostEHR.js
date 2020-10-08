import React, { Component } from "react";
import {Alert} from 'react-bootstrap'

class PostEHR extends Component {
  render() {
    return (
      <Alert variant="success">
        <Alert.Heading>Success</Alert.Heading>
        <p>
          Your data has been stored
        </p>
        <hr />
        <p className="mb-0">
          You can see all your data in <link to='/history'>history</link>
  </p>
      </Alert>

    )
  }
}

export default PostEHR