import { Caption, ContactContainer, Description, Mail, StyledFacebook, StyledGitHub, StyledInstagram, StyledLinkedin, StyledX, Title, Wrapper } from "./styled";
import { contactDescription } from "./contactDescription";

export const Footer = ({ mail }) => (
    <Wrapper>
        <Caption>let's talk</Caption>
        <Mail>{mail}</Mail>
        <Description>{contactDescription}</Description>
        <ContactContainer>
            <a href="https://github.com/am97veb"><StyledGitHub /></a>
            <a href="https://www.linkedin.com/in/am97veb/"><StyledLinkedin /></a>
            <a href="https://www.facebook.com/adrian.markefka.5"><StyledFacebook /></a>
            <a href="https://www.instagram.com/am97veb/"><StyledInstagram /></a>
            <a href="https://x.com/AM97VEB"><StyledX /></a>
        </ContactContainer>
    </Wrapper>
);