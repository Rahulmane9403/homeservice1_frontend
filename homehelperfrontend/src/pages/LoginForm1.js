// // import React, { useState } from 'react';
// // import validator from 'validator';
// // import { Form, Button, Container, Row, Col } from 'react-bootstrap';
// // import { useNavigate } from 'react-router-dom'; // Import useNavigate

// // function Login() {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [validationMessage, setValidationMessage] = useState("");
// //   const [messageColor, setMessageColor] = useState("black");
// //   const navigate = useNavigate(); // Initialize useNavigate hook

// //   const validatePassword = (value) => {
// //     if (validator.isStrongPassword(value, {
// //       minLength: 8,
// //       minLowercase: 1,
// //       minUppercase: 1,
// //       minNumbers: 1,
// //       minSymbols: 1
// //     })) {
// //       setValidationMessage("Password is Strong!");
// //       setMessageColor("green");
// //     } else {
// //       setValidationMessage("Please use a mix of uppercase, lowercase letters, numbers, and symbols.");
// //       setMessageColor("red");
// //     }
// //   };

// //   const handleSubmit = (event) => {
// //     event.preventDefault();
// //     validatePassword(password);
// //     if (validator.isStrongPassword(password)) {
// //       console.log('Email:', email);
// //       console.log('Password:', password);
// //       // After successful login, redirect to the role selection page
// //       navigate('/role-selection');
// //     } else {
// //       console.log('Password is not strong enough.');
// //     }
// //   };

// //   return (
// //     <Container>
// //       <Row className="justify-content-md-center">
// //         <Col md="4">
// //           <h2>Login</h2>
// //           <Form onSubmit={handleSubmit}>
// //             <Form.Group controlId="formBasicEmail">
// //               <Form.Label>Email address</Form.Label>
// //               <Form.Control
// //                 type="email"
// //                 placeholder="Enter email"
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //               />
// //             </Form.Group>

// //             <Form.Group controlId="formBasicPassword">
// //               <Form.Label>Password</Form.Label>
// //               <Form.Control
// //                 type="password"
// //                 placeholder="Password"
// //                 value={password}
// //                 onChange={(e) => {
// //                   setPassword(e.target.value);
// //                   validatePassword(e.target.value);
// //                 }}
// //               />
// //               <p style={{ color: messageColor }}>{validationMessage}</p>
// //             </Form.Group>

// //             <Button variant="primary" type="submit">
// //               Login
// //             </Button>
// //           </Form>
// //           <p className="mt-3">
// //             Don't have an account? <a href="/register">Register here</a>
// //           </p>
// //         </Col>
// //       </Row>
// //     </Container>
// //   );
// // }

// // export default Login;

// // import React, { useState } from 'react';
// // import validator from 'validator';
// // import { Form, Button, Container, Row, Col } from 'react-bootstrap';
// // import { useNavigate } from 'react-router-dom'; // Import useNavigate

// // function Login() {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [validationMessage, setValidationMessage] = useState("");
// //   const [messageColor, setMessageColor] = useState("black");
// //   const navigate = useNavigate(); // Initialize useNavigate hook

// //   const validatePassword = (value) => {
// //     if (validator.isStrongPassword(value, {
// //       minLength: 8,
// //       minLowercase: 1,
// //       minUppercase: 1,
// //       minNumbers: 1,
// //       minSymbols: 1
// //     })) {
// //       setValidationMessage("Password is Strong!");
// //       setMessageColor("green");
// //     } else {
// //       setValidationMessage("Please use a mix of uppercase, lowercase letters, numbers, and symbols.");
// //       setMessageColor("red");
// //     }
// //   };

// //   const handleSubmit = (event) => {
// //     event.preventDefault();
// //     validatePassword(password);
// //     if (validator.isStrongPassword(password)) {
// //       console.log('Email:', email);
// //       console.log('Password:', password);
// //       // After successful login, redirect to the role selection page
// //       navigate('/role-selection');
// //     } else {
// //       console.log('Password is not strong enough.');
// //     }
// //   };

// //   return (
// //     <Container>
// //       <Row className="justify-content-md-center">
// //         <Col md="4">
// //           <h2>Login</h2>
// //           <Form onSubmit={handleSubmit}>
// //             <Form.Group controlId="formBasicEmail">
// //               <Form.Label>Email address</Form.Label>
// //               <Form.Control
// //                 type="email"
// //                 placeholder="Enter email"
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //               />
// //             </Form.Group>

// //             <Form.Group controlId="formBasicPassword">
// //               <Form.Label>Password</Form.Label>
// //               <Form.Control
// //                 type="password"
// //                 placeholder="Password"
// //                 value={password}
// //                 onChange={(e) => {
// //                   setPassword(e.target.value);
// //                   validatePassword(e.target.value);
// //                 }}
// //               />
// //               <p style={{ color: messageColor }}>{validationMessage}</p>
// //             </Form.Group>

// //             <Button variant="primary" type="submit">
// //               Login
// //             </Button>
// //           </Form>
// //           <p className="mt-3">
// //             Don't have an account? <a href="/register">Register here</a>
// //           </p>
// //         </Col>
// //       </Row>
// //     </Container>
// //   );
// // }

// // export default Login;


// import React, { useState } from 'react';
// import validator from 'validator';
// import { Form, Button, Container, Row, Col } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [validationMessage, setValidationMessage] = useState("");
//   const [messageColor, setMessageColor] = useState("black");
//   const [errorMessage, setErrorMessage] = useState(""); // Error message state
//   const navigate = useNavigate(); 

//   const validatePassword = (value) => {
//     if (validator.isStrongPassword(value, {
//       minLength: 8,
//       minLowercase: 1,
//       minUppercase: 1,
//       minNumbers: 1,
//       minSymbols: 1
//     })) {
//       setValidationMessage("Password is Strong!");
//       setMessageColor("green");
//     } else {
//       setValidationMessage("Please use a mix of uppercase, lowercase letters, numbers, and symbols.");
//       setMessageColor("red");
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     validatePassword(password);
//     if (validator.isStrongPassword(password)) {
//       try {
//         const response = await axios.post('https://your-backend-url/api/auth/login', {
//           email,
//           password,
//         });

//         if (response.data.token) {
//           // Store the token and navigate to the next page
//           localStorage.setItem('token', response.data.token); // Example: storing JWT in localStorage
//           navigate('/role-selection');
//         }
//       } catch (error) {
//         setErrorMessage("Invalid credentials or server error.");
//         console.log(error);
//       }
//     } else {
//       console.log('Password is not strong enough.');
//     }
//   };

//   return (
//     <Container>
//       <Row className="justify-content-md-center">
//         <Col md="4">
//           <h2>Login</h2>
//           <Form onSubmit={handleSubmit}>
//             <Form.Group controlId="formBasicEmail">
//               <Form.Label>Email address</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </Form.Group>

//             <Form.Group controlId="formBasicPassword">
//               <Form.Label>Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => {
//                   setPassword(e.target.value);
//                   validatePassword(e.target.value);
//                 }}
//               />
//               <p style={{ color: messageColor }}>{validationMessage}</p>
//             </Form.Group>

//             {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

//             <Button variant="primary" type="submit">
//               Login
//             </Button>
//           </Form>
//           <p className="mt-3">
//             Don't have an account? <a href="/register">Register here</a>
//           </p>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Login;
import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('https://localhost:44300/api/auth/login', {
        email,
        password,
      });

      if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
        navigate('/#Services');
      }
    } catch (error) {
      setErrorMessage('Invalid credentials or server error.');
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="4">
          <h2>Login</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
          <p className="mt-3">
            Don't have an account? <a href="/register">Register here</a>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
