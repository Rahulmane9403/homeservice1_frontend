import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./BookingPage.css";

const BookingPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    description: "",
  });
  const [selectedLocation, setSelectedLocation] = useState("Pune");
  const [selectedService, setSelectedService] = useState("Cleaning");
  const [selectedWorker, setSelectedWorker] = useState("Helper 1");

  const timeSlots = ["08:00", "08:45", "09:30", "10:15", "11:00"];

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking Submitted!");
    console.log("Booking Data:", { selectedDate, selectedTime, formData, selectedLocation, selectedService, selectedWorker });
  };

  return (
    <div className="booking-page">
      <h2>Book an Appointment</h2>

      <div className="form-section">
        <div className="dropdowns">
          <label>
            Location
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
            >
              <option value="Pune">Pune</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Nashik">Nashik</option>
              <option value="Nagpur">Nagpur</option>
            </select>
          </label>
          <label>
            Service
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
            >
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
            <select
              value={selectedWorker}
              onChange={(e) => setSelectedWorker(e.target.value)}
            >
              <option value="Helper 1">Helper 1</option>
              <option value="Helper 2">Helper 2</option>
            </select>
          </label>
        </div>

        <div className="calendar-section">
          <label>
            Select Date
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              inline
            />
          </label>
        </div>

        <div className="time-slots">
          <h4>Select Time</h4>
          <div className="slots">
            {timeSlots.map((time) => (
              <button
                key={time}
                className={selectedTime === time ? "selected" : ""}
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      </div>

      <form className="personal-info" onSubmit={handleSubmit}>
        <h3>Personal Information</h3>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleFormChange}
            required
          />
        </label>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleFormChange}
            required
          />
        </label>
        <label>
          Phone
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleFormChange}
            required
          />
        </label>
 <label>
          Description
          <textarea
            name="description"
            value={formData.description}
            onChange={handleFormChange}
          />
        </label>
        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
};

export default BookingPage;