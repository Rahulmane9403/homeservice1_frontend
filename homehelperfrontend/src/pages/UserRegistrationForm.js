// // import React, { useState } from 'react';
// // import { Form, Button, Container, Row, Col } from 'react-bootstrap';
// // import { useNavigate } from 'react-router-dom';
// // import './WorkerRegistrationForm.css';

// // function RegistrationForm() {
// //   const [step, setStep] = useState(1);
// //   const [role, setRole] = useState('');
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     phone: '',
// //     password: '',
// //     city: '',
// //     state: '',
// //     pincode: '',
// //   });

// //   const [errors, setErrors] = useState({});
// //   const navigate = useNavigate();

// //   const handleRoleSelection = (selectedRole) => {
// //     setRole(selectedRole);
// //     if (selectedRole === 'Worker') {
// //       navigate('/worker-register'); // Navigate to Worker Registration
// //     } else {
// //       setStep(2); // Proceed to User Registration
// //     }
// //   };

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value });
// //   };

// //   const validateForm = () => {
// //     const newErrors = {};
// //     if (!formData.name) newErrors.name = 'Name is required';
// //     if (!formData.email) {
// //       newErrors.email = 'Email is required';
// //     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
// //       newErrors.email = 'Email is invalid';
// //     }
// //     if (!formData.phone) {
// //       newErrors.phone = 'Phone number is required';
// //     } else if (!/^\d{10}$/.test(formData.phone)) {
// //       newErrors.phone = 'Phone number must be 10 digits';
// //     }
// //     if (!formData.password) {
// //       newErrors.password = 'Password is required';
// //     } else if (formData.password.length < 6) {
// //       newErrors.password = 'Password must be at least 6 characters';
// //     }
// //     if (!formData.pincode) {
// //       newErrors.pincode = 'Pincode is required';
// //     } else if (!/^\d{6}$/.test(formData.pincode)) {
// //       newErrors.pincode = 'Pincode must be a 6-digit number';
// //     }

// //     setErrors(newErrors);
// //     return Object.keys(newErrors).length === 0;
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     if (validateForm()) {
// //       console.log({ role, ...formData });
// //       // Add logic to handle registration (e.g., API call)
// //     }
// //   };

// //   return (
// //     <Container>
// //       <Row className="justify-content-md-center">
// //         <Col md="6">
// //           <h2>Register</h2>
// //           <br />
// //           {step === 1 && (
// //             <div>
// //               <h3>Register as:</h3><br></br>
// //               <Button variant="primary" className="me-2" onClick={() => handleRoleSelection('User')}>
// //                 User
// //               </Button><br></br><br></br><br></br>
// //               <Button variant="primary" className="me-2" onClick={() => handleRoleSelection('Worker')}>
// //                 Worker
// //               </Button>
// //             </div>
// //           )}
// //           {step === 2 && (
// //             <Form onSubmit={handleSubmit}>
// //               <Form.Group controlId="formName">
// //                 <Form.Label>Name</Form.Label>
// //                 <Form.Control
// //                   type="text"
// //                   placeholder="Enter your name"
// //                   name="name"
// //                   value={formData.name}
// //                   onChange={handleChange}
// //                   isInvalid={!!errors.name}
// //                 />
// //                 <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
// //               </Form.Group>

// //               <Form.Group controlId="formEmail">
// //                 <Form.Label>Email</Form.Label>
// //                 <Form.Control
// //                   type="email"
// //                   placeholder="Enter your email"
// //                   name="email"
// //                   value={formData.email}
// //                   onChange={handleChange}
// //                   isInvalid={!!errors.email}
// //                 />
// //                 <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
// //               </Form.Group>

// //               <Form.Group controlId="formPhone">
// //                 <Form.Label>Phone</Form.Label>
// //                 <Form.Control
// //                   type="text"
// //                   placeholder="Enter your phone number"
// //                   name="phone"
// //                   value={formData.phone}
// //                   onChange={handleChange}
// //                   isInvalid={!!errors.phone}
// //                 />
// //                 <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
// //               </Form.Group>

// //               <Form.Group controlId="formPassword">
// //                 <Form.Label>Password</Form.Label>
// //                 <Form.Control
// //                   type="password"
// //                   placeholder="Enter your password"
// //                   name="password"
// //                   value={formData.password}
// //                   onChange={handleChange}
// //                   isInvalid={!!errors.password}
// //                 />
// //                 <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
// //               </Form.Group>

// //               <Form.Group controlId="formCity">
// //                 <Form.Label>City</Form.Label>
// //                 <Form.Control
// //                   type="text"
// //                   placeholder="Enter your city"
// //                   name="city"
// //                   value={formData.city}
// //                   onChange={handleChange}
// //                 />
// //               </Form.Group>

// //               <Form.Group controlId="formState">
// //                 <Form.Label>State</Form.Label>
// //                 <Form.Control
// //                   type="text"
// //                   placeholder="Enter your state"
// //                   name="state"
// //                   value={formData.state}
// //                   onChange={handleChange}
// //                 />
// //               </Form.Group>

// //               <Form.Group controlId="formPincode">
// //                 <Form.Label>Pincode</Form.Label>
// //                 <Form.Control
// //                   type="text"
// //                   placeholder="Enter your pincode"
// //                   name="pincode"
// //                   value={formData.pincode}
// //                   onChange={handleChange}
// //                   isInvalid={!!errors.pincode}
// //                 />
// //                 <Form.Control.Feedback type="invalid">{errors.pincode}</Form.Control.Feedback>
// //               </Form.Group>

// //               <Button variant="primary" type="submit">
// //                 Register
// //               </Button>
// //             </Form>
// //           )}
// //         </Col>
// //       </Row>
// //     </Container>
// //   );
// // }

// // export default RegistrationForm;
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
    pincode: '',
    address: '',
    preferences: '',
  });

  const [errors, setErrors] = useState({});
  const [serverMessage, setServerMessage] = useState('');
  const [serverError, setServerError] = useState('');
  const navigate = useNavigate();

  const handleRoleSelection = (selectedRole) => {
    setRole(selectedRole);
    if (selectedRole === 'Worker') {
      navigate('/worker-register'); // Redirect to Worker Registration
    } else {
      setStep(2); // Proceed to User Registration
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    if (!formData.pincode) {
      newErrors.pincode = 'Pincode is required';
    } else if (!/^\d{6}$/.test(formData.pincode)) {
      newErrors.pincode = 'Pincode must be a 6-digit number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      const response = await axios.post('https://localhost:44300/api/auth/register', {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
        address: `${formData.city}, ${formData.state}, ${formData.pincode}`,
        preferences: formData.preferences,
      });

      if (response.status === 201) {
        setServerMessage('Registration successful! Redirecting to login...');
        setTimeout(() => navigate('/login'), 2000); // Redirect after 2 seconds
      }
    } catch (error) {
      setServerError(error.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="6">
          <h2>Register</h2>
          <br />
          {step === 1 && (
            <div>
              <h3>Register as:</h3>
              <Button variant="primary" className="me-2" onClick={() => handleRoleSelection('User')}>
                User
              </Button>
              <br /><br />
              <Button variant="primary" className="me-2" onClick={() => handleRoleSelection('Worker')}>
                Worker
              </Button>
            </div>
          )}
          {step === 2 && (
            <Form onSubmit={handleSubmit}>
              {serverMessage && <Alert variant="success">{serverMessage}</Alert>}
              {serverError && <Alert variant="danger">{serverError}</Alert>}

              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  isInvalid={!!errors.name}
                />
                <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your phone number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  isInvalid={!!errors.phone}
                />
                <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  isInvalid={!!errors.password}
                />
                <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
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
                  isInvalid={!!errors.pincode}
                />
                <Form.Control.Feedback type="invalid">{errors.pincode}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formPreferences">
                <Form.Label>Preferences (Optional)</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your preferences"
                  name="preferences"
                  value={formData.preferences}
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
// import React from 'react';
// import { Button, Container, Row, Col } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';

// function RoleSelection() {
//   const navigate = useNavigate();

//   const handleRoleSelection = (role) => {
//     if (role === 'User') {
//       navigate('/user-registration'); // Correctly route to User Registration
//     } else if (role === 'Worker') {
//       navigate('/worker-registration'); // Correctly route to Worker Registration
//     }
//   };

//   return (
//     <Container className="mt-5">
//       <Row className="justify-content-md-center">
//         <Col md="6" className="text-center">
//           <h2>Select Role</h2>
//           <p>Choose your role:</p>
//           <div className="d-flex justify-content-center">
//             {/* User Button */}
//             <Button
//               variant="outline-primary"
//               className="me-3 p-3"
//               onClick={() => handleRoleSelection('User')}
//               style={{
//                 backgroundColor: '#4578',
//                 color: '#fff',
//                 fontSize: '18px',
//                 padding: '30px 30px',
//                 width: '140px',
//                 transition: 'transform 0.2s ease-in-out',
//               }}
//               onMouseEnter={(e) => (e.target.style.transform = 'scale(1.1)')}
//               onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
//             >
//               User
//             </Button>

//             {/* Worker Button */}
//             <Button
//               variant="outline-secondary"
//               className="p-3"
//               onClick={() => handleRoleSelection('Worker')}
//               style={{
//                 backgroundColor: '#007bff',
//                 color: '#fff',
//                 fontSize: '18px',
//                 padding: '30px 30px',
//                 width: '140px',
//                 transition: 'transform 0.2s ease-in-out',
//               }}
//               onMouseEnter={(e) => (e.target.style.transform = 'scale(1.1)')}
//               onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
//             >
//               Worker
//             </Button>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default RoleSelection;
