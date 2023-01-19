import {
  BanknotesIcon,
  BriefcaseIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

export default function FilterNav() {
  return (
    <div className="search-menu h-14 whitespace-nowrap flex flex-shrink-0 items-center bg-header-bg-color rounded-lg w-full pl-5">
      <div className="search-bar h-[55px] w-full relative">
        <input type="text" className="search-box w-full h-full block bg-transparent border-none pr-6 pl-[305px] outline-none" autoFocus={true} />
        <div className="search item absolute top-[10px] left-6 text-[13px] text-active-color border border-search-border-color py-2 px-[10px] rounded-lg flex items-center">
          <MagnifyingGlassIcon className="w-6 h-6" />
          Product Designer
          <XMarkIcon className="w-6 h-6" />
        </div>
        <div className="search item item absolute top-[10px] left-[189px] text-[13px] text-active-color border border-search-border-color py-2 px-[10px] rounded-lg flex items-center">
          UI Designer
          <XMarkIcon className="w-6 h-6" />
        </div>
      </div>
      <div className="search-location flex items-center w-[50%] text-xs font-medium px-6 h-full">
        <MapPinIcon className="w-6 h-6 mr- text-active-color flex-shrink-0" />
        Londontowne, MD
      </div>
      <div className="search-job flex items-center w-[50%] text-xs font-medium px-6 h-full">
        <BriefcaseIcon className="w-6 h-6 mr-2  text-active-color flex-shrink-0" />
        <input type="text" placeholder="Job Type" className="w-full h-full block bg-transparent border-none" />
      </div>
      <div className="search-salary flex items-center w-[50%] text-xs font-medium px-6 h-full ">
        <BanknotesIcon className="w-6 h-6 mr-2 text-active-color flex-shrink-0" />
        <input type="text" placeholder="Salary Range" className="w-full h-full block bg-transparent border-none" />
      </div>
      <button className="search-button bg-active-color h-[55px] border-none font-semibold text-xs px-4 rounded-r-lg text-button-color cursor-pointer ml-auto">Find Job</button>
    </div>
  );
}
