import React from "react";

const Loading = () => {
   return (
      <div className="flex justify-center min-h-screen bg-gray-900 item-center">
         <div className="w-10 h-10 rounded-full border-t-transparent border-4-blue-500 animate-spin"></div>
         <p className="ml-3 text-white">Loading...</p>
      </div>
   );
};

export default Loading;
