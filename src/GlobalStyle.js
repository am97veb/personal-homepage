import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
}

*, ::after, ::before {
    box-sizing: inherit;
}

body {
    max-width: 1920px;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.colors.whiteLilac};
    font-family: "Inter";
    word-break: break-word;  
    letter-spacing: 1.5px;
}
`;