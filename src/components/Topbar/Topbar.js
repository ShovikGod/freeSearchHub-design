import React from 'react';
import './Topbar.css'
import { Navbar, Container } from 'react-bootstrap';

function Topbar() {
    return (
        <Navbar variant="dark">
            <Container fluid>
                <Navbar.Brand href="#home">
                    <img
                      src="logo.svg"
                      width="30"
                      height="30"
                      className="d-inline-block align-top"
                      alt="logo"
                    />{' '}
                    FreeSearchHub
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default Topbar;
