
export default function Card() {
  return (
<div className="job-cards">
                  <div className="job-card">
                    <div className="job-card-header">
                      <%= card.company.toUpperCase() %>
                        <div className="menu-dot"></div>
                    </div>
                    <div className="job-card-title">
                      <%= card.title %>
                    </div>
                    <div className="job-card-subtitle">
                      <%= card.description %>
                    </div>
                    <div className="job-detail-buttons">
                      <button className="search-buttons detail-button">
                        <%= card.location %>
                      </button>
                      <button className="search-buttons detail-button">Full Time</button>
                      <!-- <button className="search-buttons detail-button">Senior Level</button> -->
                    </div>
                    <div className="job-card-buttons">
                      <button className="search-buttons card-buttons">Apply Now</button>
                      <button className="search-buttons card-buttons-msg">Overview</button>
                    </div>
                  </div>
              </div>
  )
}
