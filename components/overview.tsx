import { HeartIcon, ShareIcon } from "@heroicons/react/24/solid";
import React, { useRef } from "react";
import { Job } from "../interfaces/Jobs";

interface Props {
  job: Job;
}

export const Overview = ({ job }: Props) => {
  return (
    <div key={`key-${job.id}`} className="job-explain bg-header-bg-color ml-10 rounded-bl-lg max-xl:ml-0">
      <img
        className="job-bg rounded-tr-lg object-cover w-full h-44  transition duration-[0.3s] relative"
        alt=""
        src={`https://unsplash.it/640/425?image=${Math.floor(Math.random() * 10)}`}
      />
      <div className="job-logos -mt-8 relative -mb-9 px-5">
        <img src={job.company_logo?.replace(/['"]+/g, "")} alt="logo" className="w-16 p-1 bg-white rounded-lg border-4 border-header-bg-color" />
      </div>
      <div className="job-explain-content pt-[50px] pb-[30px] px-8">
        <div className="job-title-wrapper flex items-center">
          <div className="job-card-title text-xl mt-0 font-medium">{job.title}</div>
          <div className="job-action flex items-center space-x-3 ml-auto">
            <HeartIcon className="w-8 border border-border-color text-subtitle-color rounded-lg p-[6px] " />
            <ShareIcon className="w-8 border border-border-color text-subtitle-color rounded-lg p-[6px]" />
          </div>
        </div>
        <div className="job-subtitle-wrapper flex text-subtitle-color text-xs font-medium items-center mt-[20px] max-4xl:flex-col max-4xl:items-start">
          <div className="company-name text-active-color font-medium text-[14px]">
            {job.company_name}
            <span className="comp-location text-subtitle-color text-xs font-medium before:content-[''] before:w-1 before:h-1 before:rounded-full before:bg-placeholder-color before:top-[49%] before:-left-3 before:absolute ">
              Londontowne, MD.
            </span>
          </div>
          <div className="posted ml-auto text-subtitle-color text-xs font-medium max-4xl:ml-0 max-4xl:mt-[6px]">
            Posted 8 days ago
            <span className="app-number text-body-color relative ml-3 before:content-[''] before:w-[3px] before:h-[3px] before:rounded-full before:bg-placeholder-color before:top-[50%] before:-left-2 before:absolute">
              98 Application
            </span>
          </div>
        </div>
        <div className="explain-bar mt-5 border border-border-color rounded-lg flex px-6 h-16 items-center justify-between max-4xl:flex-wrap max-4xl:pb-[14px] max-4xl:h-auto">
          <div className="explain-contents h-[66px] max-4xl:h-auto max-4xl:w-1/2 max-4xl:p-0 max-4xl:border-none max-sm:w-full max-sm:m-0">
            <div className="explain-title text-subtitle-color text-xs leading-10 whitespace-nowrap">
              Experience
            </div>
            <div className="explain-subtitle text-[13px] font-medium -mt-[2px] whitespace-nowrap">
              Minimum 1 Year
            </div>
          </div>
          <div className="explain-contents h-[66px] border-l border-l-border-color pl-4 max-4xl:h-auto max-4xl:w-1/2 max-4xl:p-0 max-4xl:border-[0] ">
            <div className="explain-title text-subtitle-color text-xs leading-10 whitespace-nowrap">
              Work Level
            </div>
            <div className="explain-subtitle text-[13px] font-medium -mt-[2px] whitespace-nowrap">
              Senior level
            </div>
          </div>
          <div className="explain-contents h-[66px] border-l border-l-border-color pl-4 max-4xl:h-auto max-4xl:w-1/2 max-4xl:p-0 max-4xl:border-[0] max-4xl:mt-4 max-4xl:border-t max-4xl:border-t-border-color max-sm:m-0 max-sm:border-0">
            <div className="explain-title text-subtitle-color text-xs leading-10 whitespace-nowrap">
              Employee Type
            </div>
            <div className="explain-subtitle text-[13px] font-medium -mt-[2px] whitespace-nowrap">
              Full Time Jobs
            </div>
          </div>
          <div className="explain-contents h-[66px] border-l border-l-border-color pl-4 max-4xl:h-auto max-4xl:w-1/2 max-4xl:p-0 max-4xl:border-[0] max-4xl:mt-4 max-4xl:border-t max-4xl:border-t-border-color max-sm:m-0 max-sm:border-0">
            <div className="explain-title text-subtitle-color text-xs leading-10 whitespace-nowrap">
              Offer Salary
            </div>
            <div className="explain-subtitle text-[13px] font-medium -mt-[2px] whitespace-nowrap">
              $2150.0 / Month
            </div>
          </div>
        </div>
        <div className="overview-text mt-[30px]">
          <div className="overview-text-header font-medium mb-6">Overview</div>
          <div
            className="overview-text-subheader text-sm"
            dangerouslySetInnerHTML={{ __html: job.description }}
          />
        </div>
        <div className="overview-text">
          <div className="overview-text-header">Job Description</div>
          <div className="overview-text-item">3+ years working as a product designer.</div>
          <div className="overview-text-item">
            A portfolio that highlights your approach to problem solving, as well as you skills in
            UI.
          </div>
          <div className="overview-text-item">
            Experience conducting research and building out smooth flows.
          </div>
          <div className="overview-text-item">
            Excellent communication skills with a well-defined design process.
          </div>
          <div className="overview-text-item">
            Familiarity with design tools like Sketch and Figma
          </div>
          <div className="overview-text-item">
            Up-level our overall design and bring consistency to end-user facing properties
          </div>
        </div>
      </div>
    </div>
  );
};
