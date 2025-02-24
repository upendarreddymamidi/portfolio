
// Login.js:
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(true);

  const handleSubmit = (event) => {
     event.preventDefault();

    window.location.assign("/selections")
 }
 

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col xs={12} md={6}>
          <h2 className="text-center mb-4">Welcome to Auto-Test App Login</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Login
            </Button>
            {/* {loginError &&
            <p style={{color:'red'}}>Login details are not valid. Please try again </p> } */}
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage;