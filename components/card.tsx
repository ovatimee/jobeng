import Link from "next/link";
import { Job } from "../interfaces/Jobs";

interface Props {
  job: Job;
}

export default function Card({ job }: Props) {
  console.log(job.description.split('<br>'))
  return (
    <div className="job-card py-5 px-4 bg-header-bg-color rounded-lg  transition duration-[0.2s]  transform hover:scale-[1.02] ">
      <div className="job-card-header flex items-start">
        <Link href={`/jobs/${job.id}`}> {job.company?.toUpperCase()} </Link>
        <div className="menu-dot text-placeholder-color h-1 w-1 border-none p-0 rounded-full ml-auto mr-2 shadow-3d"></div>
      </div>
      <div className="job-card-title font-medium mt-4 text-[14px]">
        <Link href={`/jobs/${job.id}`}> {job.title} </Link>
      </div>
      <Link href={`/jobs/${job.id}`}>
        <div className="job-card-subtitle text-subtitle-color text-[13px] mt-[14px] leading-6">
          {job.description.split(' ')[0]}
        </div>
      </Link>
      <div className="job-detail-buttons ">
        <button className="search-buttons detail-button border-none  py-[6px] px-2 rounded-[4px] text-[11px] font-medium mt-[14px] bg-active-light-color text-active-color ">
          {job.location}
        </button>
        <button className="search-buttons detail-button border-none  py-[6px] px-2 rounded-[4px] text-[11px] font-medium mt-[14px] bg-active-light-color text-active-color ">
          Full Time
        </button>
        <button className="search-buttons detail-button border-none  py-[6px] px-2 rounded-[4px] text-[11px] font-medium mt-[14px] bg-active-light-color text-active-color ">
          Senior Level
        </button>
      </div>
      <div className="job-card-buttons flex items-center justify-between w-full mt-1 gap-4">
        <button className="search-buttons card-buttons  border-none text-button-color  bg-active-color p-[10px] w-full rounded-md text-xs cursor-pointer font-medium mt-[14px]">
          Apply Now
        </button>
        <button className="search-buttons card-buttons-msg  border-none text-button-color  bg-active-color p-[10px] w-full  rounded-md text-xs cursor-pointer font-medium mt-[14px]">
          Overview
        </button>
      </div>
    </div>
  );
}
