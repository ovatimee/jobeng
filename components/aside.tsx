import React from "react";

export default function Aside() {
  return (
    <div className="search-type w-[270px] flex flex-col h-full flex-shrink-0">
      <div className="sidebar sticky top-0 shadow-none w-full z-initial opacity-100">
        <div className="alert bg-alert-bg-color py-6 px-[18px] rounded-lg">
          <div className="alert-title text-xs font-medium mb-2">Create Job Alert</div>
          <div className="alert-subtitle">
            Create a job alert now and never miss a job
          </div>
          <input type="text" placeholder="Enter email" />
          <button className="search-buttons">Create Job Alerts</button>
        </div>

        <div className="side-options">
          <div className="job-time type">
            <div className="job-time-title">Type of Employment</div>
            <div className="job-wrapper">
              <div className="type-container">
                <input
                  type="checkbox"
                  id="job1"
                  className="job-style"
                  checked
                />
                <label>Full Time Jobs</label>
                <span className="job-number">56</span>
              </div>
              <div className="type-container">
                <input type="checkbox" id="job2" className="job-style" />
                <label>Part Time Jobs</label>
                <span className="job-number">43</span>
              </div>
              <div className="type-container">
                <input type="checkbox" id="job3" className="job-style" />
                <label>Remote Jobs</label>
                <span className="job-number">24</span>
              </div>
              <div className="type-container">
                <input type="checkbox" id="job4" className="job-style" />
                <label>Internship Jobs</label>
                <span className="job-number">27</span>
              </div>
              <div className="type-container">
                <input type="checkbox" id="job5" className="job-style" />
                <label>Contract</label>
                <span className="job-number">76</span>
              </div>
            </div>
          </div>
          <div className="job-time level">
            <div className="job-time-title">Seniority Level</div>
            <div className="job-wrapper">
              <div className="type-container">
                <input type="checkbox" id="job7" className="job-style" />
                <label>Student Level</label>
                <span className="job-number">98</span>
              </div>
              <div className="type-container">
                <input type="checkbox" id="job8" className="job-style" />
                <label>Entry Level</label>
                <span className="job-number">44</span>
              </div>
              <div className="type-container">
                <input
                  type="checkbox"
                  id="job9"
                  className="job-style"
                  checked
                />
                <label>Mid Level</label>
                <span className="job-number">35</span>
              </div>
              <div className="type-container">
                <input
                  type="checkbox"
                  id="job10"
                  className="job-style"
                  checked
                />
                <label>Senior Level</label>
                <span className="job-number">29</span>
              </div>
              <div className="type-container">
                <input type="checkbox" id="job11" className="job-style" />
                <label>Directors</label>
                <span className="job-number">26</span>
              </div>
            </div>
          </div>

          <div className="job-time salary">
            <div className="job-time-title">Salary Range</div>
            <div className="job-wrapper">
              <div className="type-container">
                <input type="checkbox" id="job1" className="job-style" />
                <label>$700 - $1000</label>
                <span className="job-number">49</span>
              </div>
              <div className="type-container">
                <input type="checkbox" id="job2" className="job-style" />
                <label>$1000 - $1200</label>
                <span className="job-number">67</span>
              </div>
              <div className="type-container">
                <input type="checkbox" id="job3" className="job-style" />
                <label>$1200 - $1400</label>
                <span className="job-number">24</span>
              </div>
              <div className="type-container">
                <input type="checkbox" id="job4" className="job-style" />
                <label>$1500 - $1800</label>
                <span className="job-number">27</span>
              </div>
              <div className="type-container">
                <input
                  type="checkbox"
                  id="job5"
                  className="job-style"
                  checked
                />
                <label>$2000 - $3000</label>
                <span className="job-number">76</span>
              </div>
              <div className="type-container">
                <input
                  type="checkbox"
                  id="job6"
                  className="job-style"
                  checked
                />
                <label>$3000 - $4000</label>
                <span className="job-number">22</span>
              </div>
              <div className="type-container">
                <input type="checkbox" id="job6" className="job-style" />
                <label>$4000 - $5000</label>
                <span className="job-number">18</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
