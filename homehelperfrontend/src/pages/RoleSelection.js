import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function RoleSelection() {
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    if (role === 'User') {
      navigate('/register'); // Correctly route to User Registration
    } else if (role === 'Worker') {
      navigate('/worker-register'); // Correctly route to Worker Registration
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="6">
          <h2>Select Role</h2>
          <p>Choose your role:</p>
          <Button variant="primary" className="me-2" onClick={() => handleRoleSelection('User')}>User</Button>
          <Button variant="secondary" onClick={() => handleRoleSelection('Worker')}>Worker</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default RoleSelection;
