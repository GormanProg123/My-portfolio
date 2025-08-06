import "./styles/footer.css";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation("main");

  return (
    <footer className="footer-container">
      <h3 className="footer-text">{t("footer.agreement")}</h3>
    </footer>
  );
};
