import styled from "styled-components";
import { ReactComponent as IconSpinner } from "./portfolioIcons/icon-spinner.svg";
import { ReactComponent as DangerIcon } from "./portfolioIcons/danger.svg";

export const PortfolioSection = styled.section`
    max-width: 1216px;
    margin: 0px 20px 120px;

    @media (max-width: ${({theme}) => theme.breakpoints.medium}px) {
        margin: 0px 16px 48px;   
    }
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 32px;
    color: ${({ theme }) => theme.colors.header};
    transition: color 0.5s;

    @media (max-width: ${({theme}) => theme.breakpoints.medium}px) {
        margin-bottom: 24px;
    }
`;

export const Title = styled.h2`
    margin: 12px 0 8px;
    font-size: 30px;
    font-weight: 900;

    @media (max-width: ${({theme}) => theme.breakpoints.medium}px) {
        font-size: 18px;
        margin: 12px 0 16px;
    }
`;

export const LeadParagraph = styled.p`
    font-size: 20px;
    font-weight: 400;
    line-height: 140%;
    margin: 0;

    @media (max-width: ${({theme}) => theme.breakpoints.medium}px) {
        font-size: 17px;
    }
`;

export const Projects = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    list-style: none;
    padding: 0px;

    @media (max-width: ${({theme}) => theme.breakpoints.medium}px) {
        grid-template-columns: 1fr;
        gap: 16px;
    }
`;

export const StyledProject = styled.li`
    padding: 56px;
    line-height: 140%; 
    color: ${({ theme }) => theme.colors.projectDescription};
    background-color: ${({ theme }) => theme.colors.sectionBackground};
    border: 6px solid ${({ theme }) => theme.colors.projectBorder};
    transition: color 0.5s, background-color 0.5s, border 0.5s, box-shadow 0.5s;
    border-radius: 4px;
    box-shadow: 0px -2px 50px 0px ${({ theme }) => theme.colors.sectionShadowTop},
                0px 16px 58px 0px ${({ theme }) => theme.colors.sectionShadowBottom};

    &:hover {
        border: 6px solid ${({ theme }) => theme.colors.afterHoveringTransparent};
    }

    @media (max-width: ${({theme}) => theme.breakpoints.large}px) {
        padding: 24px;
    }
`;

export const ProjectName = styled.h3`
    font-size: 24px;
    font-weight: 700;
    line-height: 100%;
    margin: 0px;
    text-transform: capitalize;
    transition: color 0.5s;
    color: ${({ theme }) => theme.colors.projectHeader};

    @media (max-width: ${({theme}) => theme.breakpoints.medium}px) {
        font-size: 16px;
    }
`;

export const ProjectDescription = styled.p`
   margin: 24px 0;
`;

export const ProjectLinks = styled.dl`
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 8px;
    margin-bottom: 0px;
`;

export const ProjectValue = styled.dd`
    margin: 0px;
`;

export const Link = styled.a`
    transition: color 0.5s;
    color: ${({ theme }) => theme.colors.projectLink};
    text-decoration: none;
    display: inline;
    border-bottom: 2px solid ${({ theme }) => theme.colors.linkTransparent};
    transition: border-bottom 0.5s;
    padding-bottom: 2px;

    &:hover {
        border-bottom: 2px solid ${({ theme }) => theme.colors.linkAfterHovering};
    }
`;

export const Wrapper = styled.div`
    text-align: center;
    margin-top: 88px;

    @media (max-width: ${({theme}) => theme.breakpoints.medium}px) {
        margin-top: 48px;
    }
`;

export const DangerIconDark = styled(DangerIcon)`

`;

export const DangerIconLight = styled(DangerIcon)`
   path {
    stroke: ${({ theme }) => theme.colors.icon};
   } 

   [id="firstPath"] {
    fill: ${({ theme }) => theme.colors.icon};
   }
`;

export const ErrorHeader = styled.h3`
    font-size: 24px;
    margin-top: 16px;
    color: ${({ theme }) => theme.colors.errorHeader};

    @media (max-width: ${({theme}) => theme.breakpoints.medium}px) {
        font-size: 18px;
    }
`;

export const LoadingState = styled.p`
    font-size: 20px;
    margin: 32px 0;
    color: ${({ theme }) => theme.colors.loadingText};

    @media (max-width: ${({theme}) => theme.breakpoints.medium}px) {
        font-size: 14px;
        margin: 16px;
    }
 `;

export const LoadingIcon = styled(IconSpinner)`
    margin-top: 16px;
    animation-name: rotation;
    animation-duration: 5s;
    animation-timing-function: linear;
    
    @keyframes rotation {
        from {
            transform: rotate(0turn);
        }
        to {
            transform: rotate(4turn);
        }
    }

    @media (max-width: ${({theme}) => theme.breakpoints.medium}px) {
        width: 98px;
        height: 98px;
    }
 `;