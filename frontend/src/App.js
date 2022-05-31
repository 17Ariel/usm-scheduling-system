import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SidebarLayout from "./components/SidebarLayout";
import Profile from "./pages/Profile";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import Viewschedule from "./pages/Viewschedule";
import Addschedule from "./pages/Addschedule";
import { useReactToPrint } from "react-to-print";
const App = () => {
  const schedule = useRef();
  const print = useReactToPrint({
    content: () => schedule.current,
  });

  return (
    <div className="font-roboto">
      <Router>
        <Routes>
          <Route element={<SidebarLayout print={print} />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route
              path="/schedule"
              element={<Viewschedule refs={schedule} />}
            />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/add" element={<Addschedule />} />
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="*" element={<div>O'ops page not found</div>} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
};

export default App;
