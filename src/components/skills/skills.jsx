import React from "react";
import Frontend from "./frontend";
import Backend from "./backend";
import "./skills.css";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section_title">Habilidades</h2>
      <span className="section_subtitle">Tecnologias e outras habilidades</span>

      <div className="skills_container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};

export default Skills;
