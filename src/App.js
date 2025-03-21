import { Container } from "./common/Container/index.js";
import { Header } from "./features/personalHomepage/Header/index.js";
import { Link } from "./common/Link/Index.js";
import { mailTo } from "./mailTo.js";
import { Section } from "./common/Section/index.js";
import { skills } from "./features/personalHomepage/skills.js";
import { nextToLearn } from "./features/personalHomepage/nextToLearn.js";
import { Portfolio } from "./features/personalHomepage/Portfolio/index.js";
import { ToggleTheme } from "./ToggleTheme/index.js";
import { Footer } from "./features/personalHomepage/Footer/index.js";
import { ReactComponent as Massage } from "./common/Message.svg";
import skillsIcon from "./features/personalHomepage/skillsIcon.png";
import nextToLearnIcon from "./features/personalHomepage/nextToLearnIcon.png";
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyle } from './GlobalStyle';
import { selectTheme } from "./themeSlice.js";
import { useSelector } from "react-redux";

function App() {
  const darkMode = useSelector(selectTheme);
  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Header
          mail={<Link
            icon={<Massage />}
            content="Hire Me"
            adress={mailTo}
          />}
          toggleTheme={<ToggleTheme />}
        />
        <Section
          title="My skills includes"
          icon={<img src={skillsIcon} />}
          content={skills}
        />
        <Section
          title="What I want to learn next"
          icon={<img src={nextToLearnIcon} />}
          content={nextToLearn}
        />
        <Portfolio
          gitHubLink={<Link
            adress="https://github.com/am97veb"
            content="Go to GitHub"
          />}
        />
        <Footer
          mail={<Link
            content="am97veb@gmail.com"
            adress={mailTo} />}
        />
      </Container>
    </ThemeProvider>
  );
}

export default App;