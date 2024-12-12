import React from 'react';
import { FaGlobe, FaLanguage, FaClock, FaHourglassHalf } from 'react-icons/fa';

const Dashboard = ({ totalTranslations, activeLanguages, avgTime, totalTime }) => {
  const cardData = [
    {
      title: 'Total Translations',
      value: totalTranslations,
      icon: <FaGlobe />,
      gradient: 'from-blue-500 to-indigo-600',
      darkGradient: 'from-indigo-800 to-indigo-900',
    },
    {
      title: 'Active Languages',
      value: activeLanguages,
      icon: <FaLanguage />,
      gradient: 'from-green-400 to-teal-500',
      darkGradient: 'from-teal-700 to-teal-800',
    },
    {
      title: 'Avg. Translation Time',
      value: `${avgTime} seconds`,
      icon: <FaClock />,
      gradient: 'from-purple-500 to-pink-600',
      darkGradient: 'from-pink-700 to-pink-800',
    },
    {
      title: 'Total Time Spent',
      value: `${totalTime} minutes`,
      icon: <FaHourglassHalf />,
      gradient: 'from-red-400 to-orange-500',
      darkGradient: 'from-orange-700 to-orange-800',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {cardData.map((card, index) => (
        <div
          key={index}
          className={`p-5 bg-gradient-to-r ${card.gradient} text-white shadow-lg rounded-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300 dark:${card.darkGradient}`}
        >
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">{card.title}</h3>
            <div className="text-4xl opacity-80">{card.icon}</div>
          </div>
          <p className="text-4xl font-extrabold mt-4">{card.value}</p>
        </div>
      ))}
    </div>
  );
};
export default Dashboard;