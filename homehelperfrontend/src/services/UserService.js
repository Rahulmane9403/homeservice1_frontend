// import axios from "axios";

// const API_BASE_URL = "https://localhost:44300/api/User";

// // Get all users
// export const getUsers = async () => {
//     return await axios.get(API_BASE_URL);
// };

// // Get user by ID
// export const getUserById = async (id) => {
//     return await axios.get(`${API_BASE_URL}/${id}`);
// };

// // Create user
// export const createUser = async (userData) => {
//     return await axios.post(API_BASE_URL, userData);
// };

// // Update user
// export const updateUser = async (id, userData) => {
//     return await axios.put(`${API_BASE_URL}/${id}`, userData);
// };

// // Delete user
// export const deleteUser = async (id) => {
//     return await axios.delete(`${API_BASE_URL}/${id}`);
// };

import axios from "axios";

const API_BASE_URL = "https://localhost:44300/api/User";

// User login
export const loginUser = async (email, password) => {
    try {
        const response = await axios.post("https://localhost:44300/api/auth/login", { email, password });

        console.log("Response Data:", response.data);

        if (response.status === 200) {
            localStorage.setItem('token', response.data.token);
            navigate('/dashboard');
        }
    } catch (error) {
        console.error("Error:", error.response?.data || error.message);
        setErrorMessage(error.response?.data?.message || 'Invalid credentials or server error.');
    }
};

