// src/components/ContactForm.js
import React, { useState } from 'react';
import styled from 'styled-components';

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  margin: auto;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send to an API)
    console.log({ name, email, phone, message });
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <Input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <Input type="tel" placeholder="Your Phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      <TextArea placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)} required />
      <SubmitButton type="submit">Send Message</SubmitButton>
    </FormWrapper>
  );
};

export default Contact;