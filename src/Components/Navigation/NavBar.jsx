import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css'
import GoogleLogin from './GoogleLogin';
import './GoogleLogin.css';
import React, {Component, useEffect, useState} from 'react'
import {ImSearch} from 'react-icons/im';

function NavBar() {

  const [showLogin, setShowLogin] = useState(false)

  const handleShow = () => setShowLogin(true);


  return (
    <>
    <GoogleLogin
      show={showLogin}
      onHide={() => setShowLogin(false)}
    />
    <Navbar 
      /* fixed="top" */
      collapseOnSelect 
      expand="lg" 
      variant="dark" 
      className='px-3 navigation'
    >      
        <Navbar.Brand>Navigation</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="container-fluid add" >  
            <Form inline>
              <InputGroup>
                <Form.Control
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="basic-addon1"
                />
                <Button variant="light"><ImSearch /></Button>
              </InputGroup>
            </Form>        
          </Nav>
          <Nav className='add'>
            <Nav.Link> Register </Nav.Link>
            <Nav.Link onClick={handleShow}> Login </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
    </>
  );
}

export default NavBar;