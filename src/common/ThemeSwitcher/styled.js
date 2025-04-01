import styled, { css } from "styled-components";
import { ReactComponent as ToggleButtonDisc } from "./toggleButtonDisc.svg";
import { ReactComponent as ToggleButtonSun } from "./toggleButtonSun.svg";

export const Wrapper = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    gap: 12px;
    top: 0px;
    right: 0px;
`;

export const Caption = styled.p`
    font-size: 12px;
    font-weight: 700;
    line-height: 15.6px;
    color: ${({ theme }) => theme.colors.caption};
    transition: color 0.5s;
    text-transform: uppercase;
    letter-spacing: 0px;

    @media (max-width: 992px) {
        font-size: 0px
    }
`;

export const ThemeButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 26px;
    background-color: ${({ theme }) => theme.colors.switchBackground};
    border: 1px solid  ${({ theme }) => theme.colors.switchBorder};
    transition: background-color 0.5s, border 0.5s;
    border-radius: 20px;
    padding: 0px; 
`;

export const ButtonWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledButtonDisc = styled(ToggleButtonDisc)`
    position: absolute;
    transition: color 0.5s, transform 0.5s;
    color:  ${({ theme }) => theme.colors.switchDisc};
    transform: translateX(-10px);

    ${({ darkTheme }) => darkTheme && css`
    transform: translateX(10px);
    `}
`;

export const StyledButtonSun = styled(ToggleButtonSun)`
    position: absolute;
    transition: fill 0.5s, transform 0.5s;
    fill: ${({ theme }) => theme.colors.switchSun};
    transform: translateX(-10px);

    path {
        fill: inherit;
    }

    ${({ darkTheme }) => darkTheme && css`
    transform: translateX(10px);
    `}
`;