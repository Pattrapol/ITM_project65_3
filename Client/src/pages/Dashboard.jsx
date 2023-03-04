import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import BarChart from '../charts/BarChart01';
import Datepicker from '../partials/actions/Datepicker';
import { tailwindConfig } from '../utils/Utils';

import Axios from 'axios';
var dataMaskAllDate = [];
/*function fetchMaskAllDate() {
  {
    maskAllList.map((val, key) => {
      {
        dataMaskAllDate.push(val.Date);
      }
    });
  }
  console.log("dataMaskAllDate = " + dataMaskAllDate);
  return dataMaskAllDate;
}*/

//ใส่
var dataMaskDate = [];
/*function fetchMaskDate() {
  {
    maskList.map((val, key) => {
      {
        dataMaskDate.push(val.Date);
      }
    });
  }
  console.log("dataMaskDate = " + dataMaskDate);
  return dataMaskDate;
}*/
var dataMask = [];
/*function fetchMask() {
  {
    maskList.map((val, key) => {
      {
        dataMask.push(val.Amount);
      }
    });
  }
  console.log("datamask = " + dataMask);
  return dataMask;
}*/
//ไม่ใส่
var dataMaskDate1 = [];
/*function fetchNoMaskDate() {
  {
    maskList1.map((val, key) => {
      {
        dataMaskDate1.push(val.Date);
      }
    });
  }
  console.log("dataMaskDate1 = " + dataMaskDate1);
  return dataMaskDate1;
}*/
var dataMask1 = [];
/*function fetchNoMask() {
  {
    maskList1.map((val, key) => {
      {
        dataMask1.push(val.Amount);
      }
    });
  }
  console.log("dataMask1 = " + dataMask1);
  return dataMask1;
}*/

//export {lable2};
let check = 0;
function Dashboard() {

  const showChart = ["LineChart", "CircleChart"];
  const [myChart, setMyChart] = useState('');

  const [maskAllList, setMaskAllList] = useState([]);
  const getMaskAllList = () => {
    Axios.get("http://localhost:3001/time").then((response) => {
      setMaskAllList(response.data);
    });
    {
      maskAllList.map((val, key) => {
        dataMaskAllDate.push(val.Date)
      })
    }
  };

  const [maskList, setMaskList] = useState([]);
  const getMaskList = () => {
    Axios.get("http://localhost:3001/mask").then((response) => {
      setMaskList(response.data);
    });
    {
      maskList.map((val, key) => {
        dataMaskDate.push(val.Date),
          dataMask.push(val.Amount)
      })
    }
  };

  const [maskList1, setNoMaskList] = useState([]);
  const getNoMaskList = () => {
    Axios.get("http://localhost:3001/nomask").then((response) => {
      setNoMaskList(response.data);
    });
    {
      maskList1.map((val, key) => {
        dataMaskDate1.push(val.Date),
          dataMask1.push(val.Amount)
      })
    }
  };

  //ทั้งหมด

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const lable = Object.keys(maskList);
  const lable2 = Object.values(maskList);

  console.log(lable);

  const A = () => {
    if (check < 10) {
      if (check < 3) {
        getMaskAllList();
      }

      console.log(dataMaskAllDate);
      //console.log(maskAllList),
      if (check < 5) {
        getMaskList();
        getNoMaskList();
      }
      //console.log(maskList),
      console.log(dataMask);
      console.log(dataMask1);
      //console.log(maskList1)
      check++;
      console.log(check);
    }
    //DashboardCard04();
  }

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Welcome banner */}
            


            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              <button class="btn btn-primary" onClick={getMaskList}>
                Show Chart
              </button>
              {maskList.map((val, key) => {
                return (
                  <div className="">
                    <div className="">
                      <p className="card-text">Name: {val.Status}</p>
                    </div>
                  </div>
                )
              })}
              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                {/* Filter button */}
                
                {/* Datepicker built with flatpickr */}
                <Datepicker />
                {/* Add view button */}
                {/* <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                    <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                        <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                    </svg>
                    <span className="hidden xs:block ml-2">Add view</span>
                </button>                 */}
              </div>

            </div>
            <div >
              <div
                className="btn-group"
                role="group"
                aria-label="Basic example"
              >
                {showChart.map(showChart => (
                  <button
                    type="button"
                    key={showChart}
                    className={"btn btn-light border-dark "}
                    onClick={() => setMyChart(showChart)}
                  >
                    {showChart.toLocaleUpperCase()}
                  </button>
                ))}
              </div>
              <div className="col text-center">
                <p>{myChart}</p>
                <p>
                  {myChart === "LineChart" && (
                    A(),
                    DashboardCard04()
                  )}
                  {myChart === "CircleChart" && (
                    <DashboardCard04 />
                  )}

                </p>
              </div>
            </div>
          </div>
        </main>

      </div>
    </div>
  );
}

function DashboardCard04() {
  const chartData = {
    labels: ['02-25-2023', '02-26-2023', '02-27-2023', '02-28-2023',],
            //['12-01-2020', '01-01-2021', '02-01-2021','03-01-2021',],
    datasets: [
      // Light blue bars
      {
        label: 'Mask',
        data: dataMask,
        backgroundColor: tailwindConfig().theme.colors.indigo[400],
        hoverBackgroundColor: tailwindConfig().theme.colors.indigo[500],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
      // Blue bars
      {
        label: 'No Mask',
        data: dataMask1,
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

export default Dashboard;