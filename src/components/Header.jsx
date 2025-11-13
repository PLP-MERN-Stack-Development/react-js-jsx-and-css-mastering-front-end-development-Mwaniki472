import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="bg-blue-600 text-white py-4 shadow-md">
    <div className="container mx-auto flex justify-between items-center px-4">
      <h1 className="text-xl font-semibold">Student Portal</h1>
      <nav className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/add-student" className="hover:underline">Add Student</Link>
      </nav>
    </div>
  </header>
);

export default Header;
