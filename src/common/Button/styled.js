import styled from "styled-components";

export const StyledButton = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 16px;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.buttonContent}; 
    background-color: ${({ theme }) => theme.colors.buttonBackground};
    border: 1px solid ${({ theme }) => theme.colors.buttonBorder}; 
    transition: color 0.5s, background-color 0.5s, border 0.5s;
    padding: 12px 16px;
    border-radius: 4px;
    
    &:hover {
        box-shadow: -2px -2px 0px 0px rgba(140, 194, 255, 1),
                    2px 2px 0px 0px rgba(140, 194, 255, 1),
                    -2px 2px 0px 0px rgba(140, 194, 255, 1),
                    2px -2px 0px 0px rgba(140, 194, 255, 1);
    }

    &:active {
        box-shadow: 0px 2px 0px 0px rgba(20, 70, 32, 0.2) inset;
    }
`;
