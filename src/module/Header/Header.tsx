import { Avatar } from "@chakra-ui/react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./styles/header.css";

export const Header = () => {
  const [language, setLanguage] = useState<"EN" | "PL">("EN");
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = language === "EN" ? "PL" : "EN";
    setLanguage(newLang);
    i18n.changeLanguage(newLang.toLowerCase());
  };

  return (
    <div className="header-container">
      <header className="header-wrapper">
        <div className="avatar-wrapper">
          <Avatar
            className="avatar-img"
            w="144px"
            h="144px"
            src="https://avatars.githubusercontent.com/u/151737827?v=4"
          />
        </div>
        <div className="info">
          <h3 className="name">Heorhi Parfenchyk</h3>
          <ul className="contact-list">
            <li>
              <span className="icon-circle">
                <MdEmail />
              </span>
              gparfenchik2005@gmail.com
            </li>
            <li>
              <span className="icon-circle">
                <MdPhone />
              </span>
              +48 731 342 350
            </li>
            <li>
              <span className="icon-circle">
                <MdLocationOn />
              </span>
              Poznan, PL
            </li>
          </ul>
          <div className="buttons">
            <a
              className="contact-button"
              href="https://github.com/GormanProg123"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="button-icon" />
              GitHub
            </a>

            <a
              className="contact-button"
              href="https://www.linkedin.com/in/heorhi-parfenchyk-ba94982a3/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="button-icon" />
              LinkedIn
            </a>
          </div>
        </div>
        <div className="lang-switch">
          <button onClick={toggleLanguage}>{language}</button>
        </div>
      </header>
    </div>
  );
};
