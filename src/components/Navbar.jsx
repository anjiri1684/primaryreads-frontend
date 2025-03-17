import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Links,
} from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-10 py-5 bg-black bg-opacity-30 backdrop-blur-sm">
      <h1 className="text-white text-2xl font-bold">
        <Link to="/">Primary Reads</Link>
      </h1>
      <div className="flex space-x-4">
        <Link to="/register">
          <button className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition">
            Register
          </button>
        </Link>
        <Link to="/login">
          <button className="px-6 py-2 text-white bg-gray-800 rounded-lg hover:bg-gray-900 transition">
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
