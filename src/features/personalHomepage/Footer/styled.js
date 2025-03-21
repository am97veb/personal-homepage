import styled from "styled-components";
import { ReactComponent as GitHub } from "./socialMediaIcons/gitHub_black.svg";
import { ReactComponent as Facebook } from "./socialMediaIcons/facebook_icons_black.svg";
import { ReactComponent as Instagram } from "./socialMediaIcons/Instagram_icon_black.svg";
import { ReactComponent as Linkedin } from "./socialMediaIcons/LinkedIN.svg";
import { ReactComponent as X } from "./socialMediaIcons/xicon_black.svg";

export const Wrapper = styled.div`
  align-self: center;
  margin-bottom: 119px;
  max-width: 691px;
`;

export const Caption = styled.p`
    font-size: 12px;
    font-weight: 700;
    line-height: 15.6px;
    color: ${({ theme }) => theme.colors.caption};
    text-transform: uppercase;
    letter-spacing: 0px;
    margin: 0 0 24px;
`;

export const Mail = styled.span`
    display: inline-block;
    font-size: 32px;
    font-weight: 900;
    line-height: 45.99px;
    margin: 0 0 24px;

    &:hover {
        transition: 0.5s;
        color: ${({theme}) => theme.colors.afterHovering}
    }
`;

export const Description = styled.p`
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    margin: 0 0 56px;
`;

export const ContactContainer = styled.div`
    display: flex;
    gap: 24px;
`;

export const StyledGitHub = styled(GitHub)`
    path {
        fill: ${({theme}) => theme.colors.icon}
    }

    &:hover path {
        transition: 0.5s;
        fill: ${({theme})=> theme.colors.afterHovering};
    }
`;

export const StyledLinkedin = styled(Linkedin)`
path {
        fill: ${({theme}) => theme.colors.icon}
    }

    &:hover path {
        transition: 0.5s;
        fill: ${({theme})=> theme.colors.afterHovering};
    }
`;

export const StyledFacebook = styled(Facebook)`
    path {
        fill: ${({theme}) => theme.colors.icon}
    }

    &:hover path {
        transition: 0.5s;
        fill: ${({theme})=> theme.colors.afterHovering};
    }
`;

export const StyledInstagram = styled(Instagram)`
    path {
        fill: ${({theme}) => theme.colors.icon}
    }

    &:hover path {
        transition: 0.5s;
        fill: ${({theme})=> theme.colors.afterHovering};
    }
`;

export const StyledX = styled(X)`
    [id="1"] {
        fill: ${({theme}) => theme.colors.icon}
    }

    [id="2"] {
        fill: ${({theme}) => theme.colors.bodyBackground}
    } 

    &:hover [id="1"] {
        transition: 0.5s;
        fill: ${({theme})=> theme.colors.afterHovering};
    }
`;