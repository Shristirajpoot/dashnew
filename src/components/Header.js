import React from 'react';

const Header = ({ toggleTheme, isDarkMode }) => {
  return (
    <header className="p-4 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 text-white shadow-lg dark:bg-gray-800 dark:text-gray-100">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-wide">
          Translation Insights Dashboard
        </h1>
        <button
          onClick={toggleTheme}
          className="px-4 py-2 bg-white text-gray-800 rounded-md shadow hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 transition-transform transform hover:scale-105"
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </header>
  );
};

export default Header;
