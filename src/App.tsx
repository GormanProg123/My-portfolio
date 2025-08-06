import { Header } from "./module/Header/Header";
import { AboutMe } from "./module/AboutMe";
import { Education } from "./module/Education";
import { WorkExperience } from "./module/WorkExperience";
import { Skills } from "./module/Skills";
import { Projects } from "./module/Projects";
import { Footer } from "./module/Footer/Footer";

export const App = () => {
  return (
    <div>
      <Header />
      <AboutMe />
      <Education />
      <WorkExperience />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};
