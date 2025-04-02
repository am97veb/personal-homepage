import { useSelector } from "react-redux";
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyle } from './GlobalStyle';
import { selectTheme } from "./features/personalHomepage/homepageSlice.js";
import { Container } from "./common/Container/index.js";
import { Header } from "./features/personalHomepage/Header/index.js";
import { Button } from "./common/Button/Index.js";
import { Section } from "./common/Section/index.js";
import { skills } from "./features/personalHomepage/skills.js";
import { nextToLearn } from "./features/personalHomepage/nextToLearn.js";
import { Portfolio } from "./features/personalHomepage/Portfolio/index.js";
import { Footer } from "./features/personalHomepage/Footer/index.js";
import { ReactComponent as Massage } from "./features/personalHomepage/Message.svg";
import toolsIcon from "./features/personalHomepage/toolsIcon.png";
import rocketIcon from "./features/personalHomepage/rocketIcon.png";
import { mailTo } from "./features/personalHomepage/mailTo.js";
import { useDisabledTransition } from "./useDisabledTransition.js";

function App() {
  const darkMode = useSelector(selectTheme);
  const disabledTransition = useDisabledTransition();
  const theme = darkMode === true ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle disabledTransition={disabledTransition} />
      <Container>
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
      </Container>
    </ThemeProvider>
  );
}

export default App;