import styled from "styled-components";

export const LinkContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.scienceBlue};
    color: ${({ theme }) => theme.colors.white}; 
    padding: 12px 16px;
    border: 1px solid rgba(209, 213, 218, 0.3);
    border-radius: 4px;
    text-align: center;
    display: inline-flex;
    
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