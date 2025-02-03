import axios from "axios";

const API_BASE_URL = "https://localhost:5001/api/Booking";

// ✅ Get all bookings
export const getBookings = async () => {
    return await axios.get(API_BASE_URL);
};

// ✅ Get booking by ID
export const getBookingById = async (id) => {
    return await axios.get(`${API_BASE_URL}/${id}`);
};

// ✅ Create a new booking
export const createBooking = async (bookingData) => {
    return await axios.post(API_BASE_URL, bookingData);
};

// ✅ Update booking details
export const updateBooking = async (id, bookingData) => {
    return await axios.put(`${API_BASE_URL}/${id}`, bookingData);
};

// ✅ Delete a booking
export const deleteBooking = async (id) => {
    return await axios.delete(`${API_BASE_URL}/${id}`);
};
