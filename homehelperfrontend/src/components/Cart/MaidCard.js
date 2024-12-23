import React from "react";
import "./Cart.css";
import images from "../../assets/nurse.jpg"

function MaidCard() {
  const maid = {
    //photo: "https://via.placeholder.com/150",  // Dummy image link 
    photo: `${images}`,
    name: "Priya",
    service: "Cleaning",
    experience: 5,
    location: "Delhi",
    price: 250
  };

  return (

    <div className="maid-card">
      <img src={maid.photo} alt={`${maid.name}`} className="maid-photo" />
      <div className="maid-details">
        <h3>{maid.name}</h3>
        <p><strong>Service:</strong> {maid.service}</p>
        <p><strong>Experience:</strong> {maid.experience} years</p>
        <p><strong>Location:</strong> {maid.location}</p>
        <p><strong>Price:</strong> ₹{maid.price} / hour</p>
      </div>
      <button className="maid-book-btn" onClick={() => alert(`Booking ${maid.name}`)}>
        Book Now
      </button>
    </div>
  );
}

export default MaidCard;
