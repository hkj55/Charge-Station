import './GoogleLogin.css';
import React, {Component, useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import jwt_decode from "jwt-decode"

const GoogleLogin = (props) => {

    const [isLogin, setIsLogin] = useState(true)

  function handleCallbackResponse(response){
    console.log('Ensoded JWT ID token : ' + response.credential)
    var userObject = jwt_decode(response.credential)
    console.log(userObject)
  }

  useEffect(() => {
    if(props.show){
        /* global google */
        google.accounts.id.initialize({  
        client_id: "325844126713-266t5d5990ohd267as5vj4l3q3tudvj0.apps.googleusercontent.com",
        callback: handleCallbackResponse
      });
  
      google.accounts.id.renderButton(
        document.getElementById('signInDiv'),
        {theme: "outline", size: "large"}
      );
    }
  },[props.show]);

  const handleClick = () => {
    console.log('Clicked')
  }

  return (
    <Modal
      {...props}
      aria-labelledby="google-login"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="google-login" className='login-title'>
          Login
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
          <Row id='signInDiv' className="mb-3">
          </Row>
            <Col xs={12} md={12} >
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    autoFocus
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid email.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                  />
                </Form.Group>
                <Row className="mb-3 mx-0">
                <Button onClick={props.onHide}>Login</Button>
                </Row>
              </Form>
            </Col>            
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <div className={isLogin ? '' : 'hide'}>
        New member?
        <span 
            className='buttonSpan'
            onClick={handleClick}
        >
            Register
        </span>
        </div>
        <div className={isLogin ? 'hide' : ''}>
        Already have an account?
        <span 
            className='buttonSpan'
        >
            Login
        </span>
        </div>
      </Modal.Footer>
    </Modal>
  )
}

export default GoogleLogin 