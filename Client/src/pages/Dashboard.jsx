import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Welcome from '../partials/dashboard/WelcomeBanner';
import Header from '../partials/Header';
import BarChart from '../charts/BarChart01';
import { tailwindConfig } from '../utils/Utils';
import Flatpickr from 'react-flatpickr';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min";


<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
import Axios from 'axios';

var dataMaskAllDate = [];

//ใส่
var dataMaskDate = [];

var dataMask = [];
//ไม่ใส่
var dataMaskDate1 = [];

var dataMask1 = [];


//export {lable2};
var dateQuery = "";
var dateQuery2 = "";

let check = 0;
function Dashboard() {

  const showChart = ["LineChart", "Refresh"];
  const [myChart, setMyChart] = useState('');

  const [maskAllList, setMaskAllList] = useState([]);
  const getMaskAllList = () => {
    Axios.get("http://localhost:3001/time").then((response) => {
      setMaskAllList(response.data);
    });
    {
      maskAllList.map((val, key) => {
        dataMaskAllDate.push(val.Date)
        console.log(dataMaskAllDate);
      })
    }
  };

  const changeTime = () => {
    Axios.get("http://localhost:3001/timeat", { params: { dateQuery: dateQuery, dateQuery2: dateQuery2 } }).then((response) => {
      console.log(response.data);
      setMaskAllList(response.data);
    });
    {
      maskAllList.map((val, key) => {
        //dataMaskAllDate.splice(0,dataMaskAllDate.length);
        dataMaskAllDate.push(val.Date)
      })
    }
  }

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

  const changeTimeMask = () => {
    Axios.get("http://localhost:3001/maskat", { params: { dateQuery: dateQuery, dateQuery2: dateQuery2 } }).then((response) => {
      console.log(response.data);
      setMaskList(response.data);
    });
    {
      maskList.map((val, key) => {
        dataMaskDate.push(val.Date),
          dataMask.push(val.Amount)
      })
    }
  }

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

  const changeTimeNoMask = () => {
    Axios.get("http://localhost:3001/nomaskat", { params: { dateQuery: dateQuery, dateQuery2: dateQuery2 } }).then((response) => {
      console.log(response.data);
      setNoMaskList(response.data);
    });
    {
      maskList1.map((val, key) => {
        dataMaskDate1.push(val.Date),
          dataMask1.push(val.Amount)
      })
    }
  }

  //ทั้งหมด

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const lable = Object.keys(maskList);
  const lable2 = Object.values(maskList);

  console.log(lable);

  const A = () => {
    if (check < 10) {
      if (check < 3) {
        if (dateQuery == "" && dateQuery2 == "") {
          console.log("a");
          getMaskAllList();
        }
        else {
          console.log("b");
          changeTime();
        }
      }

      console.log(dataMaskAllDate);
      //console.log(maskAllList),
      if (check < 5) {
        if (dateQuery == "" && dateQuery2 == "") {
          getMaskList();
          getNoMaskList();
        }
        else {
          changeTimeMask();
          changeTimeNoMask();
        }
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
            <Welcome/>


            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
             
              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-start gap-2">
                {/* Filter button */}

                {/* Datepicker built with flatpickr */}
                {/* <Datepicker /> */}
                {Datepicker()}

                {/* Add view button */}
                
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
                  {myChart === "Refresh" && (
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
    labels: dataMaskAllDate,
    
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

     
    ],
  };


  return (
    <div>
     

      <div className="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
        <header className="px-5 py-4 border-b border-slate-100">
          <h2 className=" text-slate-800"></h2>
        </header>
        <BarChart data={chartData} width={595} height={430} />

      </div>
    </div>

  );
}

function Datepicker() {

  const options = {
    mode: 'range',
    static: true,
    monthSelectorType: 'static',
    dateFormat: 'm-d-Y',
    defaultDate: [new Date().setDate(new Date().getDate() - 7), new Date().setDate(new Date().getDate() - 1)],
    prevArrow: '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M5.4 10.8l1.4-1.4-4-4 4-4L5.4 0 0 5.4z" /></svg>',
    nextArrow: '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M1.4 10.8L0 9.4l4-4-4-4L1.4 0l5.4 5.4z" /></svg>',
    onReady: (selectedDates, dateStr, instance) => {
      //console.log(instance.element.value);
      instance.element.value = dateStr.replace('to', '-');
    },
    onChange: (selectedDates, dateStr, instance) => {
      console.log(instance.element.value);
      instance.element.value = dateStr.replace('to', '-');
      console.log(dateStr);
      dateQuery = dateStr.substr(0, 10);
      console.log("dateQuery");
      console.log(dateQuery);
      dateQuery2 = dateStr.substr(14, 10);
      if (dateQuery2 == "") {
        dateQuery2 = dateQuery;
      }
      console.log("dateQuery2");
      console.log(dateQuery2);
    },
  }

  return (
    <div className="relative">
      <Flatpickr className="form-input pl-9 text-slate-500 hover:text-slate-600 font-medium focus:border-slate-300 w-60" options={options} />
      <div className="absolute inset-0 right-auto flex items-center pointer-events-none">
        <svg className="w-4 h-4 fill-current text-slate-500 ml-3" viewBox="0 0 16 16">
          <path d="M15 2h-2V0h-2v2H9V0H7v2H5V0H3v2H1a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V3a1 1 0 00-1-1zm-1 12H2V6h12v8z" />
        </svg>
      </div>
    </div>
  );
}

export default Dashboard;