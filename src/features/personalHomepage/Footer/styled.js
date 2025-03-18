import styled from "styled-components";
import { ReactComponent as GitHub } from "./contactIcons/gitHub_black.svg";
import { ReactComponent as Facebook } from "./contactIcons/facebook_icons_black.svg";
import { ReactComponent as Instagram } from "./contactIcons/Instagram_icon_black.svg";
import { ReactComponent as Linkedin } from "./contactIcons/LinkedIN.svg";
import { ReactComponent as X } from "./contactIcons/xicon_black.svg";

export const Wrapper = styled.div`
  align-self: center;
  margin-bottom: 119px;
  max-width: 691px;
`;

export const Caption = styled.p`
    font-size: 12px;
    font-weight: 700;
    line-height: 15.6px;
    color: ${({ theme }) => theme.colors.slateGray};
    text-transform: uppercase;
    letter-spacing: 0px;
`;

export const Mail = styled.div`
    font-size: 32px;
    font-weight: 900;
    line-height: 45.99px;
    margin: 24px 0;

    &:hover {
        color: ${({theme}) => theme.colors.scienceBlue}
    }
`;

export const Description = styled.p`
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    color: ${({ theme }) => theme.colors.mineShaft};
    margin-bottom: 56px;
`;

export const ContactContainer = styled.div`
    display: flex;
    gap: 24px;
`;

export const StyledGitHub = styled(GitHub)`
    
    &:hover path {
        fill: ${({theme})=> theme.colors.scienceBlue};
    }
`;

export const StyledLinkedin = styled(Linkedin)`

    &:hover path {
        fill: ${({theme})=> theme.colors.scienceBlue};
    }
`;

export const StyledFacebook = styled(Facebook)`
    
    &:hover path {
        fill: ${({theme})=> theme.colors.scienceBlue};
    }
`;

export const StyledInstagram = styled(Instagram)`
    
    &:hover path {
        fill: ${({theme})=> theme.colors.scienceBlue};
    }
`;

export const StyledX = styled(X)`

    &:hover [id] {
        fill: ${({theme})=> theme.colors.scienceBlue};
    }
`;