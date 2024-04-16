import React from "react";
import "./header.css";
import { useState } from "react";

const Header = () => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  return (
    <header className="header">
      <nav className="nav container">
        <a href="#index.html" className="nav_logo">
          Lima
        </a>

        <div className={Toggle ? "nav_menu show_menu" : "nav_menu"}>
          <ul className="nav_list grid">
            <li className="nav_item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav_link active_link" : "nav_link"
                }
              >
                <i class="uil uil-estate nav_icon"></i> Início
              </a>
            </li>

            <li className="nav_item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav_link active_link" : "nav_link"
                }
              >
                <i className="uil uil-user nav_icon"></i> Sobre mim
              </a>
            </li>

            <li className="nav_item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills" ? "nav_link active_link" : "nav_link"
                }
              >
                <i className="uil uil-file-alt nav_icon"></i> Habilidades
              </a>
            </li>

            <li className="nav_item">
              <a
                href="#services"
                onClick={() => setActiveNav("#services")}
                className={
                  activeNav === "#services"
                    ? "nav_link active_link"
                    : "nav_link"
                }
              >
                <i className="uil uil-briefcase-alt nav_icon"></i> Serviços
              </a>
            </li>

            <li className="nav_item">
              <a
                href="#qualification"
                onClick={() => setActiveNav("#qualification")}
                className={
                  activeNav === "#qualification"
                    ? "nav_link active_link"
                    : "nav_link"
                }
              >
                <i className="uil uil-scenery nav_icon"></i> Qualificação
              </a>
            </li>

            <li className="nav_item">
              <a
                href="#testimonial"
                onClick={() => setActiveNav("#testimonial")}
                className={
                  activeNav === "#testimonial" ? "nav_link active_link" : "nav_link"
                }
              >
                <i className="uil uil-user nav_icon"></i> Relatos
              </a>
            </li>

            <li className="nav_item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact" ? "nav_link active_link" : "nav_link"
                }
              >
                <i className="uil uil-message nav_icon"></i> Contato
              </a>
            </li>
          </ul>

          <i
            class="uil uil-times nav_close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>
          <i class="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
