import React from "react";
import Image from "next/image";
import conference from "../../public/images/conference.jpg";
import Animate from "../../utils/animate";

export const Engage = (props: {}) => {
  return (
    <div className="engage pb-32">
      <div className="max-w-[1100px] my-0 mx-auto px-8">
        <div className="grid__text">
          <h2>
            Enage, <br />
            <span>from everywhere</span>
          </h2>
          <p>
            No downlod required. Share the meeting link and let people join directly form their
            browsers.
          </p>
        </div>
        <Animate className="grid up animate">
          <div className="image">
            <Image src={conference} width={1000} height={1000} alt="conference" />
            {/* <img src="/images/conference.jpg" alt="conference" /> */}
            <div className="button">
              <a href="#" className="button_a dark_a">
                Join Us
              </a>
            </div>
          </div>
        </Animate>
      </div>
    </div>
  );
};
