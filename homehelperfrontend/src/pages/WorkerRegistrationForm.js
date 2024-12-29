import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './WorkerRegistrationForm.css';


function WorkerRegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    photo: null,
    experienceType: 'months',
    experienceValue: '',
    skills: [],
    languages: '',
    otherLanguage: '',
    availability: '',
    mobile: '',
    identityProof: null,
    identityNumberType: '',
    identityNumber: '',
    gender: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    setFormData({ ...formData, [name]: file });
  };

  const handleSkillsChange = (e) => {
    const selectedSkills = Array.from(e.target.selectedOptions, option => option.value);
    setFormData({ ...formData, skills: selectedSkills });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Container >
      <Row className="justify-content-md-center">
        <Col md="6">
          <h2>Worker Registration</h2>
          <Form onSubmit={handleSubmit}>
            {/* Name Field */}
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

            {/* Photo Upload */}
            <Form.Group controlId="formPhoto">
              <Form.Label>Photo</Form.Label>
              <Form.Control type="file" name="photo" onChange={handleFileChange} />
            </Form.Group>

            {/* Experience Field */}
            <Form.Group controlId="formExperience">
              <Form.Label>Experience</Form.Label>
              <Form.Control
                as="select"
                name="experienceType"
                value={formData.experienceType}
                onChange={handleChange}
              >
                <option value="months">Months</option>
                <option value="years">Years</option>
              </Form.Control>
              <Form.Control
                type="number"
                placeholder={`Enter your experience in ${formData.experienceType}`}
                name="experienceValue"
                value={formData.experienceValue}
                onChange={handleChange}
              />
            </Form.Group>

            {/* Skills Field */}
            <Form.Group controlId="formSkills">
              <Form.Label>Skills</Form.Label>
              <Form.Control
                as="select"
                multiple
                name="skills"
                value={formData.skills}
                onChange={handleSkillsChange}
              >
                <option value="Cleaning">Cleaning</option>
                <option value="Cooking">Cooking</option>
                <option value="Gardening">Gardening</option>
                <option value="Babysitting">Babysitting</option>
                <option value="Patient Care">Patient Care</option>
                <option value="Pet Care">Pet Care</option>
              </Form.Control>
              <p>Selected Skills: {formData.skills.join(', ')}</p>
            </Form.Group>

            {/* Languages Field */}
            <Form.Group controlId="formLanguages">
              <Form.Label>Languages</Form.Label>
              <Form.Control
                as="select"
                name="languages"
                value={formData.languages}
                onChange={handleChange}
              >
                <option value="">Select your language</option>
                <option value="English">English</option>
                <option value="Marathi">Marathi</option>
                <option value="Hindi">Hindi</option>
                <option value="Other">Other</option>
              </Form.Control>
              {formData.languages === 'Other' && (
                <Form.Control
                  type="text"
                  placeholder="Specify other language"
                  name="otherLanguage"
                  value={formData.otherLanguage}
                  onChange={handleChange}
                />
              )}
            </Form.Group>

            {/* Availability Field */}
            <Form.Group controlId="formAvailability">
              <Form.Label>Availability</Form.Label>
              <Form.Control
                as="select"
                name="availability"
                value={formData.availability}
                onChange={handleChange}
              >
                <option value="">Select your availability</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
              </Form.Control>
            </Form.Group>

            {/* Mobile Number Field */}
            <Form.Group controlId="formMobile">
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your mobile number"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
              />
            </Form.Group>

            {/* Identity Proof Field */}
            <Form.Group controlId="formIdentityProof">
              <Form.Label>Identity Proof</Form.Label>
              <Form.Control
                type="file"
                name="identityProof"
                onChange={handleFileChange}
              />
            </Form.Group>

            {/* Identity Number Field */}
            <Form.Group controlId="formIdentityNumber">
              <Form.Label>Identity Number</Form.Label>
              <Form.Control
                as="select"
                name="identityNumberType"
                value={formData.identityNumberType}
                onChange={handleChange}
              >
                <option value="">Select identity type</option>
                <option value="Aadhar">Aadhar Card No</option>
                <option value="Pan">Pan Card No</option>
              </Form.Control>
              <Form.Control
                type="text"
                placeholder="Enter your identity number"
                name="identityNumber"
                value={formData.identityNumber}
                onChange={handleChange}
              />
            </Form.Group>

            {/* Gender Field */}
            <Form.Group controlId="formGender">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                as="select"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select your gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Form.Control>
            </Form.Group>

            {/* Submit Button */}
            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default WorkerRegistrationForm;
