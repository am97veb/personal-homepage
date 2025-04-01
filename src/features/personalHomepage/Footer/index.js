import { mailTo } from "../mailTo";
import { Caption, ContactContainer, Description, Mail, StyledFacebook, StyledGitHub, StyledInstagram, StyledLinkedin, StyledX, Wrapper } from "./styled";

export const Footer = () => {

  const styledIcons = [
    { styledIcon: <StyledGitHub />, link: "https://github.com/am97veb" },
    { styledIcon: <StyledLinkedin />, link: "https://www.linkedin.com/in/am97veb" },
    { styledIcon: <StyledFacebook />, link: "https://www.facebook.com/adrian.markefka.5" },
    { styledIcon: <StyledInstagram />, link: "https://www.instagram.com/am97veb/" },
    { styledIcon: <StyledX />, link: "https://x.com/AM97VEB" },
  ];

  return (
    <Wrapper>
      <Caption>
        let's talk
      </Caption>
      <Mail href={mailTo}>
        am97veb@gmail.com
      </Mail>
      <Description>
        If you need help with your ideas for a website or app - go ahead, I'm always open to new projects and new challenges. Don't be shy, feel free to contact me 📧
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
    </Wrapper>

  )
};