import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Col, Row} from 'react-bootstrap'
import "./Modal.css";

import marketingImage from "/imgs/project.jpg";

export function Example (props) {
    console.log(props);
   
    return (
        <Modal
          {...props}
          // size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
        
          
          <Modal.Body>
            <Row>
              <Col lg={7} md={7} sm={7} xs={7} className="modal-newsletter-container">
                
              </Col>
              <Col lg={5} md={5} sm={5} xs={5} style={{backgroundImage: `url(${marketingImage})`, backgroundSize: "cover", position: "relative"}}>
                <div className="body-container"></div>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
      );
}

