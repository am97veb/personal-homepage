import { Header } from "./Header/index.js";
import { Button } from "../../common/Button/Index.js";
import { Section } from "../../common/Section/index.js";
import { skills } from "./skills.js";
import { nextToLearn } from "./nextToLearn.js";
import { Portfolio } from "./Portfolio/index.js";
import { Footer } from "./Footer/index.js";
import { ReactComponent as Massage } from "./Message.svg";
import toolsIcon from "./toolsIcon.png";
import rocketIcon from "./rocketIcon.png";
import { mailTo } from "./mailTo.js";

export const PersonalHomepage = () => (
  <>
    <Header
      mail={<Button
        icon={<Massage />}
        content="Hire Me"
        adress={mailTo}
      />}
    />
    <Section
      title="My skills includes"
      icon={toolsIcon}
      content={skills}
    />
    <Section
      title="What I want to learn next"
      icon={rocketIcon}
      content={nextToLearn}
    />
    <Portfolio
      gitHubLink={<Button
        adress="https://github.com/am97veb"
        rel="noreferrer noopener"
        target="_blank"
        content="Go to GitHub"
      />}
    />
    <Footer />
  </>
);