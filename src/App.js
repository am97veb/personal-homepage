import { useSelector } from "react-redux";
import { ThemeProvider } from 'styled-components';
import { Normalize } from "styled-normalize";
import { lightTheme, darkTheme } from './theme';
import { GlobalStyle } from './GlobalStyle';
import { selectTheme } from "./features/personalHomepage/homepageSlice.js";
import { Container } from "./common/Container/index.js";
import { useDisabledTransition } from "./useDisabledTransition.js";
import { PersonalHomepage } from "./features/personalHomepage/PersonalHomepage.js";

function App() {
  const darkMode = useSelector(selectTheme);
  const disabledTransition = useDisabledTransition();
  const theme = darkMode === true ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle disabledTransition={disabledTransition} />
      <Container>
        <PersonalHomepage />
      </Container>
    </ThemeProvider>
  );
}

export default App;