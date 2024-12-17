import React from 'react';
import logo from '../assets/logo.jpg'; 
import serviceImage from '../assets/serviceImage.jpg';
import './Home.css'; // You can create a CSS file for styling

const Home = () => {
    return (
        <div>
            <div>
                <br></br>
                <img src={logo} alt="Home Helper Logo" style={{ width: '150px' }} />
                <h2>Welcome to Home Helper</h2><br></br>
                <a href="join-worker.html">
                     <button class="btn">Join as Worker</button>
                </a>
                <a href="register-user.html">
                     <button class="btn">Register as User</button>
                </a>
                <a href="login-worker.html">
                     <button class="btn">Login as Worker</button>
                </a>
                <a href="login-user.html">
                     <button class="btn">Login as User</button>
                 </a>
            </div>
            <h2 style={{ textAlign: 'center' }}>Our Services</h2>
<div class="services">
        
    <div class="service-card">
        <img src={serviceImage} alt="Services" />
        <h3>Cleaning</h3>
        <p>Professional cleaning services for your home or office, ensuring a spotless environment.</p>
    </div>
    <div class="service-card">
        <img src={serviceImage} alt="Services" style={{ width: '300px' }} />
        <h3>Cooking</h3>
        <p>Delicious home-cooked meals prepared by experienced chefs tailored to your dietary needs.</p>
    </div>
    <div class="service-card">
        <img src={serviceImage} alt="Services" />
        <h3>Gardening</h3>
        <p>Expert gardening services to maintain and beautify your outdoor spaces.</p>
    </div>
    <div class="service-card">
        <img src={serviceImage} alt="Services" />
        <h3>Babysitting</h3>
        <p>Reliable babysitting services with trained caregivers to ensure your child's safety and happiness.</p>
    </div>
    <div class="service-card">
        <img src={serviceImage} alt="Services" />
        <h3>Patient Care</h3>
        <p>Compassionate patient care services for the elderly or those in need of assistance at home.</p>
    </div>
    <div class="service-card">
        <img src={serviceImage} alt="Services" />
        <h3>Pet Care</h3>
        <p>Professional pet care services including walking, grooming, and sitting for your furry friends.</p>
    </div>
    
    
</div>

<div class="testimonials">
    <h2>What Our Clients Say</h2>
    <div class="testimonial-card">
        <p>"Home Helper has transformed my home! The cleaning service is top-notch and very reliable." - Sarah J.</p>
    </div>
    <div class="testimonial-card">
        <p>"The babysitting service was a lifesaver for our family. Our kids loved their sitter!" - Mark T.</p>
    </div>
    <div class="testimonial-card">
        <p>"I can't recommend the gardening service enough! My yard has never looked better." - Emily R.</p>
    </div>
    <div class="testimonial-card">
        <p>"The patient care team was incredibly compassionate and attentive to my mother's needs." - John D.</p>
    </div>
    <div class="testimonial-card">
        <p>"The cooking service has made my life so much easier. Delicious meals every day!" - Lisa M.</p>
    </div>
</div>
</div>

);



};
export default Home;