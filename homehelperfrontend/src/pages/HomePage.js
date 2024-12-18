 import React, { useState } from 'react';
// import logo from '../assets/logo.jpg'; 


import Cleaning from '../assets/Cleaning.jpg';
import Cooking from '../assets/Cooking.jpg';
import Gardening from '../assets/Gardening.jpg';
import serviceImage from '../assets/serviceImage.jpg';
import nurse from '../assets/nurse.jpg';
import PetCare from '../assets/PetCare.jpg';



import hero3 from '../assets/hero3.jpg';
import './Home.css'; // You can create a CSS file for styling

const Home = () => {
    const testimonials = [
        { name: "Sarah J.", message: "Home Helper has transformed my home! The cleaning service is top-notch and very reliable." },
        { name: "Mark T.", message: "The babysitting service was a lifesaver for our family. Our kids loved their sitter!" },
        { name: "Emily R.", message: "I can't recommend the gardening service enough! My yard has never looked better." },
        { name: "John D.", message: "The patient care team was incredibly compassionate and attentive to my mother's needs." },
        { name: "Lisa M.", message: "The cooking service has made my life so much easier. Delicious meals every day!" }
    ];

    const [index, setIndex] = useState(0);

    const handleNext = () => setIndex((index + 1) % testimonials.length);
    const handlePrev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);



    return (
        <div>
            <div>
            <div className="hero-section" style={{ backgroundImage: `url(${hero3})` }}>
                <div className="hero-content">
                    <h1>A clean home is a sanctuary for the soul.</h1>
                    <button className="hero-button">Book Now</button>
                </div>
            </div>
              
            </div>
            <h2 style={{ textAlign: 'center' }}>Our Services</h2>
<div class="services">
        
    <div class="service-card">
        <img src={Cleaning} alt="Services" />
        <h3>Cleaning</h3>
        <p>Professional cleaning services for your home or office, ensuring a spotless environment.</p>
    </div>
    <div class="service-card">
        <img src={Cooking} alt="Services" style={{ width: '300px' }} />
        <h3>Cooking</h3>
        <p>Delicious home-cooked meals prepared by experienced chefs tailored to your dietary needs.</p>
    </div>
    <div class="service-card">
        <img src={Gardening} alt="Services" />
        <h3>Gardening</h3>
        <p>Expert gardening services to maintain and beautify your outdoor spaces.</p>
    </div>
    <div class="service-card">
        <img src={serviceImage} alt="Services" />
        <h3>Babysitting</h3>
        <p>Reliable babysitting services with trained caregivers to ensure your child's safety and happiness.</p>
    </div>
    <div class="service-card">
        <img src={nurse} alt="Services" />
        <h3>Patient Care</h3>
        <p>Compassionate patient care services for the elderly or those in need of assistance at home.</p>
    </div>
    <div class="service-card">
        <img src={PetCare} alt="Services" />
        <h3>Pet Care</h3>
        <p>Professional pet care services including walking, grooming, and sitting for your furry friends.</p>
    </div><br></br>
    
        </div>
   

            <div className="testimonials">
                <h2>What Our Clients Say</h2>
                <div className="testimonial-card">
                    <strong>{testimonials[index].name}</strong>
                    <p>{testimonials[index].message}</p>
                </div>
                <div className="navigation-buttons">
                    <button onClick={handlePrev}>Previous</button>
                    <button onClick={handleNext}>Next</button>
                </div>
            </div>
        
         <div>
         <section id="about-us" className="about-us">
         <br /><br /> 
                     <h2 style={{ textAlign: 'center' }}>About Us</h2>
                     <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
                         Welcome to Home Helper, your trusted partner in maintaining a happy and organized household. 
                         From professional cleaning to compassionate patient care, our services are designed to meet your daily needs with reliability and excellence.
                         Experience a stress-free life with our tailored solutions for every home.
                     </p><br />   <br /> <br /> 
         </section>
         </div>
         </div>
        
);



};
export default Home;