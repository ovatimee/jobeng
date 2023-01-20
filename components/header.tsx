import { AdjustmentsVerticalIcon, EllipsisVerticalIcon, MoonIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

interface Props {
  home?: string;
}

export default function Header({ home }: Props) {
  return (
    <div
      className={`leading-[70px] lg:leading-[150px] flex items-center flex-shrink-0 px-10 whitespace-nowrap bg-header-bg-color  w-full text-[14px] justify-between mx-auto ${
        home ? home : ""
      }`}
    >
      <div className="logo flex flex-col items-center font-semibold text-xs cursor-pointer w-16">
        <Link href="/">
          <img src="/images/logo.svg" className="w-full mr-3" alt="logo" />
        </Link>
      </div>
      <div className="header-menu hidden lg:flex space-x-4">
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
        <div className="ml-3 md:hidden">
          <EllipsisVerticalIcon className="w-6 h-6" />
        </div>

        <div className="ml-3 hidden md:flex items-center">
          <img
            className="user-profile w-9 rounded-full mr-2 text-active-color"
            src="/images/avarter.jpg"
            alt=""
          />
          <div className="user-name">Jason Clinton</div>
        </div>
      </div>
    </div>
  );
}
