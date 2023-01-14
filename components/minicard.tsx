import { HeartIcon } from "@heroicons/react/24/solid";
import React from "react";

export const Minicard = (props: {}) => {
  return (
    <div className="job-overview-cards flex flex-col w-[330px] h-full flex-shrink-0 space-y-4">
      <div className="job-overview-card">
        <div className="job-card overview-card">
          <div className="overview-wrapper flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-6 h-6"
            >
              <path
                d="M113.5 309.4L95.6 376l-65 1.4A254.9 254.9 0 010 256c0-42.5 10.3-82.5 28.6-117.7l58 10.6 25.4 57.6a152.2 152.2 0 001.5 103z"
                fill="#fbbb00"
              />
              <path
                d="M507.5 208.2a256.3 256.3 0 01-91.2 247.4l-73-3.7-10.4-64.5c29.9-17.6 53.3-45 65.6-78H261.6V208.3h246z"
                fill="#518ef8"
              />
              <path
                d="M416.3 455.6a256 256 0 01-385.8-78.3l83-67.9a152.2 152.2 0 00219.4 78l83.4 68.2z"
                fill="#28b446"
              />
              <path
                d="M419.4 59l-83 67.8A152.3 152.3 0 00112 206.5l-83.4-68.2a256 256 0 01390.8-79.4z"
                fill="#f14336"
              />
            </svg>
            <div className="overview-detail">
              <div className="job-card-title mt-1">UX Designer</div>
              <div className="job-card-subtitle mt-1 text-xs font-medium">
                2972 Westheimer Rd. Santa Ana.
              </div>
            </div>
            <HeartIcon className="w-6 h-6" />
          </div>
          <div className="job-overview-buttons flex items-center mt-3">
            <div className="search-buttons time-button text-xs py-[6px] px-2 mt-0 bg-inactive-color font-medium text-time-button mr-2 ">
              Full Time
            </div>
            <div className="search-buttons level-button text-xs py-[6px] px-2 mt-0 bg-inactive-color font-medium text-level-button">
              Senior Level
            </div>
            <div className="job-stat text-active-color text-xs font-medium ml-auto">
              New
            </div>
            <div className="job-day text-subtitle-color text-xs ml-2 font-medium">
              4d
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
