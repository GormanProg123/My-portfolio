import "./styles/skills.css";
import { LuBraces } from "react-icons/lu";
import { RiGlobalLine } from "react-icons/ri";
import { PiHardDrives } from "react-icons/pi";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiNestjs, SiPostgresql } from "react-icons/si";
import { FaReact, FaHtml5, FaCss3, FaNodeJs, FaPython } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const frontendIconColor = "#2563eb";
const backendIconColor = "#16a34a";
const languagesIconColor = "#a855f7";

type SpokenLanguage = {
  name: string;
  initials: string;
  level: string;
};

const programmingLanguages = [
  {
    name: "JavaScript",
    Icon: IoLogoJavascript,
    color: "#f7df1e",
  },
  {
    name: "TypeScript",
    Icon: SiTypescript,
    color: "#3178c6",
  },
  {
    name: "React",
    Icon: FaReact,
    color: "#61dafb",
  },
  {
    name: "HTML",
    Icon: FaHtml5,
    color: "#e34f26",
  },
  {
    name: "CSS",
    Icon: FaCss3,
    color: "#264de4",
  },
];

const backendLanguages = [
  {
    name: "Node.js",
    Icon: FaNodeJs,
    color: "#3c873a",
  },
  {
    name: "NestJS",
    Icon: SiNestjs,
    color: "#e0234e",
  },
  {
    name: "PostgreSQL",
    Icon: SiPostgresql,
    color: "#336791",
  },
  {
    name: "Python",
    Icon: FaPython,
    color: "#3776AB",
  },
];

export const Skills = () => {
  const { t } = useTranslation("main"); // ✅ namespace main

  const spokenLanguages = t("skills.spoken", {
    returnObjects: true,
  }) as SpokenLanguage[];

  return (
    <div className="skills-container">
      <div className="skills-wrapper">
        <div className="skill-edu">
          <span className="skill-icon">
            <LuBraces />
          </span>
          <h3 className="skill-work">{t("skills.title")}</h3>
        </div>
        <div className="cards-row">
          <div className="skill-card">
            <div className="card-header">
              <span
                className="section-icon"
                style={{ color: frontendIconColor }}
              >
                <RiGlobalLine size={24} />
              </span>
              <h3 className="card-title">Frontend Skills</h3>
            </div>
            <ul className="list reset-list">
              {programmingLanguages.map(({ name, Icon, color }) => (
                <li key={name} className="prog-lang">
                  <span className="lang-icon">
                    <Icon size={24} style={{ color }} />
                  </span>
                  <span className="lang-name">{name}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="skill-card">
            <div className="card-header">
              <span
                className="section-icon"
                style={{ color: backendIconColor }}
              >
                <PiHardDrives size={24} />
              </span>
              <h3 className="card-title">Backend Skills</h3>
            </div>
            <ul className="list reset-list">
              {backendLanguages.map(({ name, Icon, color }) => (
                <li key={name} className="prog-lang">
                  <span className="lang-icon">
                    <Icon size={24} style={{ color }} />
                  </span>
                  <span className="lang-name">{name}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="skill-card">
            <div className="card-header">
              <span
                className="section-icon"
                style={{ color: languagesIconColor }}
              >
                <RiGlobalLine size={24} />
              </span>
              <h3 className="card-title">{t("skills.languages.title")}</h3>
            </div>
            <ul className="list reset-list">
              {spokenLanguages.map(({ name, initials, level }) => (
                <li key={name} className="spoken-lang">
                  <span className="lang-initials">{initials}</span>
                  <span className="lang-name">{name}</span>
                  <span className="lang-level">{level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
