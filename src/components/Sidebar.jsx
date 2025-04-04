import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-[#3055a6] shadow-md p-5">
      <h2 className="text-2xl font-semibold text-[#a0cee8] mb-6">AICS E-Learning</h2>
      <ul className="space-y-4">
        <li>
          <Link to="/dashboard" className="block p-2 text-blue-900 hover:bg-blue-200 rounded">Dashboard</Link>
        </li>
        <li>
          <Link to="/courses" className="block p-2 text-blue-900 hover:bg-blue-200 rounded">Courses</Link>
        </li>
        <li>
          <Link to="/pending" className="block p-2 text-blue-900 hover:bg-blue-200 rounded">Pending</Link>
        </li>
        <li>
          <Link to="/completed" className="block p-2 text-blue-900 hover:bg-blue-200 rounded">Completed</Link>
        </li>
        <li>
          <Link to="/" className="block p-2 text-red-600 hover:bg-red-100 rounded">Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
