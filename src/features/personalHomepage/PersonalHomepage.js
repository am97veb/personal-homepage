import { Header } from "./Header/index.js";
import { Button } from "../../common/Button/Index.js";
import { Section } from "../../common/Section/index.js";
import { skills } from "./skills.js";
import { nextToLearn } from "./nextToLearn.js";
import { Portfolio } from "./Portfolio/index.js";
import { Footer } from "./Footer/index.js";
import { ReactComponent as Massage } from "./icons/Message.svg";
import toolsIcon from "./icons/toolsIcon.png";
import rocketIcon from "./icons/rocketIcon.png";
import { mailTo } from "./links.js";

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
    <Portfolio />
    <Footer />
  </>
);