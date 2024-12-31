import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage.js';
import BookNowPage from './pages/BookNowPage.js';
import Contact from './pages/ContactForm';
// Uncomment and import additional components if needed
import LoginForm from './pages/LoginForm1.js';
import UserRegistrationForm from './pages/UserRegistrationForm.js';
import WorkerRegistrationForm from './pages/WorkerRegistrationForm.js';

import RoleSelection from './pages/RoleSelection.js';
// import LoginA from './pages/LoginForm_A.js';
import LoginU from './pages/LoginForm_U .js';
import RegistrationForm from './pages/UserRegistrationForm.js';
// import LoginUser from './pages/LoginUser.js';

// import RegisterUser from './pages/RegisterUser.js';
import Payment from './pages/Payment.js';
import BookingPage from './pages/BookingPage.js';

function App() {
  return (
    <Router>
      <>
        <Navbar /> {/* Include Navbar */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book" element={<BookNowPage />} />
          <Route Path ="/payment" element ={<Payment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bookingPage" element={<BookingPage />} />
          <Route path="/register" element={<RegistrationForm />} />
         
          {/* <Route path="/loginA" element={<LoginA />} /> */}
          <Route path="/loginU" element={<LoginU />} />
          {/* <Route path="/login" element={<Login />} /> */}
          {/* Uncomment these routes as needed */}

          <Route path="/login" element={<LoginForm />} />
          <Route path="/roleSelection" element={<RoleSelection />} />
          <Route path="/userRegistrationForm" element={<UserRegistrationForm />} />
          <Route path="/workerRegistrationForm" element={<WorkerRegistrationForm />} />
          <Route path="/RegistrationForm" element={<RegistrationForm />} />
          <Route path="/worker-register" element={<WorkerRegistrationForm />} />
          <Route path="/booking" element={<BookingPage />} />          
          {/* <Route path="/RegistrationForm" element={<RegistrationForm />} />/ */}
          {/* <Route path="/registermaid" element={<RegisterMaid />} /> */}
        </Routes>
        <Footer /> 
        
      </>
    </Router>
  );
}

export default App;