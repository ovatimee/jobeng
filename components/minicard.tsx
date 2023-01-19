import { HeartIcon } from "@heroicons/react/24/solid";
import React from "react";

export const Minicard = (props: {}) => {
  return (
    <div className="job-overview-card">
      <div className="job-card overview-card py-5 px-4 bg-header-bg-color rounded-lg cursor-pointer hover:scale-100 hover:bg-[#2b2ecf]">
        <div className="overview-wrapper flex items-center">
         logo 
          <div className="overview-detail">
            <div className="job-card-title mt-1">UX Designer</div>
            <div className="job-card-subtitle mt-1 text-xs font-medium">
              2972 Westheimer Rd. Santa Ana.
            </div>
          </div>
          <HeartIcon className="w-6 h-6" />
        </div>
        <div className="job-overview-buttons flex items-center mt-3">
          <div className="search-buttons time-button text-xs py-[6px] px-2 mt-0 bg-inactive-color font-medium text-time-button mr-2 hover:bg-[#575ad8] hover:text-white ">
            Full Time
          </div>
          <div className="search-buttons level-button text-xs py-[6px] px-2 mt-0 bg-inactive-color font-medium text-level-button hover:bg-[#575ad8] hover:text-white">
            Senior Level
          </div>
          <div className="job-stat text-active-color text-xs font-medium ml-auto">New</div>
          <div className="job-day text-subtitle-color text-xs ml-2 font-medium">4d</div>
        </div>
      </div>
    </div>
  );
};
