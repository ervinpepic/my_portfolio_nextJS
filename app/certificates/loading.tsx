import React from "react";

const LoadingCertPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div 
        className="w-16 h-16 border-8 border-dashed 
          rounded-full animate-spin border-slate-700 dark:border-slate-200">    
      </div>
    </div>
  );
};

export default LoadingCertPage;
