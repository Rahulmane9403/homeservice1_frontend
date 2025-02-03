import axios from 'axios';

const API_URL = 'http://localhost:5000/api/support';  // Update to your actual API URL

export const getSupports = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching supports:', error);
    throw error;
  }
};

export const createSupport = async (support) => {
  try {
    const response = await axios.post(API_URL, support);
    return response.data;
  } catch (error) {
    console.error('Error creating support:', error);
    throw error;
  }
};
