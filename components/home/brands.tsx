import React from "react";
import Animate from "../../utils/animate";
import Icon from "../../utils/icon";

export default function Brands() {
  return (
    <div className="brands pb-32 bg__white before:content-[''] before:absolute before:-left-[60px] before:-top-[60px] before:w-[400px] before:h-52 before:bg-active-color before:blur-4xl">
      <div className="max-w-[1100px] my-0 mx-auto px-8">
        <div className="gridel flex-col md:flex-row p-0">
          <div className="half">
            <div className="grid__text mb-20 relative">
              <h2 className="text-[3rem] font-bold">
                Achieving Your Dreams:
                <br />
                <span className="text-2xl">The Opportunity to Work with Your Ideal Company</span>
              </h2>
              <p className="text-placeholder-color">
                We believe in creating a positive, inclusive and empowering work environment, where
                employees can achieve their full potential and reach their goals. Join us as we
                strive to make a positive impact on the world and build the future of our industry.
                Let's make your dream of working with your ideal company come true
              </p>
            </div>
          </div>
          <Animate className="half side animate">
            <ul className="rotate-340 flex flex-col gap-4 text-white">
              <li className="relative flex items-center py-4 px-8 bg-[#4285f4] rounded-[40px] w-[200%] left-[18%] ">
                <Icon name="google" className="text-[2rem] mr-4" />
                <span>Google</span>
              </li>
              <li className="relative flex items-center py-4 px-8 bg-[#f25022] rounded-[40px] w-[100%] left-[8%]">
                <Icon name="microsoft" className=" text-[2rem] mr-4" />

                <span>Microsoft</span>
              </li>
              <li className="relative flex items-center py-4 px-8 bg-[#e50914] rounded-[40px] w-[200%] -left-[6%]">
                <Icon name="netflix" className="text-[2rem] mr-4" />

                <span>Netflix</span>
              </li>
              <li className="relative flex items-center py-4 px-8 bg-[#3d9ae8] rounded-[40px] w-[200%] left-[35%]">
                <Icon name="dropbox" className="text-[2rem] mr-4 " />

                <span>Dropbox</span>
              </li>
              <li className="relative flex items-center py-4 px-8 bg-[#107c10] rounded-[40px] w-[200%]">
                <Icon name="xbox" className="text-[2rem] mr-4 " />

                <span>Xbox</span>
              </li>
            </ul>
          </Animate>
        </div>
      </div>
    </div>
  );
}
