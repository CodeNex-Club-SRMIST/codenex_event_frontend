import React from 'react';
import './AboutBlockTheChain.css'; 

const AboutBlockTheChain = () => {
    return (
        <div className="bg-[#010a1f] text-white starry-background min-h-screen w-full  flex flex-col items-center justify-center relative">
          <h2 className="text-2xl font-semibold mb-4 z-10 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
            About Block The Chain</h2>
          <div className="bg-gray-900 bg-opacity-40% p-6 rounded-lg border border-gray-700 border-b-4 border-white ">
            <h2 className="text-2xl font-bold">Hack. Compete. Win. The clock is ticking—are you in?</h2>
          </div>
          <div className="max-w-5xl mt-4 bg-gray-900 bg-opacity-40% p-6 rounded-lg border border-gray-700 border-b-4 border-white ">
            <p><b>Block The Chain</b>- A 24-hour blockchain hackathon at SRM KTR! Dive into the world of decentralized innovation, build groundbreaking solutions, and compete with the best minds. Are you ready to code, create, and revolutionize the blockchain space?</p>
          </div>
          <div className="mt-6 grid grid-cols-2 text-left gap-6 max-w-5xl z-10">
          <div className="bg-gradient-to-r from-blue-900 to-[#010a1f] p-8 rounded-lg border border-gray-700" style={{ width: '100%', height: '150px' }}>
            <span className="text-yellow-400 text-2xl">🌍</span>
            <h4 className="font-semibold mt-2 text-lg">Mode</h4>
            <p className="text-base">Offline</p>
          </div>
          <div className="bg-gradient-to-r from-blue-900 to-[#010a1f] p-8 rounded-lg border border-gray-700" style={{ width: '100%', height: '150px' }}>
            <span className="text-purple-400 text-2xl">📅</span>
            <h4 className="font-semibold mt-2 text-lg">Date</h4>
            <p className="text-base">22-23 March</p>
          </div>
          <div className="bg-gradient-to-r from-blue-900 to-[#010a1f] p-8 rounded-lg border border-gray-700" style={{ width: '100%', height: '150px' }}>
            <span className="text-green-400 text-2xl">✅</span>
            <h4 className="font-semibold mt-2 text-lg">Registrations</h4>
            <p className="text-base">500+ Estimated</p>
          </div>
          <div className="bg-gradient-to-r from-blue-900 to-[#010a1f] p-8 rounded-lg border border-gray-700" style={{ width: '100%', height: '150px' }}>
            <span className="text-yellow-300 text-2xl">💰</span>
            <h4 className="font-semibold mt-2 text-lg">Prize Pool</h4>
            <p className="text-base">₹10,000</p>
          </div>



          </div>
        </div>
    );

  }
export default AboutBlockTheChain;