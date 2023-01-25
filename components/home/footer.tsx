import React from "react";
import Icon from "../../utils/icon";

export default function Footer() {
  return (
    <footer>
      <div className="max-w-[1100px] my-0 mx-auto px-8">
        <div className="gridel flex-col md:flex-row md:gap-0 gap-8">
          <div className="half flex flex-col md:flex-row md:basis-[60%] md:justify-between">
            <div className="footer_links">
              <h3 className="mb-4 font-semibold">About</h3>
              <ul className="leading-7 text-[90%]">
                {["Blog",  "Our Team", "Careers", "Partners", "Investors"].map(
                  (e) => (
                    <li key={e}>
                      <a className="text-placeholder-color" href="">
                        {e}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="footer_links">
              <h3 className="mb-4 font-semibold">Get Started</h3>
              <ul className="leading-7 text-[90%]">
                {["Remote Access", "Sign Up", "FAQS", "Courses"].map((e) => (
                  <li key={e}>
                    <a className="text-placeholder-color" href="">
                      {e}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer_links">
              <h3 className="mb-4 font-semibold">Legal</h3>
              <ul className="leading-7 text-[90%]">
                {["Terms of Service", "Privacy Policy"].map((e) => (
                  <li key={e}>
                    <a className="text-placeholder-color" href="">
                      {e}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="half flex md:basis-[40%] items-end justify-end">
            <div className="footer_links socials">
              <h3 className="mb-4 font-semibold">Meet Our Socials</h3>
              <ul className="leading-7 flex gap-4 text-2xl">
                {["linkedin", "instagram", "facebook", "twitter", "youtube"].map(e => (
                <li key={e}>
                  <a href="">
                  <Icon name={e} />
                  </a>
                </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright my-8 mx-0 py-4 px-0 text-placeholder-color text-center border-t border-t-[#3f3b4a]">
          <p>Copyright &copy;2023 - Ovatimee</p>
        </div>
      </div>
    </footer>
  );
}
