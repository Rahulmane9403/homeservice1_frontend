import axios from "axios";

const API_BASE_URL = "https://localhost:5001/api/Worker";

// Get all workers
export const getWorkers = async () => {
    return await axios.get(API_BASE_URL);
};

// Get worker by ID
export const getWorkerById = async (id) => {
    return await axios.get(`${API_BASE_URL}/${id}`);
};

// Create a new worker
export const createWorker = async (workerData) => {
    return await axios.post(API_BASE_URL, workerData);
};

// Update worker details
export const updateWorker = async (id, workerData) => {
    return await axios.put(`${API_BASE_URL}/${id}`, workerData);
};

//  Delete a worker
export const deleteWorker = async (id) => {
    return await axios.delete(`${API_BASE_URL}/${id}`);
};
