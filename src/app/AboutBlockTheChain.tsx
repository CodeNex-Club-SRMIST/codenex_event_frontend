import React from 'react';
import './AboutBlockTheChain.css';

const AboutBlockTheChain = () => {
  return (
    <div className="bg-[#131a26] text-white starry-background min-h-screen w-full flex flex-col items-center justify-center relative px-4">
      {/* Title with Gradient */}
      <h2 className="text-xl font-semibold mb-6 z-10 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
        About Block The Chain
      </h2>

      {/* Main Tagline Box with Bottom White Border & Gradient */}
      <div className="relative w-[60%] text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-300 to-[#1c283a] rounded-xl p-[2px]" />
        <div className="bg-[#162032] bg-opacity-95 px-6 py-4 rounded-xl border-b-2 border-white relative text-white shadow-lg">
          <h2 className="text-lg font-semibold">
            Hack. Compete. Win. The clock is ticking—are you in?
          </h2>
        </div>
      </div>

      {/* Description Box with Bottom White Border & Gradient */}
      <div className="relative w-[65%] text-center mt-4">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-300 to-[#1c283a] rounded-xl p-[2px]" />
        <div className="bg-[#162032] bg-opacity-95 px-6 py-4 rounded-xl border-b-2 border-white relative text-white shadow-lg">
          <p className="text-sm leading-relaxed">
            <b>Block The Chain</b> - A 24-hour blockchain hackathon at SRM KTR! Dive into the world of decentralized innovation, 
            build groundbreaking solutions, and compete with the best minds. Are you ready to code, create, and revolutionize 
            the blockchain space?
          </p>
        </div>
      </div>

      {/* Information Boxes with White Borders */}
      <div className="mt-6 grid grid-cols-2 gap-6 w-[65%] max-w-4xl">
        {/* Mode Box */}
        <div className="flex items-center bg-[#162032] bg-opacity-90 px-6 py-4 rounded-xl w-full h-[100px] shadow-lg border border-white/30">
          <span className="text-yellow-400 text-3xl mr-4">🌍</span>
          <div className="flex flex-col justify-center">
            <h4 className="font-medium text-white">Mode</h4>
            <p className="text-sm text-gray-300">Offline</p>
          </div>
        </div>

        {/* Date Box */}
        <div className="flex items-center bg-[#162032] bg-opacity-90 px-6 py-4 rounded-xl w-full h-[100px] shadow-lg border border-white/30">
          <span className="text-purple-400 text-3xl mr-4">📅</span>
          <div className="flex flex-col justify-center">
            <h4 className="font-medium text-white">Date</h4>
            <p className="text-sm text-gray-300">22-23 March</p>
          </div>
        </div>

        {/* Registrations Box */}
        <div className="flex items-center bg-[#162032] bg-opacity-90 px-6 py-4 rounded-xl w-full h-[100px] shadow-lg border border-white/30">
          <span className="text-green-400 text-3xl mr-4">✅</span>
          <div className="flex flex-col justify-center">
            <h4 className="font-medium text-white">Registrations</h4>
            <p className="text-sm text-gray-300">500+ Estimated</p>
          </div>
        </div>

        {/* Prize Pool Box */}
        <div className="flex items-center bg-[#162032] bg-opacity-90 px-6 py-4 rounded-xl w-full h-[100px] shadow-lg border border-white/30">
          <span className="text-yellow-300 text-3xl mr-4">💰</span>
          <div className="flex flex-col justify-center">
            <h4 className="font-medium text-white">Prize Pool</h4>
            <p className="text-sm text-gray-300">₹10,000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBlockTheChain;
