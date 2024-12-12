import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Charts from './components/Charts';
import { generateMockData } from './data/mockData';


const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [filter, setFilter] = useState('daily');
  const [filteredData, setFilteredData] = useState(generateMockData());

  useEffect(() => {
    const interval = setInterval(() => {
      const newData = generateMockData();
      setFilteredData(newData);
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setFilteredData(generateMockData());
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  return (
    <div className={`flex flex-col min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <div className={`flex flex-grow ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
        <Sidebar onFilterChange={handleFilterChange} />
        <div className="flex-1 p-4">
          <Dashboard
            totalTranslations={filteredData.translations.reduce((acc, curr) => acc + curr.count, 0)}
            activeLanguages={filteredData.translations.length}
            avgTime={filteredData.usage.averageTime}
            totalTime={filteredData.usage.daily.reduce((acc, curr) => acc + curr, 0)}
          />
          <Charts data={filteredData} isDarkMode={isDarkMode} />
        </div>
      </div>
    </div>
  );
};



export default App;
