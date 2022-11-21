import { ChangeEvent } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {Col, Row, Button} from 'react-bootstrap'
import "./Modal.css";
import InputGroup from 'react-bootstrap/InputGroup';
import { useLocalStorage } from '../../hooks/useLocalStorage';


import marketingImage from "/imgs/project.jpg";

type NewsletterItem = { 
  name: string
}

type ModalComponent = {
  show:boolean,
  onHide: () => void,
  handleUploadChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export function ModalComponent ({show,onHide}:ModalComponent) {

  const [newsletterItems, setNewsletterItems] = useLocalStorage<NewsletterItem[]>(
    "newsletter-email",
    []
  )
    
  const handleUploadChange = (e: ChangeEvent<HTMLInputElement>) =>{
    console.log(e.target.value);
    setNewsletterItems(e.target.value);
  }

    return (
        <Modal
          {...{show,onHide}}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
        
          
          <Modal.Body>
            <Row>
              <Col lg={7} md={7} sm={7} xs={7} className="modal-newsletter-container mx-auto">
                <div className="w-100 p-5 pb-4 d-flex justify-content-center">
                    <div className="fs-5" style={{fontFamily: "avertape,Arial,Helvetica,sans-serif"}}>Zostań odbiorcą <strong>newslettera</strong><br/> i wykorzystaj <strong>40zł</strong> na pierwsze zakupy*</div>
                </div>
                <div className="w-100 pb-4 d-flex justify-content-center">
                <InputGroup className="w-50 me-4">
                  <Form.Control
                    placeholder="Twoj adres e-mail...."
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={handleUploadChange}
                  />
                </InputGroup>
                 
                <Button variant="dark" >
                  Zapisz się
                </Button>
                </div>
              </Col>
              <Col lg={5} md={5} sm={5} xs={5} style={{backgroundImage: `url(${marketingImage})`, backgroundSize: "cover", position: "relative"}}>
                <div className="body-container"></div>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
      );
}

