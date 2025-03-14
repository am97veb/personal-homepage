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
    word-break: break-word;  
}
`;