import React from "react";
import "./skills.css";

const Backend = () => {
  return (
    <div>
      <div className="skills_content">
        <h3 className="skills_title">Backend Developer</h3>

        <div className="skills_box">
          <div className="skills_group">
            <div className="skills_data">
              <i class="bx bx-badge-check"></i>
              <div>
                <h3 className="skills_name">Python</h3>
                <span className="skills_level">Basic</span>
              </div>
            </div>

            <div className="skills_data">
              <i class="bx bx-badge-check"></i>
              <div>
                <h3 className="skills_name">NodeJS</h3>
                <span className="skills_level">Basic</span>
              </div>
            </div>

            <div className="skills_data">
              <i class="bx bx-badge-check"></i>
              <div>
                <h3 className="skills_name">C#</h3>
                <span className="skills_level">Basic</span>
              </div>
            </div>
          </div>
          <div className="skills_group">
            <div className="skills_data">
              <i class="bx bx-badge-check"></i>
              <div>
                <h3 className="skills_name">MySQL</h3>
                <span className="skills_level">Basic</span>
              </div>
            </div>

            <div className="skills_data">
              <i class="bx bx-badge-check"></i>
              <div>
                <h3 className="skills_name">Javascript</h3>
                <span className="skills_level">Basic</span>
              </div>
            </div>

            <div className="skills_data">
              <i class="bx bx-badge-check"></i>
              <div>
                <h3 className="skills_name">Golang</h3>
                <span className="skills_level">Basic</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
