import axios from "axios";

const API_BASE_URL = "https://localhost:5001/api/Feedback";

// ✅ Get all feedbacks
export const getFeedbacks = async () => {
    return await axios.get(API_BASE_URL);
};

// ✅ Get feedback by ID
export const getFeedbackById = async (id) => {
    return await axios.get(`${API_BASE_URL}/${id}`);
};

// ✅ Create a new feedback
export const createFeedback = async (feedbackData) => {
    return await axios.post(API_BASE_URL, feedbackData);
};

// ✅ Update feedback
export const updateFeedback = async (id, feedbackData) => {
    return await axios.put(`${API_BASE_URL}/${id}`, feedbackData);
};

// ✅ Delete feedback
export const deleteFeedback = async (id) => {
    return await axios.delete(`${API_BASE_URL}/${id}`);
};
