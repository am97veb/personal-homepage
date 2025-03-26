import styled from "styled-components";
import { ReactComponent as GitHub } from "./socialMediaIcons/gitHub_black.svg";
import { ReactComponent as Facebook } from "./socialMediaIcons/facebook_icons_black.svg";
import { ReactComponent as Instagram } from "./socialMediaIcons/Instagram_icon_black.svg";
import { ReactComponent as Linkedin } from "./socialMediaIcons/LinkedIN.svg";
import { ReactComponent as X } from "./socialMediaIcons/xicon_black.svg";

export const Wrapper = styled.div`
  margin: 0px 20px 119px;
  max-width: 691px;

  @media (max-width: 768px) {
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

    @media (max-width: 768px) {
        margin: 0 0 12px;
    }
`;

export const Mail = styled.a`
    display: inline-block;
    font-size: 32px;
    font-weight: 900;
    margin: 0 0 24px;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.caption};

    &:hover {
        transition: 0.5s;
        color: ${({ theme }) => theme.colors.afterHovering}
    }

    @media (max-width: 768px) {
        font-size: 18px;
        margin: 0 0 12px;
    }
`;

export const Description = styled.p`
    font-size: 20px;
    font-weight: 400;
    line-height: 140%;
    margin: 0 0 56px;

    @media (max-width: 768px) {
        font-size: 14px;
        margin: 0 0 40px;
        line-height: 100%;
    }
`;

export const ContactContainer = styled.div`
    display: flex;
    gap: 24px;

    @media (max-width: 768px) {
       gap: 16px;
    }
`;

export const StyledGitHub = styled(GitHub)`
    path {
        fill: ${({ theme }) => theme.colors.icon}
    }

    &:hover path {
        transition: 0.5s;
        fill: ${({ theme }) => theme.colors.afterHovering};
    }

    @media (max-width: 768px) {
        width: 32px;
        height: 32px;
    }
`;

export const StyledLinkedin = styled(Linkedin)`
path {
        fill: ${({ theme }) => theme.colors.icon}
    }

    &:hover path {
        transition: 0.5s;
        fill: ${({ theme }) => theme.colors.afterHovering};
    }

    @media (max-width: 768px) {
        width: 32px;
        height: 32px;
    }
`;

export const StyledFacebook = styled(Facebook)`
    path {
        fill: ${({ theme }) => theme.colors.icon}
    }

    &:hover path {
        transition: 0.5s;
        fill: ${({ theme }) => theme.colors.afterHovering};
    }

    @media (max-width: 768px) {
        width: 32px;
        height: 32px;
    }
`;

export const StyledInstagram = styled(Instagram)`
    path {
        fill: ${({ theme }) => theme.colors.icon}
    }

    &:hover path {
        transition: 0.5s;
        fill: ${({ theme }) => theme.colors.afterHovering};
    }

    @media (max-width: 768px) {
        width: 32px;
        height: 32px;
    }
`;

export const StyledX = styled(X)`
    [id="1"] {
        fill: ${({ theme }) => theme.colors.icon}
    }

    [id="2"] {
        fill: ${({ theme }) => theme.colors.bodyBackground}
    } 

    &:hover [id="1"] {
        transition: 0.5s;
        fill: ${({ theme }) => theme.colors.afterHovering};
    }

    @media (max-width: 768px) {
        width: 32px;
        height: 32px;
    }
`;