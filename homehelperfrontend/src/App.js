import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage.js';
import BookNowPage from './pages/BookNowPage.js';
import Contact from './pages/contact.js';
// Uncomment and import additional components if needed
import LoginForm from './pages/LoginForm.js';
// import LoginUser from './pages/LoginUser.js';
// import RegisterMaid from './pages/RegisterMaid.js';
// import RegisterUser from './pages/RegisterUser.js';
import Payment from './pages/Payment.js';

function App() {
  return (
    <Router>
      <>
        <Navbar /> {/* Include Navbar */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book" element={<BookNowPage />} />
          <Route Path ="/payment" element ={<Payment />} />
          <Route Path ="/contact" element ={<Contact />} />
          {/* Uncomment these routes as needed */}
          
          {/* <Route path="/register" element={<RegisterUser />} /> */}
          {/* <Route path="/registermaid" element={<RegisterMaid />} /> */}
        </Routes>
        <Footer /> 
        
      </>
    </Router>
  );
}

export default App;
