import { gitHub, linkedin, mailTo } from "../links";
import { footerDescription } from "./footerDescription";
import { Address, Caption, ContactContainer, Description, Mail, StyledGitHub, StyledLinkedin, Wrapper } from "./styled";

export const Footer = () => {

  const styledIcons = [
    { styledIcon: <StyledGitHub />, link: gitHub  },
    { styledIcon: <StyledLinkedin />, link: linkedin  },
  ];

  return (
    <Wrapper>
      <Caption>
        let's talk
      </Caption>
      <Address>
        <Mail href={mailTo}>
          am97veb@gmail.com
        </Mail>
        <Description>
          {footerDescription}
        </Description>
        <ContactContainer>
          {styledIcons.map((styledIcon) => (
            <a
              href={styledIcon.link}
              rel="noreferrer noopener"
              target="_blank"
            >
              {styledIcon.styledIcon}
            </a>
          ))}
        </ContactContainer>
      </Address>
    </Wrapper>
  )
};