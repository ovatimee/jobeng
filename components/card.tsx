import Link from "next/link";
import { Job } from "../interfaces/Jobs";

interface Props {
  job: Job;
}

export default function Card({ job }: Props) {
  // console.log(job.description.replace(/[<br>]+/g, ""))
  return (
    <div className="job-card py-5 px-4 bg-header-bg-color rounded-lg  transition duration-[0.2s]  transform hover:scale-[1.02] ">
      <div className="job-card-header flex items-center gap-2">
        <span className="w-11">
          <img
            src={job.company_logo.replace(/['"]+/g, "")}
            className="w-full rounded-lg"
            alt="logo"
          />
        </span>
        <Link href={`/jobs/${job.id}`}> {job.company_name?.trim().toUpperCase()} </Link>
        {/* <div className="menu-dot text-placeholder-color h-1 w-1 border-none p-0 rounded-full ml-auto mr-2 shadow-3d"></div> */}
      </div>
      <div className="job-card-title font-semibold mt-4 text-[14px]">
        <Link href={`/jobs/${job.id}`}> {job.title.trim()} </Link>
      </div>
      <Link href={`/jobs/${job.id}`}>
        <div className="job-card-subtitle text-subtitle-color text-[13px] mt-[14px] leading-6 line-clamp-4">
          {job.description.replace(/[<br>]+/g, "").trimStart()}
        </div>
      </Link>
      <div className="job-detail-buttons flex gap-3">
        <button className="search-buttons detail-button border-none  py-[5px] px-2 rounded-[4px] text-[10px] font-medium mt-[14px] bg-active-light-color text-active-color ">
          {job.location.split(" ")[0]}
        </button>
        <button className="search-buttons detail-button border-none  py-[6px] px-2 rounded-[4px] text-[11px] font-medium mt-[14px] bg-active-light-color text-active-color ">
          {job.type}
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
