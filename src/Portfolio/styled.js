import styled, { keyframes } from "styled-components";
import { ReactComponent as IconSpinner } from "./svg/icon-spinner.svg";

export const PortfolioSection = styled.section`
    max-width: 1216px;
    margin: 72px auto;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 32px;
`;

export const Title = styled.h2`
    margin: 12px 0 8px;
    font-size: 30px;
    font-weight: 900;
`;

export const LeadParagraph = styled.p`
    font-size: 20px;
    font-weight: 400;
    line-height: 140%;
    margin: 0;
`;

export const Projects = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
`;

export const Project = styled.div`
    color: ${({ theme }) => theme.colors.slateGray};
    border: 6px solid rgba(209, 213, 218, 0.3);
    border-radius: 4px;
    box-shadow: 0px 16px 58px 0px rgba(9, 10, 51, 0.03),
                0px -2px 50px 0px rgba(9, 10, 51, 0.02);
    padding: 56px;
    line-height: 140%;    
`;

export const ProjectName = styled.h3`
    font-size: 24px;
    font-weight: 700;
    line-height: 100%;
    margin: 0px;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.scienceBlue};
`;

export const ProjectDescription = styled.p`
   margin: 24px 0;
`;

export const LinkContainer = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 8px;
`;

export const Link = styled.a`
    color: ${({ theme }) => theme.colors.scienceBlue};
    text-decoration: none;
`;

export const Wrapper = styled.div`
    text-align: center;
    margin-top: 88px;
`;

export const ErrorHeader = styled.h3`
    font-size: 24px;
    margin-top: 16px;
`;

export const LoadingInformation = styled.p`
    font-size: 20px;
    margin: 32px 0;
 `;

export const LoadingIcon = styled(IconSpinner)`
    margin-top: 16px;
    animation-name: rotation;
    animation-duration: 10s;
    
    @keyframes rotation {
        from {
            transform: rotate(0turn);
        }
        to {
            transform: rotate(3turn);
        }
    }
 `;



