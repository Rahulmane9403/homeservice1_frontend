import axios from 'axios';

const API_URL = 'http://localhost:5000/api/systemadministration';

export const getSystemAdministrations = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching system administrations:', error);
    throw error;
  }
};

export const createSystemAdministration = async (systemAdmin) => {
  try {
    const response = await axios.post(API_URL, systemAdmin);
    return response.data;
  } catch (error) {
    console.error('Error creating system administration:', error);
    throw error;
  }
};
