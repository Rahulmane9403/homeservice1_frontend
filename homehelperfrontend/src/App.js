import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer  from './components/Footer/Footer';
import HomePage from './pages/HomePage.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HomePage/>
      <Footer/>
    </div>
  );
}

export default App;
