import { HeartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import { Job } from "../interfaces/Jobs";

interface Props {
  data: Job;
}

export const Minicard = ({ data }: Props) => {
  return (
    <Link href={`/jobs/${data.id}`} className="job-overview-card p-2">
      <div className="group job-card overview-card py-5 px-4 bg-header-bg-color rounded-lg cursor-pointer hover:scale-100 hover:bg-[#2b2ecf] ">
        <div className="overview-wrapper flex items-center">
          <div className="w-10 mr-2">
            <img src={data.company_logo.replace(/['"]+/g, "")} alt="logo" className="w-full  rounded-lg " />
          </div>
          <div className="overview-detail">
            <div className="job-card-title mt-1 group-hover:text-[#fff]">{data.title}</div>
            <div className="job-card-subtitle mt-1 text-xs font-medium group-hover:text-[#dedede]">
              2972 Westheimer Rd. Santa Ana.
            </div>
          </div>
          <div className="heart bg-none shadow-none w-6 p-1  text-subtitle-color  ml-auto mb-auto ">
            <HeartIcon className="w-6 h-6 border border-border-color rounded-lg p-1 group-hover:text-[#fff] group-hover:border-[#fff]" />

          </div>
        </div>
        <div className="job-overview-buttons flex items-center mt-3">
          <div className="search-buttons time-button text-xs py-[6px] px-2 mt-0 bg-inactive-color font-medium text-time-button mr-2 group-hover:bg-[#575ad8] group-hover:text-white ">
            {/* Full Time */}
            {data.type}
          </div>
          <div className="search-buttons level-button text-xs py-[6px] px-2 mt-0 bg-inactive-color font-medium text-level-button group-hover:bg-[#575ad8] group-hover:text-white">
            Senior Level
          </div>
          <div className="job-stat text-active-color text-xs font-medium ml-auto group-hover:text-[#fff]">New</div>
          <div className="job-day text-subtitle-color text-xs ml-2 font-medium group-hover:text-[#dedede]">4d</div>
        </div>
      </div>
    </Link>
  );
};
