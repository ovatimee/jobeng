import React from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Animate from "../../utils/animate";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="hero  border-b pb-32">
      <div className="max-w-[1100px] my-0 mx-auto px-8">
        <div className="flex flex-col-reverse pt-12 md:flex-row md:pt-0">
          <div className="half ">
            <Animate className="grid__text up">
              <h2 className="text-[2.5rem] font-bold">
                The Future is Remote: Unlocking the Potential of Digital Nomads
              </h2>
              <p className="text-placeholder-color">
                Welcome to the world of remote work where flexibility and productivity go hand in
                hand. Join us as we explore the many advantages of working remotely and how it can
                benefit you and your company.
              </p>
              <div className="button">
                <Link href="/jobs" className="dark_a button_a">
                  Find Job
                </Link>
              </div>
              <div className="start-meeting flex mt-12 self-center text-right">
                <span>
                  Work <br />
                  Anywhere
                </span>
                <div className="button relative ml-6 before:content-[''] before:absolute before:left-1/2 before:top-0 before:w-[50px] before:h-[50px] before:-ml-3 before:rounded-full before:bg-level-button before:scale-150 opacity-10 ">
                  <a
                    href="#"
                    className="light_a min-w-[auto] text-2xl font-normal ml-5 p-1 w-[50px] h-[50px] flex items-center justify-center rotate-180 z-10 button_a"
                  >
                    <UserCircleIcon className="w-6 h-6 -rotate-180" />
                  </a>
                </div>
              </div>
            </Animate>
          </div>
          <div className="half">
            <div className="hero__image flex justify-between max-w-[320px] m-auto">
              <Animate className="col left up relative -top-[50px]">
                <div className="pic relative min-h-[250px] rounded-[70px] mb-4 overflow-hidden h-[350px] bg-[#feca57] ">
                  <Image
                    src="https://i.postimg.cc/XqmcQLNg/pexels-antoni-shkraba-5244072.jpg"
                    fill
                    alt=""
                    className="absolute left-0 bottom-0 object-cover w-full h-full"
                  />
                </div>
                <div className="pic relative min-h-[250px]  rounded-[70px] mb-4 overflow-hidden bg-[#0abde3]">
                  <Image
                    src="https://i.postimg.cc/1XkwpzMC/pexels-ivan-samkov-7620727.jpg"
                    fill
                    alt=""
                    className="absolute left-0 bottom-0 object-cover w-full h-full"
                  />
                </div>
              </Animate>
              <Animate className="col middle down animate  relative -top-[250px] -mb-[250px]">
                <div className="pic relative min-h-[250px] bg-active-color rounded-[70px] mb-4 overflow-hidden h-[400px]">
                  <Image
                    // src="/images/pexels-blue-bird-7242974-removebg-preview.png"
                    src="https://i.postimg.cc/DZCSczfQ/pexels-blue-bird-7242974-removebg-preview.png"
                    height={320}
                    width={240}
                    alt=""
                    className="absolute left-0 bottom-0 object-cover w-full"
                  />
                </div>
                <div className="pic relative min-h-[250px] bg-[#c8d6e5] rounded-[70px] mb-4 overflow-hidden h-[300px] ">
                  <Image
                    src="https://i.postimg.cc/d3kVmmxv/person4.png"
                    height={320}
                    width={240}
                    alt=""
                    className="absolute left-0 bottom-0 object-cover w-full"
                  />
                </div>
                <div className="pic relative min-h-[250px] bg-[#222f3e] rounded-[70px] mb-4 overflow-hidden h-[300px]">
                  <Image
                    src="https://i.postimg.cc/7ZMYVLmC/pexels-anna-tarazevich-5481249.jpg"
                    fill
                    alt=""
                    className="absolute left-0 bottom-0 object-cover w-full h-full"
                  />
                </div>
              </Animate>
              <Animate className="col right up animate  relative top-[50px]">
                <div className="pic relative min-h-[250px] bg-[#ee5253] rounded-[70px] mb-4 overflow-hidden h-[350px]">
                  <Image
                    src="https://i.postimg.cc/FsPQsJWV/pexels-tima-miroshnichenko-6196572.jpg"
                    fill
                    alt=""
                    className="absolute left-0 bottom-0 object-cover w-full h-full"
                  />
                </div>
                <div className="pic relative min-h-[250px] bg-[#54a0ff] rounded-[70px] mb-4 overflow-hidden h-[300px]">
                  <Image
                    src="https://i.postimg.cc/rmgfC5th/person7.png"
                    height={320}
                    width={240}
                    alt=""
                    className="absolute left-0 bottom-0 object-cover w-full"
                  />
                </div>
              </Animate>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
