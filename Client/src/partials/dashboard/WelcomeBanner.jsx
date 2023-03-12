import React from 'react';

function WelcomeBanner() {
  return (
    <div className="relative bg-indigo-200 p-4 sm:p-6 rounded-sm overflow-hidden mb-8">

      {/* Background illustration */}
      <div className="absolute right-0 top-0 -mt-4 mr-16 pointer-events-none hidden xl:block" aria-hidden="true">
        <img width={319} height={198} src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ideas2it.com%2Fblogs%2Fface-mask-detector-using-deep-learning-pytorch-and-computer-vision-opencv%2F&psig=AOvVaw2jHF7KccK3e8-MwX8v5MDk&ust=1678715592828000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCIj9vIjF1v0CFQAAAAAdAAAAABAD" />
      </div>

      {/* Content */}
      <div className="relative">
        <h1 className="text-2xl md:text-3xl text-slate-800 font-bold mb-1">Mask wearing statistics at Building 9, Faculty of Engineering, Kamphaengsaen</h1>
        <p>COVID-19: Face mask detection</p>
      </div>

    </div>
  );
}

export default WelcomeBanner;
