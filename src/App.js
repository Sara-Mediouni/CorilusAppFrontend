import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Home';
import Doctors from './components/Doctors';
import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";
import FAQ from './components/FAQ';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Footer from './components/footer';
function App() {
  return (
    <BrowserRouter>

    <Navbar/>
    <Routes>
    
      <Route path="/home" element={<Home/>} />
      <Route path="/doctors" element={<Doctors/>} />
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/faq" element={<FAQ/>} />
      
    </Routes>
    <Footer/>
  </BrowserRouter>
  );
}

export default App;
