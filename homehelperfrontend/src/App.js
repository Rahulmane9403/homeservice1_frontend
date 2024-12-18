//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer  from './components/Footer/Footer';
import HomePage from './pages/HomePage.js';
import BookNowPage from './pages/BookNowPage.js';
//import LoginForm from './pages/LoginForm.js';
//import LoginUser from './pages/LoginUser.js';
//import RegisterMaid from './pages/RegisterMaid.js';
//import RegisterUser from './pages/RegisterUser.js';


function App() {
  return (
    
       <>
      <Navbar /> {/* Include Navbar if needed */}
      <Routes>
        
       
        <Route path="/home" element={<HomePage />} />
        <Route path="/book" element={<BookNowPage />} />
        <Route path="/login" element={<LoginFrom/>} />
        <Route path="/Register" element ={<RegisterUser/>} />
        <Route path="/Registerform" element ={<RegisterFromUser/>} />
        <Route path="/login" element ={<RegisterMaid/>} />
        <Route path="/Registerform" element ={<RegisterFrom/>} />
        <Route path="/login" element ={<RegisterMaid/>} />
       
      </Routes>
      <Footer /> 
    </>
    
  );
}

export default App;
