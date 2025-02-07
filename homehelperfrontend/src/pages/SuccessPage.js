import React from "react";
import { Link } from "react-router-dom";

const SuccessPage = () => {
  return (
    <div style={{ paddingTop: "100px", textAlign: "center" }}>
      <h2>Booking Successful!</h2>
      <p>Your appointment has been successfully booked. A worker has been notified.</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default SuccessPage;
