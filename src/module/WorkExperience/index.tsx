import "./styles/workexp.css";
import { PiHardDrives } from "react-icons/pi";
import { useTranslation } from "react-i18next";

export const WorkExperience = () => {
  const { t } = useTranslation("main");
  return (
    <div className="work-container">
      <div className="work-wrapper">
        <div className="work-edu">
          <span className="work-icon">
            <PiHardDrives />
          </span>
          <h3 className="topic-work">{t("work.title")}</h3>
        </div>

        <div className="work-inf work-inf--first">
          <h3>{t("work.positions.frontend.title")}</h3>
          <span>{t("work.positions.frontend.company")}</span>
          <ul>
            <li>{t("work.positions.frontend.tasks.0")}</li>
            <li>{t("work.positions.frontend.tasks.1")}</li>
            <li>{t("work.positions.frontend.tasks.2")}</li>
          </ul>
        </div>

        <div className="work-inf">
          <h3>{t("work.positions.intern.title")}</h3>
          <span>{t("work.positions.intern.company")}</span>
          <ul>
            <li>{t("work.positions.intern.tasks.0")}</li>
            <li>{t("work.positions.intern.tasks.1")}</li>
            <li>{t("work.positions.intern.tasks.2")}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
