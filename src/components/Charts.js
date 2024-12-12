import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, LineElement, PointElement } from 'chart.js';
import { Bar, Pie, Line } from 'react-chartjs-2';
import zoomPlugin from 'chartjs-plugin-zoom';

// Register the zoom plugin and necessary chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  LineElement,
  PointElement,
  zoomPlugin
);

const Charts = ({ data, isDarkMode }) => {
  const barChartData = {
    labels: data ? data.translations.map(item => item.languagePair) : [],
    datasets: [
      {
        label: 'Translations Completed',
        data: data ? data.translations.map(item => item.count) : [],
        backgroundColor: isDarkMode
          ? ['#4e79a7', '#f28e2b', '#e15759']
          : ['#a8d0e6', '#ffbc42', '#ff7477'],
        borderColor: '#ffffff',
        borderWidth: 1.5,
      },
    ],
  };

  const pieChartData = {
    labels: data ? data.translations.map(item => item.languagePair) : [],
    datasets: [
      {
        data: data ? data.translations.map(item => item.count) : [],
        backgroundColor: ['#4e79a7', '#f28e2b', '#e15759', '#76b7b2', '#59a14f'],
        hoverBackgroundColor: ['#357ABD', '#F28550', '#E66A6A', '#6DC0BD', '#4F8C3B'],
      },
    ],
  };

  const lineChartData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Weekly Translations',
        data: data ? data.usage.weekly : [],
        fill: true,
        borderColor: isDarkMode ? '#FF6384' : '#36A2EB',
        backgroundColor: isDarkMode ? 'rgba(255, 99, 132, 0.2)' : 'rgba(54, 162, 235, 0.2)',
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: isDarkMode ? '#ffffff' : '#333333',
          font: {
            size: 14,
          },
        },
      },
      title: {
        display: true,
        text: 'Translation Insights',
        color: isDarkMode ? '#ffffff' : '#333333',
        font: {
          size: 16,
        },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            return `Count: ${tooltipItem.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: isDarkMode ? '#e0e0e0' : '#333333',
        },
        grid: {
          color: isDarkMode ? '#555555' : '#e5e5e5',
        },
      },
      y: {
        ticks: {
          color: isDarkMode ? '#e0e0e0' : '#333333',
        },
        grid: {
          color: isDarkMode ? '#555555' : '#e5e5e5',
        },
      },
    },
    zoom: {
      pan: {
        enabled: true,
        mode: 'xy',
      },
      zoom: {
        enabled: true,
        mode: 'xy',
        speed: 0.1,
      },
    },
  };

  return (
    <div className="space-y-8">
      <h2 className={`text-2xl font-bold text-center mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
        Translation Insights
      </h2>
      {data && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 shadow-lg rounded-lg transform hover:scale-105 transition-transform">
            <h3 className="text-lg font-semibold mb-4">Total Translations</h3>
            <div className="h-64">
              <Bar data={barChartData} options={chartOptions} />
            </div>
          </div>
          <div className="p-6 shadow-lg rounded-lg transform hover:scale-105 transition-transform">
            <h3 className="text-lg font-semibold mb-4">Language Pair Breakdown</h3>
            <div className="h-64">
              <Pie data={pieChartData} options={chartOptions} />
            </div>
          </div>
          <div className="p-6 shadow-lg rounded-lg transform hover:scale-105 transition-transform">
            <h3 className="text-lg font-semibold mb-4">Weekly Translations</h3>
            <div className="h-64">
              <Line data={lineChartData} options={chartOptions} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Charts;
