import "./styles/projects.css";
import { FaLayerGroup } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const projects = [
  {
    title: "Bankrupt",
    typeKey: "bankrupt.type",
    descriptionKey: "bankrupt.description",
    stack: ["React", "TypeScript"],
    link: "https://github.com/GormanProg123/Bankrupt",
  },
  {
    title: "VPNguine backend",
    typeKey: "vpn.type",
    descriptionKey: "vpn.description",
    stack: ["NestJS", "NodeJS", "TypeScript"],
    link: "https://github.com/ProbablyNoth1ng/vpn-backend",
  },
  {
    title: "WeatherApp",
    typeKey: "weather.type",
    descriptionKey: "weather.description",
    stack: ["JavaScript", "OpenWeather API", "React"],
    link: "https://github.com/GormanProg123/WeatherApp",
  },
  {
    title: "UserManagementTS",
    typeKey: "userMgmt.type",
    descriptionKey: "userMgmt.description",
    stack: ["TypeScript", "Redux", "React"],
    link: "https://github.com/GormanProg123/UserManagementTS",
  },
];

export const Projects = () => {
  const { t } = useTranslation("main");

  return (
    <div className="project-container">
      <div className="project-wrapper">
        <div className="project-edu">
          <span className="project-icon">
            <FaLayerGroup />
          </span>
          <h3 className="topic-pro">{t("projects.title")}</h3>
        </div>
        <div className="project-cards-wrapper">
          {projects.map((project) => (
            <a
              className="project-card-link"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={project.title}
            >
              <div className="project-card">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-type">
                  {t(`projects.${project.typeKey}`)}
                </span>
                <span className="project-description">
                  {t(`projects.${project.descriptionKey}`)}
                </span>
                <div className="project-stack">
                  {project.stack.map((tech) => (
                    <span className="stack-item" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
