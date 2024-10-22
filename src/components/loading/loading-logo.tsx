import React from "react";

export const LoadingLogo = () => {
  return ( 
    <div className="  min-h-screen w-full flex items-center justify-center bg-slate-900">
      <div className="flex h-auto w-36 flex-col items-center justify-center gap-2">
        <div className="loader">
          <div className="pattern-1">
            <div className="pattern-1-shade"></div>
          </div>
          <div className="pattern-2"></div>
        </div>
      </div>
    </div>
  );
};
