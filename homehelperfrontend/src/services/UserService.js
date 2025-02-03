import axios from "axios";

const API_BASE_URL = "https://localhost:5001/api/User";

// Get all users
export const getUsers = async () => {
    return await axios.get(API_BASE_URL);
};

// Get user by ID
export const getUserById = async (id) => {
    return await axios.get(`${API_BASE_URL}/${id}`);
};

// Create user
export const createUser = async (userData) => {
    return await axios.post(API_BASE_URL, userData);
};

// Update user
export const updateUser = async (id, userData) => {
    return await axios.put(`${API_BASE_URL}/${id}`, userData);
};

// Delete user
export const deleteUser = async (id) => {
    return await axios.delete(`${API_BASE_URL}/${id}`);
};
