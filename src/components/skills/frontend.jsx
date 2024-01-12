import React from "react";
import "./skills.css";

const Frontend = () => {
  return (
    <div>
      <div className="skills_content">
        <h3 className="skills_title">Frontend Developer</h3>

        <div className="skills_box">
          <div className="skills_group">
            <div className="skills_data">
              <i class="bx bx-badge-check"></i>
              <div>
                <h3 className="skills_name">HTML</h3>
                <span className="skills_level">Intermediate</span>
              </div>
            </div>

            <div className="skills_data">
              <i class="bx bx-badge-check"></i>
              <div>
                <h3 className="skills_name">CSS</h3>
                <span className="skills_level">Intermediate</span>
              </div>
            </div>

            <div className="skills_data">
              <i class="bx bx-badge-check"></i>
              <div>
                <h3 className="skills_name">JavaScript</h3>
                <span className="skills_level">Intermediate</span>
              </div>
            </div>
          </div>

          <div className="skills_group">
            <div className="skills_data">
              <i class="bx bx-badge-check"></i>
              <div>
                <h3 className="skills_name">React</h3>
                <span className="skills_level">Intermediate</span>
              </div>
            </div>

            <div className="skills_data">
              <i class="bx bx-badge-check"></i>
              <div>
                <h3 className="skills_name">Bootstrap</h3>
                <span className="skills_level">Basic</span>
              </div>
            </div>

            <div className="skills_data">
              <i class="bx bx-badge-check"></i>
              <div>
                <h3 className="skills_name">Git</h3>
                <span className="skills_level">Intermediate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
