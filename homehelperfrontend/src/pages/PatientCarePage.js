import React from 'react';
import './ServicePage.css';
import { useNavigate } from 'react-router-dom';
import caregiver1 from '../assets/caregiver1.jpg';
import caregiver2 from '../assets/caregiver2.jpg';
import caregiver3 from '../assets/caregiver3.jpg';
import caregiver4 from '../assets/caregiver4.jpg';
import caregiver5 from '../assets/caregiver5.jpg';

const PatientCarePage = () => {
    const navigate = useNavigate();

    const workers = [
        { name: "Michael Scott", gender: "Male", experience: "10 years", location: "Delhi", salary: "₹550 / hour", img: caregiver1 },
        { name: "Nancy Wilson", gender: "Female", experience: "8 years", location: "Mumbai", salary: "₹620 / hour", img: caregiver2 },
        { name: "John Thompson", gender: "Male", experience: "6 years", location: "Bangalore", salary: "₹530 / hour", img: caregiver3 },
        { name: "Grace White", gender: "Female", experience: "7 years", location: "Chennai", salary: "₹520 / hour", img: caregiver4 },
        { name: "Jeny Lewis", gender: "Female", experience: "9 years", location: "Nashik", salary: "₹600 / hour", img: caregiver5 }
    ];

    const handleWorkerClick = (workerName) => {
        navigate('/bookingPage', {
            state: { selectedService: "Patient Care", selectedWorker: workerName }
        });
    };

    return (
        <section className="service-page">
            <h2>Available Patient Caregivers</h2>
            <div className="worker-list">
                {workers.map((worker, index) => (
                    <div className="worker-card" key={index} onClick={() => handleWorkerClick(worker.name)}>
                        <img src={worker.img} alt={worker.name} />
                        <h3>{worker.name}</h3>
                        <p>Gender: {worker.gender}</p>
                        <p>Experience: {worker.experience}</p>
                    </div>
                ))}
            </div>

            <div className="book-now-container">
                <button className="book-now-button" onClick={() => navigate('/bookingPage')}>
                    Book Now
                </button>
            </div>
        </section>
    );
};

export default PatientCarePage;
