import React from 'react';

const Sidebar = ({ onFilterChange }) => {
  return (
    <aside className="w-64 p-6 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">Filter Data</h2>
      <div className="space-y-4">
        <button
          onClick={() => onFilterChange('daily')}
          className="block w-full px-4 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-400 dark:bg-blue-600 dark:hover:bg-blue-500 transition-transform transform hover:scale-105"
        >
          Daily
        </button>
        <button
          onClick={() => onFilterChange('weekly')}
          className="block w-full px-4 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-400 dark:bg-green-600 dark:hover:bg-green-500 transition-transform transform hover:scale-105"
        >
          Weekly
        </button>
        <button
          onClick={() => onFilterChange('monthly')}
          className="block w-full px-4 py-3 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-400 dark:bg-purple-600 dark:hover:bg-purple-500 transition-transform transform hover:scale-105"
        >
          Monthly
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
