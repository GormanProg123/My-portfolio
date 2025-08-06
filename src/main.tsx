import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import main_en from "./global/translations/en/main.json";
import main_pl from "./global/translations/pl/main.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: { main: main_en },
    pl: { main: main_pl },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <I18nextProvider i18n={i18next}>
          <App />
        </I18nextProvider>
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>
);
