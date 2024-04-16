import React from "react";

const Info = () => {
  return (
    <div className="about_info grid">
      <div className="about_box">
        <i class="bx bx-award about_icon"></i>
        <h3 className="about_title">Experiência</h3>
        <span className="about_subtitle"> 2 anos trabalhando</span>
      </div>

      <div className="about_box">
        <i class="bx bx-briefcase-alt about_icon"></i>
        <h3 className="about_title">Projetos Concluidos</h3>
        <span className="about_subtitle"> + de 3 Projetos</span>
      </div>

      <div className="about_box">
        <i class="bx bx-support about_icon"></i>
        <h3 className="about_title">Disponibilidade</h3>
        <span className="about_subtitle">Online 24/7h</span>
      </div>
    </div>
  );
};

export default Info;
