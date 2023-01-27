import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import Animate from "../../utils/animate";
import { Testimony } from "../../interfaces/Jobs";

interface Testimonies {
  testimonies: Testimony[];
}

export default function Testimonials({ testimonies }: Testimonies) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex + testimonies.length - 1) % testimonies.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % testimonies.length);
  };

  return (
    <div className="testimonial pb-32 bg__white before:content-[''] before:absolute before:left-auto before:-bottom-[340px] before:-right-[60px] before:top-auto before:w-[400px] before:h-[400px] before:bg-active-color before:blur-4xl">
      <div className="max-w-[1100px] my-0 mx-auto px-8">
        <Animate className="gridel grid__text up animate max-w-[480px] m-auto flex-row gap-0 pl-0">
          <div className="half ">
            <div className="pic bg-[#c8d6e5] relative min-h-[250px] rounded-[70px] mb-4 overflow-hidden">
              <img
                src={`/images/${testimonies[currentIndex].image}`}
                alt=""
                className="absolute left-0 bottom-0 object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="absolute top-[35%] left-0 right-0 flex justify-between px-5 md:px-0 md:justify-around ">
            <button
              className="bg-gray-300 text-black rounded-full p-2 opacity-50"
              onClick={handlePrevClick}
            >
              <ChevronLeftIcon className="w-6 h-6  text-subtitle-color" />
            </button>
            <button
              className="bg-gray-300 text-black rounded-full p-2 opacity-50"
              onClick={handleNextClick}
            >
              <ChevronRightIcon className="w-6 h-6  text-subtitle-color" />
            </button>
          </div>
          <div className="half item">
            <p className="">
              <sub className="">"</sub>
              {testimonies[currentIndex].text}
            </p>
            <h4 className="font-light"> - {testimonies[currentIndex].author}</h4>
            <p className="text-sm font-light">{testimonies[currentIndex].company}</p>
            {/* <div className="button"> */}
            {/*   <a href="" className="light"> */}
            {/*     View More */}
            {/*   </a> */}
            {/* </div> */}
          </div>
        </Animate>
      </div>
    </div>
  );
}
