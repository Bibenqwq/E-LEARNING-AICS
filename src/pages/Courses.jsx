import React from "react";

const coursesData = [
  { id: 1, title: "Introduction to ICT", description: "Learn the basics of Information and Communication Technology." },
  { id: 2, title: "Cybersecurity Fundamentals", description: "Understand how to protect digital assets and privacy." },
  { id: 3, title: "Web Development Basics", description: "Get started with HTML, CSS, and JavaScript for web design." },
  { id: 4, title: "Networking Essentials", description: "Learn the fundamentals of computer networking and protocols." },
  { id: 5, title: "Artificial Intelligence & Machine Learning", description: "Explore AI concepts and how machines learn from data." },
];

const Courses = () => {
  return (
    <div className="flex-1 p-6 bg-blue-50 min-h-screen">
      <h2 className="text-3xl font-semibold text-blue-700">📚 Available Courses</h2>

      <div className="mt-6 grid grid-cols-2 gap-6">
        {coursesData.map((course) => (
          <div key={course.id} className="p-6 bg-white shadow rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800">{course.title}</h3>
            <p className="mt-2 text-gray-600">{course.description}</p>
            <button className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600">Enroll Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
