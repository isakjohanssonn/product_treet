import React, { useState ,Component} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';




  function Example() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>sjukhusterm</p>
            <input></input>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary"   >Close</Button>
            <Button variant="primary" >Save Changes</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

class MedicalData extends Component {
  render() {
    return (
      <div>
        <h2>Patient medical data</h2>
        <p>Here you can see your latest medical data</p>
        <ol>
          <li>Pulse: 108, 01-10-2020 16.43 </li>
          <li>Weight: 66kg 01-10-2020 16.42 </li>
          <li>height: 189 cm 01102020 16.40 </li>
          <Example />
        </ol>
      </div>
    );
  }
}
 
export default MedicalData;