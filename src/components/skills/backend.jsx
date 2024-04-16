import React from "react";
import "./skills.css";

const Backend = () => {
  return (
    <div>
      <div className="skills_content">
        <h3 className="skills_title">Soft Skills</h3>

        <div className="skills_box">
          <div className="skills_group">
            <div className="skills_data">
              <i class="bx bx-badge-check"></i>
              <div>
                <h3 className="skills_name">Comunicação</h3>
                <span className="skills_level"></span>
              </div>
            </div>

            <div className="skills_data">
              <i class="bx bx-badge-check"></i>
              <div>
                <h3 className="skills_name">Trabalho em equipe</h3>
                <span className="skills_level"></span>
              </div>
            </div>

            <div className="skills_data">
              <i class="bx bx-badge-check"></i>
              <div>
                <h3 className="skills_name">Resolução de Problemas</h3>
                <span className="skills_level"></span>
              </div>
            </div>

            <div className="skills_data">
              <i class="bx bx-badge-check"></i>
              <div>
                <h3 className="skills_name">Pensamento Analítico</h3>
                <span className="skills_level"></span>
              </div>
            </div>
          </div>
          <div className="skills_group">
            <div className="skills_data">
              <i class="bx bx-badge-check"></i>
              <div>
                <h3 className="skills_name">Agilidade</h3>
                <span className="skills_level"></span>
              </div>
            </div>

            <div className="skills_data">
              <i class="bx bx-badge-check"></i>
              <div>
                <h3 className="skills_name">Dedicação</h3>
                <span className="skills_level"></span>
              </div>
            </div>

            <div className="skills_data">
              <i class="bx bx-badge-check"></i>
              <div>
                <h3 className="skills_name">Organização</h3>
                <span className="skills_level"></span>
              </div>
            </div>

            <div className="skills_data">
              <i class="bx bx-badge-check"></i>
              <div>
                <h3 className="skills_name">Desempenho</h3>
                <span className="skills_level"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
