import { UserCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";
import Header from "../components/header";
import Animate from "../utils/animate";

export default function Home() {
  return (
    <div>
      <Header home="max-w-[1100px]" />
      <div className="hero  border-b">
        <div className="max-w-[1100px] my-0 mx-auto px-8">
          <div className="flex flex-col-reverse pt-12 lg:flex-row lg:pt-0">
            <div className="half ">
              <Animate className="grid__text up animate flex flex-col gap-12 pt-[7em] pl-8 h-full">
                <h2 className="where-grid__text text-[3rem] font-bold">Bring all team together</h2>
                <p className="text-placeholder-color">
                  We help together to, sit amet consectetur adipisicing elit. Officia facere eveniet
                  iure libero tenetur praesentium mollitia consequatur tempora explicabo sit.
                </p>
                <div className="button">
                  <Link href="/jobs" className="dark_a button_a">
                    Find Job
                  </Link>
                </div>
                <div className="start-meeting flex mt-12 self-center text-right">
                  <span>
                    Start <br />
                    Meeting
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
                    <img
                      src="/images/person1.png"
                      alt=""
                      className="absolute left-0 bottom-0 object-cover w-full"
                    />
                  </div>
                  <div className="pic relative min-h-[250px]  rounded-[70px] mb-4 overflow-hidden bg-[#0abde3]">
                    <img
                      src="/images/person2.png"
                      alt=""
                      className="absolute left-0 bottom-0 object-cover w-full"
                    />
                  </div>
                </Animate>
                <Animate className="col middle down animate  relative -top-[250px] -mb-[250px]">
                  <div className="pic relative min-h-[250px] bg-active-color rounded-[70px] mb-4 overflow-hidden h-[400px]">
                    <img
                      src="/images/person3.png"
                      alt=""
                      className="absolute left-0 bottom-0 object-cover w-full"
                    />
                  </div>
                  <div className="pic relative min-h-[250px] bg-[#c8d6e5] rounded-[70px] mb-4 overflow-hidden h-[300px] ">
                    <img
                      src="/images/person4.png"
                      alt=""
                      className="absolute left-0 bottom-0 object-cover w-full"
                    />
                  </div>
                  <div className="pic relative min-h-[250px] bg-[#222f3e] rounded-[70px] mb-4 overflow-hidden h-[300px]">
                    <img
                      src="/images/person5.png"
                      alt=""
                      className="absolute left-0 bottom-0 object-cover w-full"
                    />
                  </div>
                </Animate>
                <Animate className="col right up animate  relative top-[50px]">
                  <div className="pic relative min-h-[250px] bg-[#ee5253] rounded-[70px] mb-4 overflow-hidden h-[350px]">
                    <img
                      src="/images/person6.png"
                      alt=""
                      className="absolute left-0 bottom-0 object-cover w-full"
                    />
                  </div>
                  <div className="pic relative min-h-[250px] bg-[#54a0ff] rounded-[70px] mb-4 overflow-hidden h-[300px]">
                    <img
                      src="/images/person7.png"
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
    </div>
  );
}
