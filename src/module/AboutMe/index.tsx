import { FaCode } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "./styles/aboutme.css";

export const AboutMe = () => {
  const { t } = useTranslation("main");
  return (
    <div className="aboutme-container">
      <div className="aboutme-wrapper">
        <div className="header-me">
          <span className="icon-code">
            <FaCode />
          </span>
          <h3 className="topic-me">{t("aboutMe.title")}</h3>
        </div>
        <div className="table-info">
          <h3>{t("aboutMe.description")}</h3>
        </div>
      </div>
    </div>
  );
};
