import styled from "styled-components";
import { ReactComponent as GitHub } from "./socialMediaIcons/gitHub_black.svg";
import { ReactComponent as Linkedin } from "./socialMediaIcons/LinkedIN.svg";

export const Wrapper = styled.footer`
  margin: 0px 20px 119px;
  max-width: 691px;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        margin: 0px 16px 31px;
    }
`;

export const Caption = styled.p`
    font-size: 12px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.caption};
    text-transform: uppercase;
    letter-spacing: 0px;
    margin: 0 0 24px;

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        margin: 0 0 12px;
    }
`;

export const Address = styled.address`
    font-style: unset;
`;

export const Mail = styled.a`
    display: inline-block;
    font-size: 32px;
    font-weight: 900;
    margin: 0 0 24px;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.mail};
    transition: color 0.5s;

    &:hover {
        color: ${({ theme }) => theme.colors.afterHovering}
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        font-size: 18px;
        margin: 0 0 12px;
    }
`;

export const Description = styled.p`
    font-size: 20px;
    font-weight: 400;
    line-height: 140%;
    margin: 0 0 56px;
    color: ${({ theme }) => theme.colors.footerContent};
    transition: color 0.5s;

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        font-size: 14px;
        margin: 0 0 40px;
        line-height: 100%;
    }
`;

export const ContactContainer = styled.div`
    display: flex;
    gap: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
       gap: 16px;
    }
`;

export const StyledGitHub = styled(GitHub)`
    path {
        transition: fill 0.5s;
        fill: ${({ theme }) => theme.colors.icon};
    }

    &:hover path {
        fill: ${({ theme }) => theme.colors.afterHovering};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        width: 32px;
        height: 32px;
    }
`;

export const StyledLinkedin = styled(Linkedin)`
    path {
        transition: fill 0.5s;
        fill: ${({ theme }) => theme.colors.icon}
    }

    &:hover path {
        fill: ${({ theme }) => theme.colors.afterHovering};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        width: 32px;
        height: 32px;
    }
`;