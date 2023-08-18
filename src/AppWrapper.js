import React from "react";
import { BrowserRouter, Route, Routes, Navigate, useLocation } from "react-router-dom";
import App from "./App";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

function AppWrapper() {
  const location = useLocation();
  

  return (
    <BrowserRouter>
      {!  location.pathname === "/login"&& !location.pathname === "/signup"&& <Navbar />}
      <Routes>
        <Route path="/home" element={<App />} />
        <Route path="/doctors" element={<App />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/faq" element={<App />} />
        <Route path="/login" element={<App />} />
        <Route path="/signup" element={<App />} />
      </Routes>
      {!  location.pathname === "/login"&& !location.pathname === "/signup" && <Footer />}
    </BrowserRouter>
  );
}

export default AppWrapper;
