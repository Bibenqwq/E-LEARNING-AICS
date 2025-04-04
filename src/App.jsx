import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Pending from "./pages/Pending";
import Completed from "./pages/Completed";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/dashboard"
          element={
            <div className="flex">
              <Sidebar />
              <Dashboard />
            </div>
          }
        />
        <Route
          path="/courses"
          element={
            <div className="flex">
              <Sidebar />
              <Courses />
            </div>
          }
        />
        <Route
          path="/pending"
          element={
            <div className="flex">
              <Sidebar />
              <Pending />
            </div>
          }
        />
        <Route
          path="/completed"
          element={
            <div className="flex">
              <Sidebar />
              <Completed />
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
