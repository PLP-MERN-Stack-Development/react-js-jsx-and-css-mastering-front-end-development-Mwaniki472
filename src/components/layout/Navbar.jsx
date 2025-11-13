import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import { Sun, Moon } from "lucide-react"; // icons

const Navbar = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const activeStyle = "text-blue-600 font-semibold border-b-2 border-blue-600";

  return (
    <nav className="bg-white dark:bg-gray-900 shadow sticky top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100">
          React + Tailwind Project
        </h1>

        <div className="flex items-center gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? activeStyle
                : "text-gray-600 dark:text-gray-300 hover:text-blue-600"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/tasks"
            className={({ isActive }) =>
              isActive
                ? activeStyle
                : "text-gray-600 dark:text-gray-300 hover:text-blue-600"
            }
          >
            Tasks
          </NavLink>

          <NavLink
            to="/api-data"
            className={({ isActive }) =>
              isActive
                ? activeStyle
                : "text-gray-600 dark:text-gray-300 hover:text-blue-600"
            }
          >
            API Data
          </NavLink>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:scale-105 transition-transform"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-gray-800" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
