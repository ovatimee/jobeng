import { AdjustmentsVerticalIcon, EllipsisVerticalIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useSession } from "next-auth/react";
import Link from "next/link";


export default function Header() {
  const { data: session, status } = useSession();

  return (
    <div className="leading-[90px] md:leading-[130px] flex items-center flex-shrink-0 px-10 whitespace-nowrap bg-header-bg-color  w-full text-[14px] justify-between mx-auto max-sm:py-0 max-sm:px-5">
      <div className="logo flex flex-col items-center font-semibold text-xs cursor-pointer w-16">
        <Link href="/">
          <img src="/images/logo.svg" className="w-full mr-3" alt="logo" />
        </Link>
      </div>
      <div className="header-menu hidden md:flex space-x-4 max-lg:hidden">
        <a
          href="#"
          className="decoration-none text-body-color font-medium hover:text-active-color active:text-active-color max-xd:ml-[10px]"
        >
          Find Jobs
        </a>
        <a
          href="#"
          className="decoration-none text-body-color font-medium hover:text-active-color max-xd:ml-[10px]"
        >
          Explore Candidates
          {/* Company Review */}
        </a>
        <a
          href="#"
          className="decoration-none text-body-color font-medium hover:text-active-color max-xd:ml-[10px]"
        >
          Interview Prep
          {/* Find Salaries */}
        </a>
      </div>
      <div className=" flex items-center font-medium">
        {/* <div className="dark-light"> */}
        {/*   <MoonIcon className="w-6 h-6 text-gray-200" /> */}
        {/* </div> */}
        <div className="ml-3 md:hidden">
          <EllipsisVerticalIcon className="w-6 h-6" />
        </div>
        {session ? (
          <div className="mx-4 hidden md:flex items-center">
            <img
              className="user-profile w-9 rounded-full mr-2 text-active-color max-xl:mr-0"
              src={session.user?.image || "/images/avarter.jpg"}
              alt=""
            />
            <div className="user-name">{session.user?.name}</div>
          </div>
        ) : (
          <div className="button hidden md:inline-block text-active-color ">
            <Link href="/api/auth/signin" className=" button_a font-medium underline text-xl">
              Join
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
