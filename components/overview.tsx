import { HeartIcon, ShareIcon } from "@heroicons/react/24/solid";
import React from "react";

export const Overview = (props: {}) => {
  return (
    <div className="job-explain bg-header-bg-color ml-10 rounded-bl-lg">
      <img
        className="job-bg rounded-tr-lg object-cover w-full h-44  transition duration-[0.3s] relative"
        alt=""
      />
      <div className="job-logos -mt-8 relative -mb-9 px-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-16 p-3 bg-white rounded-[10px] border-4 border-header-bg-color"
          style={{ backgroundColor: "#f76754" }}
        >
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M0 .5h4.2v23H0z"
            fill="#042b48"
            data-original="#212121"
          ></path>
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M15.4.5a8.6 8.6 0 100 17.2 8.6 8.6 0 000-17.2z"
            fill="#fefefe"
            data-original="#f4511e"
          ></path>
        </svg>
      </div>
      <div className="job-explain-content pt-[50px] pb-[30px] px-8">
        <div className="job-title-wrapper flex items-center">
          <div className="job-card-title text-xl mt-0 font-medium">
            UI /UX Designer
          </div>
          <div className="job-action flex items-center space-x-3 ml-auto">
            <HeartIcon className="w-8 border border-border-color text-subtitle-color rounded-lg p-[6px] " />
            <ShareIcon className="w-8 border border-border-color text-subtitle-color rounded-lg p-[6px]" />
          </div>
        </div>
        <div className="job-subtitle-wrapper flex text-subtitle-color text-xs font-medium items-center mt-[20px]">
          <div className="company-name text-active-color font-medium text-[14px]">
            Patreon{" "}
            <span className="comp-location text-subtitle-color text-xs font-medium before:content-[''] before:w-1 before:h-1 before:rounded-full before:bg-placeholder-color before:top-[49%] before:-left-3 before:absolute ">
              Londontowne, MD.
            </span>
          </div>
          <div className="posted ml-auto text-subtitle-color text-xs font-medium">
            Posted 8 days ago
            <span className="app-number text-body-color relative ml-3 before:content-[''] before:w-[3px] before:h-[3px] before:rounded-full before:bg-placeholder-color before:top-[50%] before:-left-2 before:absolute">
              98 Application
            </span>
          </div>
        </div>
        <div className="explain-bar mt-5 border border-border-color rounded-lg flex px-6 h-16 items-center justify-between">
          <div className="explain-contents h-[66px] ">
            <div className="explain-title text-subtitle-color text-xs leading-10 whitespace-nowrap">
              Experience
            </div>
            <div className="explain-subtitle text-[13px] font-medium -mt-[2px] whitespace-nowrap">
              Minimum 1 Year
            </div>
          </div>
          <div className="explain-contents h-[66px] border-l border-l-border-color pl-4">
            <div className="explain-title text-subtitle-color text-xs leading-10 whitespace-nowrap">
              Work Level
            </div>
            <div className="explain-subtitle text-[13px] font-medium -mt-[2px] whitespace-nowrap">
              Senior level
            </div>
          </div>
          <div className="explain-contents h-[66px] border-l border-l-border-color pl-4">
            <div className="explain-title text-subtitle-color text-xs leading-10 whitespace-nowrap">
              Employee Type
            </div>
            <div className="explain-subtitle text-[13px] font-medium -mt-[2px] whitespace-nowrap">
              Full Time Jobs
            </div>
          </div>
          <div className="explain-contents h-[66px] border-l border-l-border-color pl-4">
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
          <div className="overview-text-subheader text-[13px] leading-[2em]">
            We believe that design (and you) will be critical to the company's
            success. You will work with our founders and our early customers to
            help define and build our product functionality, while maintaining
            the quality bar that customers have come to expect from modern SaaS
            applications. You have a strong background in product design with a
            quantitavely anf qualitatively analytical mindset. You will also
            have the opportunity to craft our overall product and visual
            identity and should be comfortable to flex into working.
          </div>
        </div>
        <div className="overview-text">
          <div className="overview-text-header">Job Description</div>
          <div className="overview-text-item">
            3+ years working as a product designer.
          </div>
          <div className="overview-text-item">
            A portfolio that highlights your approach to problem solving, as
            well as you skills in UI.
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
            Up-level our overall design and bring consistency to end-user facing
            properties
          </div>
        </div>
      </div>
    </div>
  );
};
