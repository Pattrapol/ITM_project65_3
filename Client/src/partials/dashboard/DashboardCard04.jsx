import React from 'react';
import BarChart from '../../charts/BarChart01';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function DashboardCard04() {

  const chartData = {
    labels: [
      '12-01-2020', '01-01-2021', '02-01-2021',
      '03-01-2021', '04-01-2021', '05-01-2021',
    ],
    datasets: [
      // Light blue bars
      {
        label: 'Mask',
        data: [
          80, 60, 90, 30, 78, 70,
        ],
        backgroundColor: tailwindConfig().theme.colors.indigo[400],
        hoverBackgroundColor: tailwindConfig().theme.colors.indigo[500],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
      // Blue bars
      {
        label: 'No Mask',
        data: [
          49, 26, 53, 48, 52, 48,
        ],
        backgroundColor: tailwindConfig().theme.colors.yellow[500],
        hoverBackgroundColor: tailwindConfig().theme.colors.yellow[600],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },

      // Blue bars
      {
        label: 'Wrong Mask',
        data: [
          20, 22, 35, 44, 15, 8,
        ],
        backgroundColor: tailwindConfig().theme.colors.red[500],
        hoverBackgroundColor: tailwindConfig().theme.colors.red[600],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Mask VS No Mask VS Wrong Mask</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <BarChart data={chartData} width={595} height={430} />
    </div>
  );
}

export default DashboardCard04;
