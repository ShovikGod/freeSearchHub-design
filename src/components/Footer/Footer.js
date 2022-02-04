import React from 'react';
import { Container, Form, InputGroup, Button } from 'react-bootstrap';
import './Footer.css'

function Footer() {
  return (
    <footer className="pt-5">
        <Container fluid className='row pb-5'>
            <div className="col-md-6">
                <Form>
                    <Form.Group className="mb-3" controlId="contactForm.email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="contactForm.message">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={5} placeholder='Type your message' />
                    </Form.Group>
                </Form>
            </div>
            <hr className='d-md-none' />
            <div className="col-md-6 mt-md-2 pt-md-4">
                <InputGroup className="mb-3">
                    <Form.Control type="email" placeholder="name@example.com"       aria-describedby="basic-addon2" />
                    <Button variant="warning" id="button-addon2">
                      Donate Us
                    </Button>
                </InputGroup>
            </div>
        </Container>
        <Container fluid className="credits pt-3 pb-4">
            Made with ❤️ by <a href="/lol"><span className="black">Subhomoy Roy Choudhury</span></a> 
        </Container>
    </footer>
  );
}

export default Footer;
