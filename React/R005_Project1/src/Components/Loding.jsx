import React from 'react';

function Loding(props) {
    return (
        <div className="w-[70%] mx-auto p-[10%] flex gap-5 animate-pulse">
      {/* Image Placeholder */}
      <div className="w-[40%] h-[300px] bg-gray-300 rounded-md"></div>

      {/* Text Content Placeholder */}
      <div className="w-[60%]">
        <div className="h-6 bg-gray-300 rounded-md mb-4 w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded-md mb-3 w-1/2"></div>
        <div className="h-5 bg-gray-300 rounded-md mb-3 w-1/4"></div>
        <div className="h-20 bg-gray-300 rounded-md mb-3 w-full"></div>
        <div className="h-20 bg-gray-300 rounded-md w-32"></div>
      </div>
    </div>
    );
}

export default Loding;