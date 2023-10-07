import logo from './logo.svg';
import './App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
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
import ProfilePage from './components/Profile';
import Appointment from './components/appointment';
import QuestionUser from './components/QuestionUser';
import ProfileEdit from './components/EditProfile';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const isSignupPage = location.pathname === "/signup";

  return (
    <>
      <ErrorBoundary>
      {!isLoginPage && !isSignupPage && <Navbar />}
      <Routes>
      <Route path="/profile" element={<ProtectedRoute Component={ProfilePage} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/doctors" element={<ProtectedRoute Component={Doctors} />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/faq" element={<ProtectedRoute Component={FAQ} />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/myquestions" element={<ProtectedRoute Component={QuestionUser} />} />
        <Route path="/appointment/:doctorId" element={<Appointment />} />
        <Route path="/editprofile/:Id" element={<ProfileEdit />} />
      </Routes>
      {!isLoginPage && !isSignupPage && <Footer />}</ErrorBoundary>
    </>
  );
}

export default App;
