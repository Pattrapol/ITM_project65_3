import { Link } from "react-router-dom";
import React, { useState } from "react";

import Sidebar from "../partials/Sidebar";
import Welcome from "../partials/dashboard/WelcomeBanner";
import Header from "../partials/Header";
import BarChart from "../charts/BarChart01";
import { tailwindConfig } from "../utils/Utils";
import Flatpickr from "react-flatpickr";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const People = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          <div class="py-20 bg-gray-50">
            <div class="container mx-auto px-6 md:px-12 xl:px-32">
              <div class="mb-16 text-center">
                {/* <h2 class="mb-4 text-center text-2xl text-gray-900 font-bold md:text-4xl">Tailus blocks leadership</h2> */}
                <h2 className=" text-slate-800">Member</h2> 
                {/* <p class="text-gray-600 lg:w-8/12 lg:mx-auto">Tailus prides itself not only on award-winning technology, but also on the talent of its people of some of the brightest minds and most experienced executives in business.</p> */}
              </div>
              <div class="grid gap-12 items-center md:grid-cols-3">
                <div class="space-y-4 text-center">
                  <div class="!z-5 relative flex flex-col rounded-[20px] max-w-[300px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-4 3xl:p-![18px] bg-white undefined">
                    <div class="h-full w-full">
                      <div class="relative w-full">
                        <img
                          class="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
                          src="/images/เพชร.jpg"
                          width={300}
                        />
                        <div>
                          <h4 class="text-2xl">นายภัทรพล แจ่มจำรัส</h4>
                          <span class="block text-sm text-gray-500">
                            member
                          </span>
                          <span class="block text-sm text-gray-500">
                            Front-end Developer
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    class="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
                    src="/images/ดิว.jpg"
                    width={300}
                  />
                  <div>
                    <h4 class="text-2xl">นายอัษฎาวุธ คล้ายเมือง</h4>
                    <span class="block text-sm text-gray-500">member</span>
                    <span class="block text-sm text-gray-500">
                      Front-end Developer
                    </span>
                  </div>
                </div>
                <div class="space-y-4 text-center">
                  <img
                    class="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
                    src="/images/แต้ม.jpg"
                    width={300}
                  />
                  <div>
                    <h4 class="text-2xl">นายนเรศ เฟื่องเวโรจน์สกุล</h4>
                    <span class="block text-sm text-gray-500">
                      Project Manager
                    </span>
                    <span class="block text-sm text-gray-500">
                      AI Developer
                    </span>
                  </div>
                </div>
                <div class="space-y-4 text-center">
                  <img
                    class="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
                    src="/images/พี.jpg"
                    width={300}
                  />
                  <div>
                    <h4 class="text-2xl">นายธิติพนธ์ สว่างศรี </h4>
                    <span class="block text-sm text-gray-500">member</span>
                    <span class="block text-sm text-gray-500">
                      AI Developer
                    </span>
                  </div>
                  <img
                    class="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
                    src="/images/บิ๊ก.jpg"
                    width={300}
                  />
                  <div>
                    <h4 class="text-2xl">นายโรจนากร แย้มบางยาง </h4>
                    <span class="block text-sm text-gray-500">member</span>
                    <span class="block text-sm text-gray-500">
                      Back-end Developer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
export default People;
