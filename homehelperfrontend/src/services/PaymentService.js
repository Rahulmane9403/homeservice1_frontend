import axios from 'axios';

const API_URL = 'http://localhost:5000/api/payment';  // Update to your actual API URL

// Get all payments
export const getPayments = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching payments:', error);
    throw error;
  }
};

// Get a payment by ID
export const getPaymentById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching payment with ID ${id}:`, error);
    throw error;
  }
};

// Create a new payment
export const createPayment = async (payment) => {
  try {
    const response = await axios.post(API_URL, payment);
    return response.data;
  } catch (error) {
    console.error('Error creating payment:', error);
    throw error;
  }
};

// Update an existing payment
export const updatePayment = async (id, payment) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, payment);
    return response.data;
  } catch (error) {
    console.error(`Error updating payment with ID ${id}:`, error);
    throw error;
  }
};

// Delete a payment
export const deletePayment = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error(`Error deleting payment with ID ${id}:`, error);
    throw error;
  }
};
