import { ChangeEvent } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {Col, Row, Button} from 'react-bootstrap'
import "./Modal.css";
import InputGroup from 'react-bootstrap/InputGroup';
import { useLocalStorage } from '../../hooks/useLocalStorage';


import marketingImage from "/imgs/project.jpg";

type ModalComponent = {
  show:boolean,
  onHide: () => void,
  handleUploadChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export function ModalComponent ({show,onHide}:ModalComponent) {

  const [newsletterItems, setNewsletterItems] = useLocalStorage<string>(
    "newsletter-email",
    ""
  )

  const handleUploadChange = (e: ChangeEvent<HTMLInputElement>) =>{
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
                <div className="font-serif text-xl px-9 pt-10 pb-10 py-16 font-medium ">Zostań odbiorcą <strong>newslettera</strong><br/> i wykorzystaj <strong>40zł</strong> na pierwsze zakupy*</div>
                <div className="pl-9  pb-8">
                  <input className="w-72 h-9 " placeholder="Twój adres e-mail" onChange={handleUploadChange} value={newsletterItems}></input>
                  <button className="rounded-none ml-4 h-9 bg-gray-900	text-white px-3">Zapisz się!</button><br/>
                </div>
                
                <span className="font-serif text-2xl px-10 pt-4 font-medium">Dołącz do nas!</span>
                <div className="list text-xs px-10 pt-3 leading-loose">
                  • weź udział w zamkniętych promocjach tylko dla odbiorców newslettera <br/>
                  • dowiedz się pierwszy o nowościach <br/>
                  • śledź najnowsze trendy <br/>
                  • korzystaj z sezonowych obniżek <br/>
                </div>
                <div className="text-[9px] px-10 pt-4">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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

