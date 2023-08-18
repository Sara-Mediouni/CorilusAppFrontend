import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Doctors from './components/Doctors';
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import FAQ from './components/FAQ';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Footer from './components/footer';
import SignIn from './components/SignIn';
import SignUp from './components/Signup';
import ProtectedRoute from './ProtectedRoute';

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const isSignupPage = location.pathname === "/signup";

  return (
    <>
      {!isLoginPage && !isSignupPage && <Navbar />}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/faq" element={<ProtectedRoute Component={FAQ} />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      {!isLoginPage && !isSignupPage && <Footer />}
    </>
  );
}

export default App;
