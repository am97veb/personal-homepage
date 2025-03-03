import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
}

*, ::after, ::before {
    box-sizing: inherit;
}

body {
    background-color: ${({ theme }) => theme.colors.whiteLilac};
    font-family: "Inter";
    max-width: 1920px;
    font-size: 18px;
    line-height: 25.2px;
}
`