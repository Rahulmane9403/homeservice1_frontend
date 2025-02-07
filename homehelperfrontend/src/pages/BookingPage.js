import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate, useLocation } from "react-router-dom";
import "./BookingPage.css";

const BookingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [selectedService, setSelectedService] = useState(location.state?.selectedService || "");
  const [selectedWorker, setSelectedWorker] = useState(location.state?.selectedWorker || "");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("Pune");
  const [formData, setFormData] = useState({ email: "", name: "", phone: "", description: "" });
  const [errors, setErrors] = useState({});
  const timeSlots = ["08:00 AM", "08:45 AM", "09:30 AM", "10:15 AM", "11:00 AM"];

  useEffect(() => {
    if (location.state?.selectedService) setSelectedService(location.state.selectedService);
    if (location.state?.selectedWorker) setSelectedWorker(location.state.selectedWorker);
  }, [location.state]);

  const validateForm = () => {
    let newErrors = {};
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = "Invalid email format";
    if (!formData.name.match(/^[A-Za-z ]+$/)) newErrors.name = "Name should only contain letters and spaces";
    if (!formData.phone.match(/^\d{10}$/)) newErrors.phone = "Phone number must be exactly 10 digits";
    if (formData.description.length > 200) newErrors.description = "Description should not exceed 200 characters";
    if (!date) newErrors.date = "Please select a valid date";
    if (!time) newErrors.time = "Please select a time slot";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedWorker) return alert("Please select a worker!");
    if (!validateForm()) return;

    const bookingData = {
      userId: 1,
      workerId: selectedWorker.id || selectedWorker,
      time: new Date(date).toISOString(),
      location: selectedLocation,
      jobDetails: formData.description,
      status: "Pending",
      price: 500,
    };

    try {
      const response = await fetch("https://localhost:44300/api/Booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });

      if (!response.ok) throw new Error("Failed to submit booking");
      alert("Booking submitted successfully!");
      navigate("/success");
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred.");
    }
  };

  return (
    <div className="booking-page" style={{ paddingTop: "100px" }}>
      <h2>Book an Appointment</h2>
      <div className="form-section">
        <div className="dropdowns">
          <label>
            Location
            <select value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)}>
              <option value="Pune">Pune</option>
            </select>
          </label>
          <label>
            Service
            <select value={selectedService} onChange={(e) => setSelectedService(e.target.value)}>
              <option value="Cleaning">Cleaning</option>
              <option value="Cooking">Cooking</option>
              <option value="Gardening">Gardening</option>
              <option value="Babysitting">Babysitting</option>
              <option value="Patient Care">Patient Care</option>
              <option value="Pet Care">Pet Care</option>
            </select>
          </label>
          <label>
            Worker
            <input type="text" value={selectedWorker} readOnly />
          </label>
        </div>

        <div className="mb-4">
          <label>Date</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required min={new Date().toISOString().split("T")[0]} />
        </div>

        <div className="mb-4">
          <label>Time</label>
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
        </div>
      </div>

      <form className="personal-info" onSubmit={handleSubmit}>
        <h3>Personal Information</h3>
        <label>Email<input type="email" name="email" value={formData.email} onChange={handleFormChange} required /></label>
        {errors.email && <p className="error">{errors.email}</p>}
        <label>Name<input type="text" name="name" value={formData.name} onChange={handleFormChange} required /></label>
        {errors.name && <p className="error">{errors.name}</p>}
        <label>Phone<input type="tel" name="phone" value={formData.phone} onChange={handleFormChange} required /></label>
        {errors.phone && <p className="error">{errors.phone}</p>}
        <label>Description<textarea name="description" value={formData.description} onChange={handleFormChange} /></label>
        {errors.description && <p className="error">{errors.description}</p>}
        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
};

export default BookingPage;
