import styled from "styled-components";

export const StyledButton = styled.a`
    display: flex;
    align-items: center;
    gap: 16px;
    text-decoration: none;
    background-color: ${({ theme }) => theme.colors.linkContainer};
    color: ${({ theme }) => theme.colors.buttonContent}; 
    padding: 12px 16px;
    border: 1px solid rgba(209, 213, 218, 0.3);
    border-radius: 4px;
    
    &:hover {
        transition: 0.5s;
        box-shadow: -2px -2px 0px 0px rgba(140, 194, 255, 1),
                    2px 2px 0px 0px rgba(140, 194, 255, 1),
                    -2px 2px 0px 0px rgba(140, 194, 255, 1),
                    2px -2px 0px 0px rgba(140, 194, 255, 1);
    }

    &:active {
        box-shadow: 0px 2px 0px 0px rgba(20, 70, 32, 0.2) inset;
    }
`;
