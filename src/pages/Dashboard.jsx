import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex-1 p-6 bg-blue-50 min-h-screen">
      <h2 className="text-3xl font-semibold text-blue-700">Dashboard</h2>

      {/* Quick Stats Section */}
      <div className="grid grid-cols-3 gap-6 mt-6">
        <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="text-lg font-semibold text-gray-700">Total Courses</h3>
          <p className="text-3xl font-bold text-blue-600">12</p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="text-lg font-semibold text-gray-700">Pending Courses</h3>
          <p className="text-3xl font-bold text-yellow-500">3</p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg">
          <h3 className="text-lg font-semibold text-gray-700">Completed Courses</h3>
          <p className="text-3xl font-bold text-green-500">9</p>
        </div>
      </div>

      {/* Announcements */}
      <div className="mt-8 p-6 bg-white shadow rounded-lg">
        <h3 className="text-xl font-semibold text-blue-700">📢 Announcements</h3>
        <ul className="mt-4 space-y-2 text-gray-700">
          <li>🎉 New course on React.js is now available!</li>
          <li>📅 System maintenance scheduled for April 10.</li>
          <li>✅ Don't forget to complete your pending courses.</li>
        </ul>
      </div>

      {/* Quick Links */}
      <div className="mt-8 grid grid-cols-4 gap-4">
        <Link to="/courses" className="p-4 bg-blue-500 text-white text-center rounded-lg shadow hover:bg-blue-600">View Courses</Link>
        <Link to="/pending" className="p-4 bg-yellow-500 text-white text-center rounded-lg shadow hover:bg-yellow-600">Pending Courses</Link>
        <Link to="/completed" className="p-4 bg-green-500 text-white text-center rounded-lg shadow hover:bg-green-600">Completed Courses</Link>
        <Link to="/dashboard" className="p-4 bg-gray-500 text-white text-center rounded-lg shadow hover:bg-gray-600">More Info</Link>
      </div>
    </div>
  );
};

export default Dashboard;
