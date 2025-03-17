import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Modern icons

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full px-6 md:px-10 py-4 bg-black bg-opacity-40 backdrop-blur-md shadow-lg fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <h1 className="text-white text-2xl md:text-3xl font-extrabold tracking-wide">
          <Link to="/">Primary Reads</Link>
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/register">
            <button className="px-6 py-2 text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg hover:scale-105 transition-all">
              Register
            </button>
          </Link>
          <Link to="/login">
            <button className="px-6 py-2 text-white bg-gray-800 rounded-lg hover:bg-gray-900 transition-all">
              Login
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4 pb-4 border-t border-gray-700">
          <Link to="/register" className="w-full text-center">
            <button className="w-11/12 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition">
              Register
            </button>
          </Link>
          <Link to="/login" className="w-full text-center">
            <button className="w-11/12 py-2 text-white bg-gray-800 rounded-lg hover:bg-gray-900 transition">
              Login
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
