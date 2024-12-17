import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

function RegistrationForm() {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    city: '',
    state: '',
    pincode: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleRoleSelection = (selectedRole) => {
    setRole(selectedRole);
    setStep(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ role, ...formData });
  };

  return (
    <Container> 
      <Row className="justify-content-md-center">
        <Col md="6">
          <h2>Register</h2>
          <br></br>
          {step === 1 && (
            <div>
              <h3>Register as:</h3>
              <Button variant="primary" className="me-2" onClick={() => handleRoleSelection('User')}>User</Button>
              <Button variant="secondary" onClick={() => handleRoleSelection('Worker')}>Worker</Button>
            </div>
          )}
          {step === 2 && (
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Form.Group>
               {/* <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Form.Group> */}

              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your phone number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formCity">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formState">
                <Form.Label>State</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formPincode">
                <Form.Label>Pincode</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your pincode"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Register
              </Button>
            </Form>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default RegistrationForm;
