import { FaLayerGroup } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "./styles/education.css";

export const Education = () => {
  const { t } = useTranslation("main");

  return (
    <div className="education-container">
      <div className="education-wrapper">
        <div className="header-edu">
          <span className="edu-icon">
            <FaLayerGroup />
          </span>
          <h3 className="topic-edu">{t("education.title")}</h3>
        </div>
        <div className="edu-inf">
          <span className="edu-name">{t("education.degree")}</span>
          <span className="uni-name">{t("education.university")}</span>
          <h3 className="edu-description">{t("education.description")}</h3>
        </div>
      </div>
    </div>
  );
};
