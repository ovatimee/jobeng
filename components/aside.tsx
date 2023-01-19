import React, { useState } from "react";
export default function Aside() {
  const [check, setCheck] = useState(1);

  function handleChange() {
    console.log("changed");
  }

  const types = [
    { id: 1, title: "Full Time", count: 56 },
    { id: 2, title: "Part Time", count: 43 },
    { id: 3, title: "Remote", count: 24 },
    { id: 4, title: "Internship", count: 27 },
    { id: 5, title: "Contract", count: 76 },
  ];

  const seniority = [
    { id: 1, title: "Entry", count: 29 },
    { id: 2, title: "Mid", count: 35 },
    { id: 3, title: "Senior", count: 44 },
  ];

  const salary = [
    { from: 700, to: 1000, count: 49 },
    { from: 1000, to: 1300, count: 67 },
    { from: 1300, to: 1600, count: 24 },
    { from: 1500, to: 1800, count: 27 },
    { from: 2000, to: 3000, count: 76 },
    { from: 3000, to: 4000, count: 22 },
    { from: 4000, to: 5000, count: 18 },
  ];

  return (
    <div className="search-type hidden w-[270px] md:flex flex-col h-full flex-shrink-0">
      <div className="sidebar sticky top-0 shadow-none w-full z-initial opacity-100">
        <div className="alert bg-alert-bg-color py-6 px-[18px] rounded-lg">
          <div className="alert-title text-xs font-medium mb-2">Create Job Alert</div>
          <div className="alert-subtitle text-xs text-subtitle-color leading-6 mb-5">
            Create a job alert now and never miss a job
          </div>
          <input
            type="text"
            placeholder="Enter email"
            className="w-full p-[10px] block rounded-md bg-header-bg-color border-none text-[13px]"
            onChange={handleChange}
          />
          <button className="search-buttons border-none text-button-color py-2 px-[10px] rounded-md text-[13px] font-semibold bg-active-color mt-[14px]">
            Create Job Alerts
          </button>
        </div>

        <div className="side-options">
          <div className="job-time type pt-5">
            <div className="job-time-title text-[14px] text-sm font-medium">Type of Employment</div>
            <div className="job-wrapper pt-5">
              {types.map((type) => (
                <div className="type-container flex items-center text-subtitle-color cursor-pointer text-[13px] mt-[10px]">
                  <input
                    type="checkbox"
                    id="job1"
                    className="job-style hidden"
                    checked={type.id == check ? true : false}
                    onChange={handleChange}
                  />
                  <label className="ml-[2px] flex items-center cursor-pointer before:content=['] before:mr-[10px] before:border before:border-subtitle-color before:rounded before:cursor-pointer before:w-4 before:h-4">
                    {type.title} Jobs
                  </label>
                  <span className="job-number ml-auto bg-inactive-color text-subtitle-color text-[10px] font-medium p-1 rounded-[4px]">
                    {type.count}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="job-time level pt-5">
            <div className="job-time-title text-[14px] text-sm font-medium">Seniority Level</div>
            <div className="job-wrapper">
              {seniority.map((e) => (
                <div className="type-container flex items-center text-subtitle-color cursor-pointer text-[13px] mt-[10px]">
                  <input
                    type="checkbox"
                    id="job7"
                    className="job-style hidden"
                    onChange={handleChange}
                  />
                  <label className="ml-[2px] flex items-center cursor-pointer before:content=['] before:mr-[10px]  before:border before:border-subtitle-color before:rounded before:cursor-pointer before:w-4 before:h-4">
                    {e.title} Level
                  </label>
                  <span className="job-number ml-auto bg-inactive-color text-subtitle-color text-[10px] font-medium p-1 rounded-[4px]">
                    {e.count}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="job-time salary pt-5">
            <div className="job-time-title text-[14px] text-sm font-medium">Salary Range</div>
            <div className="job-wrapper">
              {salary.map((s) => (
                <div className="type-container flex items-center text-subtitle-color cursor-pointer text-[13px] mt-[10px]">
                  <input type="checkbox" id={`job${s.from}`} className="job-style hidden" />
                  <label className="ml-[2px] flex items-center cursor-pointer before:content=['] before:mr-[10px] before:border before:border-subtitle-color before:rounded before:cursor-pointer before:w-4 before:h-4">{`$${s.from} - $${s.to}`}</label>
                  <span className="job-number ml-auto bg-inactive-color text-subtitle-color text-[10px] font-medium p-1 rounded-[4px]">
                    {s.count}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
