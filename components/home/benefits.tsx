import React from "react";
import { ArrowTrendingUpIcon, BanknotesIcon, RocketLaunchIcon } from "@heroicons/react/24/solid";
import Animate from "../../utils/animate";

export default function Benefits() {
  return (
    <div className="features pb-32">
      <div className="max-w-[1100px] my-0 mx-auto px-8">
        <div className="gridel grid__text flex-wrap md:flex-nowrap">
          <h2 className="text-[3rem] font-bold">
            Breaking Boundaries <br />
            <span className="text-2xl">Flexibility, Productivity, and Success</span>
          </h2>
          <p className="text-placeholder-color">
            How Remote Work is Changing the Game for Employers and Employees
          </p>
        </div>
        <Animate className="gridel up flex-wrap md:flex-nowrap">
          <div className="half flex-[100%] max-w-[280px] mt-0 mx-auto mb-16 text-center">
            <div className="icon text-5xl text-active-light-color mb-3">
              <ArrowTrendingUpIcon className="w-12 h-12 inline" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Increased Productivity</h3>
            <p className="text-placeholder-color">
              Remote workers have the ability to create their own schedules and work in environments
              that are most conducive to their productivity. This can lead to increased productivity
              and higher levels of job satisfaction for employees.
            </p>
          </div>
          <div className="half flex-[100%] max-w-[280px] mt-0 mx-auto mb-16 text-center">
            <div className="icon text-5xl text-active-light-color mb-3">
              <BanknotesIcon className="w-12 h-12 inline" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Cost Savings</h3>
            <p className="text-placeholder-color">
              Remote work can help companies save money on overhead costs such as rent, utilities,
              and office supplies. Additionally, companies can also save on recruitment and
              retention costs by being able to hire talent from a wider geographical area.
            </p>
          </div>
          <div className="half flex-[100%] max-w-[280px] mt-0 mx-auto mb-16 text-center">
            <div className="icon text-5xl text-active-light-color mb-3">
              <RocketLaunchIcon className="w-12 h-12 inline" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Improved Employee Retention</h3>
            <p className="text-placeholder-color">
              Remote work can help companies attract and retain top talent, as employees are given
              the flexibility to balance their work and personal lives. This can lead to improved
              employee satisfaction and engagement, which can result in reduced turnover and
              increased loyalty to the company.
            </p>
          </div>
        </Animate>
      </div>
    </div>
  );
}
