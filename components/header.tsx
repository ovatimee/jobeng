import { AdjustmentsVerticalIcon, MoonIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex items-center flex-shrink-0 px-10 whitespace-nowrap bg-header-bg-color h-16 w-full text-[14px] justify-between">
      <div className="logo flex flex-col items-center font-semibold text-xs cursor-pointer w-16">
        <Link href="/">
          <img src="/images/logo.svg" className="w-full mr-3" alt="logo" />
        </Link>
      </div>
      <div className="header-menu hidden md:flex space-x-4">
        <a
          href="#"
          className="decoration-none text-body-color font-medium hover:text-active-color active:text-active-color"
        >
          Find Job
        </a>
        <a href="#" className="decoration-none text-body-color font-medium hover:text-active-color">
          Company Review
        </a>
        <a href="#" className="decoration-none text-body-color font-medium hover:text-active-color">
          Find Salaries
        </a>
      </div>
      <div className=" flex items-center font-medium">
        <div className="dark-light">
          <MoonIcon className="w-6 h-6 text-gray-200" />
        </div>
        <div className="user-menu relative mr-2 pr-8 border-r-2 border-r-slate-400 before:absolute before:content-[''] before:w-2 bofore:h-2 before:rounded-full  before:border-2 before:border-header-bg-color before:bg-active-color before:right-2 before:-top-[1px]">
          <AdjustmentsVerticalIcon className="w-6 h-6" />
        </div>
        <img
          className="user-profile w-9 rounded-full mr-2 text-active-color"
          src="/images/avarter.jpg"
          alt=""
        />
        <div className="user-name">Jason Clinton</div>
      </div>
    </div>
  );
}
