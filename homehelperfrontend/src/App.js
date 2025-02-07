import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage.js';
import BookNowPage from './pages/BookNowPage.js';
import Contact from './pages/ContactForm';
import LoginForm from './pages/LoginForm1.js';
import UserRegistrationForm from './pages/UserRegistrationForm.js';
import WorkerRegistrationForm from './pages/WorkerRegistrationForm.js';
import WorkerProfilePage from './pages/WorkerProfilePage.js';
import RoleSelection from './pages/RoleSelection.js';
import LoginU from './pages/LoginForm_U .js';
import Payment from './pages/Payment.js';
import BookingPage from './pages/BookingPage.js';

// Import additional pages
import CleaningPage from "./pages/CleaningPage";
import CookingPage from "./pages/CookingPage";
import GardeningPage from "./pages/GardeningPage";
import BabysittingPage from "./pages/BabysittingPage";
import PatientCarePage from "./pages/PatientCarePage";
import PetCarePage from "./pages/PetCarePage";
import SuccessPage from "./pages/SuccessPage";

// Import components for worker, booking, and feedback lists
import WorkerList from './components/API_Calls_in_React_Components/WorkerList';
import BookingList from './components/API_Calls_in_React_Components/BookingList';
import FeedbackList from './components/API_Calls_in_React_Components/FeedbackList';

function WorkerProfileWrapper() {
  const location = useLocation();
  return <WorkerProfilePage workerData={location.state?.workerData} />;
}

function App() {
  return (
    <Router>
      <>
        <Navbar /> {/* Include Navbar */}
        <Routes>
          {/* Existing routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/book" element={<BookNowPage />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bookingPage" element={<BookingPage />} />
          <Route path="/success" element={<SuccessPage />} />

          {/* Login and Register */}
          <Route path="/login" element={<LoginForm />} />
          <Route path="/loginU" element={<LoginU />} />
          
          {/* Role selection (replaced /register with /roleSelection) */}
          <Route path="/register" element={<RoleSelection />} />

          {/* Worker Profile */}
          <Route path="/worker-profile" element={<WorkerProfileWrapper />} />

          {/* Worker registration and user registration forms */}
          <Route path="/user-registration" element={<UserRegistrationForm />} />
          <Route path="/worker-registration" element={<WorkerRegistrationForm />} />

          {/* New routes for worker, booking, and feedback */}
          <Route path="/workers" element={<WorkerList />} />
          <Route path="/bookings" element={<BookingList />} />
          <Route path="/feedbacks" element={<FeedbackList />} />
          <Route path="/payments" element={<Payment />} />
          <Route path="/supports" element={<Contact />} />

          {/* Additional pages */}
          <Route path="/cleaning" element={<CleaningPage />} />
          <Route path="/cooking" element={<CookingPage />} />
          <Route path="/gardening" element={<GardeningPage />} />
          <Route path="/babysitting" element={<BabysittingPage />} />
          <Route path="/patient-care" element={<PatientCarePage />} />
          <Route path="/pet-care" element={<PetCarePage />} />
        </Routes>
        <Footer /> {/* Include Footer */}
      </>
    </Router>
  );
}

export default App;
